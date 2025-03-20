import { lib, game, ui, get, ai, _status } from '../../../noname.js';

export function content(config, pack) {
	if (lib.rank) { //武将评级
		let dict = {
			a: [
				'gjcx_caojinyu', 'gjcx_caopi', 'gjcx_liangxi', 'gjcx_liuhui',
				'gjcx_tenggongzhu',
				'gjcx_wangxiang', 'gjcx_weiguan'
			],
			am: [
				'gjcx_caochun', 'gjcx_luzhi', 'gjcx_zhanggong',
				'gjcx_dengzhi',
				'gjcx_heqi', 'gjcx_kanze',
				'gjcx_caojie', 'gjcx_zhangling'
			],
			bp: [
				'gjcx_hanhaoshihuan', 'gjcx_simalang', 'gjcx_xiahouhui',
				'gjcx_jiangwan', 'gjcx_zhangxingcai',
				'gjcx_lvdai', 'gjcx_lvfan',
				'gjcx_tianfeng'
			],
			b: [
				'gjcx_litong', 'gjcx_lvqian', 'gjcx_ruanhui', 'gjcx_zhuling',
				'gjcx_mazhong',
				'gjcx_sunshao',
				'gjcx_caimaozhangyun', 'gjcx_caiyong'
			],
			bm: [
				'gjcx_chenlin', 'gjcx_duji',
				'gjcx_xiangchong', 'gjcx_zongyu',
				'gjcx_jianshuo', 'gjcx_liuyao'
			]
		};
		for (let i in dict) {
			lib.rank[i].addArray(dict[i]);
		}
	}
	if (lib.config.extensions && game.getFileList && game.readFile && game.writeFile) { //添加UI美化素材
		let list = ['fdcx', 'syqj', 'tsc', 'mgk', 'lsj'];
		if (lib.config.extensions.includes('十周年UI') && lib.config['extension_十周年UI_enable'])
			game.getFileList('extension/十周年UI/image/card', (folders, files) => {
				for (let i of list) {
					let img = 'phd_' + i + '.webp';
					if (!files.includes(img))
						game.readFile('extension/官将重修/copy/' + img, (data) => {
							game.writeFile(data, 'extension/十周年UI/image/card', img, () => {});
						}, (err) => {
							alert('复制『官将重修』彩色卡牌素材时出现问题：\n' + err);
						});
				}
			});
	}
	if (lib.card.huogong) lib.card.huogong.cardnature = 'fire';
	lib.skill._gjcx_start = {
		trigger: { global: 'gameStart' },
		filter(event, player) {
			return player === game.me;
		},
		silent: true,
		unique: true,
		locked: true,
		charlotte: true,
		content() {
			if (lib.config.extension_官将重修_fixZq)
				for (let i of lib.inpile) {
					let info = lib.card[i];
					if (!info || (!info.subtype && !info.subtypes)) continue;
					if (
						info.subtype === 'equip3' ||
						info.subtype === 'equip4' ||
						(info.subtypes && (info.subtypes.includes('equip3') || info.subtypes.includes('equip4')))
					) {
						if (!info.subtypes) info.subtypes = [];
						info.subtypes.add('equip3');
						info.subtypes.add('equip4');
					}
				}
		},
	};
	lib.skill._gjcx_filterSameName = { //同名武将筛选
		enable: 'phaseUse',
		filter(event, player) {
			return player === game.me && lib.config.extension_官将重修_filterSameName;
		},
		filterTarget: true,
		log: false,
		charlotte: true,
		superCharlotte: true,
		prompt: '在当前模式快速启用或禁用与所选武将同名的武将',
		async content(event, trigger, player) {
			const banname = get.mode() + '_banned';
			if (!lib.config[banname]) lib.config[banname] = [];
			for (let idx = 1; idx < 2; idx++) {
				if (typeof event.target['name' + idx] !== 'string') continue;
				let name = get.rawName(event.target['name' + idx]),
					enable = [],
					disable = [];
				for (let i in lib.character) {
					let temp = get.rawName(i);
					if (temp === name) {
						if (lib.config[banname].includes(i)) disable.push(i);
						else enable.push(i);
					}
				}
				if (enable.length) {
					const result = await player
						.chooseButton(['选择要禁用的武将，直接点“确定”则全部禁用', [enable, 'character']], [0, Infinity])
						.set('ai', (button) => 0)
						.forResult();
					if (result.bool) {
						let arr;
						if (result.links && result.links.length) arr = result.links;
						else arr = enable;
						lib.config[banname].addArray(arr);
					}
				}
				if (disable.length) {
					const result = await player
						.chooseButton(['选择要启用的武将，直接点“确定”则全部启用', [disable, 'character']], [0, Infinity])
						.set('ai', (button) => 0)
						.forResult();
					if (result.bool) {
						let arr;
						if (result.links && result.links.length) arr = result.links;
						else arr = disable;
						lib.config[banname].removeArray(arr);
					}
				}
			}
			game.saveConfig(banname, lib.config[banname]);
		},
	};
	lib.translate._gjcx_filterSameName = '<font color=#39FF14>同名武将筛选</font>';
}
