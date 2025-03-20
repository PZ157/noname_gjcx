import { lib, game, ui, get, ai, _status } from '../../../noname.js';

/**
 * 去除模板字符串的公共缩进
 * @param { TemplateStringsArray } strings 模板字符串
 * @param  { ...any } values 插值
 * @returns { string }
 */
game.dedent = function (strings, ...values) {
	let str = strings.reduce((acc, str, i) => acc + str + (values[i] || ''), '');
	let lines = str.split('\n');
	let minIndent = null;
	lines.forEach((line) => {
		if (line.trim() === '') return;
		let indent = line.length - line.trimStart().length;
		if (minIndent === null || indent < minIndent) {
			minIndent = indent;
		}
	});
	if (minIndent === null) return str;
	lines = lines.map((line) => line.slice(minIndent));
	return lines.join('\n').trim();
};

/**
 * 数组编辑器
 * @param { string } config 配置名
 * @param { string } [str] 显示内容
 * @param { string | false } [tip] 提示内容，false不提示
 */
game.arrayEditor = (config, str, tip) => {
	let container = ui.create.div('.popup-container.editor');
	let node = container;
	let map = lib.config[config] || [];
	if (typeof str !== 'string') {
		str = 'banList = [';
		for (let i = 0; i < map.length; i++) {
			if (i % 5 === 0) str += '\n	';
			str += '"' + map[i] + '", ';
		}
		str += '\n];';
	}
	if (typeof tip === 'string') str += '\n// ' + tip;
	else if (tip !== false) str += '\n// 请在[]内进行编辑，或借此复制/粘贴内容以备份/还原对应配置\n// 请务必使用英文标点符号！';
	node.code = str;
	ui.window.classList.add('shortcutpaused');
	ui.window.classList.add('systempaused');
	let saveInput = function () {
		let code;
		if (container.editor) code = container.editor.getValue();
		else if (container.textarea) code = container.textarea.value;
		try {
			var banList = null;
			eval(code);
			if (!Array.isArray(banList)) {
				throw '类型不符';
			}
		} catch (e) {
			if (e === '类型不符') alert(e);
			else alert('代码语法有错误，请仔细检查（' + e + '）');
			return;
		}
		game.saveConfig(config, banList);
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
};

/**
 * 复制文本内容
 * @param { string } txt 文本内容
 * @param { string } [tip] 复制成功提示内容
 */
game.copy = (txt, tip = '已成功复制到剪切板，请您及时粘贴保存') => {
	if (typeof txt !== 'string') return;
	let textarea = document.createElement('textarea');
	textarea.setAttribute('readonly', 'readonly');
	textarea.value = txt;
	document.body.appendChild(textarea);
	textarea.select();
	if (document.execCommand('copy')) {
		document.execCommand('copy');
		alert(tip);
	} else alert('复制失败');
	document.body.removeChild(textarea);
};

/**
 * 伪连接字符串，去掉换行和行前空串
 * @param { TemplateStringsArray } strings 模板字符串
 * @param { ...any } values 插值
 * @returns { string }
 */
ui.joint = function (strings, ...values) {
	let str = strings.reduce((acc, str, i) => acc + str + (values[i] || ''), '');
	let lines = str.split('\n').map((line) => line.trimStart());
	return lines.join('').trim();
};

export { lib, game, ui, get, ai, _status };
