import { lib, game, ui, get, ai, _status } from '../../../noname.js';

ui.joint = function (strings, ...values) {
	let str = strings.reduce((acc, str, i) => acc + str + (values[i] || ''), '');
	let lines = str.split('\n').map((line) => line.trimStart());
	return lines.join('').trim();
};

export let config = {
	tip1: {
		name: ui.joint`
			<hr>
			<br><font color=#FF3300>注意：本扩展</font>内，
			<br>◆以下<span style='font-family: xinwei'>魏体</span>选项均<font color=#70F3FF>重启后生效</font>！
				<span style='font-family: xingkai'>行楷</span>选项开局后须<font color=#70F3FF>重启生效</font>！
				其余选项<font color=#FF3300>即时生效</font>
			<br>◆<font color=#70F3FF>长按选项</font>有提示
		`,
		clear: true,
	},
	fixZq: {
		name: '坐骑修改',
		intro: '游戏开始时将牌堆中的坐骑都改为同时占用两个坐骑栏',
		init: false,
	},
	editBanned: {
		name: '编辑当前模式禁将',
		clear: true,
		onclick: function () {
			let container = ui.create.div('.popup-container.editor');
			let node = container;
			const banname = get.mode() + '_banned';
			let map = lib.config[banname] || [];
			let str = 'bannedList = [';
			for (let i = 0; i < map.length; i++) {
				if (i % 5 === 0) str += '\n	';
				str += '"' + map[i] + '", ';
			}
			str += '\n];\n// 请在[]内进行编辑，或借此复制/粘贴内容以备份/还原禁将配置\n// 请务必使用英文标点符号！';
			node.code = str;
			ui.window.classList.add('shortcutpaused');
			ui.window.classList.add('systempaused');
			let saveInput = function () {
				let code;
				if (container.editor) code = container.editor.getValue();
				else if (container.textarea) code = container.textarea.value;
				try {
					var bannedList = null;
					eval(code);
					if (!Array.isArray(bannedList)) {
						throw '类型不符';
					}
				} catch (e) {
					if (e === '类型不符') alert(e);
					else alert('代码语法有错误，请仔细检查（' + e + '）');
					return;
				}
				game.saveConfig(banname, bannedList);
				ui.window.classList.remove('shortcutpaused');
				ui.window.classList.remove('systempaused');
				container.delete();
				container.code = code;
				delete window.saveNonameInput;
			};
			window.saveNonameInput = saveInput;
			let editor = ui.create.editor(container, saveInput);
			if (node.aced) {
				ui.window.appendChild(node);
				node.editor.setValue(node.code, 1);
			} else if (lib.device === 'ios') {
				ui.window.appendChild(node);
				if (!node.textarea) {
					let textarea = document.createElement('textarea');
					editor.appendChild(textarea);
					node.textarea = textarea;
					lib.setScroll(textarea);
				}
				node.textarea.value = node.code;
			} else {
				if (!window.CodeMirror) {
					import('../../../game/codemirror.js').then(() => {
						lib.codeMirrorReady(node, editor);
					});
					lib.init.css(lib.assetURL + 'layout/default', 'codemirror');
				} else lib.codeMirrorReady(node, editor);
			}
		},
	},
	banQh: {
		name: "<span style='font-family: xinwei'>屏蔽武将切换功能</span>",
		intro: '开启后，会屏蔽选将时武将左下角的切换功能。只能屏蔽本体武将',
		init: false,
	},
	filterSameName: {
		name: '同名武将筛选',
		intro: '开启后，玩家可于出牌阶段选择场上的武将，系统会给出所有去前缀后与其同名的武将，玩家可在当前模式快速启用或禁用这些武将',
		init: false,
	},
	exportPz: {
		name: '复制本扩展配置',
		clear: true,
		onclick: function () {
			let txt = '{';
			for (let i in lib.config) {
				if (!i.indexOf('extension_官将重修_'))
					txt += '\r' + i.slice(15) + ' : ' + JSON.stringify(lib.config[i]).replace('\n', '\r') + ',';
			}
			txt += '\r}';
			let textarea = document.createElement('textarea');
			textarea.setAttribute('readonly', 'readonly');
			textarea.value = txt;
			document.body.appendChild(textarea);
			textarea.select();
			if (document.execCommand('copy')) {
				document.execCommand('copy');
				alert('『官将重修』配置已成功复制到剪切板，请您及时粘贴保存');
			} else alert('复制失败');
			document.body.removeChild(textarea);
		},
	},
	loadPz: {
		name: '载入本扩展配置',
		clear: true,
		onclick: function () {
			let container = ui.create.div('.popup-container.editor');
			let node = container;
			let str = '// 请完整粘贴你保存的『官将重修』配置到等号右端\r_status.gjcx_config = ';
			node.code = str;
			ui.window.classList.add('shortcutpaused');
			ui.window.classList.add('systempaused');
			let saveInput = function () {
				let code;
				if (container.editor) code = container.editor.getValue();
				else if (container.textarea) code = container.textarea.value;
				try {
					eval(code);
					if (Object.prototype.toString.call(_status.gjcx_config) !== '[object Object]') throw 'typeError';
				} catch (e) {
					if (e === 'typeError') alert('类型错误');
					else alert('代码语法有错误，请仔细检查（' + e + '）');
					return;
				}
				for (let i in _status.gjcx_config) {
					game.saveConfig('extension_官将重修_' + i.slice(1), _status.gjcx_config[i]);
				}
				ui.window.classList.remove('shortcutpaused');
				ui.window.classList.remove('systempaused');
				container.delete();
				container.code = code;
				delete window.saveNonameInput;
				alert('配置已成功载入！即将重启游戏');
				game.reload();
			};
			window.saveNonameInput = saveInput;
			let editor = ui.create.editor(container, saveInput);
			if (node.aced) {
				ui.window.appendChild(node);
				node.editor.setValue(node.code, 1);
			} else if (lib.device === 'ios') {
				ui.window.appendChild(node);
				if (!node.textarea) {
					let textarea = document.createElement('textarea');
					editor.appendChild(textarea);
					node.textarea = textarea;
					lib.setScroll(textarea);
				}
				node.textarea.value = node.code;
			} else {
				if (!window.CodeMirror) {
					import('../../../game/codemirror.js').then(() => {
						lib.codeMirrorReady(node, editor);
					});
					lib.init.css(lib.assetURL + 'layout/default', 'codemirror');
				} else lib.codeMirrorReady(node, editor);
			}
		},
	},
	editBook: {
		name: '编辑书禁用技能池',
		clear: true,
		onclick: function () {
			let container = ui.create.div('.popup-container.editor');
			let node = container;
			let map = lib.config.extension_官将重修_book || [];
			let str = 'gjcx_book = [';
			for (let i = 0; i < map.length; i++) {
				if (i % 5 === 0) str += '\n	';
				str += '"' + map[i] + '", ';
			}
			str += '\n];\n// 请在[]内进行编辑，或借此复制/粘贴内容以备份/还原配置\n// 请务必使用英文标点符号！';
			node.code = str;
			ui.window.classList.add('shortcutpaused');
			ui.window.classList.add('systempaused');
			let saveInput = function () {
				let code;
				if (container.editor) code = container.editor.getValue();
				else if (container.textarea) code = container.textarea.value;
				try {
					var gjcx_book = null;
					eval(code);
					if (!Array.isArray(gjcx_book)) {
						throw '类型不符';
					}
				} catch (e) {
					if (e === '类型不符') alert(e);
					else alert('代码语法有错误，请仔细检查（' + e + '）');
					return;
				}
				game.saveExtensionConfig('官将重修', 'book', gjcx_book);
				ui.window.classList.remove('shortcutpaused');
				ui.window.classList.remove('systempaused');
				container.delete();
				container.code = code;
				delete window.saveNonameInput;
			};
			window.saveNonameInput = saveInput;
			let editor = ui.create.editor(container, saveInput);
			if (node.aced) {
				ui.window.appendChild(node);
				node.editor.setValue(node.code, 1);
			} else if (lib.device === 'ios') {
				ui.window.appendChild(node);
				if (!node.textarea) {
					let textarea = document.createElement('textarea');
					editor.appendChild(textarea);
					node.textarea = textarea;
					lib.setScroll(textarea);
				}
				node.textarea.value = node.code;
			} else {
				if (!window.CodeMirror) {
					import('../../../game/codemirror.js').then(() => {
						lib.codeMirrorReady(node, editor);
					});
					lib.init.css(lib.assetURL + 'layout/default', 'codemirror');
				} else lib.codeMirrorReady(node, editor);
			}
		},
	},
	deleteBook: {
		name: '清空书禁用技能池',
		clear: true,
		onclick: function () {
			if (confirm('您确定要清空【书】的禁用技能池？')) {
				game.saveExtensionConfig('官将重修', 'book', []);
				alert('清除成功');
			}
		},
	},
	fixKp: {
		name: "<span style='font-family: xinwei'>卡牌修改</span>",
		intro: '修改【乐不思蜀】、【兵粮寸断】、【诸葛连弩】、【青釭剑】、【七宝刀】、【青龙偃月刀】、【丈八蛇矛】、【衠钢槊】、【方天画戟】效果',
		init: false,
	},
	tip2: {
		clear: true,
		name: ui.joint`
			<font color=#00FFFF>以下选项</font>
			<font color=#FF3300>须开启</font>
			<font color=#FFFF00>［卡牌修改］</font>
			<font color=#FF3300>方可生效！</font>
		`,
	},
	lbss: {
		name: "<span style='font-family: xinwei'>修改【乐不思蜀】</span>",
		intro: '修改使用目标为攻击范围内包含你的角色',
		init: true,
	},
	blcd: {
		name: "<span style='font-family: xinwei'>修改【兵粮寸断】</span>",
		intro: '修改使用目标为你攻击范围内的角色',
		init: true,
	},
	ln: {
		name: '连弩额外出杀次数',
		intro: '调整【诸葛连弩】的额外出杀次数',
		init: 'yx',
		item: {
			yx: '游戏人数',
			ch: '存活角色数',
			wx: '不限次数',
			nine: '九次',
			three: '三次',
			top: '牌堆顶牌点数',
		},
	},
	zb: {
		name: '丈八蛇矛选牌范围',
		intro: '调整修改后的【丈八蛇矛】选牌范围',
		init: 'hs',
		item: {
			hes: '牌',
			hs: '手牌',
		},
	},
	zgs: {
		name: '衠钢槊效果',
		intro: '调整修改后的【衠钢槊】的效果',
		init: 'pt',
		item: {
			pp: '都由我弃',
			pt: '我弃他后他弃我',
			tp: '原版',
		},
	},
	qgj: {
		name: "<span style='font-family: xinwei'>修改【青釭剑】</span>",
		intro: '以下针对【青釭剑】的效果修改须开启此选项才能生效',
		init: false,
	},
	qgjMb: {
		name: '青釭剑作用目标',
		intro: '调整修改后的【青釭剑】具体效果的目标。其中〔指定者〕即【杀】指定的目标，〔命中者〕即命中目标（包括传导伤害）',
		init: 'zd',
		item: {
			zd: '指定者',
			mz: '命中者',
		},
	},
	qgjQp: {
		name: '青釭剑弃牌效果',
		intro: '调整修改后的【青釭剑】弃牌效果和弃牌范围',
		init: 'e',
		item: {
			off: '不弃牌',
			e: '装备区牌',
			h: '手牌',
			he: '牌',
		},
	},
	sjQp: {
		name: '青釭剑随机弃牌',
		init: true,
	},
	qgjFl: {
		name: '青釭剑废栏效果',
		intro: '调整修改后的【青釭剑】废除装备栏效果和废除装备栏范围',
		init: 'off',
		item: {
			off: '不废栏',
			zk: '装备栏',
			k: '空栏',
			z: '有装备的装备栏',
		},
	},
	sjFl: {
		name: '青釭剑随机废栏',
		init: false,
	},
	ql: {
		name: "<span style='font-family: xinwei'>修改【青龙偃月刀】</span>",
		intro: '以下针对【青龙偃月刀】的效果修改须开启此选项才能生效',
		init: true,
	},
	qlFp: {
		name: '偃月刀封牌效果',
		intro: '调整修改后的【青龙偃月刀】封牌范围',
		init: 's',
		item: {
			s: '封花色',
			c: '封颜色',
			h: '封手牌',
			f: '不封牌',
		},
	},
	qlFj: {
		name: '偃月刀封技能效果',
		intro: '令目标非锁定技失效直到【杀】结算完毕后',
		init: false,
	},
	ft: {
		name: "<span style='font-family: xinwei'>修改【方天画戟】</span>",
		intro: '以下针对【方天画戟】的效果修改须开启此选项才能生效',
		init: false,
	},
	ftMb: {
		name: '方天额外目标数',
		intro: '调整修改后的【方天画戟】的额外目标数上限',
		init: 'lm',
		item: {
			dw: '敌我人数差',
			ry: '任意个目标',
			lm: '额外两名',
			sx: '一半体力上限',
		},
	},
	ftRes: {
		name: '发动执行效果',
		intro: '使用【方天画戟】额外指定目标后，需要执行的后续效果',
		init: 'sj',
		item: {
			sj: '随机弃一张牌',
			er: '弃两张牌',
			hp: '失去1点体力',
			sx: '减1点体力上限',
			off: '无效果',
		},
	},
	ftTj: {
		name: '执行效果前提',
		intro: '使用【方天画戟】额外指定目标后，一旦符合所选条件，于此【杀】结算完毕后执行上一选项效果',
		init: 'dx',
		item: {
			da: '造成伤害后',
			dx: '杀被抵消后',
			off: '直接执行',
		},
	},
	ftQx: {
		name: '是否取消其余目标',
		intro: '使用【方天画戟】额外指定目标后，一旦符合上一选项所选条件，取消其余目标',
		init: true,
		onclick: function (item) {
			if (item && lib.config.extension_官将重修_ftTj === 'off')
				alert('［执行效果前提］为〔直接执行〕，选择此项使用【方天画戟】会取消所有目标！');
			game.saveExtensionConfig('官将重修', 'ftRes', item);
		},
	},
	qbd: {
		name: "<span style='font-family: xinwei'>修改【七宝刀】</span>",
		intro: '以下针对【七宝刀】的效果修改须开启此选项才能生效',
		init: true,
	},
	qbdJs: {
		name: '七宝刀加伤效果',
		intro: '调整修改后的【七宝刀】的加伤值，其中X为双方体力值之差',
		init: 'px',
		item: {
			x: '伤害为X',
			px: '伤害+X',
			po: '伤害+1',
		},
	},
	qbdZd: {
		name: '七宝刀赠刀前提',
		intro: '调整修改后的【七宝刀】的送刀前提条件',
		init: 'must',
		item: {
			must: '强制赠刀',
			miss: '闪避赠刀',
			no: '不给',
		},
	},
	mgk: {
		name: '明光铠效果',
		intro: '调整本扩展【明光铠】的效果',
		init: 'd',
		item: {
			d: '防火属性伤',
			c: '防火属性牌',
		},
	},
	bd: {
		name: '<hr>',
		clear: true,
	},
};
