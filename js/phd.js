game.import('card', (lib, game, ui, get, ai, _status) => {
	let phd = {
		name: 'phd',
		connect: true,
		card: {
			phd_shu: {
				image: 'ext:官将重修/image/card/phd_shu.jpg',
				fullimage: true,
				type: 'basic',
				enable: true,
				usable: 1,
				updateUsable: 'phaseUse',
				selectTarget: -1,
				toself: true,
				filterTarget(card, player, target) {
					return target === player;
				},
				modTarget: true,
				content() {
					if (
						(lib.translate[target.name] && lib.translate[target.name].includes('许劭')) ||
						(target.name2 !== undefined && lib.translate[target.name2] && lib.translate[target.name2].includes('许劭'))
					)
						game.playAudio('..', 'audio', 'skill', 'pingjian' + [1, 2].randomGet());
					target.useSkill('phds_shu', false);
				},
				ai: {
					basic: {
						order: 12,
						useful: 3.6,
						value: [9, 8, 7, 6],
					},
					result: {
						target(player, target) {
							if (target && !target.isPhaseUsing() && !_status.event.isPhaseUsing(target)) return 0;
							return 1.5;
						},
					},
				},
			},
			phd_fdcx: {
				image: 'ext:官将重修/image/card/phd_fdcx.png',
				audio: 'ext:官将重修/audio/card',
				fullskin: true,
				type: 'trick',
				enable: true,
				filterTarget(card, player, target) {
					return player.canCompare(target);
				},
				async content(event, trigger, player) {
					const { cards, target } = event;
					let fds = [];
					for (let i = 0; i < cards.length; i++) {
						if (get.position(cards[i], true) === 'o') fds.add(cards[i]);
					}
					let result;
					if (fds.length)
						result = await player
							.chooseButton(['是否用' + (fds.length > 1 ? '其中一张' : '此') + '牌作为拼点牌？', fds])
							.set('ai', (button) => {
								if (
									target.countCards('he') > 1 &&
									get.attitude(_status.event.player, target) <= 0 &&
									player.hasCard((card) => {
										let n = get.number(card);
										if (player.hasSkill('tianbian') && get.suit(card) === 'heart') n = 13;
										return n > get.number(button.link, player) && get.value(card) - player.hp < 6;
									}, 'h')
								)
									return -1;
								return get.number(button.link, player);
							})
							.forResult();
					else result = { bool: false };
					let use = false;
					if (result.bool) {
						let fd = result.links[0];
						use = true;
						const next = player
							.chooseToCompare(target)
							.set('fixedResult', true)
							.set('ai', (card) => {
								if (typeof card === 'string' && lib.skill[card]) {
									let ais =
										lib.skill[card].check ||
										function () {
											return 0;
										};
									return ais();
								}
								let pl = get.owner(card),
									event = _status.event.getParent(),
									i = get.value(card),
									getn = function (card) {
										if (pl.hasSkill('tianbian') && get.suit(card) === 'heart') return 13;
										return get.number(card);
									};
								if (pl === event.player) return 1;
								if (card.name === 'du') i += 6;
								if (pl.hp < 4) i += 6 / (pl.hp + 1) - 1;
								if (get.attitude(pl, event.player) > 0) {
									if (getn(card) < fd.number) return 10 - i;
									return -1;
								}
								if (getn(card) < fd.number) return 6 - i;
								return 8 - i;
							});
						next.fixedResult = {};
						next.fixedResult[player.playerid] = fd;
						result = await next.forResult();
					} else {
						const next = player
							.chooseToCompare(target)
							.set('preserve', 'win')
							.set('ai', (card) => {
								if (typeof card === 'string' && lib.skill[card]) {
									let ais =
										lib.skill[card].check ||
										function () {
											return 0;
										};
									return ais();
								}
								let pl = get.owner(card),
									event = _status.event.getParent(),
									i = get.value(card),
									getn = function (card) {
										if (pl.hasSkill('tianbian') && get.suit(card) === 'heart') return 13;
										return get.number(card);
									};
								if (card.name === 'du') i += 6;
								if (pl.hp < 4) i += 6 / (pl.hp + 1) - 1;
								if (pl === event.player) {
									if (get.attitude(pl, event.target) > 0) return 2 * getn(card) - i;
									return 1.2 * getn(card) - i;
								}
								if (get.attitude(pl, event.player) > 0) return -2 * getn(card) - i;
								return 1.3 * getn(card) - i;
							});
						next.clear = false;
						result = await next.forResult();
					}
					let del = true,
						ds = [result.player];
					if (result.bool) {
						if (!use) await player.gainPlayerCard(target, 'he', true);
						else if (result.target) {
							let pos = get.position(result.target, true);
							if (pos === 'd' || pos === 'o') await player.gain([result.target]).set('knowers', game.players);
							del = false;
							result.target.clone?.moveDelete(player);
							game.addVideo('gain2', player, get.cardsInfo([result.target]));
						}
					}
					if (!result.cancelled) {
						result.player.clone?.delete();
						result.target.clone?.delete();
						if (del) ds = [result.player, result.target];
						game.addVideo('deletenode', player, get.cardsInfo(ds));
						game.broadcast(
							function (cards, player) {
								ui.arena.classList.remove('thrownhighlight');
								for (let i = 0; i < cards.length; i++) {
									cards[i].clone?.delete();
								}
							},
							ds,
							player
						);
					}
				},
				ai: {
					wuxie(target, card, player, viewer, status) {
						if (status * get.attitude(viewer, target) < 0) return 0;
						if (
							get.attitude(viewer, player) > 0 ||
							(get.attitude(viewer, target) > 0 && (target.countCards('h') > target.hp || target.hasSkillTag('noh')))
						)
							return 0;
					},
					order: 5.8,
					value: [4, 1],
					result: {
						player(player, target, card) {
							let noh = player.hasSkillTag('noh'),
								fdcx = [],
								hs = player.getCards('h', (i) => {
									if (i === card || (typeof card === 'object' && card.cards && card.cards.includes(i))) {
										fdcx.add(i);
										return false;
									}
									return true;
								});
							if (fdcx.length)
								return (noh ? 0.3 : -get.value(card, player) / 6) + (1 - Math.pow(0.77, target.countCards('h')));
							let min = 20;
							for (let i = 0; i < hs.length; i++) {
								let val = get.value(hs[i], player);
								if (val < min) min = get.value(hs[i]);
							}
							if (!hs.length) return -min / 6;
							return (
								(noh ? 0.3 : -get.value(card, player) / 6) +
								(1 - Math.pow(0.77, target.countCards('h'))) -
								min / (4 + Math.sqrt(hs.length))
							);
						},
						target(player, target) {
							let hs = player.countCards('h');
							if (!hs && !player.hasSkillTag('noh')) return 0;
							if (target.hasSkillTag('noh')) return -0.1;
							return -1;
						},
					},
					tag: {
						loseCard: 1,
						gain: 0.5,
					},
				},
			},
			phd_syqj: {
				image: 'ext:官将重修/image/card/phd_syqj.png',
				audio: 'ext:官将重修/audio/card',
				fullskin: true,
				type: 'delay',
				cardnature: 'thunder',
				filterTarget(card, player, target) {
					return lib.filter.judge(card, player, target) && player !== target;
				},
				judge(card) {
					if (get.suit(card) === 'diamond') return 0;
					return -3;
				},
				judge2(result) {
					if (result.bool === false) return true;
					return false;
				},
				async effect(event, trigger, player, { bool }) {
					if (bool !== false) return;
					if (
						!player.countCards('e', (card) => {
							return lib.filter.cardDiscardable(card, player, 'phd_syqj');
						})
					) {
						await player.damage('nosource', 'thunder');
						return;
					}
					const result = await player
						.chooseControl('discard_card', 'take_damage', (event, player) => {
							let eff = get.damageEffect(player, event.player, player, 'thunder');
							if (eff > 0) return 'take_damage';
							if (player.hasSkillTag('noe')) return 'discard_card';
							if (!eff) return 'take_damage';
							if (
								player.isDamaged() &&
								player.hasCard(
									(card) => get.name(card) === 'baiyin' && get.recoverEffect(player, player, get.event('player')) > 0,
									'e'
								)
							)
								return 'discard_card';
							if (
								player.hasCard((card) => get.value(card, player) <= 0, 'e') &&
								!player.hasCard((card) => get.value(card, player) > Math.max(7, 12 - player.hp), 'e')
							)
								return 'discard_card';
							if ((player.hp > 2 && player.countCards('e') > 2) || (player.hp > 1 && player.countCards('e') > 3))
								return 'take_damage';
							return 'discard_card';
						})
						.forResult();
					if (result.control === 'discard_card') await player.modedDiscard(player.getCards('e'));
					else await player.damage('nosource', 'thunder');
				},
				ai: {
					order: 1,
					value: 3,
					useful: 2,
					tag: {
						damage: 1,
						thunderDamage: 1,
						loseCard: 1,
					},
					canLink(player, target, card) {
						if (!target.isLinked()) return false;
						let es = target.getCards('e'),
							val = 0;
						if (!es.length) return true;
						for (let i of es) {
							if (i.name === 'baiyin') val += 6;
							else val -= get.value(i, target);
						}
						if (0.11 * val > 1.5 * get.sgn(get.damageEffect(target, target, target, 'thunder'))) return false;
						return true;
					},
					result: {
						target(player, target, card, isLink) {
							let es = target.getCards('e'),
								eff = 1.5 * get.sgn(get.damageEffect(target, target, target, 'thunder'));
							if (isLink || !es.length) return eff;
							let val = 0;
							for (let i of es) {
								if (i.name === 'baiyin') val += 6;
								else val -= get.value(i, target);
							}
							return Math.max(eff, 0.11 * val);
						},
					},
				},
			},
			phd_wy: {
				image: 'ext:官将重修/image/card/phd_wy.png',
				fullskin: true,
				type: 'delay',
				cardcolor: 'spade',
				modTarget(card, player, target) {
					return lib.filter.judge(card, player, target);
				},
				enable(card, player) {
					return player.canAddJudge(card);
				},
				filterTarget(card, player, target) {
					return lib.filter.judge(card, player, target) && player === target;
				},
				selectTarget: [-1, -1],
				toself: true,
				cardPrompt(card) {
					const player = _status.event.player;
					return ui.joint`
						出牌阶段，对你使用。
						将【瘟疫】置于你的判定区内。
						若判定结果为黑桃，则目标角色失去X点体力（X为洗牌次数${(() => {
							if (!player || !player.name) return '/你的武将数量，向下取整';
							if (player.name2 === undefined) return '';
							return '的一半，向下取整';
						})()}且至少为1）。
						判定完成后，将此牌移动到下家的判定区内。
					`;
				},
				judge(card) {
					if (get.suit(card) === 'spade') {
						if (_status.event.player.name2 !== undefined) return -2 * Math.max(1, Math.floor(game.shuffleNumber / 2));
						return -2 * Math.max(1, game.shuffleNumber);
					}
					return 1;
				},
				judge2(result) {
					if (result.bool === false) return true;
					return false;
				},
				async effect(event, trigger, player, result) {
					if (result.bool === false) {
						if (player.name2 !== undefined) await player.loseHp(Math.max(1, Math.floor(game.shuffleNumber / 2)));
						else await player.loseHp(Math.max(1, game.shuffleNumber));
					}
					await player.addJudgeNext(event.card);
				},
				cancel() {
					player.addJudgeNext(card);
				},
				ai: {
					wuxie(target, card, player, viewer) {
						if (get.attitude(viewer, target) <= 0 || get.effect(target, { name: 'losehp' }, target, viewer) >= 0) return 0;
						let num;
						if (target.name2 !== undefined) num = Math.max(1, Math.floor(game.shuffleNumber / 2));
						else num = Math.max(1, game.shuffleNumber);
						if (target.hp > num && !target.hasSkillTag('nodamage') && !target.hasSkillTag('maihp')) return 0;
					},
					basic: {
						order: 0.5,
						useful: 0,
						value: 0,
					},
					result: {
						target(player, target) {
							let num = game.countPlayer((current) => {
									let skills = current.getSkills();
									for (let j = 0; j < current.skills.length; j++) {
										let rejudge = get.tag(current.skills[j], 'rejudge', current);
										if (rejudge !== undefined) {
											if (get.attitude(target, current) > 0 && get.attitude(current, target) > 0) return rejudge;
											return -rejudge;
										}
									}
								}),
								lose = Math.max(1, Math.floor(game.shuffleNumber / (target.name2 === undefined ? 1 : 2)));
							num += game.countPlayer((current) => {
								let att = get.sgn(get.attitude(target, current));
								if (
									current.hasSkill('hongyan') ||
									current.hasSkill('re_hongyan') ||
									current.hasSkill('xin_hongyan') ||
									current.hasSkill('ol_hongyan') ||
									(!current.hasJudge('phd_wy') && !current.canAddJudge({ name: 'phd_wy' }))
								)
									return 4.5 * att;
								if (current.hasSkillTag('nodamage')) return -4.5 * att;
								if (current.hasSkillTag('maixie')) return -2 * att;
								if (current.hasSkillTag('maihp')) return 2 * att;
								if (current.hp > lose) return 0;
								return -att;
							});
							if (num > 0) return num;
							if (num === 0) {
								let mode = get.mode();
								if (mode === 'identity') {
									if (target.identity === 'nei') return 1;
									let situ = get.situation();
									if (target.identity === 'fan') {
										if (situ > 1) return 1;
									} else if (situ < -1) return 1;
								} else if (mode === 'guozhan') {
									if (target.identity === 'ye') return 1;
									if (
										game.hasPlayer((current) => {
											return current.identity === 'unknown';
										})
									)
										return -1;
								}
								if (
									get.population(target.identity) === 1 &&
									(3 * target.hp) / target.maxHp + 0.4 * target.countCards('hes') <
										game.countPlayer((current) => {
											if (
												target !== current &&
												(current.hasJudge('phd_wy') || current.canAddJudge({ name: 'phd_wy' }))
											)
												return current.hp / current.maxHp + 0.1 * current.countCards('hes');
										})
								)
									return 1;
								return 0;
							}
							return -1;
						},
					},
				},
			},
			phd_tsc: {
				image: 'ext:官将重修/image/card/phd_tsc.png',
				fullskin: true,
				type: 'equip',
				subtype: 'equip1',
				distance: { attackFrom: -3 },
				ai: {
					basic: {
						equipValue: 2.5,
					},
				},
				skills: ['phd_tsc'],
			},
			phd_wytx: {
				image: 'ext:官将重修/image/card/phd_wytx.jpg',
				fullimage: true,
				type: 'equip',
				subtype: 'equip4',
				cardcolor: 'club',
				distance: {
					globalFrom: -1,
				},
				enable: true,
				selectTarget: -1,
				filterTarget(card, player, target) {
					return target === player && target.canEquip(card, true);
				},
				modTarget: true,
				allowMultiple: false,
				content() {
					if (cards.length && get.position(cards[0], true) === 'o') target.equip(cards[0]);
				},
				toself: true,
				ai: {
					basic: {
						order(card, player) {
							if (player && player.hasSkillTag('reverseEquip')) {
								return 8.5 - get.equipValue(card, player) / 20;
							} else {
								return 8 + get.equipValue(card, player) / 20;
							}
						},
						equipValue: 4,
						value(card, player, index, method) {
							if (player.isDisabled(get.subtype(card))) return 0.01;
							let value = 0;
							let info = get.info(card);
							let current = player.getEquip(info.subtype);
							if (current && card !== current) {
								value = get.value(current, player);
							}
							let equipValue = info.ai.equipValue;
							if (equipValue === undefined) {
								equipValue = info.ai.basic.equipValue;
							}
							if (typeof equipValue === 'function') {
								if (method === 'raw') return equipValue(card, player);
								if (method === 'raw2') return equipValue(card, player) - value;
								return Math.max(0.1, equipValue(card, player) - value);
							}
							if (typeof equipValue !== 'number') equipValue = 0;
							if (method === 'raw') return equipValue;
							if (method === 'raw2') return equipValue - value;
							return Math.max(0.1, equipValue - value);
						},
					},
					result: {
						target(player, target, card) {
							return get.equipResult(player, target, card.name);
						},
					},
				},
			},
			phd_zyysz: {
				image: 'ext:官将重修/image/card/phd_zyysz.jpg',
				fullimage: true,
				type: 'equip',
				subtype: 'equip4',
				cardcolor: 'spade',
				distance: {
					globalFrom: -1,
				},
				enable: true,
				selectTarget: -1,
				filterTarget(card, player, target) {
					return target === player && target.canEquip(card, true);
				},
				modTarget: true,
				allowMultiple: false,
				content() {
					if (cards.length && get.position(cards[0], true) === 'o') target.equip(cards[0]);
				},
				toself: true,
				ai: {
					basic: {
						order(card, player) {
							if (player && player.hasSkillTag('reverseEquip')) {
								return 8.5 - get.equipValue(card, player) / 20;
							} else {
								return 8 + get.equipValue(card, player) / 20;
							}
						},
						equipValue: 4,
						value(card, player, index, method) {
							if (player.isDisabled(get.subtype(card))) return 0.01;
							let value = 0;
							let info = get.info(card);
							let current = player.getEquip(info.subtype);
							if (current && card !== current) {
								value = get.value(current, player);
							}
							let equipValue = info.ai.equipValue;
							if (equipValue === undefined) {
								equipValue = info.ai.basic.equipValue;
							}
							if (typeof equipValue === 'function') {
								if (method === 'raw') return equipValue(card, player);
								if (method === 'raw2') return equipValue(card, player) - value;
								return Math.max(0.1, equipValue(card, player) - value);
							}
							if (typeof equipValue !== 'number') equipValue = 0;
							if (method === 'raw') return equipValue;
							if (method === 'raw2') return equipValue - value;
							return Math.max(0.1, equipValue - value);
						},
					},
					result: {
						target(player, target, card) {
							return get.equipResult(player, target, card.name);
						},
					},
				},
			},
			phd_mgk: {
				image: 'ext:官将重修/image/card/phd_mgk.png',
				fullskin: true,
				type: 'equip',
				subtype: 'equip2',
				cardcolor: 'black',
				cardPrompt(card) {
					if (lib.config.extension_官将重修_mgk === 'd') return '锁定技，当你受到火属性伤害时，防止此伤害。';
					if (lib.config.extension_官将重修_mgk === 'c') return '锁定技，当你成为火属性牌的目标时，取消之。';
				},
				skills: ['phd_mgk'],
				ai: {
					equipValue(card, player) {
						if (player._mgk_temp) return;
						let val = 0,
							num = 0,
							gx = lib.config.extension_官将重修_mgk;
						player._mgk_temp = true;
						if (!player.hasSkillTag('nofire') && get.damageEffect(player, player, player, 'fire') < 0) {
							num = game.countPlayer((current) => {
								if (get.attitude(current, player) < 0) {
									if (gx === 'd' && current.hasSkillTag('fireAttack', null, null, true)) return 2;
									return 0.7;
								}
								return false;
							});
							if (gx === 'd') val += 2.7;
							else val += 2;
						}
						delete player._mgk_temp;
						return val + num;
					},
					basic: {
						equipValue: 6,
					},
				},
			},
			phd_lsj: {
				image: 'ext:官将重修/image/card/phd_lsj.png',
				fullskin: true,
				type: 'equip',
				subtype: 'equip5',
				cardcolor: 'black',
				skills: ['phd_lsj'],
				forceDie: true,
				onLose() {
					if (lib.config.extension_官将重修_desLsj) {
						card.fix();
						card.remove();
						card.destroyed = true;
						game.log(card, '被销毁了');
					}
				},
				equipDelay: false,
				loseDelay: false,
				ai: {
					basic: {
						equipValue: 7.4,
					},
				},
			},
		},
		skill: {
			phds_shu: {
				audio: false,
				enable: 'phaseUse',
				usable: 1,
				async content(event, trigger, player) {
					if (!player.storage.pingjian) player.storage.pingjian = [];
					if (!_status.characterlist) lib.skill.pingjian.initList();
					let list = [],
						skills = [],
						map = [],
						evt = event.getParent(2),
						allList = _status.characterlist.slice(0);
					game.countPlayer((current) => {
						if (
							current.name &&
							lib.character[current.name] &&
							current.name.indexOf('gz_shibing') !== 0 &&
							current.name.indexOf('gz_jun_') !== 0
						)
							allList.add(current.name);
						if (
							current.name1 &&
							lib.character[current.name1] &&
							current.name1.indexOf('gz_shibing') !== 0 &&
							current.name1.indexOf('gz_jun_') !== 0
						)
							allList.add(current.name1);
						if (
							current.name2 &&
							lib.character[current.name2] &&
							current.name2.indexOf('gz_shibing') !== 0 &&
							current.name2.indexOf('gz_jun_') !== 0
						)
							allList.add(current.name2);
					});
					allList.randomSort();
					for (let i = 0; i < allList.length; i++) {
						let name = allList[i];
						if (name.indexOf('zuoci') !== -1 || name.indexOf('xushao') !== -1) continue;
						const skills2 = get.character(name, 3);
						for (let j = 0; j < skills2.length; j++) {
							if (
								player.getStorage('pingjian').includes(skills2[j]) ||
								lib.config.extension_官将重修_book.includes(skills2[j])
							)
								continue;
							if (get.is.locked(skills2[j], player)) continue;
							let info = lib.translate[skills2[j] + '_info'];
							if (
								skills.includes(skills2[j]) ||
								(info && info.indexOf('当你于出牌阶段') !== -1 && info.indexOf('当你于出牌阶段外') === -1)
							) {
								list.add(name);
								if (!map[name]) map[name] = [];
								map[name].push(skills2[j]);
								skills.add(skills2[j]);
								continue;
							}
							let list2 = [skills2[j]];
							game.expandSkills(list2);
							for (let k = 0; k < list2.length; k++) {
								let info = lib.skill[list2[k]];
								if (
									!info ||
									!info.enable ||
									info.charlotte ||
									info.limited ||
									info.juexingji ||
									info.hiddenSkill ||
									info.dutySkill ||
									(info.zhuSkill && !player.isZhu2()) ||
									get.is.zhuanhuanji(list2[k], player)
								)
									continue;
								if (
									info.enable === 'phaseUse' ||
									(Array.isArray(info.enable) && info.enable.includes('phaseUse')) ||
									info.enable === 'chooseToUse' ||
									(Array.isArray(info.enable) && info.enable.includes('chooseToUse'))
								) {
									if (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg)) continue;
									if (info.init || info.onChooseToUse || lib.config.extension_官将重修_book.includes(list2[k])) continue;
									if (info.filter) {
										try {
											var bool = info.filter(evt, player);
											if (!bool) continue;
										} catch (e) {
											continue;
										}
									} else if (info.viewAs && typeof info.viewAs !== 'function') {
										try {
											if (evt.filterCard && !evt.filterCard(get.autoViewAs(info.viewAs, 'unsure'), player, evt))
												continue;
											if (info.viewAsFilter && info.viewAsFilter(player) === false) continue;
										} catch (e) {
											continue;
										}
									}
									list.add(name);
									if (!map[name]) map[name] = [];
									map[name].push(skills2[j]);
									skills.add(skills2[j]);
									break;
								}
							}
						}
						if (list.length > 2) break;
					}
					if (!skills.length) return;
					const result = await player
						.chooseControl(skills)
						.set('dialog', ['评鉴：请选择尝试发动的技能', [list, 'character']])
						.forResult();
					player.popup(result.control);
					player.storage.pingjian.add(result.control);
					player.addTempSkill(result.control);
					player.addTempSkill('pingjian_check', 'phaseUseAfter');
					if (!player.storage.pingjian_check) player.storage.pingjian_check = {};
					player.storage.pingjian_check[result.control] = 'phaseUse';
					let name = list.find((name) => lib.character[name][3].includes(result.control));
					if (name) game.broadcastAll((player, name) => player.tempname.add(name), player, name);
				},
				ai: {
					order: 12,
					result: {
						player: 1,
					},
				},
			},
			phd_zhuge: {
				equipSkill: true,
				audio: 'zhuge_skill',
				init(player) {
					if (player.isPhaseUsing() || _status.event.isPhaseUsing(player)) {
						player.markSkill('phd_zhuge');
						player.addTempSkill('phd_zhuge_unmark');
					}
				},
				onremove(player) {
					player.unmarkSkill('phd_zhuge');
				},
				marktext: '弩',
				intro: {
					content(storage, player) {
						return '杀使用次数/次数上限：' + player.countUsed('sha') + '/' + player.getCardUsable('sha', true);
					},
				},
				mod: {
					cardUsable(card, player, num) {
						let cardx = player.getEquip('zhuge'),
							extra = 3;
						if (
							card.name === 'sha' &&
							(!cardx ||
								player.hasSkill('phd_zhuge', null, false) ||
								(!_status.zhuge_temp && !ui.selected.cards.includes(cardx)))
						) {
							if (get.is.versus() || get.is.changban()) return num + 3;
							switch (lib.config.extension_官将重修_ln) {
								case 'yx':
									extra = game.players.length + game.dead.length;
									break;
								case 'ch':
									extra = game.players.length;
									break;
								case 'wx':
									extra = Infinity;
									break;
								case 'nine':
									extra = 9;
									break;
								case 'top':
									if (get.itemtype(_status.pileTop) === 'card' && typeof _status.pileTop.number === 'number')
										num = _status.pileTop.number;
							}
							return num + extra;
						}
					},
					cardEnabled2(card, player) {
						if (!_status.event.addCount_extra || player.hasSkill('phd_zhuge', null, false)) return;
						if (card && card === player.getEquip('zhuge')) {
							try {
								var cardz = get.card();
							} catch (e) {
								return;
							}
							if (!cardz || cardz.name !== 'sha') return;
							_status.zhuge_temp = true;
							let bool = lib.filter.cardUsable(get.autoViewAs({ name: 'sha' }, ui.selected.cards.concat([card])), player);
							delete _status.zhuge_temp;
							if (!bool) return false;
						}
					},
				},
				trigger: { player: 'useCard1' },
				filter(event, player) {
					return (
						!event.audioed &&
						event.card.name === 'sha' &&
						player.countUsed('sha', true) > 1 &&
						event.getParent().type === 'phase'
					);
				},
				forced: true,
				firstDo: true,
				content() {
					trigger.audioed = true;
				},
				group: 'phd_zhuge_mark',
				subSkill: {
					mark: {
						trigger: { player: 'phaseUseBefore' },
						forced: true,
						popup: false,
						priority: -99,
						content() {
							player.markSkill('phd_zhuge');
							player.addTempSkill('phd_zhuge_unmark');
						},
						sub: true,
					},
					unmark: {
						trigger: { player: 'phaseUseAfter' },
						forced: true,
						popup: false,
						priority: -99,
						content() {
							player.unmarkSkill('phd_zhuge');
						},
					},
					sk: {
						charlotte: true,
						noDisabled: true,
						onremove(player) {
							if (lib.config.extension_官将重修_fixKp) player.removeSkill('phd_zhuge');
							else player.removeSkill('zhuge_skill');
						},
					},
				},
			},
			phd_qinggang: {
				equipSkill: true,
				audio: 'qinggang_skill',
				trigger: {
					player: 'useCardToPlayered',
					source: 'damageBegin2',
				},
				filter(event, player) {
					if (!event.card || event.card.name !== 'sha') return false;
					if (event.name === 'useCardToPlayered') return lib.config.extension_官将重修_qgjMb === 'zd' && event.target.isAlive();
					return lib.config.extension_官将重修_qgjMb === 'mz' && event.player.isAlive();
				},
				direct: true,
				locked: true,
				priority: -1,
				async content(event, trigger, player) {
					let target = trigger.player,
						log;
					if (trigger.name === 'useCardToPlayered') target = trigger.target;
					if (lib.config.extension_官将重修_qgjQp !== 'off' && target.countCards(lib.config.extension_官将重修_qgjQp)) {
						log = true;
						if (lib.config.extension_官将重修_sjQp) {
							let card = target.getCards(lib.config.extension_官将重修_qgjQp).randomGet();
							player.logSkill('phd_qinggang', target);
							if (lib.filter.canBeDiscarded(card, player, target)) await target.discard(card, player, 'notBySelf');
						} else {
							await player
								.discardPlayerCard(target, lib.config.extension_官将重修_qgjQp, true)
								.set('logSkill', ['phd_qinggang', target]);
						}
					}
					if (lib.config.extension_官将重修_qgjFl === 'off') return;
					let list = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
					for (let i = 0; i < list.length; i++) {
						if (target.isDisabled(list[i])) list.splice(i--, 1);
						else if (target.getEquip(list[i])) {
							if (lib.config.extension_官将重修_qgjFl.indexOf('z')) list.splice(i--, 1);
						} else if (lib.config.extension_官将重修_qgjFl.indexOf('k') === -1) list.splice(i--, 1);
					}
					if (!list.length) return;
					let result;
					if (list.length === 1) result = { control: list[0] };
					else if (lib.config.extension_官将重修_sjFl) result = { control: list.randomGet() };
					else
						result = await player
							.chooseControl(list)
							.set('prompt', '请选择' + get.translation(target) + '要废除的装备栏')
							.set('ai', () => {
								let att = get.attitude(get.event('player'), target),
									a = [],
									b = [];
								for (let i = 1; i < 6; i++) {
									if (!list.includes('equip' + i)) continue;
									if (att > 0) {
										if (i > 2 && target.isEmpty(i)) a.push(i);
										else b.push(i);
									} else if (!target.isDisabled(i)) {
										if (i < 3 || target.getEquip(i)) a.push(i);
										else b.push(i);
									}
								}
								if (a.length) {
									if (att < 0) return 'equip' + a[0];
									return 'equip' + a[a.length - 1];
								}
								if (b.length) {
									if (att < 0) return 'equip' + b[0];
									return 'equip' + b[b.length - 1];
								}
								return 0;
							});
					if (!log) player.logSkill('phd_qinggang', target);
					await target.disableEquip(result.control);
				},
				ai: {
					unequip_ai: true,
					skillTagFilter(player, tag, arg) {
						if (!arg || arg.name !== 'sha' || !arg.target || lib.config.extension_官将重修_qgjMb === 'mz') return false;
						if (lib.config.extension_官将重修_qgjQp.indexOf('e') !== -1) {
							let fj = 0,
								es = arg.target.countDiscardableCards(player, 'e', (card) => {
									if (card === arg.target.getEquip(2)) fj++;
									return true;
								});
							if (fj && fj >= es) return true;
						}
						if (lib.config.extension_官将重修_qgjFl.indexOf('z') === 0) {
							let es = [];
							for (let i = 1; i < 6; i++) {
								if (arg.target.isDisabled(i)) continue;
								if (arg.target.getEquip(i)) es.add(i);
								else if (lib.config.extension_官将重修_qgjFl.indexOf('k') === -1) es.add(i);
							}
							return es.length === 1 && es[0] === 2;
						}
						return false;
					},
				},
			},
			phd_qinglong: {
				equipSkill: true,
				audio: 'qinglong_skill',
				trigger: { player: 'useCardToPlayered' },
				filter(event, player) {
					return event.card.name === 'sha';
				},
				check(event, player) {
					return get.attitude(_status.event.player, event.target) <= 0;
				},
				prompt2(event, player) {
					let str = '令' + get.translation(event.target),
						fp = lib.config.extension_官将重修_qlFp;
					if (lib.config.extension_官将重修_qlFj) {
						str += '非锁定技失效';
						if (fp !== 'f') str += '且';
					}
					if (fp !== 'f') {
						let suit = get.suit(event.card, player),
							color = get.color(event.card, player);
						str += '不能使用、打出或弃置';
						if (fp === 's' && lib.suit.includes(suit)) str += get.translation(suit) + '牌';
						else if (fp === 'c' && color && color !== 'none') str += get.translation(color) + '牌';
						else if (fp === 'h') str += '手牌';
						else str += '无色牌';
					}
					return str + '直到' + get.translation(event.card) + '结算完毕后';
				},
				logTarget: 'target',
				async content(event, trigger, player) {
					trigger.target.storage.phd_qinglong_card = trigger.card;
					trigger.target.addTempSkill('phd_qinglong_remove');
					if (lib.config.extension_官将重修_qlFj) trigger.target.addTempSkill('phd_qinglong_fj');
					if (lib.config.extension_官将重修_qlFp === 'f') return;
					let suit = get.suit(trigger.card, player);
					if (lib.config.extension_官将重修_qlFp === 'c') suit = get.color(trigger.card, player);
					if (lib.config.extension_官将重修_qlFp === 'h') suit = 'h';
					else if (!['club', 'spade', 'diamond', 'heart', 'red', 'black'].includes(suit)) suit = 'none';
					trigger.target.storage.phd_qinglong_fp = suit;
					trigger.target.addTempSkill('phd_qinglong_fp');
					game.broadcastAll(
						function (player, target, suit) {
							if (target.marks.phd_qinglong_fp) {
								if (suit === 'none') target.marks.phd_qinglong_fp.firstChild.innerHTML = '';
								else if (suit === 'h') target.marks.phd_qinglong_fp.firstChild.innerHTML = '封';
								else target.marks.phd_qinglong_fp.firstChild.innerHTML = get.translation(suit)[0];
							}
						},
						player,
						trigger.target,
						suit
					);
					trigger.target.markSkill('phd_qinglong_fp');
				},
				subSkill: {
					fj: {
						inherit: 'fengyin',
					},
					fp: {
						mod: {
							cardEnabled2(card, player) {
								let suit = get.suit(card, player),
									color = get.color(card, player);
								if (player.storage.phd_qinglong_fp === 'h') return get.position(card) !== 'h';
								if (suit === player.storage.phd_qinglong_fp || color === player.storage.phd_qinglong_fp) return false;
							},
							cardDiscardable(card, player) {
								let suit = get.suit(card, player),
									color = get.color(card, player);
								if (player.storage.phd_qinglong_fp === 'h') return get.position(card) !== 'h';
								if (suit === player.storage.phd_qinglong_fp || color === player.storage.phd_qinglong_fp) return false;
							},
						},
						mark: true,
						intro: {
							content(storage, player) {
								let str = '不能使用、打出或弃置';
								if (player.storage.phd_qinglong_fp === 'none') str += '无色';
								else if (player.storage.phd_qinglong_fp === 'h') str += '手';
								else str += get.translation(player.storage.phd_qinglong_fp);
								return str + '牌';
							},
						},
						onremove(player) {
							delete player.storage.phd_qinglong_fp;
						},
					},
					remove: {
						trigger: { global: 'useCardAfter' },
						filter(event, player) {
							return event.card === player.storage.phd_qinglong_card;
						},
						charlotte: true,
						forced: true,
						popup: false,
						priority: -99,
						content() {
							player.removeSkill('phd_qinglong_fj');
							player.removeSkill('phd_qinglong_fp');
							player.removeSkill('phd_qinglong_remove');
						},
						onremove(player) {
							delete player.storage.phd_qinglong_card;
						},
					},
				},
			},
			phd_zhangba: {
				equipSkill: true,
				audio: 'zhangba_skill',
				enable: ['chooseToUse', 'chooseToRespond'],
				filter(event, player) {
					return (
						player.countCards(lib.config.extension_官将重修_zb, (card) => {
							return card !== player.getEquip('zhangba');
						}) >= 2
					);
				},
				filterCard(card) {
					return card !== _status.event.player.getEquip('zhangba');
				},
				selectCard: 2,
				position: lib.config.extension_官将重修_zb,
				viewAs: { name: 'sha' },
				viewAsFilter(player) {
					return (
						player.countCards(lib.config.extension_官将重修_zb, (card) => {
							return card !== player.getEquip('zhangba');
						}) >= 2
					);
				},
				complexCard: true,
				prompt(event, player) {
					switch (lib.config.extension_官将重修_zb) {
						case 'hes':
							return '将两张牌当【杀】使用或打出';
						case 'hs':
							return '将两张手牌当【杀】使用或打出';
					}
				},
				check(card) {
					let player = _status.event.player;
					if (
						player.hasCard((card) => {
							return get.name(card) === 'sha';
						})
					)
						return 0;
					if (
						_status.event &&
						_status.event.name === 'chooseToRespond' &&
						player.hp < 3 &&
						!player.countCards('hs', (card) => {
							return get.name(card) !== 'tao' && get.name(card) !== 'jiu';
						})
					)
						return (player.hp > 1 ? 10 : 8) - get.value(card);
					return Math.max(5, 8 - 0.7 * player.hp) - get.value(card);
				},
				ai: {
					respondSha: true,
					skillTagFilter(player) {
						return (
							player.countCards(lib.config.extension_官将重修_zb, (card) => {
								return card !== player.getEquip('zhangba');
							}) >= 2
						);
					},
				},
			},
			phd_fangtian: {
				equipSkill: true,
				audio: 'fangtian_skill',
				init(player) {
					player.storage.phd_fangtian = [];
					player.storage.phd_fangtian_execute = [];
				},
				onremove(player) {
					delete player.storage.phd_fangtian;
					delete player.storage.phd_fangtian_execute;
				},
				trigger: { player: 'useCard1' },
				filter(event, player) {
					if (event.card.name !== 'sha') return false;
					return game.hasPlayer((target) => {
						if (event.targets.includes(target)) return false;
						if (!lib.filter.filterTarget(event.card, player, target)) return false;
						return true;
					});
				},
				async cost(event, trigger, player) {
					let max,
						info = '你使用【杀】可以额外指定至多',
						res = lib.config.extension_官将重修_ftRes,
						tj = lib.config.extension_官将重修_ftTj,
						qx = lib.config.extension_官将重修_ftQx;
					switch (lib.config.extension_官将重修_ftMb) {
						case 'dw':
							max = Math.max(1, game.players.length - 2 * player.getFriends(true).length);
							break;
						case 'ry':
							max = Infinity;
							break;
						case 'sx':
							max = Math.round(player.maxHp / 2);
							break;
						default:
							max = 2;
					}
					info += get.cnNumber(max) + '名角色为目标';
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
					info += '。';
					event.result = await player
						.chooseTarget([1, max], (card, player, target) => {
							let cardx = _status.event.cardx;
							if (!lib.filter.filterTarget(cardx, player, target)) return false;
							let targets = _status.event.targets.slice(0).concat(ui.selected.targets);
							if (targets.includes(target)) return false;
							return true;
						})
						.set('prompt', get.prompt('phd_fangtian'))
						.set('prompt2', info)
						.set('promptbar', 'none')
						.set('ai', (target) => {
							let player = _status.event.player,
								eff = get.effect(target, _status.event.cardx, player, player);
							if (eff <= 0) return false;
							if (_status.event.res === 'off') return eff;
							if (typeof _status.event.res === 'number' && _status.event.res + eff > 0) return _status.event.res + eff;
							if (
								player.hasSkillTag(
									'directHit_ai',
									true,
									{
										target: target,
										card: _status.event.cardx,
									},
									true
								) ||
								!target.mayHaveShan(
									player,
									'use',
									target.getCards('h', (i) => {
										return i.hasGaintag('sha_notshan');
									})
								)
							) {
								if (_status.event.tj === 'dx') return eff;
							} else if (_status.event.tj === 'da') return eff;
							if (_status.event.res === 'sx' || _status.event.targets.length > 1) return false;
							if (!ui.selected.targets.length && _status.event.res < 0) return false;
							if (!_status.event.qx) return eff / 5;
							let now = _status.event.targets[0].next;
							while (now !== player) {
								if (target === now) return eff / 5;
								now = now.next;
							}
							return 0;
						})
						.set('cardx', trigger.card)
						.set('targets', trigger.targets)
						.set(
							'res',
							(() => {
								if (res === 'sx' || res === 'off') return res;
								if (
									res === 'sj' &&
									player.countCards('he', (i) => {
										return player.getEquip('fangtian') !== i;
									})
								)
									return -get.effect(player, { name: 'draw' }, player, _status.event.player);
								if (
									res === 'er' &&
									player.countCards('he', (i) => {
										return player.getEquip('fangtian') !== i;
									}) > 1
								)
									return -1.6 * get.effect(player, { name: 'draw' }, player, _status.event.player);
								if (res === 'hp') return get.effect(player, { name: 'losehp' }, player, _status.event.player);
								return 0;
							})()
						)
						.set('tj', tj)
						.set('qx', lib.config.extension_官将重修_ftQx)
						.forResult();
				},
				async content(event, trigger, player) {
					if (get.mode() === 'identity' && !player.identityShown && lib.config.extension_官将重修_ftMb === 'dw') {
						let num = 1,
							t = player.next,
							color = '#';
						while (t !== player) {
							if (!player.getFriends().includes(t)) num = Math.max(num, game.players.length - 2 * t.getFriends(true).length);
							t = t.next;
						}
						if (
							num < result.targets.length &&
							(_status.mode !== 'zhong' ||
								game.zhu.identityShown ||
								(player.identity !== 'zhu' && player.identity !== 'zhong'))
						) {
							if (player.identity === 'fan') color += 'g';
							else if (player.identity.indexOf('e')) color += 'b';
							else color += 'y';
							game.broadcastAll(function (player) {
								player.showIdentity();
								game.log(player, '的身份是', color + get.translation(player.identity + 2));
							}, player);
						}
					}
					trigger.targets.addArray(result.targets);
					if (lib.config.extension_官将重修_ftQx || lib.config.extension_官将重修_ftRes !== 'off') {
						player.storage.phd_fangtian.add(trigger.card);
						if (lib.config.extension_官将重修_ftTj === 'da') player.addTempSkill('phd_fangtian_damage');
						else if (lib.config.extension_官将重修_ftTj === 'dx') player.addTempSkill('phd_fangtian_miss');
						else {
							if (lib.config.extension_官将重修_ftQx) trigger.targets = [];
							player.storage.phd_fangtian_execute.add(trigger.card);
						}
					}
				},
				group: 'phd_fangtian_remove',
				subSkill: {
					damage: {
						trigger: { source: 'damageSource' },
						filter(event, player) {
							return event.card && player.storage.phd_fangtian && player.storage.phd_fangtian.includes(event.card);
						},
						silent: true,
						charlotte: true,
						content() {
							if (lib.config.extension_官将重修_ftQx) {
								let evt = trigger.getParent('useCard');
								evt.excluded.addArray(evt.targets);
							}
							player.storage.phd_fangtian_execute.add(trigger.card);
						},
					},
					miss: {
						trigger: { player: 'shaMiss' },
						filter(event, player) {
							return player.storage.phd_fangtian && player.storage.phd_fangtian.includes(event.card);
						},
						silent: true,
						charlotte: true,
						content() {
							if (lib.config.extension_官将重修_ftQx) trigger.getParent().excluded.addArray(trigger.getParent().targets);
							player.storage.phd_fangtian_execute.add(trigger.card);
						},
					},
					remove: {
						trigger: {
							player: ['useCardAfter', 'useCardCancelled'],
						},
						filter(event, player) {
							return player.storage.phd_fangtian && player.storage.phd_fangtian.includes(event.card);
						},
						forced: true,
						popup: false,
						async content(event, trigger, player) {
							player.storage.phd_fangtian.remove(trigger.card);
							if (player.storage.phd_fangtian_execute && player.storage.phd_fangtian_execute.includes(trigger.card)) {
								let res = lib.config.extension_官将重修_ftRes;
								player.storage.phd_fangtian_execute.remove(trigger.card);
								if (res === 'sj')
									await player.discard(
										player
											.getCards('he', (card) => {
												return card !== player.getEquip('fangtian');
											})
											.randomGet()
									);
								else if (res === 'er')
									await player.chooseToDiscard('he', 2, true, (card) => {
										return card !== player.getEquip('fangtian');
									});
								else if (res === 'hp') await player.loseHp();
								else if (res === 'sx') await player.loseMaxHp();
							}
						},
						sub: true,
					},
				},
			},
			phd_qibaodao: {
				equipSkill: true,
				audio: 'qibaodao2',
				trigger: { player: 'useCardToPlayered' },
				filter(event, player) {
					return event.card && event.card.name === 'sha' && event.target.hp > player.hp;
				},
				check(event, player) {
					if (
						(lib.config.extension_官将重修_qbdJs === 'x' && event.target.hp - player.hp < 2) ||
						get.attitude(_status.event.player, event.target) >= 0 ||
						event.target.hasSkillTag('filterDamage', null, {
							player: player,
							card: event.card,
						})
					)
						return false;
					if (
						player.hasSkillTag(
							'directHit_ai',
							true,
							{
								target: event.target,
								card: event.card,
							},
							true
						)
					)
						return true;
					if (
						event.target.hp - player.hp - event.target.countCards('hs') < 0 ||
						event.target.hasSkillTag('respondShan', true, 'use', true)
					)
						return false;
					return get.attitude(_status.event.player, event.target) < -1;
				},
				prompt2(event, player) {
					let str = '令' + get.translation(event.card) + '对' + get.translation(event.target) + '造成的伤害';
					switch (lib.config.extension_官将重修_qbdJs) {
						case 'x':
							str += '改为' + (event.target.hp - player.hp);
							break;
						case 'px':
							str += '+' + (event.target.hp - player.hp);
							break;
						case 'po':
							str += '+1';
					}
					return str;
				},
				logTarget: 'target',
				content() {
					let extra = 1,
						id = trigger.target.playerid,
						map = trigger.customArgs,
						js = lib.config.extension_官将重修_qbdJs;
					if (js.includes('x')) extra = trigger.target.hp - player.hp;
					if (js.indexOf('p')) {
						trigger.getParent().baseDamage = extra;
						game.log(player, '令', trigger.card, '对', trigger.target, '的伤害改为', '#b' + extra);
					} else {
						if (!map[id]) map[id] = {};
						if (!map[id].extraDamage) map[id].extraDamage = 0;
						map[id].extraDamage += extra;
						game.log(player, '令', trigger.card, '对', trigger.target, '的伤害', '#y+' + extra);
					}
					if (lib.config.extension_官将重修_qbdZd !== 'no') {
						player.addTempSkill('phd_qibaodao_rem');
						player.storage.phd_qibaodao_rem.push(trigger.target);
					}
					player.storage.phd_qibaodao_card = trigger.card;
					player.addTempSkill('phd_qibaodao_card');
				},
				ai: {
					effect: {
						player(card, player, target, current) {
							if (
								get.name(card) === 'sha' &&
								target.hp > player.hp &&
								!target.hasSkillTag('filterDamage', null, {
									player: player,
									card: card,
								})
							) {
								let num = 2;
								if (lib.config.extension_官将重修_qbdJs === 'px') num = target.hp - player.hp + 1;
								else if (lib.config.extension_官将重修_qbdJs === 'x') num = target.hp - player.hp;
								return [1, 0, num, 0];
							}
						},
					},
					damageBonus: true,
					skillTagFilter(player, tag, arg) {
						return (
							arg &&
							arg.target &&
							arg.target.hp > player.hp &&
							(lib.config.extension_官将重修_qbdJs !== 'x' || arg.target.hp - player.hp > 1) &&
							get.attitude(player, arg.target) < 0
						);
					},
				},
				subSkill: {
					rem: {
						init(player) {
							player.storage.phd_qibaodao_rem = [];
						},
						onremove: true,
						trigger: {
							player: ['useCardEnd', 'shaMiss'],
						},
						filter(event, player) {
							return event.name !== 'useCard' || event.card === player.storage.phd_qibaodao_card;
						},
						charlotte: true,
						forced: true,
						popup: false,
						priority: 5,
						async content(event, trigger, player) {
							let targets = player.storage.phd_qibaodao_rem,
								card = player.getEquip('qibaodao');
							if (trigger.name === 'useCard') player.removeSkill('phd_qibaodao_rem');
							if (
								player.getEquip('qibaodao') &&
								(lib.config.extension_官将重修_qbdZd === 'must' || trigger.name !== 'useCard')
							) {
								for (let i = 0; i < targets.length; i++) {
									if (targets[i].isDead()) targets.remove(targets[i]);
								}
								if (targets.length > 1)
									targets = await player
										.chooseTarget('将【七宝刀】交给其中一名角色并令其使用之', true, (card, player, target) => {
											return get.event('targets').includes(target);
										})
										.set('ai', (target) => {
											return get.attitude(player, target);
										})
										.set('targets', targets)
										.forResultTargets();
							}
							if (!targets.length) return;
							const target = targets[0];
							await player.give(card, target, 'give').set('knowers', game.players);
							if (target.getCards('h').includes(card) && target.hasUseTarget(card)) {
								await target.chooseUseTarget(card, true, 'nopopup');
								await game.delay();
							}
						},
					},
					card: {
						trigger: { player: 'useCardAfter' },
						filter(event, player) {
							return event.card === player.storage.phd_qibaodao_card;
						},
						silent: true,
						content() {
							player.removeSkill('phd_qibaodao_card');
						},
						onremove(player) {
							delete player.storage.phd_qibaodao_card;
						},
					},
				},
			},
			phd_tsc: {
				trigger: { player: 'phaseJieshuBegin' },
				filter(event, player) {
					return lib.skill.phd_tsc.logTarget(null, player).length > 0;
				},
				forced: true,
				equipSkill: true,
				logTarget(event, player) {
					let hs = player.countCards('h');
					return game.filterPlayer((current) => {
						return current.countCards('h') > hs;
					});
				},
				async content(event, trigger, player) {
					let targets = lib.skill.phd_tsc.logTarget(null, player).sortBySeat();
					while (targets.length) {
						const target = targets.shift();
						if (target.countCards('h') > 0) await target.chooseToDiscard('h', true);
					}
				},
			},
			phd_mgk: {
				equipSkill: true,
				trigger: {
					player: 'damageBegin2',
				},
				filter(event, player) {
					if (!event.hasNature('fire') || lib.config.extension_官将重修_mgk !== 'd' || player.hasSkillTag('unequip2'))
						return false;
					if (
						event.source &&
						event.source.hasSkillTag('unequip', false, {
							name: event.card ? event.card.name : null,
							target: player,
							card: event.card,
						})
					)
						return false;
					return true;
				},
				forced: true,
				content() {
					trigger.cancel();
				},
				group: 'phd_mgk_cancel',
				subSkill: {
					cancel: {
						trigger: {
							target: 'useCardToTarget',
						},
						filter(event, player) {
							if (lib.config.extension_官将重修_mgk === 'c') return game.hasNature(event.card, 'fire');
						},
						forced: true,
						content() {
							trigger.getParent().targets.remove(player);
						},
						sub: true,
					},
				},
				ai: {
					nofire: true,
					skillTagFilter(player) {
						if (lib.config.extension_官将重修_mgk === 'c') return arg && arg.card && game.hasNature(arg.card, 'fire');
						return lib.config.extension_官将重修_mgk === 'd';
					},
					effect: {
						target(card, player, target, current) {
							if (!game.hasNature(card, 'fire')) return;
							if (lib.config.extension_官将重修_mgk === 'c') return 'zeroplayertarget';
							if (lib.config.extension_官将重修_mgk !== 'd' || target.hasSkillTag('unequip2')) return;
							if (
								player.hasSkillTag('unequip', false, {
									name: card ? card.name : null,
									target: target,
									card: card,
								}) ||
								player.hasSkillTag('unequip_ai', false, {
									name: card ? card.name : null,
									target: target,
									card: card,
								})
							)
								return;
							return 'zeroplayertarget';
						},
					},
				},
			},
			phd_lsj: {
				equipSkill: true,
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				onremove(player, skill) {
					let cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				trigger: {
					player: 'phaseUseEnd',
				},
				async cost(event, trigger, player) {
					let list = ['摸一张牌'];
					if (player.countCards('he') > 1) list.push('将一张牌置于武将牌上，于回合结束后获得之');
					const result = await player
						.chooseControl('cancel2')
						.set('prompt', get.prompt('phd_lsj'))
						.set('choiceList', list)
						.set('ai', () => {
							let player = _status.event.player;
							if (
								player.countCards('e', (card) => {
									return get.name(card) !== 'tengjia' && get.value(card) <= 0;
								})
							)
								return 1;
							let hs = player.getCards('h'),
								num = 0;
							for (let i = 0; i < hs.length; i++) {
								if (game.checkMod(hs[i], player, false, 'ignoredHandcard', player) !== true) num++;
							}
							if (num - player.getHandcardLimit() > 0) return 1;
							return 0;
						})
						.forResult();
					event.result = {
						bool: result.control !== 'cancel2',
						cost_data: result.index,
					};
				},
				async content(event, trigger, player) {
					if (!event.cost_data) {
						await player.draw();
						return;
					}
					const cards = await player
						.chooseCard('he', true, (card, player) => {
							return card !== player.getEquip(5);
						})
						.set('ai', (card) => {
							let val = get.value(card);
							if (get.position(card) === 'e' && (val <= 0 || player.hasSkillTag('noe'))) return 20;
							if (val < 0) return 10 - val;
							if (get.position(card) === 'h') return val;
							return 0;
						})
						.forResultCards();
					if (cards) await player.addToExpansion(cards, 'give', player).gaintag.add('phd_lsj');
				},
				group: 'phd_lsj_gain',
				subSkill: {
					gain: {
						trigger: { global: 'phaseAfter' },
						filter(event, player) {
							return player.getExpansions('phd_lsj').length;
						},
						forced: true,
						popup: false,
						content() {
							player.gain(player.getExpansions('phd_lsj'), 'gain2', 'log').set('knowers', game.players);
						},
						sub: true,
					},
				},
			},
		},
		translate: {
			phd: '官将重修',
			phd_shu: '书',
			phd_shu_info: '出牌阶段限一次，对你使用。目标角色发动一次〖评荐〗。',
			phds_shu: '评荐',
			phds_shu_info: ui.joint`
				出牌阶段，你可以令系统随机检索出三张拥有发动时机为出牌阶段的技能的武将牌，你可以选择尝试发动其中一个技能。
				每个技能每局游戏只能选择一次。
			`,
			phd_fdcx: '釜底抽薪',
			phd_fdcx_info: ui.joint`
				出牌阶段，对一名能进行拼点的其他角色使用。
				若此牌包含实体牌，你可以选择其中一张牌作为拼点牌，并将后文中的“拼点牌”改为“一张牌”。
				若你赢，你获得对方的拼点牌。
			`,
			phd_syqj: '水淹七军',
			phd_syqj_info: ui.joint`
				出牌阶段，对一名其他角色使用。
				将此牌横置于目标角色的判定区内。
				目标角色于判定阶段进行判定，若判定结果不为♦，则其弃置装备区内的所有牌或受到1点雷电伤害。
			`,
			phd_wy: '瘟疫',
			phd_wy_info: ui.joint`
				出牌阶段，对你使用。
				将【瘟疫】置于你的判定区内。
				若判定结果为黑桃，则目标角色失去X点体力（X为洗牌次数的一半，向下取整且至少为1）。
				判定完成后，将此牌移动到下家的判定区内。
			`,
			phd_zhuge: '诸葛连弩',
			phd_qinggang: '青釭剑',
			phd_qinglong: '青龙偃月刀',
			phd_zhangba: '丈八蛇矛',
			phd_fangtian: '方天画戟',
			phd_qibaodao: '七宝刀',
			phd_tsc: '投石车',
			phd_tsc_info: '锁定技，结束阶段开始时，你令所有手牌数大于你的角色依次弃置一张手牌。',
			phd_wytx: '乌云踏雪',
			phd_wytx_info: '锁定技，你计算与其他角色的距离-1。',
			phd_zyysz: '照夜玉狮子',
			phd_zyysz_info: '锁定技，你计算与其他角色的距离-1。',
			phd_mgk: '明光铠',
			phd_mgk_info: '嗯？没加载出来描述嘛...',
			phd_lsj: '灵蛇髻',
			phd_lsj_info: '出牌阶段结束时，你可以选择一项：摸一张牌；将一张牌置于武将牌上，并于回合结束后获得此牌。',
		},
		list: [
			['heart', 1, 'tao'],
			['heart', 1, 'juedou'],
			['heart', 1, 'wanjian'],
			['heart', 2, 'sha'],
			['heart', 2, 'shan'],
			['heart', 2, 'tao'],
			['heart', 3, 'sha'],
			['heart', 3, 'tao'],
			['heart', 3, 'zhujinqiyuan'],
			['heart', 4, 'sha'],
			['heart', 4, 'shan'],
			['heart', 4, 'tao'],
			['heart', 5, 'sha'],
			['heart', 5, 'tao'],
			['heart', 5, 'chitu'],
			['heart', 6, 'shan'],
			['heart', 6, 'tao'],
			['heart', 6, 'lebu'],
			['heart', 7, 'sha'],
			['heart', 7, 'sha'],
			['heart', 7, 'tao'],
			['heart', 8, 'shan'],
			['heart', 8, 'tao'],
			['heart', 8, 'huogong', 'fire'],
			['heart', 9, 'sha'],
			['heart', 9, 'tao'],
			['heart', 9, 'jiu'],
			['heart', 10, 'shan'],
			['heart', 10, 'tao'],
			['heart', 10, 'huogong', 'fire'],
			['heart', 11, 'tao'],
			['heart', 11, 'wuxie'],
			['heart', 11, 'phd_fdcx'],
			['heart', 12, 'tao'],
			['heart', 12, 'phd_shu'],
			['heart', 12, 'huogong', 'fire'],

			['diamond', 1, 'yiyi'],
			['diamond', 1, 'juedou'],
			['diamond', 1, 'zhuge'],
			['diamond', 2, 'shan'],
			['diamond', 2, 'shan'],
			['diamond', 2, 'sha', 'fire'],
			['diamond', 3, 'sha', 'fire'],
			['diamond', 3, 'yiyi'],
			['diamond', 3, 'zhujinqiyuan'],
			['diamond', 4, 'shan'],
			['diamond', 4, 'shan'],
			['diamond', 4, 'sha', 'fire'],
			['diamond', 5, 'sha', 'fire'],
			['diamond', 5, 'guanshi'],
			['diamond', 5, 'jingfanma'],
			['diamond', 6, 'shan'],
			['diamond', 6, 'shan'],
			['diamond', 6, 'zhujinqiyuan'],
			['diamond', 7, 'sha', 'fire'],
			['diamond', 7, 'sha', 'fire'],
			['diamond', 7, 'phd_syqj', 'thunder'],
			['diamond', 8, 'shan'],
			['diamond', 8, 'shan'],
			['diamond', 8, 'huogong', 'fire'],
			['diamond', 9, 'shan'],
			['diamond', 9, 'jiu'],
			['diamond', 9, 'sha', 'fire'],
			['diamond', 10, 'shan'],
			['diamond', 10, 'shan'],
			['diamond', 10, 'wuxie'],
			['diamond', 11, 'wuxie'],
			['diamond', 11, 'phd_fdcx'],
			['diamond', 11, 'hualiu'],
			['diamond', 12, 'shan'],
			['diamond', 12, 'shan'],
			['diamond', 12, 'fangtian'],

			['club', 1, 'juedou'],
			['club', 1, 'zhuge'],
			['club', 1, 'baiyin'],
			['club', 2, 'sha', 'ice'],
			['club', 2, 'sha', 'ice'],
			['club', 2, 'phd_mgk'],
			['club', 3, 'sha'],
			['club', 3, 'sha', 'ice'],
			['club', 3, 'wangmeizhike'],
			['club', 4, 'sha'],
			['club', 4, 'sha'],
			['club', 4, 'sha', 'ice'],
			['club', 5, 'sha'],
			['club', 5, 'sha'],
			['club', 5, 'dilu'],
			['club', 6, 'sha'],
			['club', 6, 'sha'],
			['club', 6, 'wangmeizhike'],
			['club', 7, 'sha'],
			['club', 7, 'sha'],
			['club', 7, 'phd_syqj', 'thunder'],
			['club', 8, 'bingliang'],
			['club', 8, 'zhujinqiyuan'],
			['club', 8, 'zhujinqiyuan'],
			['club', 9, 'jiu'],
			['club', 9, 'tiesuo'],
			['club', 9, 'wangmeizhike'],
			['club', 10, 'tiesuo'],
			['club', 10, 'wuxie'],
			['club', 10, 'zhujinqiyuan'],
			['club', 11, 'tiesuo'],
			['club', 11, 'zhungangshuo'],
			['club', 11, 'phd_wytx'],
			['club', 12, 'tiesuo'],
			['club', 12, 'wuxie'],
			['club', 12, 'phd_lsj'],

			['spade', 1, 'phd_shu'],
			['spade', 1, 'juedou'],
			['spade', 1, 'huxinjing'],
			['spade', 2, 'sha'],
			['spade', 2, 'sha', 'thunder'],
			['spade', 2, 'tengjia'],
			['spade', 3, 'sha'],
			['spade', 3, 'sha', 'thunder'],
			['spade', 3, 'zhujinqiyuan'],
			['spade', 4, 'sha', 'thunder'],
			['spade', 4, 'phd_wy'],
			['spade', 4, 'phd_wy'],
			['spade', 5, 'sha', 'thunder'],
			['spade', 5, 'qinglong'],
			['spade', 5, 'jueying'],
			['spade', 6, 'sha', 'thunder'],
			['spade', 6, 'lebu'],
			['spade', 6, 'qinggang'],
			['spade', 7, 'sha', 'thunder'],
			['spade', 7, 'nanman'],
			['spade', 7, 'qibaodao'],
			['spade', 8, 'bingliang'],
			['spade', 8, 'zhujinqiyuan'],
			['spade', 8, 'zhangba'],
			['spade', 9, 'jiu'],
			['spade', 9, 'sha', 'thunder'],
			['spade', 9, 'yitianjian'],
			['spade', 10, 'tiesuo'],
			['spade', 10, 'tiesuo'],
			['spade', 10, 'wuxie'],
			['spade', 11, 'nanman'],
			['spade', 11, 'phd_fdcx'],
			['spade', 11, 'phd_zyysz'],
			['spade', 12, 'wuxie'],
			['spade', 12, 'phd_tsc'],
			['spade', 12, 'taigongyinfu'],
		],
	};
	return phd;
});
