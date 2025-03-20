import { lib, game, ui, get, ai, _status } from '../../../noname.js';
import dedent from '../../../game/dedent.js';

export function precontent(config, pack) {
	{
		//本体版本检测
		let noname = lib.version.split('.').slice(2),
			min = [17],
			len = Math.min(noname.length, min.length),
			status = false;
		if (lib.version.slice(0, 5) === '1.10.')
			for (let i = 0; i < len; i++) {
				if (Number(noname[i]) < min[i]) {
					status = '您的无名杀版本太低';
					break;
				}
			}
		else status = '检测到游戏大版本号与本扩展支持版本号不同';
		if (typeof status === 'string') {
			alert(status + '，为避免版本不兼容产生不必要的问题，已为您关闭『官将重修』，稍后重启游戏');
			game.saveExtensionConfig('官将重修', 'enable', false);
			game.reload();
		}
	}
	lib.init.js(
		lib.assetURL + 'extension/官将重修/js/gjcx.js',
		null,
		() => {
			lib.config.all.characters.push('gjcx');
		},
		() => {
			alert('Error:『官将重修』扩展武将导入失败');
		}
	);
	lib.init.js(
		lib.assetURL + 'extension/官将重修/js/phd.js',
		null,
		() => {
			lib.config.all.cards.push('phd');
		},
		() => {
			alert('Error:『官将重修』扩展卡牌导入失败');
		}
	);
	ui.joint = function (strings, ...values) {
		let str = strings.reduce((acc, str, i) => acc + str + (values[i] || ''), '');
		let lines = str.split('\n').map((line) => line.trimStart());
		return lines.join('').trim();
	};
	if (lib.config.extension_官将重修_changelog !== lib.extensionPack.官将重修.version)
		lib.game.showChangeLog = function () {
			//更新内容
			let str = [
				'新增身份模式专属武将傻逼QQ',
				'修复ui.joint',
			];
			let ul = document.createElement('ul'),
				players = ['sbqq'],
				cards = [];
			ul.style.textAlign = 'left';
			for (let i = 0; i < str.length; i++) {
				let li = document.createElement('li');
				li.innerHTML = str[i];
				ul.appendChild(li);
			}
			game.saveExtensionConfig('官将重修', 'changelog', lib.extensionPack.官将重修.version);
			let dialog = ui.create.dialog('官将重修 ' + lib.extensionPack.官将重修.version + ' 更新内容：', 'hidden');
			let lic = ui.create.div(dialog.content);
			lic.style.display = 'block';
			ul.style.display = 'inline-block';
			ul.style.marginLeft = '-40px';
			lic.appendChild(ul);
			if (players.length) {
				dialog.addSmall([players, 'character']);
				dialog.classList.add('forcebutton');
				dialog.classList.add('withbg');
			}
			if (cards.length) {
				for (let i = 0; i < cards.length; i++) {
					cards[i] = [get.translation(get.type(cards[i])), '', cards[i]];
				}
				dialog.addSmall([cards, 'vcard']);
				dialog.classList.add('forcebutton');
				dialog.classList.add('withbg');
			}
			dialog.open();
			let hidden = false;
			if (!ui.auto.classList.contains('hidden')) {
				ui.auto.hide();
				hidden = true;
			}
			game.pause();
			let control = ui.create.control('确定', () => {
				dialog.close();
				control.close();
				if (hidden) ui.auto.show();
				game.resume();
			});
			lib.init.onfree();
		};
	lib.arenaReady.push(function () {
		//自定义方法
		lib.element.player.swapIdentity = async function (target, toshow) {
			if (this === target || get.itemtype(target) !== 'player') return;
			const next = game.createEvent('swapIdentity', false);
			next.player = this;
			next.target = target;
			next.id1 = this.identity;
			next.id2 = target.identity;
			next.toshow = toshow;
			next.forceDie = true;
			next.setContent('swapIdentity');
			return next;
		};
		lib.element.content.swapIdentity = async function (event, trigger, player) {
			game.broadcastAll(
				function (player, target, id1, id2, toshow) {
					let shown1 = player.identityShown,
						shown2 = target.identityShown,
						ai1 = player.ai.shown,
						ai2 = target.ai.shown;
					target.identity = id1;
					player.identity = id2;
					if (id1 === 'zhu') {
						game.zhu = target;
						delete player.isZhu;
						target.isZhu = true;
						// game.me.setIdentity();
						// game.me.node.identity.classList.remove('guessing');
						if (!toshow) target.showIdentity();
					} else if (id1.indexOf('Zhu') === 1) {
						game[id1] = target;
						delete player[id1].isZhu;
						target[id1].isZhu = true;
						if (!toshow) target.showIdentity();
					} else if (id1 === 'mingzhong') {
						game.zhong = target;
						if (!toshow) target.showIdentity();
					}
					if (id2 === 'zhu') {
						game.zhu = player;
						delete target.isZhu;
						player.isZhu = true;
						if (!toshow) player.showIdentity();
					} else if (id2.indexOf('Zhu') === 1) {
						game[id2] = player;
						delete target[id2].isZhu;
						player[id2].isZhu = true;
						if (!toshow) player.showIdentity();
					} else if (id2 === 'mingzhong') {
						game.zhong = player;
						if (!toshow) player.showIdentity();
					}
					if (toshow) {
						player.showIdentity();
						target.showIdentity();
					} else {
						player.identityShown = shown2;
						target.identityShown = shown1;
						player.ai.shown = ai2;
						target.ai.shown = ai1;
						if (shown2 || player === game.me || target === game.me) {
							player.setIdentity();
							player.node.identity.classList.remove('guessing');
						} else {
							player.setIdentity('cai');
							player.node.identity.classList.add('guessing');
						}
						if (shown1 || target === game.me || player === game.me) {
							target.setIdentity();
							target.node.identity.classList.remove('guessing');
						} else {
							target.setIdentity('cai');
							target.node.identity.classList.add('guessing');
						}
						if (!player.storage.dongcha) player.storage.dongcha = [];
						player.storage.dongcha.add(target);
						if (!target.storage.dongcha) target.storage.dongcha = [];
						target.storage.dongcha.add(player);
					}
				},
				player,
				target,
				event.id1,
				event.id2,
				event.toshow
			);
			game.log(player, '与', target, '交换了身份牌');
			// await event.trigger('swapIdentityEnd');
			if (player.identity === 'zhu' || target.identity === 'zhu') await event.trigger('zhuUpdate');
			await event.trigger('changeIdentity');
		};
		if (lib.config.extension_官将重修_filterSameName) {
			if (!lib.config[get.mode() + '_banned']) game.saveConfig(get.mode() + '_banned', []);
		}
		if (!Array.isArray(lib.config.extension_官将重修_book)) game.saveExtensionConfig('官将重修', 'book', []);
		if (lib.config.extension_官将重修_mgk !== 'c' && lib.config.extension_官将重修_mgk !== 'd') {
			let mgk = 'd';
			if (lib.config.extension_官将重修_mgk === 'p') mgk = 'c';
			game.saveExtensionConfig('官将重修', 'mgk', mgk);
		}
		if (lib.characterReplace) {
			if (lib.config.extension_官将重修_banQh) {
				//禁用切换功能
				for (let i in lib.characterReplace) {
					lib.characterReplace[i] = [];
				}
			} else if (lib.characterPack['gjcx']) {
				for (let i in lib.characterPack['gjcx']) {
					if (lib.characterPack['gjcx'][i].isUnseen) continue;
					const name = i.slice(5);
					if (lib.characterReplace[name]) lib.characterReplace[name].add(i);
				}
			}
		}
		if (typeof lib.element.content.gain === 'function') {
			let str = String(lib.element.content.gain);
			str = str.slice(str.indexOf('{') + 1, str.lastIndexOf('}'));
			str = str.replace(
				/var map = {};([\s\S]*?)event.losing_map = map;/,
				dedent`
					var map = {};
					for (let i = 0; i < cards.length; i++) {
						let owner = get.owner(cards[i], 'judge');
						if (owner && owner !== player && !lib.filter.canBeGained(cards[i], player, owner, event)) {
							cards.splice(i--, 1);
							continue;
						}
						if (owner && (owner !== player || get.position(cards[i]) !== 'h')) {
							let id = owner.playerid;
							if (!map[id]) map[id] = [[], [], []];
							map[id][0].push(cards[i]);
							let position = get.position(cards[i]);
							if (position === 'h') map[id][1].push(cards[i]);
							else map[id][2].push(cards[i]);
						} else if (!event.updatePile && get.position(cards[i]) === 'c') event.updatePile = true;
					}
					event.losing_map = map;
				`
			);
			try {
				lib.element.content.gain = new Function(str);
			} catch (e) {
				alert('『官将重修』覆写gain函数时发生错误：' + e + '\n请截屏并将问题反馈给157');
			}
		}
		if (lib.config.extension_官将重修_fixKp) {
			//修改卡牌效果
			if (lib.config.extension_官将重修_lbss && lib.card.lebu) {
				lib.card.lebu.filterTarget = (card, player, target) => {
					return player !== target && target.inRange(player) && lib.filter.judge(card, player, target);
				};
				lib.card.lebu.cardPrompt = (card) => {
					return '出牌阶段，对攻击范围内包含你的一名角色使用。若判定结果不为♥️，跳过其出牌阶段。';
				};
				lib.card.lebu.ai = {
					basic: {
						order: (card, player) => {
							let e3 = player.getCards('hs', (card) => {
								return get.subtype(card) === 'equip3';
							});
							if (e3.length && !player.getEquip(3)) return Math.max(1, get.order(e3[0]) + 0.3);
							return 1;
						},
						useful: 1,
						value: 8,
					},
					result: {
						ignoreStatus: true,
						target: (player, target) => {
							if (target === _status.currentPhase && target.skipList.includes('phaseUse')) {
								let evt = _status.event.getParent('phase');
								if (evt && evt.phaseList.indexOf('phaseJudge') <= evt.num) return 0;
							}
							let ts = target.getCards('h'),
								num = 3 + ts.length;
							for (let i = 0; i < ts.length; i++) {
								if (game.checkMod(ts[i], target, false, 'ignoredHandcard', target) === true) num--;
							}
							if (target.hp < 3) num++;
							num = Math.min(-1.08, target.getHandcardLimit() - num);
							if (target.isTurnedOver()) num /= 2;
							let dist = get.distance(player, target, 'absolute');
							dist /= 4;
							if (dist < 1) dist = 1;
							return ((0.75 * num) / Math.sqrt(dist)) * Math.pow(get.threaten(target, player), 2);
						},
					},
					tag: {
						skip: 'phaseUse',
					},
				};
				lib.translate.lebu_info = '出牌阶段，对攻击范围内包含你的一名角色使用。若判定结果不为♥️，跳过其出牌阶段。';
			}
			if (lib.config.extension_官将重修_blcd) {
				lib.card.bingliang = {
					audio: true,
					fullskin: true,
					type: 'delay',
					cardcolor: 'black',
					filterTarget(card, player, target) {
						return lib.filter.judge(card, player, target) && player !== target;
					},
					range(card, player, target) {
						return player.inRange(target);
					},
					cardPrompt(card) {
						return '出牌阶段，对你攻击范围内的一名角色使用。目标角色判定阶段进行判定：若判定结果不为♣️，则跳过该角色的摸牌阶段。';
					},
					judge(card) {
						if (get.suit(card) === 'club') return 1;
						return -2;
					},
					judge2(result) {
						if (result.bool === false) return true;
						return false;
					},
					effect() {
						if (result.bool === false) {
							if (get.is.changban()) player.addTempSkill('bingliang_changban');
							else player.skip('phaseDraw');
						}
					},
					ai: {
						basic: {
							order: 1,
							useful: 1,
							value: 4,
						},
						result: {
							target(player, target) {
								if (target.hasJudge('caomu')) return 0;
								return -2.7 / Math.sqrt(target.countCards('h') + 1);
							},
						},
						tag: {
							skip: 'phaseDraw',
						},
					},
				};
				lib.translate.bingliang_info = ui.joint`
					出牌阶段，对你攻击范围内的一名角色使用。目标角色判定阶段进行判定：若判定结果不为♣️，则跳过该角色的摸牌阶段。
				`;
			}
			lib.card.zhuge = {
				fullskin: true,
				type: 'equip',
				subtype: 'equip1',
				enable: true,
				selectTarget: -1,
				filterTarget(card, player, target) {
					return target === player && target.canEquip(card, true);
				},
				modTarget: true,
				cardPrompt(card) {
					let info = '锁定技，出牌阶段，你使用【杀】',
						player = _status.event.player;
					switch (lib.config.extension_官将重修_ln) {
						case 'yx':
							info += '的次数上限+X（X为游戏人数）。';
							break;
						case 'ch':
							info += '的次数上限+X（X为存活角色数）。';
							break;
						case 'wx':
							info += '无次数限制。';
							break;
						case 'nine':
							info += '的次数上限+9。';
							break;
						case 'three':
							info += '的次数上限+3。';
							break;
						case 'top':
							if (
								player &&
								player.name &&
								get.itemtype(_status.pileTop) === 'card' &&
								typeof _status.pileTop.number === 'number'
							)
								info += '的次数上限+' + _status.pileTop.number + '。';
							else info += '的次数上限+X（X为牌堆顶牌点数，若无则为3）。';
					}
					return info;
				},
				allowMultiple: false,
				content() {
					if (cards.length && get.position(cards[0], true) === 'o') target.equip(cards[0]);
				},
				onLose() {
					if (player.hasSkill('phd_zhuge_sk')) {
						if (lib.config.extension_官将重修_fixKp) player.addSkill('phd_zhuge');
						else player.addSkill('zhuge_skill');
					} else player.unmarkSkill('phd_zhuge');
				},
				loseDelay: false,
				toself: true,
				skills: ['phd_zhuge'],
				ai: {
					equipValue(card, player) {
						if (player._zhuge_temp) return;
						player._zhuge_temp = true;
						let val = (function () {
							if (
								!game.hasPlayer((current) => {
									return (
										get.distance(player, current) <= 1 &&
										player.canUse('sha', current) &&
										get.effect(current, { name: 'sha' }, player, player) > 0
									);
								})
							)
								return 1;
							let num = player.countCards('hs', 'sha');
							if (player.hasSha()) num++;
							if (player !== _status.currentPhase) return Math.max(0, 2.5 * (num - 1));
							if (player.getEquip('zhuge')) num = Math.min(num, player.getCardUsable('sha'));
							else
								switch (lib.config.extension_官将重修_ln) {
									case 'yx':
										num = Math.min(num, game.players.length + game.dead.length);
										break;
									case 'ch':
										num = Math.min(num, game.players.length);
										break;
									case 'nine':
										num = Math.min(9, num);
										break;
									case 'three':
										num = Math.min(3, num);
										break;
									case 'top':
										if (get.itemtype(_status.pileTop) === 'card' && typeof _status.pileTop.number === 'number')
											num = Math.min(num, _status.pileTop.number);
										else num = Math.min(3, num);
								}
							if (num && ((player.getEquip('zhuge') && player.countUsed('sha')) || player.getCardUsable('sha') === 0))
								return 2.4 * num;
							if (num > 1) return 4.2 + num;
							return 3 + num;
						})();
						delete player._zhuge_temp;
						return val;
					},
					basic: {
						order() {
							return get.order({ name: 'sha' }) - 0.1;
						},
						equipValue: 4.2,
					},
					tag: {
						valueswap: 1,
					},
				},
			};
			if (lib.config.extension_官将重修_qgj)
				lib.card.qinggang = {
					fullskin: true,
					type: 'equip',
					subtype: 'equip1',
					cardcolor: 'spade',
					distance: { attackFrom: -1 },
					enable: true,
					selectTarget: -1,
					filterTarget(card, player, target) {
						return target === player && target.canEquip(card, true);
					},
					modTarget: true,
					cardPrompt(card) {
						let info = '锁定技，当你使用【杀】';
						if (lib.config.extension_官将重修_qgjMb === 'zd') info += '指定目标后，你';
						else info += '造成伤害时，你';
						if (lib.config.extension_官将重修_qgjFl !== 'off') {
							if (lib.config.extension_官将重修_sjFl) info += '随机';
							if (lib.config.extension_官将重修_qgjFl === 'zk') info += '废除其一个';
							else if (lib.config.extension_官将重修_qgjFl === 'z') info += '废除其一个有装备牌的';
							else info += '废除其一个空';
							if (lib.config.extension_官将重修_qgjQp === 'off') return info + '装备栏。';
							info += '装备栏并';
						} else if (lib.config.extension_官将重修_qgjQp === 'off') return '';
						if (lib.config.extension_官将重修_sjQp) info += '随机';
						if (lib.config.extension_官将重修_qgjQp === 'e') return info + '弃置其装备区内的一张牌。';
						return info + '弃置其一张' + (lib.config.extension_官将重修_qgjQp === 'he' ? '' : '手') + '牌。';
					},
					allowMultiple: false,
					content() {
						if (cards.length && get.position(cards[0], true) === 'o') target.equip(cards[0]);
					},
					toself: true,
					ai: {
						equipValue(card, player) {
							if (player._qinggang_temp) return;
							player._qinggang_temp = true;
							let val = 1;
							game.countPlayer((current) => {
								if (player.canUse('sha', current) && get.attitude(player, current) < 0) {
									if (
										lib.config.extension_官将重修_qgjMb === 'zd' ||
										player.hasSkillTag(
											'directHit_ai',
											true,
											{
												target: current,
												card: { name: 'sha' },
											},
											true
										)
									)
										val += 0.8;
									else if (current.countCards('hs') < 2) val += 0.4;
								}
								if (current.getEquip(2)) val += 0.6;
							});
							delete player._qinggang_temp;
							return Math.min(4.5, val);
						},
						basic: {
							equipValue: 2,
						},
					},
					skills: ['phd_qinggang'],
				};
			if (lib.config.extension_官将重修_ql) {
				lib.card.qinglong = {
					fullskin: true,
					type: 'equip',
					subtype: 'equip1',
					cardcolor: 'spade',
					distance: { attackFrom: -2 },
					enable: true,
					selectTarget: -1,
					filterTarget(card, player, target) {
						return target === player && target.canEquip(card, true);
					},
					modTarget: true,
					cardPrompt(card) {
						let info = '你使用【杀】指定目标角色后，你可以令其';
						if (lib.config.extension_官将重修_qlFj) {
							info += '非锁定技失效';
							if (lib.config.extension_官将重修_qlFp !== 'f') info += '且';
						}
						switch (lib.config.extension_官将重修_qlFp) {
							case 's':
								info += '不能使用、打出或弃置与此【杀】花色相同的牌直到此牌结算完毕后';
								break;
							case 'c':
								info += '不能使用、打出或弃置与此【杀】颜色相同的牌直到此牌结算完毕后';
								break;
							case 'h':
								info += '不能使用、打出或弃置手牌直到此牌结算完毕后';
						}
						return info + '。';
					},
					allowMultiple: false,
					content() {
						if (cards.length && get.position(cards[0], true) === 'o') target.equip(cards[0]);
					},
					toself: true,
					skills: ['phd_qinglong'],
					ai: {
						equipValue(card, player) {
							let num,
								val = 1.2;
							if (player._qinglong_temp) return;
							player._qinglong_temp = true;
							if (lib.config.extension_官将重修_qlFj) {
								num = game.countPlayer((current) => {
									return (
										get.attitude(player, current) < 0 &&
										(current.hasSkillTag('maixie') || current.hasSkillTag('maixie_defend'))
									);
								});
								if (num === 1) val = 1.6;
								else if (num) val = 2.4;
							}
							num = player.countCards('hs', (card) => {
								return get.name(card) === 'sha' && get.color(card) === 'red';
							});
							if (player.hasSkill('wusheng') || player.hasSkill('new_rewusheng')) num = 2.5;
							switch (lib.config.extension_官将重修_qlFp) {
								case 's':
									if (!num) val++;
									else val += Math.min(2.7, 1.2 * num);
									break;
								case 'c':
									if (!num) val += 1.2;
									else val += Math.min(3.6, 1.6 * num);
									break;
								case 'h':
									val += 4;
							}
							delete player._qinglong_temp;
							return val;
						},
						basic: {
							equipValue: 3,
						},
					},
				};
			}
			lib.card.zhangba = {
				fullskin: true,
				type: 'equip',
				subtype: 'equip1',
				cardcolor: 'spade',
				distance: { attackFrom: -2 },
				enable: true,
				selectTarget: -1,
				filterTarget(card, player, target) {
					return target === player && target.canEquip(card, true);
				},
				modTarget: true,
				cardPrompt(card) {
					let info = '你可以将两张';
					switch (lib.config.extension_官将重修_zb) {
						case 'hes':
							info += '牌当【杀】使用或打出。';
							break;
						case 'hs':
							info += '手牌当【杀】使用或打出。';
					}
					return info;
				},
				allowMultiple: false,
				content() {
					if (cards.length && get.position(cards[0], true) === 'o') target.equip(cards[0]);
				},
				toself: true,
				skills: ['phd_zhangba'],
				ai: {
					equipValue(card, player) {
						return Math.min(
							0.5 *
								player.countCards(lib.config.extension_官将重修_zb, (cardx) => {
									return cardx !== player.getEquip(1);
								}),
							4.2
						);
					},
					basic: {
						equipValue: 3,
					},
				},
			};
			if (lib.config.extension_官将重修_ft) {
				lib.card.fangtian = {
					fullskin: true,
					type: 'equip',
					subtype: 'equip1',
					cardcolor: 'diamond',
					distance: { attackFrom: -3 },
					enable: true,
					selectTarget: -1,
					filterTarget(card, player, target) {
						return target === player && target.canEquip(card, true);
					},
					modTarget: true,
					cardPrompt(card) {
						let info = '你使用【杀】可以额外指定',
							res = lib.config.extension_官将重修_ftRes,
							tj = lib.config.extension_官将重修_ftTj,
							qx = lib.config.extension_官将重修_ftQx;
						switch (lib.config.extension_官将重修_ftMb) {
							case 'dw':
								info += '至多X名角色为目标（X为敌方存活角色数-己方存活角色数且至少为1）';
								break;
							case 'ry':
								info += '任意名角色为目标';
								break;
							case 'sx':
								info += '至多X名角色为目标（X为你的体力上限的一半，四舍五入）';
								break;
							default:
								info += '至多两名角色为目标';
						}
						if (qx || res !== 'off') {
							if (tj === 'da') info += '。若任意一名目标角色受到了此【杀】造成的伤害，则';
							else if (tj === 'dx') info += '。若任意一名目标角色使用【闪】抵消了此【杀】，则';
							else info += '。若如此做，';
							if (qx) info += '此【杀】对其余目标无效' + (res === 'off' ? '' : '且');
							if (res === 'sj') info += '你于此【杀】结算完毕后随机弃一张牌';
							else if (res === 'er') info += '你于此【杀】结算完毕后弃两张牌';
							else if (res === 'hp') info += '你于此【杀】结算完毕后失去1点体力';
							else if (res === 'sx') info += '你于此【杀】结算完毕后减1点体力上限';
						}
						return info + '。';
					},
					allowMultiple: false,
					content() {
						if (cards.length && get.position(cards[0], true) === 'o') target.equip(cards[0]);
					},
					toself: true,
					skills: ['phd_fangtian'],
					ai: {
						equipValue(card, player) {
							if (player._fangtian_temp) return;
							player._fangtian_temp = true;
							let num = 0,
								val =
									1.2 +
									game.countPlayer((current) => {
										if (
											get.distance(player, current) <= 4 &&
											player.canUse('sha', current, false) &&
											get.effect(current, { name: 'sha' }, player, player) > 0
										) {
											if (
												lib.config.extension_官将重修_ftTj === 'dx' ||
												player.hasSkillTag(
													'directHit_ai',
													true,
													{
														target: current,
														card: { name: 'sha' },
													},
													true
												) ||
												current.countCards('hs') < 2
											)
												return 1.2;
											else num++;
										}
									});
							switch (lib.config.extension_官将重修_ftMb) {
								case 'dw':
									val += 0.3 * Math.min(1, game.players.length - 2 * player.getFriends().length);
									break;
								case 'ry':
									val += 0.3 * num;
									break;
								case 'lm':
									val += Math.min(3, 0.3);
							}
							delete player._fangtian_temp;
							return val;
						},
						basic: {
							equipValue: 3.5,
						},
					},
				};
			}
			if (lib.config.extension_官将重修_qbd) {
				lib.card.qibaodao = {
					fullskin: true,
					type: 'equip',
					subtype: 'equip1',
					cardcolor: 'spade',
					distance: { attackFrom: -1 },
					enable: true,
					selectTarget: -1,
					filterTarget(card, player, target) {
						return target === player && target.canEquip(card, true);
					},
					modTarget: true,
					cardPrompt(card) {
						let info = '你使用【杀】指定体力值大于你的目标角色后，你可以令此牌对其伤害';
						switch (lib.config.extension_官将重修_qbdJs) {
							case 'x':
								info += '改为X（X为你与其体力值之差）。';
								break;
							case 'px':
								info += '+X（X为你与其体力值之差）。';
								break;
							case 'po':
								info += '+1。';
						}
						switch (lib.config.extension_官将重修_qbdZd) {
							case 'miss':
								info += '若如此做，此【杀】被抵消后你须将【七宝刀】交给其中一名角色并令其使用之。';
								break;
							case 'must':
								info += '若如此做，此【杀】被抵消或造成伤害后你须将【七宝刀】交给其中一名角色并令其使用之。';
						}
						return info;
					},
					allowMultiple: false,
					content() {
						if (cards.length && get.position(cards[0], true) === 'o') target.equip(cards[0]);
					},
					toself: true,
					skills: ['phd_qibaodao'],
					ai: {
						equipValue(card, player) {
							if (player._qibaodao_temp) return;
							player._qibaodao_temp = true;
							let val = 0.8,
								gx = lib.config.extension_官将重修_qbdJs;
							game.countPlayer((current) => {
								if (player.canUse('sha', current) && current.hp > player.hp && get.attitude(player, current) < 0) {
									let num = 1;
									if (gx !== 'po') num = current.hp - player.hp;
									if (gx === 'x') num--;
									if (
										player.hasSkillTag(
											'directHit_ai',
											true,
											{
												target: current,
												card: { name: 'sha' },
											},
											true
										)
									)
										val += num;
									else val += 0.3 * num;
								}
							});
							delete player._qibaodao_temp;
							return val;
						},
						basic: {
							equipValue: 2,
						},
					},
				};
			}
			lib.card.zhungangshuo = {
				audio: true,
				fullskin: true,
				type: 'equip',
				subtype: 'equip1',
				distance: { attackFrom: -2 },
				enable: true,
				selectTarget: -1,
				filterTarget(card, player, target) {
					return target === player && target.canEquip(card, true);
				},
				modTarget: true,
				cardPrompt(card) {
					let info = '当你使用【杀】指定一名角色为目标后，你可以';
					switch (lib.config.extension_官将重修_zgs) {
						case 'pp':
							info += '弃置你与其各一张手牌。';
							break;
						case 'pt':
							info += '弃置其一张手牌，然后令该角色弃置你一张手牌。';
							break;
						case 'tp':
							info += '令其弃置你一张手牌，然后你弃置其一张手牌。';
					}
					return info;
				},
				allowMultiple: false,
				content() {
					if (cards.length && get.position(cards[0], true) === 'o') target.equip(cards[0]);
				},
				toself: true,
				skills: ['zhungangshuo'],
				ai: {
					equipValue(card, player) {
						let val = 1.2;
						if (lib.config.extension_官将重修_zgs === 'pp') val = 1.8;
						switch (player.countCards('h')) {
							case 0:
							case 1:
								return val;
							case 2:
								return val + 0.8;
							case 3:
								return val + 1.8;
							default:
								return val + 2.1;
						}
					},
					basic: {
						equipValue: 3,
					},
				},
			};
			lib.skill.zhungangshuo = {
				equipSkill: true,
				trigger: { player: 'useCardToPlayered' },
				filter(event, player) {
					return (
						event.card.name === 'sha' &&
						(event.target.countCards('h') || lib.config.extension_官将重修_zgs !== 'pt') &&
						(player.countCards('h') || lib.config.extension_官将重修_zgs === 'pt')
					);
				},
				check(event, player) {
					let min = 8,
						total = 0,
						ph = player.countCards('h', (card) => {
							let val = get.value(card);
							min = Math.min(min, val);
							total += val;
							return true;
						}),
						th = event.target.countCards('h');
					if (!th) return false;
					if (!ph) return true;
					if (lib.config.extension_官将重修_zgs !== 'pp') return ph >= th && total / ph < 6 + Math.min(0, 3 - player.hp);
					if (min >= 8 || get.attitude(_status.event.player, event.target) >= 0) return false;
					if (min > 6) return 9 - th > min;
					if (min > 5) return th <= ph;
					return true;
				},
				prompt2(event, player) {
					let target = get.translation(event.target);
					switch (lib.config.extension_官将重修_zgs) {
						case 'pp':
							return '弃置你与' + target + '各一张手牌';
						case 'pt':
							return '弃置' + target + '一张手牌，然后令其弃置你一张手牌';
						case 'tp':
							return '令' + target + '弃置你一张手牌，然后你弃置其一张手牌';
					}
					return '';
				},
				logTarget: 'target',
				async content(event, trigger, player) {
					if (lib.config.extension_官将重修_zgs === 'pt') {
						await player.discardPlayerCard('h', trigger.target, true);
						await trigger.target.discardPlayerCard('h', player, true);
					} else if (lib.config.extension_官将重修_zgs === 'pp') {
						await player.chooseToDiscard('h', true);
						await player.discardPlayerCard('h', trigger.target, true);
					} else if (lib.config.extension_官将重修_zgs === 'tp') {
						await trigger.target.discardPlayerCard('h', player, true);
						await player.discardPlayerCard('h', trigger.target, true);
					}
					await game.delayx();
				},
			};
		}
	});
}
