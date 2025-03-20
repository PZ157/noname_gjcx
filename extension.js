//game.import(name:"官将重修"
import { lib, game, ui, get, ai, _status } from '../../noname.js';
import { content } from './js/content.js';
import { precontent } from './js/precontent.js';
import { config } from './js/config.js';
import { help } from './js/help.js';

const extensionInfo = await lib.init.promises.json(`${lib.assetURL}extension/官将重修/info.json`);
let extensionPackage = {
	name: '官将重修',
	content: content,
	precontent: precontent,
	config: config,
	help: help,
	package: {},
	files: { character: [], card: [], skill: [], audio: [] },
};

Object.keys(extensionInfo)
	.filter((key) => key !== 'name')
	.forEach((key) => {
		extensionPackage.package[key] = extensionInfo[key];
	});

export let type = 'extension';
export default extensionPackage;
