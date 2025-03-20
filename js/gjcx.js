game.import('character', (lib, game, ui, get, ai, _status) => {
	let gjcx = {
		name: 'gjcx',
		connect: true,
		character: {
			gjcx_caochun: {
				sex: 'male',
				group: 'wei',
				hp: 4,
				skills: ['gjcxs_tongqi', 'gjcxs_shangxue'],
				dieAudios: ['caochun'],
				img: 'extension/官将重修/image/character/gjcx_caochun.jpg',
			},
			gjcx_caojinyu: {
				sex: 'female',
				group: 'wei',
				hp: 3,
				names: '曹|null',
				skills: ['gjcxs_xianyan', 'gjcxs_shanshen'],
				dieAudios: ['caojinyu'],
				img: 'extension/官将重修/image/character/gjcx_caojinyu.jpg',
			},
			gjcx_caopi: {
				sex: 'male',
				group: 'wei',
				hp: 3,
				maxHp: 4,
				isZhugong: true,
				skills: ['gjcxs_jianbo', 'gjcxs_lundian', 'gjcxs_songwei'],
				dieAudios: ['re_caopi'],
				img: 'extension/官将重修/image/character/gjcx_caopi.jpg',
			},
			gjcx_chenlin: {
				sex: 'male',
				group: 'wei',
				hp: 3,
				skills: ['gjcxs_xiwen', 'gjcxs_sanyi'],
				dieAudios: ['chenlin'],
				img: 'extension/官将重修/image/character/gjcx_chenlin.jpg',
			},
			gjcx_duji: {
				sex: 'male',
				group: 'wei',
				hp: 3,
				skills: ['gjcxs_andong', 'gjcxs_kuanhui'],
				dieAudios: ['duji'],
				img: 'image/character/ns_duji.jpg',
			},
			gjcx_hanhaoshihuan: {
				sex: 'male',
				group: 'wei',
				hp: 4,
				names: '韩|浩-史|涣',
				skills: ['gjcxs_jinwei', 'gjcxs_yonglve'],
				dieAudios: ['re_hanhaoshihuan'],
				img: 'extension/官将重修/image/character/gjcx_hanhaoshihuan.jpg',
			},
			gjcx_liangxi: {
				sex: 'male',
				group: 'wei',
				hp: 4,
				skills: ['gjcxs_zhizui', 'gjcxs_daisi'],
				img: 'image/character/ddd_liangxi.jpg',
			},
			gjcx_litong: {
				sex: 'male',
				group: 'wei',
				hp: 4,
				skills: ['gjcxs_tuifeng'],
				dieAudios: ['litong'],
				img: 'image/character/litong.jpg',
			},
			gjcx_liuhui: {
				sex: 'male',
				group: 'wei',
				doubleGroup: ['wei', 'jin'],
				hp: 3,
				skills: ['gjcxs_geyuan', 'gjcxs_mouhe'],
				dieAudios: ['liuhui'],
				img: 'image/character/liuhui.jpg',
			},
			gjcx_luzhi: {
				sex: 'male',
				group: 'wei',
				hp: 3,
				skills: ['gjcxs_qingzhong', 'gjcxs_lizhong'],
				dieAudios: ['luzhi'],
				img: 'image/character/luzhi.jpg',
			},
			gjcx_lvqian: {
				sex: 'male',
				group: 'wei',
				hp: 4,
				skills: ['gjcxs_weilu', 'gjcxs_zengdao'],
				dieAudios: ['lvqian'],
				img: 'image/character/lvqian.jpg',
			},
			gjcx_ruanhui: {
				sex: 'female',
				group: 'wei',
				hp: 3,
				names: '阮|null',
				skills: ['gjcxs_mingcha', 'gjcxs_jingzhong'],
				dieAudios: ['ruanhui'],
				img: 'image/character/ruanhui.jpg',
			},
			gjcx_simalang: {
				sex: 'male',
				group: 'wei',
				hp: 3,
				names: '司马|朗',
				skills: ['gjcxs_paiyi', 'gjcxs_jizu'],
				dieAudios: ['ext:官将重修/audio/character:true'],
				img: 'image/character/simalang.jpg',
			},
			gjcx_xiahouhui: {
				sex: 'female',
				group: 'wei',
				groupBorder: 'jin',
				hp: 3,
				maxHp: 4,
				names: '夏侯|徽',
				skills: ['gjcxs_shidu', 'gjcxs_yuanrong'],
				dieAudios: ['jin_xiahouhui'],
				img: 'extension/官将重修/image/character/gjcx_xiahouhui.jpg',
			},
			gjcx_zhanggong: {
				sex: 'male',
				group: 'wei',
				hp: 3,
				skills: ['gjcxs_daishi', 'gjcxs_qianxin'],
				dieAudios: ['zhanggong'],
				img: 'image/character/re_zhanggong.jpg',
			},
			gjcx_zhuling: {
				sex: 'male',
				group: 'wei',
				hp: 4,
				skills: ['gjcxs_lizhan'],
				dieAudios: ['zhuling'],
				img: 'image/character/ol_zhuling.jpg',
			},

			gjcx_dengzhi: {
				sex: 'male',
				group: 'shu',
				hp: 3,
				skills: ['gjcxs_jianliang', 'gjcxs_sujian'],
				dieAudios: ['dengzhi'],
				img: 'image/character/re_dengzhi.jpg',
			},
			gjcx_jiangwan: {
				sex: 'male',
				group: 'shu',
				hp: 3,
				skills: ['gjcxs_zhenting', 'gjcxs_kezun'],
				dieAudios: ['sp_jiangwan'],
				img: 'image/character/sp_jiangwan.jpg',
			},
			gjcx_mazhong: {
				sex: 'male',
				group: 'shu',
				hp: 4,
				skills: ['gjcxs_weien'],
				dieAudios: ['re_mazhong'],
				img: 'image/character/re_mazhong.jpg',
			},
			gjcx_xiangchong: {
				sex: 'male',
				group: 'shu',
				hp: 4,
				skills: ['gjcxs_xiaojun'],
				dieAudios: ['xiangchong'],
				img: 'image/character/xiangchong.jpg',
			},
			gjcx_zhangxingcai: {
				sex: 'female',
				group: 'shu',
				hp: 3,
				names: '张|null',
				skills: ['gjcxs_mianxiu', 'gjcxs_jingsi'],
				dieAudios: ['zhangxingcai'],
				img: 'extension/官将重修/image/character/gjcx_zhangxingcai.png',
			},
			gjcx_zongyu: {
				sex: 'male',
				group: 'shu',
				hp: 3,
				skills: ['gjcxs_yuyan', 'gjcxs_chengshang'],
				dieAudios: ['zongyu'],
				img: 'image/character/zongyu.jpg',
			},

			gjcx_heqi: {
				sex: 'male',
				group: 'wu',
				hp: 3,
				skills: ['gjcxs_sheqi'],
				dieAudios: ['ext:官将重修/audio/character:true'],
				img: 'extension/官将重修/image/character/gjcx_heqi.jpg',
			},
			gjcx_kanze: {
				sex: 'male',
				group: 'wu',
				hp: 3,
				skills: ['gjcxs_shiru', 'gjcxs_lizhu'],
				dieAudios: ['kanze'],
				img: 'extension/官将重修/image/character/gjcx_kanze.jpg',
			},
			gjcx_lvdai: {
				sex: 'male',
				group: 'wu',
				hp: 4,
				skills: ['gjcxs_qingke', 'gjcxs_fenggong'],
				dieAudios: ['lvdai'],
				img: 'image/character/lvdai.jpg',
			},
			gjcx_lvfan: {
				sex: 'male',
				group: 'wu',
				hp: 3,
				skills: ['gjcxs_yanji', 'gjcxs_zuojun'],
				dieAudios: ['sp_lvfan'],
				img: 'image/character/sp_lvfan.jpg',
			},
			gjcx_sunshao: {
				sex: 'male',
				group: 'wu',
				hp: 3,
				skills: ['gjcxs_shoucheng', 'gjcxs_zuici'],
				dieAudios: ['sp_sunshao'],
				img: 'image/character/sp_sunshao.jpg',
			},
			gjcx_tenggongzhu: {
				sex: 'female',
				group: 'wu',
				hp: 3,
				names: '孙|null',
				skills: ['gjcxs_gongci', 'gjcxs_shangzhu'],
				dieAudios: ['tenggongzhu'],
				img: 'extension/官将重修/image/character/gjcx_tenggongzhu.jpg',
			},

			gjcx_caojie: {
				sex: 'female',
				group: 'qun',
				hp: 3,
				skills: ['gjcxs_shouxi', 'gjcxs_zhixi'],
				dieAudios: ['ext:官将重修/audio/character:true'],
				img: 'extension/官将重修/image/character/gjcx_caojie.jpg',
			},
			gjcx_hm_caojie: {
				sex: 'female',
				group: 'qun',
				hp: 3,
				isUnseen: true,
				skills: ['gjcxs_jishi', 'huimin'],
				dieAudios: ['ext:官将重修/audio/character:true'],
				img: 'extension/官将重修/image/character/gjcx_hm_caojie.jpg',
			},
			gjcx_caimaozhangyun: {
				sex: 'male',
				group: 'qun',
				hp: 4,
				names: '蔡|瑁-张|允',
				skills: ['gjcxs_biwen'],
				img: 'extension/官将重修/image/character/gjcx_caimaozhangyun.jpg',
			},
			gjcx_caiyong: {
				sex: 'male',
				group: 'qun',
				hp: 3,
				skills: ['gjcxs_pizhuan', 'gjcxs_tongbo'],
				dieAudios: ['ext:官将重修/audio/character:true'],
				img: 'extension/官将重修/image/character/gjcx_caiyong.jpg',
			},
			gjcx_jianshuo: {
				sex: 'male',
				group: 'qun',
				hp: 7,
				skills: ['gjcxs_wulve', 'gjcxs_quce'],
				dieAudios: ['tw_jianshuo'],
				img: 'image/character/ddd_jianshuo.jpg',
			},
			gjcx_liuyao: {
				sex: 'male',
				group: 'qun',
				hp: 4,
				skills: ['gjcxs_niju', 'gjcxs_zangpi'],
				dieAudios: ['liuyao'],
				img: 'extension/官将重修/image/character/gjcx_liuyao.jpg',
			},
			gjcx_tianfeng: {
				sex: 'male',
				group: 'qun',
				hp: 3,
				skills: ['gjcxs_sijian', 'gjcxs_suishi'],
				dieAudios: ['tianfeng'],
				img: 'extension/官将重修/image/character/gjcx_tianfeng.jpg',
			},
			gjcx_zhangling: {
				sex: 'male',
				group: 'qun',
				hp: 4,
				names: '张|陵',
				skills: ['gjcxs_fulu', 'gjcxs_daofa'],
				dieAudios: ['zhangling'],
				img: 'image/character/zhangling.jpg',
			},

			gjcx_wangxiang: {
				sex: 'male',
				group: 'jin',
				doubleGroup: ['jin', 'wei'],
				hp: 3,
				skills: ['gjcxs_bingli', 'gjcxs_qingda'],
				dieAudios: ['wangxiang'],
				img: 'image/character/wangxiang.jpg',
			},
			gjcx_weiguan: {
				sex: 'male',
				group: 'jin',
				doubleGroup: ['jin', 'wei'],
				hp: 3,
				skills: ['gjcxs_zhongyun', 'gjcxs_shenpin'],
				dieAudios: ['weiguan'],
				img: 'image/character/weiguan.jpg',
			},
			sbqq: {
				sex: 'male',
				group: 'jin',
				hp: 10,
				initFilters: ['noZhuHp'],
				skills: ['shit', 'ban', 'hucksterize', 'nonfeasance'],
				img: 'extension/官将重修/image/character/sbqq.jpg',
			},
		},
		characterSort: {
			gjcx: {
				gjcx_cz: [
					'gjcx_caochun',
					'gjcx_caojinyu',
					'gjcx_caopi',
					'gjcx_duji',
					'gjcx_hanhaoshihuan',
					'gjcx_liangxi',
					'gjcx_litong',
					'gjcx_liuhui',
					'gjcx_luzhi',
					'gjcx_ruanhui',
					'gjcx_simalang',
					'gjcx_xiahouhui',
					'gjcx_zhanggong',

					'gjcx_jiangwan',
					'gjcx_mazhong',
					'gjcx_xiangchong',

					'gjcx_heqi',
					'gjcx_kanze',
					'gjcx_sunshao',
					'gjcx_tenggongzhu',

					'gjcx_caojie',
					'gjcx_caimaozhangyun',
					'gjcx_caiyong',
					'gjcx_jianshuo',
					'gjcx_liuyao',
				],
				gjcx_xg: [
					'gjcx_chenlin',
					'gjcx_lvqian',
					'gjcx_zhuling',

					'gjcx_dengzhi',
					'gjcx_zhangxingcai',
					'gjcx_zongyu',

					'gjcx_lvdai',
					'gjcx_lvfan',

					'gjcx_tianfeng',
					'gjcx_zhangling',

					'gjcx_wangxiang',
					'gjcx_weiguan',
				],
			},
		},
		characterIntro: {
			gjcx_caochun: ui.joint`
				曹纯（170年－210年），字子和，沛国谯（今安徽亳州）人。
					东汉末年曹操麾下将领，大司马曹仁之弟，侍中曹炽之子。
					“虎豹骑”的统领者之一，死后谥曰威侯。
				<br><br>曹纯十四岁丧父，与一母同胞的兄长曹仁分家居住，后继承了其父的家业，颇为殷富，家中僮仆、宾客有上百人之多，
					但中平四年（187年），曹纯年未弱冠即进入朝廷担任黄门侍郎，年仅十八岁。
					中平六年（189年），董卓祸乱京师，曹操逃到陈留，二十岁的曹纯于是跟随曹操到襄邑募兵，从此开始了追随曹操征战的戎马生涯。
					建安年间，曹纯授议郎，迁司空参军，督帅虎豹骑参与平定北方之战，封为高陵亭侯。
					建安十三年（208年），他跟从曹操南征荆州，追杀豫州牧刘备，占领江陵。建安十五年（210年），曹纯去世，配享曹操庙庭。
				<br><br>曹纯好学问，雅重纲纪，礼贤下士，一生戎马，战功卓越。
			`,
			gjcx_caojinyu: ui.joint`
				金乡公主，沛国谯县（今安徽省亳州市）人。魏武帝曹操的女儿，母为杜夫人。
				<br><br>适婚的时候，嫁给曹操的养子何晏。
					高平陵之变，何晏作为大将军曹爽的党羽，遭到太傅司马懿处死。
					在何晏母亲尹夫人苦苦哀求下，何晏的儿子得以保全。
			`,
			gjcx_caopi: ui.joint`
				魏文帝曹丕（187年—226年6月29日），字子桓，沛国谯县（今安徽省亳州市）人。
					三国时期政治家、文学家，曹魏开国皇帝（220年12月11日—226年6月29日在位）。
					魏武帝曹操之子，母为武宣皇后卞夫人 。
				<br><br>文武双全，博览经传，通晓诸子百家学说，累迁五官中郎将。
					建安二十二年（217年），成为魏国世子。
					建安二十五年（220年），曹操去世后，继任丞相、魏王。
					同年代汉称帝，建立曹魏。
					在位期间，采纳吏部尚书陈群的意见，制定实施九品中正制，成为魏晋南北朝时期主要的选官制度，
					平定了青州、徐州一带的割据势力，最终完成了北方地区的统一。
					对外平定边患，击退鲜卑，和匈奴、氐、羌等外夷修好，恢复在西域的建置。
				<br><br>黄初七年五月丁巳日（226年6月29日），曹丕病逝于洛阳，时年四十岁，谥号文皇帝，庙号高祖，安葬于首阳陵。
					曹丕于诗、赋、文学皆有成就，擅长于五言诗，与其父曹操和弟曹植并称“建安三曹”，今存《魏文帝集》二卷。
					著有《论典》，当中的《论文》是中国文学史上第一部有系统的文学批评专论作品。
			`,
			gjcx_chenlin: ui.joint`
				陈琳（？-217年），字孔璋，广陵射阳（今属江苏）人。中国东汉末年文学家，“建安七子”之一。
				<br><br>陈琳初为古射阳（即盐渎）地方官，汉灵帝末年（189年），任大将军何进主簿。
					何进为诛宦官而召四方边将入京城洛阳，陈琳曾谏阻，但何进不纳，终致事败被杀。
					董卓肆恶洛阳，陈琳避难至冀州，入袁绍幕府。
					董卓乘乱率兵进洛阳，陈琳随袁绍伐董卓，并掌管书记。
					袁绍失败后，陈琳为曹军俘获。
					曹操爱其才而不咎，署为司空军师祭酒，使与阮瑀同管记室，后又徙为丞相门下督。
					陈琳于建安二十二年（217年）病逝，葬于古射阳湖畔盐渎境。
				<br><br>陈琳擅长写诗，代表作为《饮马长城窟行》，描写繁重的劳役给广大人民带来的苦难，
					全篇以对话形式写成，对乐府民歌的影响较浓厚，是最早的文人拟作乐府诗作品之一，
					不仅为后世诗评家所称道，而且对魏晋六朝的诗歌创作产生了深远影响，
					亦擅长撰写章表书檄，代表作有《为袁绍檄豫州文》等作品。
					其辞赋代表作还有《武军赋》和《神武赋》。
			`,
			gjcx_duji: ui.joint`
				杜畿（163年-224年），字伯侯，京兆杜陵（今陕西西安东南）人。中国汉魏官吏、将领。
				<br><br>杜畿幼年父母双亡，二十岁时在郡中任功曹，后任郑县（今陕西华县）县令。
					举孝廉，任汉中府丞，后弃官旅居荆州。
					献帝建安年间，荀彧将其推荐给曹操，任司空司直，升护羌校尉，持节领西郡太守。
					高干在并州反叛，杜畿改河东太守。
					魏国建立后，杜畿为尚书，但仍留在河东郡。
					曹丕即王位，赐其关内侯，召拜尚书。
					文帝即位，封杜畿丰乐亭侯，食邑百户，为司隶校尉。
					文帝伐吴时，杜畿为尚书仆射，留朝掌管。
					黄初五年（224年），杜畿奉命制造御楼船，在陶河试航，遇大风沉没而亡，享年六十二岁。
				<br><br>杜畿为政十六年，专务崇尚宽缓仁恕，百姓有争讼，杜畿就为他们陈明义理，让他们回去思考。
					结果乡亲们都相互自责而不愿去打官司。
					杜畿劝勉百姓勤于耕织，劝课畜牧，使百姓得以殷富。
					后又兴办学校，举荐孝悌之士，修整军队，讲练武备，使河东大安。
			`,
			gjcx_hanhaoshihuan: ui.joint`
				韩浩，字元嗣，河内郡（治所在今河南武陟西南）人，东汉末年曹操麾下将领。
					东汉末年天下大乱，韩浩聚徒众护县。
					河内太守王匡征召韩浩为从事，领兵在盟津拒抗董卓。
					董卓执其舅杜阳招引韩浩，韩浩不从，因而知名。
					袁术任命韩浩为骑都尉。
					后夏侯惇奇其才，使韩浩领兵跟从征伐。
					韩浩与史涣因忠勇而闻名，都是曹操的心腹将领，被委以执掌禁军的重责。
					时荒乱乏粮，韩浩议急农救荒，曹操遂兴屯田，升任韩浩为护军。
					随军攻克柳城，改任中护军，置长史、司马，封万岁亭侯。
					从破张鲁，议者欲留韩浩镇守汉中，都督诸军。
					曹操不舍韩浩，带他回到都城。
					韩浩死后，其养子韩荣继嗣爵位。
				<br><br>史涣（？-209年），字公刘，豫州沛国（今安徽淮北）人。
					东汉末年在曹操帐下将领。
					年少任侠，有雄气，以忠诚勇敢著称。
					曹操起兵后，以门客身份加入，行中军校尉，从军征伐，监督诸将。
					建安四年（199年），与曹仁、于禁、徐晃等人攻打眭固于犬城，功劳居最；
					建安五年（200年），官渡大战，与徐晃一起烧掉韩猛护送的粮车。
					后拜为中领军，进封列侯。
					建安十四年（209年），去世，其子史静继承其爵位。
			`,
			gjcx_liangxi: ui.joint`
				梁习（？-230年），字子虞，陈郡柘（今河南柘城北）人。三国时期曹魏将领。
				<br><br>东汉建安初年，梁习被曹操辟为章县长，后来历任乘氏、海西和下邳县令，都有治绩。
					后来迁任西曹属。建安十一年（206年），梁习以别部司马领并州刺史。
					当时并州刚刚经历完战乱，又有匈奴在州内横行，更加有豪族聚兵众自众，侵袭地方，
					梁习于是征集兵众，他们出征后又逐渐迁移他们的家室到邺城。
					对反抗不顺从的人都用兵讨伐消灭。
					另外还向朝廷举荐名士，如常林等。
					梁习的管理方法受到曹操嘉奖，赐爵关内侯。
					曹丕称帝后，重新将并州划出，恢复并州后，再次任命梁习为并州刺史，并晋封为申门亭侯。
					黄初六年（225年），梁习率军出并州征讨鲜卑轲比能，大破之。
					太和二年（228年），迁大司农。
					太和四年（230年），逝世。
					梁习在并州任职二十多年，政绩常为天下第一，传有“梁习治最”典故。
					就其治理并州，抑豪门，斩育延；置屯田，劝农桑，使得“单于恭顺，名王稽颡，部曲服事供职，同于编户”，
					州内宁肃，百姓安心，就足以称为“治最”；而其具体实施内迁四郡，空边实民，置新兴郡、筑九原城，更是在忻州历史上留下了浓重的一笔。
			`,
			gjcx_litong: ui.joint`
				李通（168年－209年），字文达，小字万亿。江夏平春（今河南信阳）人，东汉末年人物，汝南太守。
				<br><br>早年以游侠闻名于江汝，曾谋杀周直，独霸朗陵县。
					后来，率众投奔曹操，补充兵源有功，拜为阳安都尉，其间不因私而忘公，不因其妻子的求请而过问扏法者。
					官渡之战不但不被利诱，在当时许都以南民心不稳，唯李通的阳安犹存。
				<br><br>建安十四年，救援曹仁，且战且前，病死于途中。谥曰刚侯。
			`,
			gjcx_liuhui: ui.joint`
				刘徽（约225年—约295年），汉族，山东滨州邹平市人，魏晋期间伟大的数学家，中国古典数学理论的奠基人之一。
					在中国数学史上作出了极大的贡献，他的杰作《九章算术注》和《海岛算经》，是中国最宝贵的数学遗产。
				<br><br>刘徽思想敏捷，方法灵活，既提倡推理又主张直观。
					他是中国最早明确主张用逻辑推理的方式来论证数学命题的人。
					刘徽的一生是为数学刻苦探求的一生。
					他虽然地位低下，但人格高尚。
					他不是沽名钓誉的庸人，而是学而不厌的伟人，他给中华民族留下了宝贵的财富。
					2021年5月，国际天文学联合会（IAU）批准中国在嫦娥五号降落地点附近月球地貌的命名，刘徽（liuhui）为八个地貌地名之一。
			`,
			gjcx_luzhi: ui.joint`
				鲁芝（190年—273年），字世英。扶风郡郿县（今陕西眉县）人。魏晋时期名臣。官至光禄大夫，位特进，封阴平侯。
				泰始九年（273年）卒，时年八十四。谥号“贞”。
			`,
			gjcx_lvqian: ui.joint`
				吕虔（生卒年不详），字子恪。任城（今山东济宁东南）人。汉末三国曹魏时期将领。
				<br><br>吕虔有勇有谋，曹操在兖州时，任命他为从事，率领家丁驻守湖陆。
					后升任泰山太守，与夏侯渊共同镇压济南等地的黄巾军。
					被推举为秀才，加任骑都尉，仍管辖泰山郡。
				<br><br>曹丕继任魏王后，加吕虔为裨将军，封益寿亭侯。
					再升任徐州刺史，加任威虏将军。
					任用王祥为别驾，将民政事务都委托于他，为世人所称赞。
					曹叡继位后，改封万年亭侯。
					吕虔死后，其子吕翻世袭万年亭侯。
			`,
			gjcx_ruanhui: ui.joint`
				阮氏女，是指三国时期曹魏名士许允之妻阮氏，陈留尉氏人。
				阮氏女是中国古代四大丑女之一，貌丑而见识非凡。
				她出身士族之家，是卫尉阮共（字伯彦）之女、阮侃（字德如）之妹。
				嫁与许允后生有二子：许奇，官至司隶校尉；许猛，官至幽州刺史。
			`,
			gjcx_simalang: ui.joint`
				司马朗（171年～217年），字伯达，河内郡温县人，东汉末年政治家，“司马八达”之一。
				<br><br>司马朗年少时就表现得很有见识，汉末动乱之际，受父命带领家属逃离董卓，又迁往黎阳，成功躲避战乱。
					曹操任司空后，司马朗被辟为司空属官，又历任成皋令、堂阳长、元城令、丞相主簿、兖州刺史等职，所在皆有政绩，深受百姓爱戴。
					后司马朗与夏侯惇、臧霸等征讨吴国，到达居巢。
					军队中流行瘟疫，司马朗亲自去视察，派送医药，因此染病，最终去世，时年四十七岁。
					他去世之后，兖州的人民都相当怀念他。
			`,
			gjcx_xiahouhui: ui.joint`
				夏侯徽（211年－234年），字媛容，沛国谯县（今安徽亳州）人，司马师第一任妻子。
					征南大将军夏侯尚之女，母德阳乡主为大司马曹真之妹。
					夏侯徽与司马师共生育五个女儿。
				<br><br>夏侯徽很有见识器度，每当司马师有什么想法时，都由她从旁策划协助。
					当时司马师之父司马懿位居上将重位，而他的儿子们都有雄才大略。
					夏侯徽深知司马师绝非曹魏忠臣，而司马师对出身曹魏家族的夏侯徽也非常顾忌。
					青龙二年（234年），正逢“大疫”、“大病”之年，据《晋书》记载，夏侯徽被司马师毒杀，时年二十四岁，死后葬于峻平陵。
				<br><br>西晋建国后，在司马师第三任妻子景献皇后羊徽瑜的屡次进言下，晋武帝司马炎追谥夏侯徽为景怀皇后。
			`,
			gjcx_zhanggong: ui.joint`
				张恭（生卒年不详），敦煌渊泉人。三国时期魏国重臣，与子张就一同闻名于凉州。官至西域戊己校尉、关内侯，赠执金吾。
				<br><br>初为敦煌郡功曹。
					东汉末河西大乱，太守马艾卒官，他被众人推为代理长史，遂派儿子张就请曹操委任太守，直至新太守到任。
					魏文帝时拜西域戊己校尉。
					魏明帝时去世。
			`,
			gjcx_zhuling: ui.joint`
				朱灵（生卒年不详），字文博，冀州清河国鄃县人，三国时期曹魏名将。
				<br><br>初为袁绍部将，后归顺曹操，随其征伐四方，屡建战功。官至后将军，封为高唐侯，谥号威侯。
			`,

			gjcx_dengzhi: ui.joint`
				邓芝（？－251年），字伯苗。义阳郡新野县（今河南省新野县）人。东汉名将邓禹之后，三国时期蜀汉重臣，将领。
				<br><br>邓芝早年曾被预言能位至大将，后被刘备任为郫令，升迁为广汉太守。
					因任官公廉且有治绩，被征入朝为尚书。
					刘备逝世后，奉命出使吴国，成功修复两国关系，并深为吴大帝孙权所赏识。
					建兴六年（228年），丞相诸葛亮策划北伐，命邓芝与大将赵云佯攻郿城，以吸引魏国曹真军主力。
					建兴十二年（234年），迁前军师、前将军，领兖州刺史，封阳武亭侯，不久督领江州。
					延熙六年（243年），迁车骑将军，后授假节。
					又率军平定涪陵叛乱。
					延熙十四年（251年），邓芝病逝。
				<br><br>邓芝性格正直、简单，不刻意修饰情绪。
					他为将二十多年，赏罚明断，体恤士卒。
					身上的衣食取自官府，从未经营过私产，妻儿甚至还有忍饥挨饿之时，死时家中也没有多余财物。
			`,
			gjcx_jiangwan: ui.joint`
				蒋琬（？-246年），字公琰，零陵湘乡（今湖南湘乡）人。中国三国时期蜀汉大臣。
				<br><br>蒋琬初以州书佐随刘备入蜀，被任命为广都长，为政以安民为本，刘备以为蒋琬不勤政事，怒欲处置，因诸葛亮劝解得免。
					后任什邡令、丞相府东曹掾、长史。
					诸葛亮密表后主，以蒋琬作为自己的接班人。
					建兴十二年（234年），诸葛亮病逝，蒋琬继其执政，拜尚书令，又加行都护、假节，领益州刺史，再迁大将军，录尚书事，封安阳亭侯。
					延熙元年（238年），受命开府。
					次年加大司马，总揽蜀汉军政，曾制定由水路进攻曹魏的计划，但未被采纳。
					延熙七年（244年），因病辞政事，将益州刺史之职让与费祎。
					延熙九年（246年），蒋琬因病而卒。
				<br><br>蒋琬执政期间，蜀国政通人和，经济复兴，修正诸葛亮的北伐战略，改变“无岁不征”的局面，使得“边境无虞，邦家和一”，
					特别是其“以安民为本”的执政理念，永远垂范后世，是一位不可多得的“社稷之器”。
					蒋琬是蜀汉政权后期的中流砥柱，为蜀汉政权的发展作出了巨大贡献。
			`,
			gjcx_mazhong: ui.joint`
				马忠（?－249年），字德信，本名狐笃，巴西阆中（今四川阆中）人，三国时期蜀汉将领，官至镇南大将军，封彭乡亭侯。
				<br><br>马忠小时候寄养在外祖父家，后来才恢复马姓，改名为忠。
					初仕巴西郡为郡吏，东汉建安（196年～219年）末举孝廉，任汉昌县长。
					初与刘备交谈，其被称贤才。
					建兴元年（223年），任丞相府门下督。
					建兴三年（225年），随诸葛亮南征，领东路军入牂牁，后为牂牁太守。
					南中叛乱，马忠领一军讨平牂牁郡的叛夷。
					平定南中后，马忠抚恤郡民，很有威惠。
					建兴十一年（233年）任庲降都督，剿灭夷首刘胄叛乱，平定南土。
					蜀汉延熙五年（242年）还朝，加拜镇南大将军，后进封彭乡侯，延熙十二年（249年）去世。
				<br><br>马忠为政，处事能断，恩威并立，为人宽济有度量，所以夷人畏而爱之。
					他贯彻诸葛亮治理南中的策略，缓和各民族间的矛盾，对南中形势的稳定起到很大作用。
					卒后，南人为之立祠，水旱祷之。
			`,
			gjcx_xiangchong: ui.joint`
				向宠（？-240年），字巨违，襄阳宜城（今湖北宜城南）人，蜀汉官员向朗的侄儿，三国时蜀汉将领。
				<br><br>向宠初为蜀汉牙门将。章武二年（222年），刘备伐吴，蜀军溃败，唯有向宠部队保存完整。
					建兴元年（223年），向宠被封为都亭侯。
					后为中部督，典宿卫兵。
					建兴五年（227年），向宠迁中领军。
				<br><br>延熙三年（240年），向宠在汉嘉（治今四川省名山北）镇压蛮夷族时被杀。
			`,
			gjcx_zhangxingcai: ui.joint`
				张氏（？ - 237年），涿郡涿县（今河北省涿州市）人，三国时期蜀汉名将张飞的长女，蜀汉后主刘禅的第一任皇后。
				章武元年（221年），作为太子刘禅的妃子入宫，建兴元年（223年），立为皇后。
				建兴十五年（237年）逝世，其妹成为刘禅之皇后。
				她通常被称为敬哀皇后，其妹则被称为张皇后。
			`,
			gjcx_zongyu: ui.joint`
				宗预（？-264年），字德艳，南阳安众（今河南镇平县东南）人。三国时期蜀汉大臣，将领。
				<br><br>宗预初随张飞入蜀，任主簿，迁参军右中郎将。
					受命出使吴国，深得孙权爱待，对蜀吴联盟的巩固和发展做出贡献。
					还蜀后迁后将军，督永安，就拜征西大将军，赐爵关内侯。
				<br><br>景耀元年（258年），以疾征还成都。
					后为镇军大将军，领兖州刺史。
					时都护诸葛瞻初统朝事，廖化欲与宗预共诣瞻许。
					宗预以“吾等年逾七十，所窃已过，但少一死耳，何求于年少辈而屑屑造门邪？”遂不往。
					咸熙元年春（264年），宗预内徙洛阳，道病卒。
			`,

			gjcx_heqi: ui.joint`
				贺齐（？－227年），字公苗，会稽山阴（今浙江绍兴）人。三国时期孙吴名将。
				<br><br>年轻时任会稽郡吏。
					汉献帝建安元年（196年），孙策巡视会稽，经考察推举贺齐为孝廉，任永宁长，后任南部都尉、平东校尉。
					建安十三年（208年），贺齐任威武中郎将，受孙权派遣，讨伐丹阳郡黟、歙等地。
					大军溯渐水而上，丰浦、东阳、武强、叶乡等四乡先降。
					贺齐上表孙权，分歙县（今安徽徽州）东之叶乡置始新县，是为淳安置县之始。
					后克黟、歙全境，遂析黎阳、休阳和新定三县，并黟、歙、始新共六县，另置新都郡，以贺齐为太守，郡治设始新县新定里（今淳安县威坪镇）。
					次年，贺齐另筑郡城（即后人所称之“贺城”、“淳城”），将郡治由新定里迁入贺城。
					建安十六年（211年），贺齐离新都郡前往吴郡，带兵讨伐余杭民郎稚，析余杭置临水县。
					建安十八年（213年），贺齐讨平豫章叛乱，调升为奋武将军。
				<br><br>建安二十一年（216年），升为安东将军，封山阴侯。
					吴黄武初年（222年），又升迁为后将军，任徐州牧。
					孙权继位后，曾命贺齐出镇江上，贺齐军容威壮，严阵以待，与魏国曹休军划江而守。
					黄武六年（227年）去世。
			`,
			gjcx_kanze: ui.joint`
				阚泽（？－243年），字德润，会稽山阴人，三国时期吴国学者、大臣。
				<br><br>阚泽少年时家贫，只得向别人抄书，于是博学多闻。
					汉末被举为孝廉，出任钱塘长，升郴县令。
					孙权为骠骑将军时，征召他为西曹掾。
					后官至中书令、太子太傅，封都乡侯。
					虞翻称其为“盖蜀之扬雄”、“今之仲舒”。
					赤乌六年（243年）去世，孙权为之痛惜，数日不食。
					阚泽曾撰有《乾象历注》一书，今已佚。
					另有《九章》，亦不存。
					据传阚泽对圆周率也很有研究，南北朝数学家祖冲之对圆周率的精确计算就是借鉴了他的成果。
			`,
			gjcx_lvdai: ui.joint`
				吕岱（161年－256年10月21日），字定公，广陵海陵（今江苏省如皋市）人。三国时期吴国重臣、将领。
				<br><br>吕岱本为郡县吏，因避乱而南渡。
					受孙权赏识，遂仕于孙氏政权。
					建安十六年（211年），以督军校尉之职，与蒋钦等领兵平定吕合、秦狼等叛乱，获授昭信中郎将。
					建安二十年（215年），随孙权进取长沙三郡，击降安成等四县，成功平定三郡。
					后讨平吴砀、袁龙叛乱，升为庐陵太守。
				<br><br>延康元年（220年），代步骘出任交州刺史，平定桂阳、浈阳间的王金叛乱，升任安南将军、假节，封爵都乡侯。
					黄武五年（226年），平定士徽叛乱，控制岭南，晋封为番禺侯。
					任交州刺史时，吕岱多次派官员“南宣国化”，出使“西南大海洲上”（南洋群岛）以及今东南亚一带众多国家，
					使扶南、林邑、堂明等国纷纷遣使至吴朝贡。
					赤乌二年（239年），接替潘濬处理荆州文书公务，与陆逊同在武昌，督管蒲圻。
					陆逊去世后，武昌分为二部，吕岱督领右部，升任大将军。
					废帝孙亮登基后，吕岱升任大司马。
				<br><br>吕岱一生戮力奉公，为孙吴开疆拓土，功勋赫赫。太平元年九月己丑日（256年10月21日），吕岱去世，年九十六。
			`,
			gjcx_lvfan: ui.joint`
				吕范（？－228年），字子衡。汝南郡细阳县（今安徽省太和县）人。汉末至三国时期吴国重臣。
				<br><br>吕范年轻时为汝南县吏，后避难寿春，结识孙策，此后便为东吴效力。
					先后随孙策攻破庐江郡，攻克陈瑀，平定七县；随周瑜征战赤壁，因功拜裨将军，领彭泽郡太守。
					吕范对稳固孙氏在江东的统治做出了杰出的贡献，孙权将其比之于东汉开国元勋吴汉。
					吴国建立后，吕范累官至前将军、假节、扬州牧，封南昌侯。
				<br><br>黄武七年（228年），吕范被拜为大司马，未得授官，便已病逝。
					孙权悲痛不已，遣使赠其大司马印绶。
					孙权还都建业后，以太牢礼祭祀吕范。
			`,
			gjcx_sunshao: ui.joint`
				孙邵（163年－225年），一作孙劭，字长绪，青州北海国人（今山东潍坊市昌乐县西）。
				原为北海相孔融的功曹，被孔融称赞为可任朝廷要职的人才，后随刘繇到达江东，继而辅佐孙权。
				孙权称吴王后，孙邵成为吴国首任丞相，数年后病逝。
			`,
			gjcx_tenggongzhu: ui.joint`
				滕公主，名讳不详，三国时期东吴公主，嫁滕胤。《三国志》并未明确记载她是何人之女，《三国志集解》则认为她的父亲是吴大帝孙权。
			`,

			caojie: ui.joint`
				曹节（？~260年7月2日），女，沛国谯县（今安徽省亳州市）人。汉献帝刘协第二任皇后，魏武帝曹操的女儿。
				<br><br>建安十八年（213年），选入后宫。
					十九年，拜贵人。
					建安二十年，伏皇后被杀后，成为皇后。
					哥哥曹丕图谋篡位时，派人索求玺绶，受到了曹节的怒斥。
					曹魏建立后，降为山阳公夫人。
				<br><br>景元元年六月七日己未（260年7月2日）病逝，随汉献帝合葬于禅陵（今河南修武），谥号为穆，史称献穆皇后。
			`,
			gjcx_caiyong: ui.joint`
				蔡邕（133年－192年），字伯喈。陈留郡圉县（一说为河南尉氏县、也有说法为河南杞县）人。东汉时期名臣，文学家、书法家，才女蔡文姬之父。
				<br><br>蔡邕早年拒朝廷征召之命，后被征辟为司徒掾属，任河平长、郎中、议郎等职，曾参与续写《东观汉记》及刻印熹平石经。
					后因罪被流放朔方，几经周折，避难江南十二年。
					董卓掌权时，强召蔡邕为祭酒。
					三日之内，历任侍御史、治书侍御史、尚书、侍中、左中郎将等职，封高阳乡侯，世称“蔡中郎”。
					董卓被诛杀后，蔡邕因在王允座上感叹而被下狱，不久便死于狱中，年六十。
				<br><br>蔡邕精通音律，才华横溢，师事著名学者胡广。
					除通经史、善辞赋之外，又精于书法，擅篆、隶书，尤以隶书造诣最深，有“蔡邕书骨气洞达，爽爽有神力”的评价。
					所创“飞白”书体，对后世影响甚大，被《书断》评为“妙有绝伦，动合神功”。
					他生平藏书多至万余卷，晚年仍存四千卷。
					有文集二十卷，早佚。
					明人张溥辑有《蔡中郎集》，《全后汉文》对其著作也多有收录。
			`,
			gjcx_caimaozhangyun: ui.joint`
				蔡瑁（生卒年不详），字德珪，襄阳郡襄阳县蔡洲人。
					东汉末年荆州名族，蔡讽之子，姑母（蔡讽之姐）是太尉张温之妻，长姐与二姐先后嫁给黄承彦与刘表成为继室。
					初平元年（190年），刘表代王睿为荆州刺史，当时江南宗贼兴盛，蔡瑁协助刘表平定荆州，
					效力刘表期间，历任江夏、南郡、章陵等诸郡太守，刘表获得汉廷封赐镇南将军时担任其军师。
					刘表病亡后，拥护刘琮继位。
					曹操挥军入荆州时，蔡瑁、蒯越等随刘琮降伏曹操，尔后仕入曹操麾下，历任从事中郎、司马、长水校尉，封爵为汉阳亭侯。
				<br><br>张允（生卒年不详），东汉末年人物，是荆州牧刘表的外甥。
					刘表晚年时，张允与蔡瑁等人成为刘表少子刘琮的支党，不断诋毁刘表的长子刘琦，致使刘琮得以继位。
			`,
			gjcx_jianshuo: ui.joint`
				蹇硕（？—189年5月27日），东汉末年宦官。
				中平五年（188年），蹇硕为上军校尉，汉灵帝以蹇硕壮健而有武略，对其特别信任，
				并以其为西园军元帅，领导袁绍、曹操等西园八校尉，以监督司隶校尉以下诸官。
				蹇硕虽然握有兵权，但对何进非常畏忌，曾和宦官们一起劝说灵帝派遣何进西击边章、韩遂。
				中平六年（189年），灵帝在病重时将刘协托给蹇硕。
				灵帝去世后，蹇硕想先杀何进再立刘协为天子，但因手下司马潘隐与何进有旧对何进使眼色而失败。
				刘辩继承帝位后，蹇硕与中常侍赵忠、宋典等写信欲合谋除去何进，中常侍郭胜与何进为同郡，
				且何进及何皇后发迹亦有其功劳，于是亲信何氏，怂恿赵忠等人不听蹇硕之计，且将蹇硕的书信告知何进。
				何进便派黄门令逮捕蹇硕，将他下狱诛杀，其部下士兵亦被何进所领。
			`,
			gjcx_liuyao: ui.joint`
				刘繇（156年～197年），字正礼，东莱牟平（今山东省烟台市牟平区）人。东汉末年宗室大臣，汉末群雄之一，齐悼惠王刘肥之后，太尉刘宠之侄。
				<br><br>刘繇最初被推举为孝廉，授郎中。
					任下邑县长时，因拒郡守请托而弃官。
					后被征辟为司空掾属，除授侍御史，因战乱而不到任，避居淮浦。
					兴平元年（194年），被任命为扬州刺史。
					他先后与袁术、孙策交战，一度被朝廷加授为扬州牧、振武将军，但最终还是败归丹徒。
					此后，刘繇又击破反叛的笮融，旋即病逝，时年四十二岁。
			`,
			gjcx_tianfeng: ui.joint`
				田丰（？－200年），字元皓，钜鹿（今河北巨鹿一带）人，一说渤海人。
				东汉末年袁绍部下谋臣，官至冀州别驾。
				其为人刚直，曾多次向袁绍进言而不被采纳，曹操部下谋臣荀彧曾评价他“刚而犯上”。
				后因谏阻袁绍征伐曹操而被袁绍下令监禁。
				官渡之战后，田丰被袁绍杀害。
			`,
			gjcx_zhangling: ui.joint`
				张道陵（34—156），字辅汉，原名张陵，东汉丰县（今江苏徐州丰县）人。道教创始人。因其最初创立的五斗米道又称天师道，故又称张天师。
			`,

			gjcx_wangxiang: ui.joint`
				王祥（184年，一作180年－268年4月30日），字休徵。琅邪临沂（今山东省临沂市西孝友村）人。三国曹魏至西晋时大臣。
				<br><br>王祥于东汉末年扶母携弟避居庐江隐居二十年，在曹魏，先后任徐州别驾、温县令、大司农等职。
					魏高贵乡公时，因参与定策功，获封关内侯，拜光禄勋，转司隶校尉。
					从讨毌丘俭，迁太常，曾被高贵乡公委任为三老。
					后自司空升为太尉，封睢陵侯。
					西晋建立后，拜太保，进爵为睢陵公，与安平王司马孚等并称“八公”。
					后因老病辞位，仍备受晋武帝礼遇。
					泰始四年（268年），王祥去世，享年八十五（一作八十九）岁。
					谥号“元”。
				<br><br>王祥早年丧生母薛氏，继母朱氏不慈，仍侍之恭谨。
					父母有疾，衣不解带，汤药必先亲尝。
					朱氏常欲得生鱼，时天寒冰冻，王祥于是“卧冰求鲤”。
					自此成为传统文化“二十四孝”的主人翁之一。
					有《训子孙遗令》一文传世。
			`,
			gjcx_weiguan: ui.joint`
				卫瓘（220年－291年），字伯玉。西晋河东安邑县（今山西夏县西北）人，曹魏尚书卫觊之子。三国曹魏后期至西晋初年重臣、书法家。
				<br><br>卫瓘出身书法世家，10岁丧父。
					年轻时仕官于曹魏，历任尚书郎、散骑常侍、侍中、廷尉等职。
					后以镇西军司、监军身份参与伐蜀战争。
					蜀汉亡后，与钟会一道逮捕邓艾；钟会谋反时，又成功平息叛乱，命田续杀邓艾父子。
					回师后转任督徐州诸军事、镇东将军，封菑阳侯。
					西晋建立后，历任青州、幽州刺史、征东大将军等职，成功化解北方边境威胁，因功进爵菑阳公。
					后入朝为尚书令、侍中，又升任司空，领太子少傅。
					后逊位，拜太保。
					晋惠帝即位后，与贾皇后对立，终在政变中满门遇害，享年七十二岁。
				<br><br>卫瓘学问深博，明习文艺，擅隶书和章草，与索靖齐名，时人号为“一台二妙”。
					他俩的书法皆受汉末 “草圣” 张芝的影响，被认为: 瓘得张芝筋，靖得张芝肉。
					北宋《淳化阁帖》载卫瓘的《顿首州民帖》，尚存章草格局，基本去掉波势，已向今草过渡，是他的代表作。
					唐朝张怀瓘《书断》中评其章草为“神品”。
			`,

			sbqq: ui.joint`
				傻逼QQ，无可救药
				<br>个人Q群：392157644。
					由于QQ智障审核机制，如『官将重修』等部分文件需加密才能分享，密码一律设为“sbqq”；
					部分文件甚至加密也无法分享，请到123云盘下载：
					<a href="javascript:(() => {
						let textarea = document.createElement('textarea');
						textarea.setAttribute('readonly', 'readonly');
						textarea.value = 'https://www.123pan.com/s/hjYtVv-vgDyh';
						document.body.appendChild(textarea);
						textarea.select();
						if (document.execCommand('copy')) {
							document.execCommand('copy');
							alert('123云盘链接已成功复制到剪切板，提取码：sbqq');
						} else alert('复制失败，请稍后重试');
						document.body.removeChild(textarea);
					})();" style="color: #00FFB0; text-decoration: underline;">
						https://www.123pan.com/s/hjYtVv-vgDyh(点我复制)
					</a>
			`,
		},
		characterTitle: {
			gjcx_caojinyu: '#b代码提供：蓝色火鸡',
			gjcx_caopi: '#b技能设计：蓝色火鸡',
			gjcx_jiangwan: '#r设计参与：蓝色火鸡',
			gjcx_zhangling: '#p设计参与：蓝色火鸡',
		},
		characterFilter: {
			sbqq(mode) {
				return mode === 'identity' && _status.mode === 'normal';
			},
		},
		characterReplace: {},
		perfectPair: {},
		dynamicTranslate: {
			gjcxs_shidu: (player) => {
				if (!player)
					return ui.joint`
						其他角色于其出牌阶段弃置手牌后，你可以获得其中至多X张牌，然后令其收回其余牌。
						若如此做，此技能失效且你不能使用或打出手牌直至当前回合结束；若你未以此法获得牌，你加1点体力上限。
						（X为5-你以此法获得过的牌数）
					`;
				if (player.storage.gjcxs_shidu)
					return (
						'其他角色于其出牌阶段弃置手牌后，你可以获得其中至多' +
						get.cnNumber(player.storage.gjcxs_shidu) +
						'张牌，然后令其收回其余牌。若如此做，此技能失效且你不能使用或打出手牌直至当前回合结束；若你未以此法获得牌，你加1点体力上限。'
					);
				return ui.joint`
					其他角色于其出牌阶段弃置手牌后，你可以令其收回这些牌。
					若如此做，你加1点体力上限、此技能失效且你不能使用或打出手牌直至当前回合结束。
				`;
			},
			gjcxs_shoucheng: (player) => {
				if (player && player.hasSkill('gjcxs_shoucheng_banned'))
					return ui.joint`
						①你使用普通锦囊牌时，若此牌名未被记录过且：弃牌堆没有与之同名的牌，你记录此牌名；否则你可以为此牌增加或减少一个目标。
						<br><span style="opacity:0.5">②其他角色使用牌时，若你记录过此牌牌名，你摸一张牌。</span>
						<br>③牌堆洗切后，你清除记录的牌名。
					`;
				return ui.joint`
					①你使用普通锦囊牌时，若此牌名未被记录过且：弃牌堆没有与之同名的牌，你记录此牌名；否则你可以为此牌增加或减少一个目标。
					<br>②其他角色使用牌时，若你记录过此牌牌名，你摸一张牌。
					<br>③牌堆洗切后，你清除记录的牌名。
				`;
			},
		},
		skill: {
			gjcxs_zhengsu: {
				trigger: {
					player: 'phaseDiscardEnd',
				},
				forced: true,
				popup: false,
				charlotte: true,
				content() {
					if (!lib.skill.zhengsu.filter(trigger, player)) {
						game.broadcastAll(() => {
							if (lib.config.background_speak) game.playAudio('skill', 'spyanji3');
						});
						player.popup('整肃失败', 'fire');
						game.log(player, '整肃失败');
						event.finish();
						return;
					}
					game.broadcastAll(() => {
						if (lib.config.background_speak) game.playAudio('skill', 'spyanji2');
					});
					player.popup('整肃成功', 'wood');
					game.log(player, '整肃成功');
					player.chooseDrawRecover(2, '整肃奖励：摸两张牌或回复1点体力');
				},
			},
			gjcxs_tongqi: {
				audio: 'shanjia',
				mod: {
					attackRangeBase() {
						return Infinity;
					},
					aiOrder(player, card, num) {
						if (num <= 0) return;
						let sub = get.subtype(card);
						if (sub === 'equip4') return 8 * num;
						if (sub === 'equip3') return 7 * num;
						if (sub === 'equip6') return 6 * num;
					},
					aiValue(player, card, num) {
						if (num <= 0) return;
						let sub = get.subtype(card);
						if (sub === 'equip4') {
							if (get.position(card) === 'e') return 0.5;
							return 0.6;
						}
						if (sub === 'equip3') {
							if (get.position(card) === 'e') return 1;
							return 1.2;
						}
						if (sub === 'equip6') {
							if (get.position(card) === 'e') return 1.5;
							return 2;
						}
					},
				},
				group: ['gjcxs_tongqi_use', 'gjcxs_tongqi_gain'],
				subSkill: {
					use: {
						audio: 'shanjia1.mp3',
						trigger: {
							global: 'useCardAfter',
						},
						filter(event, player) {
							let sub = get.subtype(event.card);
							return sub === 'equip3' || sub === 'equip4' || sub === 'equip6';
						},
						direct: true,
						locked: true,
						content() {
							player
								.chooseUseTarget({ name: 'sha' }, '统骑：视为使用一张【杀】', true, false)
								.set('logSkill', 'gjcxs_tongqi_use');
						},
						sub: true,
					},
					gain: {
						audio: 'shanjia2.mp3',
						trigger: {
							global: ['loseAfter', 'cardsDiscardAfter', 'loseAsyncAfter', 'equipAfter'],
						},
						filter(event, player) {
							let cards = event.getd();
							cards.removeArray(event.getd(player));
							for (let card of cards) {
								if (get.position(card, true) !== 'd') continue;
								let sub = get.subtype(card);
								if (sub === 'equip3' || sub === 'equip4' || sub === 'equip6') return true;
							}
							return false;
						},
						forced: true,
						content() {
							let cards = trigger.getd();
							cards.removeArray(trigger.getd(player));
							cards = cards.filter((card) => {
								if (get.position(card, true) !== 'd') return false;
								let sub = get.subtype(card);
								return sub === 'equip3' || sub === 'equip4' || sub === 'equip6';
							});
							if (cards.length) player.gain(cards, 'gain2');
						},
						sub: true,
					},
				},
			},
			gjcxs_shangxue: {
				audio: 'ext:官将重修/audio/skill:2',
				mod: {
					aiOrder(player, card, num) {
						if (num <= 0) return;
						if (player.getEquip(get.subtype(card)) && !player.getStat().skill.gjcxs_shangxue) return 0;
					},
				},
				enable: 'phaseUse',
				filter(event, player) {
					return (
						!player.getStat().skill.gjcxs_shangxue &&
						player.countCards('he', (i) => {
							return get.type(i, false, player) === 'equip' && player.canRecast(i);
						})
					);
				},
				filterCard(card, player) {
					return get.type(card, false, player) === 'equip' && player.canRecast(card);
				},
				selectCard: [1, Infinity],
				position: 'he',
				complexCard: true,
				prompt: '重铸任意张装备牌，然后视为使用一张【书】',
				check(card) {
					let player = _status.event.player;
					if (ui.selected.cards.length) return 6 - get.value(card);
					return 12 - player.hp - get.value(card);
				},
				discard: false,
				lose: false,
				delay: false,
				locked: false,
				async content(event, trigger, player) {
					await player.recast(cards);
					await player.useCard({ name: 'phd_shu', isCard: true }, player, true);
				},
				ai: {
					order() {
						return get.order('phd_shu') + 0.3;
					},
					result: {
						player: 1.5,
					},
				},
			},
			gjcxs_xianyan: {
				audio: 'xianjing',
				intro: {
					mark(dialog, storage, player) {
						if (!storage || !storage.length) return '尚未预言';
						dialog.addText('将死之人：');
						dialog.addSmall([storage.map((i) => i.name), 'character']);
					},
				},
				trigger: {
					global: 'roundStart',
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt('gjcxs_xianyan'), '预测将于本轮进入濒死状态的一名角色')
						.set('ai', (target) => {
							let player = _status.event.player;
							if (player.getStorage('gjcxs_xianyan').includes(target)) return 0;
							return (
								30 / target.hp +
								12 / (1 + target.countCards('hes')) +
								get.threaten(target, player) +
								3 *
									game.countPlayer((current) => {
										return current.inRange(target) && get.attitude(current, target) <= 0;
									})
							);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					let target = event.targets[0];
					player.markAuto('gjcxs_xianyan', target);
				},
				group: ['gjcxs_xianyan_die', 'gjcxs_xianyan_clear'],
				subSkill: {
					die: {
						audio: 'yuqi',
						trigger: {
							global: 'dyingBegin',
						},
						filter(event, player) {
							return player.getStorage('gjcxs_xianyan').includes(event.player);
						},
						forceDie: true,
						async cost(event, trigger, player) {
							player.storage.gjcxs_xianyan.remove(trigger.player);
							event.result = await player
								.chooseTarget(get.prompt('gjcxs_xianyan'), '选择一名角色，防止其下次受到的致命伤害')
								.set('ai', (target) => {
									if (target.hasSkill('gjcxm_xianyan')) return 0;
									return get.attitude(_status.event.player, target);
								})
								.forResult();
						},
						async content(event, trigger, player) {
							let target = event.targets[0];
							target.addSkill('gjcxm_xianyan');
						},
						sub: true,
					},
					clear: {
						trigger: {
							global: 'roundStart',
						},
						silent: true,
						firstDo: true,
						content() {
							player.storage.gjcxs_xianyan = [];
							player.unmarkSkill('gjcxs_xianyan');
						},
					},
				},
			},
			gjcxm_xianyan: {
				mark: true,
				marktext: '赦',
				intro: { content: '防止你下次受到的致命伤害' },
				trigger: {
					player: 'damageBegin3',
				},
				filter(event, player) {
					return event.num >= player.hp;
				},
				forced: true,
				content() {
					trigger.cancel();
					game.log(player, '防止了此伤害');
					player.removeSkill('gjcxm_xianyan');
				},
			},
			gjcxs_shanshen: {
				audio: 'shanshen',
				trigger: {
					global: 'phaseEnd',
				},
				filter(event, player) {
					if (player.getHistory('sourceDamage').length === 0 && player.getHistory('damage').length === 0) return true;
					if (
						!game.hasGlobalHistory('useCard', (evt) => {
							return evt.targets && evt.targets.some((i) => i === player);
						})
					)
						return true;
					return false;
				},
				forced: true,
				content() {
					if (player.getHistory('sourceDamage').length === 0 && player.getHistory('damage').length === 0) player.recover();
					if (
						!game.hasGlobalHistory('useCard', (evt) => {
							return evt.targets && evt.targets.some((i) => i === player);
						})
					)
						player.draw();
				},
			},
			gjcxs_jianbo: {
				init() {
					game.addGlobalSkill('gjcxs_jianbo_global');
				},
				onremove() {
					if (
						!game.hasPlayer((cur) => {
							return cur.hasSkill('gjcxs_jianbo', null, null, false);
						}, true)
					)
						game.removeGlobalSkill('gjcxs_jianbo_global');
				},
				trigger: {
					global: 'drawBegin',
				},
				filter(event, player) {
					if (event.num <= 1) return false;
					if (event.player.group === 'wei' && event.player.isDamaged() && player.hasZhuSkill('gjcxs_songwei')) return false;
					return event.player.countCards('h');
				},
				forced: true,
				logTarget: 'player',
				content() {
					trigger.num = 1;
				},
				subSkill: {
					global: {
						mod: {
							aiOrder(player, card, num) {
								if (num <= 0 || player.group !== 'wei' || player.getDamagedHp() !== 1 || !get.tag(card, 'recover')) return;
								let cur = game.findPlayer((i) => i.hasZhuSkill('gjcxs_songwei'));
								if (cur) return 0;
							},
						},
						trigger: {
							player: 'dieAfter',
						},
						filter(event, player) {
							return !game.hasPlayer((current) => {
								return current.hasSkill('gjcxs_jianbo', null, null, false);
							}, true);
						},
						silent: true,
						forceDie: true,
						content() {
							game.removeGlobalSkill('gjcxs_jianbo_global');
						},
						ai: {
							effect: {
								target(card, player, target) {
									if ((get.tag(card, 'draw') || 0) <= 1 || !target.countCards('h')) return;
									let cur = game.findPlayer((i) => i.hasSkill('gjcxs_jianbo'));
									if (!cur) return;
									if (target.group === 'wei' && target.isDamaged() && cur.hasZhuSkill('gjcxs_songwei')) return;
									return [1, 1 - get.tag(card, 'draw')];
								},
							},
						},
					},
				},
			},
			gjcxs_lundian: {
				init() {
					game.addGlobalSkill('gjcxs_lundian_global');
				},
				onremove() {
					if (
						!game.hasPlayer((cur) => {
							return cur.hasSkill('gjcxs_lundian', null, null, false);
						}, true)
					)
						game.removeGlobalSkill('gjcxs_lundian_global');
				},
				trigger: {
					global: ['gainAfter', 'loseAsyncAfter'],
				},
				filter(event, player) {
					return game.hasPlayer((cur) => {
						if (player === cur || !event.getg(cur).length) return false;
						if (cur.group === 'wei' && player.hasZhuSkill('gjcxs_songwei')) return true;
						return cur.countCards('h') > player.countCards('h');
					});
				},
				locked: true,
				direct: true,
				getCharacters(num) {
					let list = [];
					if (_status.connectMode) list = get.charactersOL();
					else
						for (let i in lib.character) {
							if (!lib.filter.characterDisabled2(i) && !lib.filter.characterDisabled(i)) list.push(i);
						}
					game.countPlayer2((cur) => {
						list.remove(cur.name);
						list.remove(cur.name1);
						list.remove(cur.name2);
					});
					return list.randomGets(num);
				},
				async content(event, trigger, player) {
					let tars = game.filterPlayer((cur) => {
						if (player === cur || !trigger.getg(cur).length) return false;
						if (cur.group === 'wei' && player.hasZhuSkill('gjcxs_songwei')) return true;
						return cur.countCards('h') > player.countCards('h');
					});
					player.logSkill('gjcxs_lundian', tars);
					for (const target of tars) {
						let evt = trigger.getParent('gjcxs_lundian');
						if (evt && evt.name === 'gjcxs_lundian') {
							let characters = lib.skill.gjcxs_lundian.getCharacters(target.name2 ? 2 : 1);
							if (characters.length > 0) await target.reinitCharacter(target.name1, characters[0]);
							if (characters.length > 1) await target.reinitCharacter(target.name2, characters[1]);
						}
						let choice = await target
							.chooseControl()
							.set('choiceList', ['令' + get.translation(player) + '弃置你一张手牌', '所有非锁定技失效直到当前回合结束'])
							.set('prompt', '论典：请选择一项')
							.set('ai', () => get.event('idx'))
							.set(
								'idx',
								(function () {
									if (!target.countDiscardableCards(player, 'h')) return 0;
									if (
										target.hasSkill('fengyin', null, null, false) ||
										!target.skills.some((i) => {
											return !get.is.locked(i, target) && !get.is.blocked(i, target);
										})
									)
										return 1;
									let discard = get.effect(target, new lib.element.VCard({ name: 'guohe' }), player, target);
									if (discard > 0 && target.countCards('ej')) discard -= 10;
									if (discard + player.hp > 0) return 0;
									if (player !== _status.currentPhase && player.getDamagedHp() < 2) return 1;
									const evt = trigger.getParent('phase');
									if (!evt || (evt.phaseList && !evt.phaseList.slice(evt.num).includes('phaseUse'))) return 1;
									if (discard > -10) return 0;
									return 1;
								})()
							)
							.forResult();
						if (choice.index) target.addTempSkill('fengyin');
						else if (target.countDiscardableCards(player, 'h')) await player.discardPlayerCard(target, 'h', true);
					}
				},
				subSkill: {
					global: {
						trigger: {
							player: 'dieAfter',
						},
						filter(event, player) {
							return !game.hasPlayer((current) => {
								return current.hasSkill('gjcxs_lundian', null, null, false);
							}, true);
						},
						silent: true,
						forceDie: true,
						content() {
							game.removeGlobalSkill('gjcxs_lundian_global');
						},
						ai: {
							effect: {
								target(card, player, target) {
									if ((!get.tag(card, 'gain') && !get.tag(card, 'draw')) || target.hasSkill('fengyin')) return;
									let cur = game.findPlayer((i) => {
										if (target === i || !i.hasSkill('gjcxs_lundian')) return false;
										return (
											(target.group === 'wei' && i.hasZhuSkill('gjcxs_songwei')) ||
											target.countCards('h', (c) => {
												return card !== c && card.cards.includes(c);
											}) +
												(get.tag(card, 'gain') || 0) +
												(get.tag(card, 'draw') || 0) >
												i.countCards('h')
										);
									});
									if (!cur) return;
									if (
										target.skills.some((i) => {
											return !get.is.locked(i, target) && !get.is.blocked(i, target);
										})
									)
										return [1, -1];
								},
							},
						},
					},
				},
			},
			gjcxs_songwei: {
				audio: 'songwei',
				locked: true,
				zhuSkill: true,
				ai: {
					combo: 'gjcxs_jianbo',
				},
			},
			gjcxs_xiwen: {
				audio: ['bifa2.mp3', 'songci2.mp3'],
				init() {
					game.addGlobalSkill('gjcxs_xiwen_global');
				},
				onremove() {
					if (
						!game.hasPlayer((cur) => {
							return cur.hasSkill('gjcxs_xiwen', null, null, false);
						}, true)
					)
						game.removeGlobalSkill('gjcxs_xiwen_global');
				},
				enable: 'phaseUse',
				filter(event, player) {
					return player.countCards('h');
				},
				filterCard: true,
				position: 'h',
				discard: false,
				lose: false,
				delay: false,
				filterTarget(card, player, target) {
					return player !== target && !target.getExpansions('gjcxm_xiwen').length;
				},
				complexSelect: true,
				check(card) {
					let num = get.translation(card.name).length,
						val = get.value(card);
					if (num === 1) return 7.2 - val;
					if (num === 4) return 10 - val;
					if (num === 2) return 13 - val;
					if (num === 3) return 14 - val;
					return 15 - val;
				},
				content() {
					if (get.mode() !== 'identity' || player.identity !== 'nei') player.addExpose(0.15);
					target.addSkill('gjcxm_xiwen');
					target.addToExpansion(cards, 'giveAuto', player).gaintag.add('gjcxm_xiwen');
					let num = true,
						xw;
					if (!target.storage.gjcxm_xiwen_xw) target.storage.gjcxm_xiwen_xw = [];
					if (
						target.storage.gjcxm_xiwen_xw.length < 4 &&
						(target.name.indexOf('caocao') !== -1 ||
							(typeof target.name2 === 'string' && target.name2.indexOf('caocao') !== -1))
					) {
						let str = [
							'赘阉遗丑，本无懿德，僄狡锋协，好乱乐祸',
							'坐领三台，专制朝政，爵赏由心，刑戮在口',
							'所爱光五宗，所恶灭三族，群谈者受显诛，腹议者蒙隐戮',
							'身处三公之位，而行桀虏之态，污国虐民，毒施人鬼',
						];
						str.removeArray(target.storage.gjcxm_xiwen_xw);
						xw = str.randomGet();
						target.storage.gjcxm_xiwen_xw.push(xw);
						num = false;
					} else if (!target.storage.gjcxm_xiwen_xw.length) {
						if (
							target.name.indexOf('caosong') !== -1 ||
							(typeof target.name2 === 'string' && target.name2.indexOf('caosong') !== -1)
						) {
							xw = '乞丐携养，因赃假位，舆金辇璧，输货权门，窃盗鼎司，倾覆重器';
							target.storage.gjcxm_xiwen_xw.push(xw);
							num = false;
						} else if (
							target.name.indexOf('caoteng') !== -1 ||
							(typeof target.name2 === 'string' && target.name2.indexOf('caoteng') !== -1)
						) {
							xw = '与左悺、徐璜并作妖孽，饕餮放横，伤化虐民';
							target.storage.gjcxm_xiwen_xw.push(xw);
							num = false;
						}
					}
					if (num && target.storage.gjcxm_xiwen_xw.length < 4) {
						let str = [
							'承资拔扈，肆行凶忒，割剥元元，残贤害善',
							'专行胁迁，当御者禁，卑侮王室，败法乱纪',
							'榜楚参并，五毒备至，触情任忒，不顾宪纲',
							'迷夺时明，杜绝言路，檀收立杀，不俟报闻',
						];
						str.removeArray(target.storage.gjcxm_xiwen_xw);
						if (str.length) {
							xw = str.randomGet();
							target.storage.gjcxm_xiwen_xw.push(xw);
						}
					}
					if (xw) player.chat(get.translation(target) + xw + '！');
				},
				ai: {
					order: 9,
					result: {
						player: -1,
						target(player, target) {
							let eff = get.damageEffect(target, target, target);
							if (eff === 0) return 0;
							if (eff > 0) return 0.7;
							let num = 1;
							if (ui.selected.cards && ui.selected.cards.length) num = get.translation(ui.selected.cards[0].name).length;
							if (num === 1) num = 0.5;
							else if (num === 4) num = 0.6875;
							else if (num === 2) num = 0.9;
							else if (num === 3) num = 0.9375;
							else num = 1;
							if (num * target.countCards('he') > 2) return -2;
							return -2 - num * target.countCards('he');
						},
					},
				},
				subSkill: {
					global: {
						mod: {
							targetInRange(card, player, target) {
								if (target.getExpansions('gjcxm_xiwen').length) return true;
							},
							cardUsableTarget(card, player, target) {
								if (!target.storage.gjcxm_xiwen_xw || target.storage.gjcxm_xiwen_xw.length < 4) return;
								return true;
							},
						},
						trigger: {
							player: 'dieAfter',
						},
						filter(event, player) {
							return !game.hasPlayer((current) => current.hasSkill('gjcxs_xiwen', null, null, false), true);
						},
						silent: true,
						forceDie: true,
						content() {
							game.removeGlobalSkill('gjcxs_xiwen_global');
							game.countPlayer((current) => {
								current.removeSkill('gjcxm_xiwen');
								delete current.storage.gjcxm_xiwen_xw;
							});
						},
					},
				},
			},
			gjcxm_xiwen: {
				trigger: {
					player: 'phaseBegin',
				},
				filter(event, player) {
					return player.getExpansions('gjcxm_xiwen').length;
				},
				forced: true,
				charlotte: true,
				async content(event, trigger, player) {
					const num = get.translation(player.getExpansions('gjcxm_xiwen')[0].name).length;
					let result = { index: 1 };
					if (player.countCards('he'))
						result = await player
							.chooseControl()
							.set('choiceList', ['弃置所有字数不为' + num + '的牌', '弃置「檄」并受到1点伤害'])
							.set('prompt', '檄文：请选择一项')
							.set('ai', () => get.event('idx'))
							.set(
								'idx',
								(() => {
									if (get.damageEffect(player, player, _status.event.player) >= 0) return 1;
									if (
										player.countCards('he', (card) => {
											return (
												lib.filter.cardDiscardable(card, player, 'gjcxm_xiwen') &&
												get.translation(card.name).length !== num
											);
										}) >
										3 - Math.min(2.5, player.hp)
									)
										return 1;
									return 0;
								})()
							)
							.forResult();
					game.log(player, '选择了', '#y选项' + get.cnNumber(result.index + 1, true));
					if (result.index) {
						player.removeSkill('gjcxm_xiwen');
						await player.damage('nocard', 'nosource');
					} else {
						let cards = player.getCards('he', (card) => {
							return get.translation(card.name).length !== num;
						});
						if (cards.length) await player.modedDiscard(cards);
					}
				},
				ai: {
					effect: {
						player(card, player, target) {
							if (
								target &&
								player !== target &&
								target.hasSkill('gjcxs_sanyi') &&
								get.tag(card, 'damage') &&
								!player.hasSkillTag('jueqing', false, target)
							) {
								if (target.hp <= 1 || get.attitude(player, target) > 0) return [0, 3, 0, 0];
								return [0.5, 1.5, 0.5, 0];
							}
						},
					},
				},
				marktext: '檄',
				intro: {
					markcount: () => 1,
					mark(dialog, storage, player) {
						if (!player.storage.gjcxm_xiwen_xw || !player.storage.gjcxm_xiwen_xw.length) return;
						if (player.name2 && player.name2 !== 'unknown') dialog.addSmall([[player.name1, player.name2], 'character']);
						else dialog.addSmall([[player.name1], 'character']);
						dialog.addText(player.storage.gjcxm_xiwen_xw[0] + '！');
						for (let i = 1; i < player.storage.gjcxm_xiwen_xw.length; i++) {
							dialog.addText(player.storage.gjcxm_xiwen_xw[i] + '！');
						}
					},
				},
				onremove(player, skill) {
					let cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
			},
			gjcxs_sanyi: {
				audio: 'songci1.mp3',
				trigger: {
					player: 'damageBegin3',
				},
				filter(event, player) {
					return event.source && player !== event.source && event.source.getExpansions('gjcxm_xiwen').length;
				},
				check(event, player) {
					if (event.num > 1 || player.hp <= event.num) return true;
					return (
						get.attitude(player, event.source) >= 0 ||
						get.damageEffect(player, event.source, player) + get.damageEffect(event.source, event.source, player) < 0
					);
				},
				logTarget: 'source',
				content() {
					let cards = trigger.source.getExpansions('gjcxm_xiwen');
					if (cards.length) trigger.source.gain(cards, 'draw').set('knowers', player);
					trigger.cancel();
					game.log(player, '防止了此伤害');
				},
				ai: {
					combo: 'gjcxs_xiwen',
				},
			},
			gjcxs_andong: {
				audio: 'xinfu_andong',
				trigger: {
					global: 'damageBegin3',
				},
				filter(event, player) {
					if (!event.player.isIn() || !event.source || !event.source.isIn()) return false;
					if (player === event.player || player === event.source || event.player === event.source) return false;
					return event.player.countCards('h');
				},
				prompt: '安东：是否防止此伤害？',
				prompt2(event, player) {
					let target = get.translation(event.player),
						source = get.translation(event.source);
					return (
						'若如此做，你观看' +
						target +
						'的手牌：若' +
						target +
						'有♥️手牌，你将其中一张交给' +
						source +
						'，否则你须失去1点体力或将一张♥️牌交给' +
						source
					);
				},
				check(event, player) {
					let eff = event.num * get.damageEffect(event.player, event.source, _status.event.player, get.natureList(event));
					if (eff >= 0) return false;
					let att1 = get.attitude(_status.event.player, event.player),
						att2 = get.attitude(_status.event.player, event.source),
						th = event.player.getKnownCards(player, (i) => {
							return get.suit(i, player) === 'heart';
						});
					if (th.length)
						return th.some((i) => {
							if (att1 <= 0 || att2 >= 0 || !lib.filter.canBeGained(i, event.source, event.player)) return true;
							return get.value(i, event.source) - get.value(i, event.player) > eff;
						});
					if (get.effect(player, { name: 'losehp' }, player, _status.event.player) > eff) return true;
					th = player.getCards('h', { suit: 'heart' });
					if (!th.length) return false;
					return th.some((i) => {
						if (att2 >= 0 || !lib.filter.canBeGained(i, event.source, player)) return true;
						return get.value(i, event.source) - get.value(i, player) > eff;
					});
				},
				logTarget: 'player',
				async content(event, trigger, player) {
					if (get.mode() !== 'identity' || player.identity !== 'nei') player.addExpose(0.2);
					trigger.cancel();
					game.log(player, '防止了', trigger.source, '对', trigger.player, '造成的伤害');
					if (!trigger.player.countCards('h')) return;
					await player.viewHandcards(trigger.player);
					if (
						trigger.player.countCards('h', (i) => {
							return get.suit(i, player) === 'heart';
						})
					) {
						const result = await player
							.chooseButton(
								['安东：选择要交给' + get.translation(trigger.source) + '的牌', trigger.player.getCards('h')],
								true
							)
							.set('filterButton', (button) => {
								return get.suit(button.link, player) === 'heart';
							})
							.set('ai', (button) => {
								const eff = get.event('eff');
								if (eff >= 0) return 0;
								if (!lib.filter.canBeGained(button.link, get.event('source'), get.event('target'))) return 100;
								return -eff - get.value(button.link);
							})
							.set('eff', get.effect(player, { name: 'losehp' }, player, _status.event.player))
							.set('source', trigger.source)
							.set('target', trigger.player)
							.forResult();
						if (result.bool) {
							player.line2([trigger.player, trigger.source], 'green');
							await trigger.source.gain(result.links, 'gain2');
						}
					} else {
						const result = await player
							.chooseCard(
								'安东：交给' + get.translation(trigger.source) + '一张♥️牌，或点“取消”失去1点体力',
								'he',
								(card, player) => {
									return get.suit(card, player) === 'heart';
								}
							)
							.set('ai', (card) => {
								const eff = get.event('eff');
								if (eff >= 0) return 0;
								let val = get.value(card);
								if (eff + val <= 0 || get.attitude(get.event('player'), get.event('source')) > 0)
									return Math.max(0.01, val);
								return 0;
							})
							.set('eff', get.effect(player, { name: 'losehp' }, player, _status.event.player))
							.set('source', trigger.source)
							.forResult();
						if (result.bool) {
							let knowers = get.position(result.cards[0], true) === 'h' ? player : game.players;
							player.line(trigger.source, 'green');
							await player.give(result.cards, trigger.source).set('knowers', knowers);
						} else await player.loseHp();
					}
				},
				ai: {
					threaten(player, target) {
						if (target.hasFriend()) return 1.3;
					},
				},
			},
			gjcxs_kuanhui: {
				mod: {
					cardDiscardable(card, player, name) {
						if (name === 'phaseDiscard' && card.hasGaintag('gjcxs_kuanhui')) return false;
					},
					ignoredHandcard(card, player) {
						if (card.hasGaintag('gjcxs_kuanhui')) return true;
					},
				},
				trigger: {
					player: 'phaseDrawEnd',
				},
				forced: true,
				locked: false,
				async content(event, trigger, player) {
					let heart = get.cardPile2((i) => get.suit(i, false) === 'heart');
					if (heart) {
						const next = player.gain(heart, 'gain2');
						next.gaintag.add('gjcxs_kuanhui');
						await next;
					}
					game.updateRoundNumber();
					if (!player.countCards('h')) return;
					const result = await player
						.chooseCardTarget({
							prompt: '宽惠：是否展示一张手牌并令一名其他角色获得牌堆中所有与此牌花色点数均相同的牌？',
							filterCard: true,
							filterTarget: lib.filter.notMe,
							position: 'h',
							ai1: (card) => {
								let suit = get.suit(card),
									num = get.number(card),
									cs = 0.2;
								for (let i of ui.cardPile.childNodes) {
									if (get.number(i) === num && get.suit(i) === suit) cs++;
								}
								if (suit === 'heart') return 1.25 * cs;
								return cs;
							},
							ai2: (target) => {
								return get.attitude(_status.event.player, target) / Math.max(1, target.hp);
							},
						})
						.forResult();
					if (result.bool) {
						let target = result.targets[0],
							card = result.cards[0];
						await player.showCards(card);
						player.line(target, 'green');
						if (get.mode() !== 'identity' || player.identity !== 'nei') player.addExpose(0.2);
						let suit = get.suit(card),
							num = get.number(card),
							cards = [];
						for (let i of ui.cardPile.childNodes) {
							if (get.number(i) === num && get.suit(i) === suit) cards.push(i);
						}
						if (cards.length) await target.gain(cards, 'gain2');
						game.updateRoundNumber();
					}
				},
				ai: {
					threaten(player, target) {
						if (target.hasFriend()) return 1.1 + target.countCards('h') / 20;
					},
				},
			},
			gjcxs_jinwei: {
				audio: 'reshenduan',
				trigger: {
					global: 'damageBegin3',
				},
				filter(event, player) {
					return player !== event.player && event.player.countCards('h');
				},
				prompt2(event, player) {
					return '令' + get.translation(event.player) + '将一张黑色手牌当【兵粮寸断】对其使用。若其如此做，你防止此伤害';
				},
				logTarget: 'player',
				check(event, player) {
					return (
						event.player.countCards('h') > 0 &&
						event.player.canUse(
							{
								name: 'bingliang',
								color: 'black',
								isCard: true,
							},
							event.player
						) &&
						get.effect(
							event.player,
							new lib.element.VCard({
								name: 'bingliang',
								color: 'black',
								isCard: true,
							}),
							event.player,
							_status.event.player
						) -
							event.num * get.damageEffect(event.player, event.source, _status.event.player) >
							0
					);
				},
				async content(event, trigger, player) {
					if (
						!trigger.player.countCards('h', (card) => {
							return (
								get.color(card, trigger.player) === 'black' &&
								trigger.player.canUse(
									{
										name: 'bingliang',
										cards: [card],
									},
									player
								)
							);
						})
					)
						return;
					let result = await trigger.player
						.chooseCard('将一张黑色手牌当【兵粮寸断】对自己使用，然后防止此伤害？', 'h', (card, player) => {
							return (
								get.color(card, player) === 'black' &&
								player.canUse(
									{
										name: 'bingliang',
										cards: [card],
									},
									player
								)
							);
						})
						.set('ai', (card) => {
							let player = _status.event.getTrigger().player;
							if (
								get.effect(
									player,
									{
										name: 'bingliang',
										cards: [card],
									},
									player,
									get.event('player')
								) -
									get.event('damage') >
								0
							)
								return 20 - get.value(card);
							return 0;
						})
						.set('damage', trigger.num * get.damageEffect(trigger.player, trigger.source, trigger.player))
						.forResult();
					if (
						result.bool &&
						trigger.player.canUse(
							{
								name: 'bingliang',
								cards: result.cards,
							},
							trigger.player
						)
					) {
						trigger.player.useCard(
							{
								name: 'bingliang',
								cards: result.cards,
							},
							trigger.player
						);
						trigger.cancel();
						game.log(player, '防止了', trigger.source, '对', trigger.player, '造成的伤害');
					}
				},
				ai: {
					threaten: 4,
				},
			},
			gjcxs_yonglve: {
				audio: 'reyonglve',
				init(player) {
					game.addGlobalSkill('gjcxs_yonglve_global');
				},
				onremove() {
					if (
						!game.hasPlayer((i) => {
							return i.hasSkill('gjcxs_yonglve', null, null, false);
						}, true)
					)
						game.removeGlobalSkill('gjcxs_yonglve_global');
				},
				trigger: {
					global: 'phaseJudgeBegin',
				},
				filter(event, player) {
					return event.player !== player && event.player.countCards('j') > 0;
				},
				direct: true,
				async content(event, trigger, player) {
					let eff1 = get.effect(player, { name: 'draw' }, player, _status.event.player),
						eff2 = player.canUse({ name: 'sha', isCard: true }, trigger.player, false)
							? get.effect(trigger.player, { name: 'sha', isCard: true }, player, player)
							: 0;
					const result = await player
						.discardPlayerCard(get.prompt(event.name, trigger.player), trigger.player, 'j')
						.set('ai', (button) => {
							let name = button.link.viewAs || button.link.name,
								eff = Math.max(_status.event.eff1, _status.event.eff2),
								trigger = _status.event.getTrigger();
							return (
								eff -
								get.effect(trigger.player, new lib.element.VCard({ name: name }), trigger.player, _status.event.player)
							);
						})
						.set('eff1', eff1)
						.set('eff2', eff2)
						.set('logSkill', ['gjcxs_yonglve', trigger.player])
						.forResult();
					if (!result.bool) return;
					let res = { bool: true, index: 0 };
					if (player.canUse({ name: 'sha', isCard: true }, trigger.player, false))
						res = await player
							.chooseControl()
							.set('choiceList', ['摸一张牌', '视为对' + get.translation(trigger.player) + '使用一张【杀】'])
							.set('prompt', '勇略：请选择一项')
							.set('ai', () => _status.event.eff)
							.set('eff', eff1 > eff2 ? 0 : 1)
							.forResult();
					if (!result.index) await player.draw();
					else if (player.canUse({ name: 'sha', isCard: true }, trigger.player, false))
						await player.useCard({ name: 'sha', isCard: true }, trigger.player);
				},
				subSkill: {
					global: {
						trigger: {
							player: 'dieAfter',
						},
						filter(event, player) {
							return !game.hasPlayer((i) => i.hasSkill('gjcxs_yonglve', null, null, false), true);
						},
						silent: true,
						forceDie: true,
						content() {
							game.removeGlobalSkill('gjcxs_yonglve_global');
						},
						ai: {
							effect: {
								target(card, player, target) {
									if (typeof card !== 'object' || get.type(card) !== 'delay') return;
									let hs = game.findPlayer((i) => i.hasSkill('gjcxs_yonglve'));
									if (!hs) return;
									let att = get.attitude(target, hs);
									if (att > 0) {
										if (target.countCards('j')) return 0.4;
										return 'zerotarget';
									} else if (att < 0) return [0.2, -1.2];
								},
							},
						},
					},
				},
			},
			gjcxs_zhizui: {
				init(player) {
					if (!player.storage.gjcxs_zhizui)
						player.storage.gjcxs_zhizui = {
							prev: {},
							curr: {},
							prem: {},
						};
				},
				mark: true,
				intro: {
					content(storage, player) {
						let map = [],
							txt = '';
						for (let i in storage.prem) {
							map[i] = get.translation(storage.prem[i]);
						}
						for (let i in storage.prev) {
							map[i] = get.translation(storage.prev[i]);
						}
						for (let i = 1; i < map.length; i++) {
							if (map[i]) txt += i + ': ' + map[i] + '<br>';
						}
						if (txt) return txt.slice(0, -4);
						return '暂无政绩';
					},
				},
				trigger: {
					global: 'phaseEnd',
				},
				filter(event, player) {
					let num = event.player.getSeatNum();
					if (player.storage.gjcxs_zhizui.prem[num]) return player.hasUseTarget(player.storage.gjcxs_zhizui.prem[num]);
					return player.storage.gjcxs_zhizui.prev[num] && player.hasUseTarget(player.storage.gjcxs_zhizui.prev[num]);
				},
				direct: true,
				content() {
					let num = trigger.player.getSeatNum(),
						card;
					if (player.storage.gjcxs_zhizui.prem[num]) card = player.storage.gjcxs_zhizui.prem[num];
					else card = player.storage.gjcxs_zhizui.prev[num];
					if (card && player.hasUseTarget(card))
						player
							.chooseUseTarget(card, '是否发动〖治最〗，视为使用一张' + get.translation(card) + '？')
							.set('logSkill', 'gjcxs_zhizui');
				},
				group: ['gjcxs_zhizui_record', 'gjcxs_zhizui_round'],
				subSkill: {
					record: {
						trigger: {
							player: 'useCard0',
						},
						silent: true,
						content() {
							let num = player.storage.gjcxs_zhizui.curr.idx++;
							player.storage.gjcxs_zhizui.curr[num] = new lib.element.VCard(trigger.card);
						},
						sub: true,
					},
					round: {
						trigger: {
							global: 'roundStart',
						},
						silent: true,
						content() {
							player.storage.gjcxs_zhizui.prev = {};
							for (let i in player.storage.gjcxs_zhizui.curr) {
								player.storage.gjcxs_zhizui.prev[i] = player.storage.gjcxs_zhizui.curr[i];
							}
							player.storage.gjcxs_zhizui.curr.idx = 1;
						},
						sub: true,
					},
				},
			},
			gjcxs_daisi: {
				init() {
					game.addGlobalSkill('gjcxs_daisi_global');
				},
				onremove() {
					if (
						!game.hasPlayer((cur) => {
							return cur.hasSkill('gjcxs_daisi', null, null, false);
						}, true)
					)
						game.removeGlobalSkill('gjcxs_daisi_global');
				},
				trigger: {
					global: 'useCardAfter',
				},
				filter(event, player) {
					return player.storage.gjcxs_daisi && event.card === player.storage.gjcxs_daisi.card;
				},
				direct: true,
				async content(event, trigger, player) {
					let target = player.storage.gjcxs_daisi.user,
						num = target.getSeatNum(),
						idx = 1;
					if (player.storage.gjcxs_zhizui && player.hasSkill('gjcxs_zhizui', null, null, false))
						idx = await player
							.chooseControl()
							.set('prompt', '代思：请选择一项')
							.set('choiceList', [
								'令〖治最〗中第' + get.cnNumber(num, true) + '张牌永久锁定为' + get.translation(trigger.card),
								'令' + get.translation(target) + '不能再发动本技能',
							])
							.set('ai', get.event('idx'))
							.set(
								'idx',
								(function () {
									if (player.getUseValue(trigger.card) > 18) return 0;
									if (get.attitude(player, target) < 0) return 1;
									if (player.getUseValue(trigger.card) < 18 / player.hp) return 1;
									return 0;
								})()
							)
							.forResult('index');
					if (idx) target.addSkill('gjcxs_daisi_banned');
					else player.storage.gjcxs_zhizui.prem[num] = new lib.element.VCard(trigger.card);
				},
				group: 'gjcxs_daisi_die',
				subSkill: {
					global: {
						trigger: {
							target: 'useCardToTargeted',
						},
						filter(event, player) {
							return (
								event.targets.length === 1 &&
								player !== event.player &&
								!player.hasSkill('gjcxs_daisi_banned') &&
								game.hasPlayer((cur) => {
									return cur !== player && cur !== event.player && cur.hasSkill('gjcxs_daisi');
								})
							);
						},
						async cost(event, trigger, player) {
							let tars = game.filterPlayer((cur) => {
								return cur !== trigger.player && cur.hasSkill('gjcxs_daisi');
							});
							if (tars.length === 1) {
								let bool = await player
									.chooseBool(
										get.prompt('gjcxs_daisi'),
										'将' + get.translation(trigger.card) + '转移给' + get.translation(tars[0])
									)
									.set('ai', () => get.event('bool'))
									.set(
										'bool',
										(function () {
											player._gjcxs_daisi_global_temp = true;
											let bool =
												get.effect(tars[0], trigger.card, trigger.player, _status.event.player) >
												get.effect(player, trigger.card, trigger.player, _status.event.player);
											delete player._gjcxs_daisi_global_temp;
										})()
									)
									.forResult();
								if (bool.bool)
									event.result = {
										bool: true,
										targets: tars,
									};
							} else
								event.result = await player
									.chooseTarget(
										'代思：是否将' + get.translation(trigger.card) + '转移给其中一名角色？',
										(card, player, target) => {
											return get.event('tars').includes(target);
										}
									)
									.set('ai', (target) => {
										let evt = _status.event.getTrigger();
										return (
											get.effect(target, evt.card, evt.player, get.event('player')) -
											get.effect(evt.target, evt.card, evt.playet, get.event('player'))
										);
									})
									.set('tars', tars)
									.forResult();
						},
						async content(event, trigger, player) {
							const target = event.targets[0];
							trigger.getParent().targets.remove(player);
							trigger.getParent().triggeredTargets2.remove(player);
							trigger.getParent().targets.push(target);
							trigger.untrigger();
							trigger.player.line(target);
							target.storage.gjcxs_daisi = {
								card: trigger.card,
								user: player,
							};
							await game.asyncDelay();
						},
						ai: {
							effect: {
								target_use(card, player, target) {
									if (
										typeof card !== 'object' ||
										target._gjcxs_daisi_global_temp ||
										player === target ||
										target.hasSkill('gjcxs_daisi_banned') ||
										get.tag(card, 'multitarget')
									)
										return;
									let curs = game
										.filterPlayer((cur) => {
											return cur !== player && cur !== target && cur.hasSkill('gjcxs_daisi');
										})
										.sort((a, b) => {
											return get.attitude(target, a) - get.attitude(target, b);
										});
									if (curs.length && get.attitude(target, curs[0]) <= 0) {
										target._gjcxs_daisi_global_temp = true;
										let eff =
											get.effect(curs[0], card, player, player) / (Math.abs(get.attitude(player, curs[0])) + 1);
										delete target._gjcxs_daisi_global_temp;
										return [0.125, 0, 1, eff];
									}
								},
							},
						},
					},
					banned: {
						mark: true,
						marktext: '<span style="text-decoration: line-through;">代</span>',
						intro: {
							content: '本局不能再发动〖代思〗',
						},
						charlotte: true,
					},
					die: {
						trigger: {
							player: 'dieAfter',
						},
						filter(event, player) {
							return !game.hasPlayer((cur) => {
								return cur.hasSkill('gjcxs_daisi', null, null, false);
							}, true);
						},
						content() {
							game.removeGlobalSkill('gjcxs_daisi_global');
						},
						sub: true,
					},
				},
			},
			gjcxs_tuifeng: {
				audio: 'tuifeng',
				mod: {
					cardDiscardable(card, player, name) {
						if (name === 'phaseDiscard' && card.hasGaintag('gjcxs_tuifeng')) return false;
					},
					ignoredHandcard(card, player) {
						if (card.hasGaintag('gjcxs_tuifeng')) return true;
					},
				},
				marktext: '锋',
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				trigger: {
					source: 'damageSource',
				},
				getIndex(event, player) {
					return event.num;
				},
				prompt2: '摸一张牌。若此牌为【杀】，你使用之',
				async content(event, trigger, player) {
					const next = player.draw();
					next.gaintag.add('gjcxs_tuifeng');
					const result = await next.forResult();
					const card = result[0];
					if (get.name(card, player) === 'sha') await player.chooseUseTarget(card, true, false);
				},
				ai: {
					effect: {
						player(card, player, target) {
							if (get.tag(card, 'damage') && !player.hasSkillTag('jueqing', false, target)) return [1, 1];
						},
					},
				},
			},
			gjcxs_geyuan: {
				audio: ['dcgeyuan', 'dcjieshu'],
				init(player) {
					player.storage.gjcxs_geyuan = {};
				},
				onremove(player, skill) {
					const cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
					delete player.storage.gjcxs_geyuan;
				},
				marktext: '圆',
				intro: {
					markcount: () => 1,
					mark(dialog, storage, player) {
						if (!storage) return;
						let str = '此圆';
						if (typeof storage.ans === 'number') str += '为' + storage.ans;
						else {
							if (typeof storage.min === 'number') str += '大于' + storage.min;
							if (typeof storage.max === 'number') str += (storage.min ? '、' : '') + '小于' + storage.max;
						}
						if (str.length > 2) dialog.addText(str);
					},
				},
				trigger: {
					player: ['useCardAfter', 'respondAfter'],
				},
				filter(event, player) {
					return player.getExpansions('gjcxs_geyuan').length;
				},
				forced: true,
				logAudio: () => {
					return 'dcgeyuan' + get.rand(1, 2);
				},
				async content(event, trigger, player) {
					let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => get.strNumber(i));
					let result = await player
						.chooseControl(list)
						.set('ai', () => get.event().num - 1)
						.set('prompt', '割圆：请选择一个点数')
						.set(
							'num',
							(function () {
								if (player.storage.gjcxs_geyuan.ans) return player.storage.gjcxs_geyuan.ans;
								let min = player.storage.gjcxs_geyuan.min || 0,
									max = player.storage.gjcxs_geyuan.max || 14;
								min = Math.max(0, min);
								max = Math.min(14, max);
								if (max - min <= 2) return max - 1;
								if (!player.storage.gjcxs_geyuan.now || max - min > 8) return Math.ceil((min + max) / 2);
								let sqrt = Math.floor(Math.sqrt(max - min));
								if (!player.storage.gjcxs_geyuan.pre)
									return max === player.storage.gjcxs_geyuan.now ? max - sqrt : min + sqrt;
								if (player.storage.gjcxs_geyuan.now <= min) return min + sqrt;
								return max - sqrt;
							})()
						)
						.forResult();
					if (!result.control) return;
					player.$damagepop(result.control, 'thunder');
					let num = result.index + 1;
					result = player.getExpansions('gjcxs_geyuan')[0].number;
					game.log(player, '估测此「圆」点数为', '#y' + get.strNumber(num));
					await game.asyncDelay();
					if (num === result) {
						game.log(player, '#g估测正确');
						await player.gain(player.getExpansions('gjcxs_geyuan'), 'gain2');
						await player.addToExpansion(get.cards(), 'draw').gaintag.add('gjcxs_geyuan');
						player.storage.gjcxs_geyuan = {};
						return;
					}
					player.storage.gjcxs_geyuan.pre = player.storage.gjcxs_geyuan.now;
					player.storage.gjcxs_geyuan.now = num;
					if (num > result) {
						player.chat('猜大了');
						player.storage.gjcxs_geyuan.max = num;
					} else {
						player.chat('猜小了');
						player.storage.gjcxs_geyuan.min = num;
					}
					if ((player.storage.gjcxs_geyuan.pre - result) * (num - result) > 0) {
						let cha = num - Math.sign(num - result) * Math.abs(player.storage.gjcxs_geyuan.pre - num);
						await game.asyncDelayx();
						if (cha === result) {
							player.storage.gjcxs_geyuan.ans = cha;
							player.popup('点数是' + get.strNumber(cha), 'wood');
						} else if (cha > result) {
							if (typeof player.storage.gjcxs_geyuan.max !== 'number' || cha < player.storage.gjcxs_geyuan.max)
								player.storage.gjcxs_geyuan.max = cha;
							player.popup('还小于' + get.strNumber(cha));
						} else {
							if (typeof player.storage.gjcxs_geyuan.min !== 'number' || cha > player.storage.gjcxs_geyuan.min)
								player.storage.gjcxs_geyuan.min = cha;
							player.popup('还大于' + get.strNumber(cha));
						}
					}
				},
				group: 'gjcxs_geyuan_start',
				subSkill: {
					start: {
						audio: 'dcjieshu',
						trigger: {
							player: 'enterGame',
							global: 'phaseBefore',
						},
						filter(event, player) {
							return event.name !== 'phase' || game.phaseNumber === 0;
						},
						forced: true,
						content() {
							player.addToExpansion(get.cards(), 'draw').gaintag.add('gjcxs_geyuan');
						},
						sub: true,
					},
				},
				ai: {
					effect: {
						player_use(card, player, target) {
							if (player.getExpansions('gjcxs_geyuan').length && !ui.selected.targets.length) return [1, 0.5];
						},
					},
				},
			},
			gjcxs_mouhe: {
				audio: 'dcgusuan',
				trigger: {
					player: 'gainAfter',
				},
				filter(event, player) {
					let cards = event.getg(player);
					return (
						event.fromStorage === true ||
						game.hasPlayer2((current) => {
							let evt = event.getl(current);
							return evt && evt.xs && evt.xs.some((i) => cards.includes(i));
						})
					);
				},
				frequent: true,
				content() {
					let gcards = trigger.getg(player),
						cards = [];
					game.countPlayer2((current) => {
						let evt = trigger.getl(current);
						if (evt && evt.xs) cards.addArray(evt.xs.filter((i) => gcards.includes(i)));
					});
					gcards = [];
					for (let c of cards) {
						let card = get.cardPile((i) => i.number === c.number && !gcards.includes(i));
						if (card) gcards.push(card);
					}
					if (gcards.length) player.gain(gcards, 'gain2');
					else player.chat('无牌可盖！');
					game.updateRoundNumber();
				},
				ai: {
					combo: 'gjcxs_geyuan',
					threaten(player, target) {
						if (target.hasSkill('gjcxs_geyuan')) return 3.7;
					},
				},
			},
			gjcxs_qingzhong: {
				audio: 'qingzhong',
				mod: {
					cardUsable(card, player) {
						if (get.tag(card, 'damage') && !player.hasSkill('gjcxs_lizhong_ban')) return Infinity;
					},
				},
				trigger: {
					source: 'damageSource',
				},
				filter(event, player) {
					return player.isPhaseUsing() && event.card && player.countSkill('gjcxs_qingzhong') < player.maxHp;
				},
				prompt2(event, player) {
					return '从牌堆/弃牌堆获得' + get.cnNumber(event.num) + '张【' + get.translation(event.card.name) + '】';
				},
				check(event, player) {
					let name = event.card.name;
					for (let card of ui.cardPile.childNodes) {
						if (card.name === name) return true;
					}
					for (let card of ui.discardPile.childNodes) {
						if (card.name === name) return true;
					}
					return false;
				},
				content() {
					let cards = [],
						name = trigger.card.name;
					for (let i = 0; i < trigger.num; i++) {
						let card = get.cardPile((c) => {
							return c.name === name && !cards.includes(c);
						});
						if (card) cards.push(card);
					}
					if (cards.length) player.gain(cards, 'gain2');
					else player.chat('无牌可得，臣何以尽忠？');
					game.updateRoundNumber();
				},
				ai: {
					effect: {
						player(card, player, target) {
							if (
								get.tag(card, 'damage') &&
								player.isPhaseUsing() &&
								player.countSkill('gjcxs_qingzhong') < player.maxHp &&
								!player.hasSkillTag('jueqing', false, target)
							)
								return [1, 0.8];
						},
					},
				},
			},
			gjcxs_lizhong: {
				mod: {
					aiOrder(player, card, num) {
						if (num <= 0 || !get.tag(card, 'damage')) return num;
						return 10 * num;
					},
				},
				trigger: {
					player: 'phaseUseBegin',
					source: 'damageSource',
				},
				forced: true,
				priority: 1,
				content() {
					player.addTempSkill('gjcxs_lizhong_ban', 'useCard0');
				},
				subSkill: {
					ban: {
						mark: true,
						marktext: '礼',
						intro: {
							content: '不能使用伤害牌直至下次使用牌',
						},
						mod: {
							cardUsable(card, player) {
								if (get.tag(card, 'damage')) return false;
							},
						},
						ai: {
							neg: true,
							temp: true,
						},
					},
				},
				ai: {
					neg: true,
				},
			},
			gjcxs_weilu: {
				audio: 'xinfu_weilu',
				trigger: {
					player: 'damageEnd',
				},
				filter(event, player) {
					return event.source && event.source.isIn() && event.source !== player;
				},
				forced: true,
				logTarget: 'source',
				content() {
					trigger.source.addSkill('gjcxm_weilu');
					trigger.source.markAuto('gjcxm_weilu_lq', player);
					trigger.source.addMark('gjcxm_weilu', 1);
				},
				ai: {
					maixie_defend: true,
					effect: {
						target(card, player, target) {
							if (player !== target && get.tag(card, 'damage') && !player.hasSkillTag('jueqing', false, target)) {
								let num = -1,
									cur =
										_status.currentPhase ||
										game.findPlayer((i) => {
											return i.getSeatNum() === 1;
										});
								while (cur !== target) {
									if (cur === player) {
										num -= 1 - Math.exp(-player.needsToDiscard(1));
										break;
									}
									cur = cur.next;
								}
								if (player.hp > 1) {
									if (player.hasSkillTag('maihp')) num += 2 * (player.hp - 1);
									else
										num -=
											2 /
											(1 +
												player.countCards('hs', (i) => {
													let name = get.name(i, player);
													if (name === 'shan') return 0.5;
													if (name === 'sha') return 0.3;
													return name === 'tao' || name === 'jiu';
												}));
								}
								return [1, 0, 1, num];
							}
						},
					},
				},
				group: ['gjcxs_weilu_record', 'gjcxs_weilu_clear'],
				subSkill: {
					record: {
						trigger: {
							player: 'phaseUseBefore',
						},
						silent: true,
						content() {
							game.countPlayer((current) => {
								current.storage.gjcxs_weilu_record = current.hp;
							});
						},
						sub: true,
					},
					clear: {
						trigger: {
							player: 'phaseUseEnd',
						},
						filter(event, player) {
							return game.hasPlayer((current) => current.hasMark('gjcxm_weilu'));
						},
						forced: true,
						content() {
							let curs = game.filterPlayer((current) => current.hasMark('gjcxm_weilu'));
							player.line(curs, 'green');
							curs.forEach((current) => {
								let hp = current.storage.gjcxs_weilu_record - current.hp;
								current.removeSkill('gjcxm_weilu');
								if (hp > 0) current.recover(hp);
								else if (hp < 0) current.loseHp(-hp);
							});
						},
						sub: true,
					},
				},
			},
			gjcxm_weilu: {
				mark: true,
				marktext: '威',
				intro: {
					content(storage, player, skill) {
						return (
							'手牌上限-' +
							storage +
							'，' +
							get.translation(player.storage.gjcxm_weilu_lq) +
							'的出牌阶段开始时失去体力至1点并随机弃置' +
							get.cnNumber(storage) +
							'张牌'
						);
					},
				},
				onremove(player) {
					player.removeMark('gjcxm_weilu', player.countMark('gjcxm_weilu'));
					player.unmarkSkill('gjcxm_weilu');
					delete player.storage.gjcxm_weilu_lq;
				},
				mod: {
					maxHandcard(player, num) {
						return num - player.countMark('gjcxm_weilu');
					},
				},
				trigger: {
					global: 'phaseUseBegin',
				},
				filter(event, player) {
					return player.getStorage('gjcxm_weilu_lq').includes(event.player);
				},
				forced: true,
				async content(event, trigger, player) {
					if (player.hp > 1) await player.loseHp(player.hp - 1);
					const cards = player.getCards('he').randomGets(player.countMark('gjcxm_weilu'));
					if (cards.length) await player.modedDiscard(cards);
				},
			},
			gjcxs_zengdao: {
				audio: 'xinfu_zengdao',
				trigger: {
					player: 'gainAfter',
					global: 'loseAsyncAfter',
				},
				filter(event, player) {
					return event.getg(player).some((i) => get.subtypes(i, player).includes('equip1'));
				},
				async cost(event, trigger, player) {
					const cards = trigger.getg(player).filter((i) => get.subtypes(i, player).includes('equip1'));
					event.result = await player
						.chooseTarget(
							get.prompt(event.name),
							'将' + get.translation(cards) + '交给一名其他角色，其于下回合首次造成的伤害+1、使用【杀】的次数上限+1',
							lib.filter.notMe
						)
						.set('ai', (target) => {
							if (get.attitude(_status.event.player, target) <= 0) return 0;
							return (
								get.threaten(target, _status.event.player) *
								(1 + target.mayHaveSha(_status.event.player, 'use', null, 'count'))
							);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const cards = trigger.getg(player).filter((i) => get.subtypes(i, player).includes('equip1'));
					const target = event.targets[0];
					await player.give(cards, target, 'give');
					target.addSkill('gjcxs_zengdao_buff');
					if (target === _status.currentPhase) {
						target.storage.gjcxs_zengdao_buff.sc[1]++;
						target.storage.gjcxs_zengdao_buff.cs[1]++;
					} else {
						target.storage.gjcxs_zengdao_buff.sc[0]++;
						target.storage.gjcxs_zengdao_buff.cs[0]++;
					}
				},
				subSkill: {
					buff: {
						audio: false,
						init(player) {
							player.storage.gjcxs_zengdao_buff = {
								sc: [0, 0],
								cs: [0, 0],
							};
						},
						onremove: true,
						mark: true,
						intro: {
							markcount(storage, player) {
								return player.storage.gjcxs_zengdao_buff.cs[0] + player.storage.gjcxs_zengdao_buff.cs[1];
							},
							content(storage, player, skill) {
								let info = '';
								if (player.storage.gjcxs_zengdao_buff.cs[0])
									info =
										(player === _status.currentPhase ? '本' : '下') +
										'回合首次造成的伤害+' +
										player.storage.gjcxs_zengdao_buff.sc[0] +
										'、使用【杀】的次数上限+' +
										player.storage.gjcxs_zengdao_buff.cs[0];
								if (player.storage.gjcxs_zengdao_buff.cs[1])
									info +=
										(info.length ? '；' : '') +
										'下回合首次造成的伤害+' +
										player.storage.gjcxs_zengdao_buff.sc[1] +
										'、使用【杀】的次数上限+' +
										player.storage.gjcxs_zengdao_buff.cs[1];
								return info;
							},
						},
						mod: {
							cardUsable(card, player, num) {
								if (card.name === 'sha' && player === _status.currentPhase && player.storage.gjcxs_zengdao_buff.cs[0])
									return num + player.storage.gjcxs_zengdao_buff.cs[0];
							},
						},
						trigger: {
							player: 'phaseAfter',
							source: 'damageBegin1',
						},
						filter(event, player) {
							return (
								event.name === 'phase' ||
								(player.storage.gjcxs_zengdao_buff.sc[0] && !player.getHistory('sourceDamage').length)
							);
						},
						silent: true,
						content() {
							if (trigger.name === 'phase') {
								player.storage.gjcxs_zengdao_buff.sc = [player.storage.gjcxs_zengdao_buff.sc[1], 0];
								player.storage.gjcxs_zengdao_buff.cs = [player.storage.gjcxs_zengdao_buff.cs[1], 0];
								if (player.storage.gjcxs_zengdao_buff.cs[0]) player.markSkill('gjcxs_zengdao_buff');
								else player.removeSkill('gjcxs_zengdao_buff');
							} else {
								player.logSkill('gjcxs_zengdao_buff');
								trigger.num += player.storage.gjcxs_zengdao_buff.sc[0];
								game.log(player, '令此伤害', '#y+' + player.storage.gjcxs_zengdao_buff.sc[0]);
							}
						},
					},
				},
			},
			gjcxs_mingcha: {
				audio: 'mingcha',
				trigger: {
					player: 'phaseEnd',
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2('gjcxs_mingcha'), lib.filter.notMe)
						.set('ai', (target) => {
							let eff = Math.min(
								((2 + target.countCards('h')) * get.effect(target, { name: 'guohe' }, target, get.event('player'))) / 2.7,
								get.effect(target, { name: 'losehp' }, target, get.event('player'))
							);
							if (target.countCards('h') < 2 && get.attitude(get.event('player'), target) > 0)
								eff += get.recoverEffect(target, target, get.event('player'));
							return eff;
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					target.storage.gjcxs_mingcha_cha = player;
					target.addSkill('gjcxs_mingcha_cha');
				},
				subSkill: {
					cha: {
						mark: 'character',
						marktext: '察',
						intro: {
							content: '祸兮，福之所倚，福兮，祸之所伏',
						},
						onremove: true,
						trigger: {
							player: 'phaseUseEnd',
						},
						silent: true,
						charlotte: true,
						async content(event, trigger, player) {
							const rh = player.storage.gjcxs_mingcha_cha;
							if (rh.isIn()) rh.logSkill('gjcxs_mingcha', player);
							await player.showHandcards();
							let cards = player.getCards('h', { color: 'black' }),
								result;
							if (cards.length) {
								result = await player
									.chooseControl('弃牌', '掉血')
									.set('choiceList', ['弃置所有黑色手牌', '失去1点体力'])
									.set('prompt', '明察：请选择一项')
									.set('ai', () => get.event('idx'))
									.set(
										'idx',
										(function () {
											if (!cards.length) return 0;
											if (get.effect(player, { name: 'losehp' }, player, get.event('player')) >= 0) return 1;
											if (player.hp < 2 || cards.length < 2) return 0;
											if (player.hasSkill('gjcxs_jingzhong') && get.attitude(get.event('player'), player) > 0)
												return 0;
											if (cards.length > 3) return 1;
											return 0;
										})()
									)
									.forResult();
								if (result.index) await player.loseHp();
								else {
									cards = player.getCards('h', { color: 'black' });
									if (cards.length) await player.modedDiscard(cards);
								}
							} else if (rh.isIn() && player.isDamaged()) {
								result = await rh
									.chooseBool('是否令' + get.translation(player) + '回复1点体力？')
									.set('ai', () => {
										let target = get.event('target');
										return get.recoverEffect(target, target, get.event('player')) > 0;
									})
									.set('target', player)
									.forResultBool();
								if (result) await target.recover();
							}
							player.removeSkill('gjcxs_mingcha_cha');
						},
					},
				},
			},
			gjcxs_jingzhong: {
				audio: 'jingzhong',
				init() {
					game.addGlobalSkill('gjcxs_jingzhong_global');
				},
				onremove() {
					if (
						!game.hasPlayer((cur) => {
							return cur.hasSkill('gjcxs_jingzhong', null, null, false);
						}, true)
					)
						game.removeGlobalSkill('gjcxs_jingzhong_global');
				},
				trigger: {
					global: 'phaseEnd',
				},
				filter(event, player) {
					if (player === event.player || !event.player.isIn()) return false;
					let num = 0;
					event.player.getHistory('lose', (evt) => {
						if (evt.type === 'discard' /*&& evt.getParent('phaseUse') === event*/) {
							for (let i of evt.cards2) {
								if (get.color(i, event.player) === 'black') num++;
							}
						}
					});
					return (
						num > 1 &&
						event.player.hasHistory('useCard', (evt) => {
							// if (evt.getParent('phaseUse') !== event) return false;
							return evt.cards && evt.cards.filterInD('d').length;
						})
					);
				},
				round: 1,
				logTarget: 'player',
				check(event, player) {
					let num = 0,
						cur = event.player.next,
						seat = event.player.getSeatNum();
					while (cur.getSeatNum() > seat) {
						num += cur.needsToDiscard(1);
						cur = cur.next;
					}
					if (num < 2 * player.hp) return true;
					let cards = [];
					event.player.getHistory('useCard', (evt) => {
						// if (evt.getParent('phaseUse') !== event) return false;
						if (evt.cards) cards.addArray(evt.cards.filterInD('d'));
					});
					if (
						(cards.reduce((val, i) => {
							return val + get.value(i, player);
						}, 0) /
							cards.length) *
							Math.min(2, cards.length) <
						num
					)
						return false;
					return true;
				},
				content() {
					let cards = [];
					trigger.player.getHistory('useCard', (evt) => {
						// if (evt.getParent('phaseUse') !== trigger) return false;
						if (evt.cards) cards.addArray(evt.cards.filterInD('d'));
					});
					if (cards.length) player.gain(cards.randomGets(2), 'gain2');
				},
				subSkill: {
					global: {
						mod: {
							aiUseful(player, card, num) {
								if (num <= 0 || player !== _status.currentPhase) return num;
								let rh = game.findPlayer((i) => {
									return (
										player !== i &&
										i.hasSkill('gjcxs_jingzhong') &&
										i.storage.gjcxs_jingzhong_roundcount - game.roundNumber <= -1
									);
								});
								if (num <= 0 || get.color(card, player) !== 'black') return num;
								return num * (1 - 0.2 * get.sgn(get.attitude(player, rh)));
							},
						},
						trigger: {
							player: 'dieAfter',
						},
						filter(event, player) {
							return !game.hasPlayer((cur) => {
								return cur.hasSkill('gjcxs_jingzhong', null, null, false);
							}, true);
						},
						silent: true,
						forceDie: true,
						content() {
							game.removeGlobalSkill('gjcxs_jingzhong_global');
						},
					},
				},
			},
			gjcxs_paiyi: {
				audio: 'ext:官将重修/audio/skill:2',
				trigger: {
					global: 'phaseBegin',
				},
				filter(event, player) {
					return (
						event.player !== player &&
						event.player.countCards('j') > 0 &&
						event.player.isDamaged() &&
						player.hasCard((card) => {
							return get.color(card) === 'red';
						}, 'he')
					);
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseToDiscard('he', get.prompt2(event.name.slice(0, -5), trigger.player), (card) => {
							return get.color(card) === 'red';
						})
						.set('ai', (card) => {
							let player = _status.event.player;
							if (get.attitude(player, get.event('target')) <= 0) return false;
							return 7 - get.value(card);
						})
						.set('target', trigger.player)
						.set('logSkill', [event.name.slice(0, -5), trigger.player])
						.forResult();
					event.result.skill_popup = false;
				},
				async content(event, trigger, player) {
					await trigger.player.recover();
					if (!trigger.player.countCards('h')) return;
					const result = await trigger.player
						.chooseBool('是否展示所有手牌并弃置其中的黑色牌，然后销毁判定区内的所有牌？')
						.set('ai', () => get.event('bool'))
						.set(
							'bool',
							(function () {
								let js = trigger.player.countCards('j'),
									bs = trigger.player.countCards('h', (card) => {
										return lib.filter.cardDiscardable(card, player, event.name) && get.color(card) === 'black';
									});
								if (!bs) return true;
								if (trigger.player.hasSkillTag('rejudge') && bs > js) return false;
								if (trigger.player.hasJudge('bingliang') && (bs > 2 || trigger.player.hasSkillTag('rejudge')))
									return false;
								if (trigger.player.hasJudge('lebu')) {
									if (!trigger.player.needsToDiscard(2) || trigger.player.hasSkillTag('rejudge')) return false;
									if (trigger.player.needsToDiscard(2) > bs) return true;
								}
								return 1.75 * js > bs;
							})()
						)
						.forResult();
					if (result.bool) {
						let cards1 = trigger.player.getCards('h', { color: 'black' });
						let cards2 = trigger.player.getCards('j');
						await trigger.player.showHandcards();
						if (cards1) await trigger.player.modedDiscard(cards1);
						if (cards2) {
							game.log(cards2, '已被移出游戏');
							await game.cardsGotoSpecial(cards2);
						}
					}
				},
			},
			gjcxs_jizu: {
				audio: 'ext:官将重修/audio/skill:true',
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				filter(event, player) {
					return player.canAddJudge({ name: 'phd_wy' });
				},
				forced: true,
				async content(event, trigger, player) {
					let card = game.createCard('phd_wy', 'spade', 4);
					await player.addJudge(card);
					player.$draw(card);
				},
				group: 'gjcxs_jizu_gain',
				subSkill: {
					gain: {
						audio: false,
						trigger: {
							player: 'phaseJieshuBegin',
						},
						forced: true,
						async content(event, trigger, player) {
							let num = player.getDamagedHp(),
								cards = [];
							for (let i = 0; i <= num; i++) {
								let card = get.cardPile((card) => {
									return get.color(card) === 'red' && !cards.includes(card);
								});
								if (card) cards.push(card);
							}
							if (cards.length) await player.gain(cards, 'gain2');
							game.updateRoundNumber();
						},
						sub: true,
					},
				},
			},
			gjcxs_shidu: {
				audio: 'shiduo',
				init: (player) => {
					player.storage.gjcxs_shidu = 5;
				},
				trigger: {
					global: ['loseAfter', 'loseAsyncAfter'],
				},
				filter(event, player) {
					let target = _status.currentPhase;
					if (!target || !target.isIn() || event.type !== 'discard' || target === player || !target.isPhaseUsing()) return false;
					let evt = event.getl(target);
					for (let i of evt.hs) {
						if (get.position(i, true) === 'd') return true;
					}
					return false;
				},
				async cost(event, trigger, player) {
					const target = _status.currentPhase;
					const cards = trigger.getl(target).hs.filterInD('d');
					let max = Math.min(cards.length, player.storage.gjcxs_shidu);
					if (max) {
						event.result = await player
							.chooseButton(
								[
									'是否发动〖识度〗获得至多' +
										get.cnNumber(max) +
										'张牌，然后令' +
										get.translation(target) +
										'获得其余的牌？',
									cards,
								],
								[0, max]
							)
							.set('source', target)
							.set(
								'bool',
								(function () {
									if (get.attitude(player, target) > 0) return true;
									let arr = [];
									cards.forEach((i) => {
										arr.push([get.value(i, player), get.value(i, target)]);
									});
									arr.sort((a, b) => {
										if (a[0] === b[0]) return b[1] - a[1];
										return b[0] - a[0];
									});
									let i,
										val = 0;
									for (i = 0; i < max; i++) {
										if (arr[i][0] < 6) break;
										val += arr[i][0];
									}
									for (; i < arr.length; i++) {
										val -= arr[i][1];
									}
									return val > 0;
								})()
							)
							.set('processAI', () => {
								if (!_status.event.bool) return false;
								let list = _status.event.cards;
								let player = _status.event.player;
								let source = _status.event.source;
								if (get.attitude(player, source) <= 0)
									return {
										bool: true,
										links: list.filter((card) => get.value(card, player) > 6),
									};
								return {
									bool: true,
									links: list.filter((card) => get.value(card, player) - get.value(card, source) > player.hp),
								};
							})
							.set('cards', cards)
							.forResult();
						event.cost_data = event.result.links;
					} else
						event.result = await player
							.chooseBool(
								get.prompt(event.name.slice(0, -5)),
								'令' +
									get.translation(event.target) +
									'收回' +
									get.translation(event.cards) +
									'，然后加1点体力上限、此技能失效且你不能使用或打出手牌直至当前回合结束。'
							)
							.set('ai', () => {
								let player = _status.event.player,
									source = _status.event.source;
								if (get.attitude(player, source) >= 0) return true;
								let gain = 0;
								for (let i of _status.event.cards) {
									gain += get.value(i, source);
								}
								return gain <= -4;
							})
							.set('source', event.target)
							.set('cards', event.cards)
							.forResult();
				},
				logTarget(event, player) {
					return _status.currentPhase;
				},
				async content(event, trigger, player) {
					const cards = trigger.getl(_status.currentPhase).hs.filterInD('d'),
						links = event.cost_data;
					if (links) {
						await player.gain(links, 'gain2');
						player.storage.gjcxs_shidu -= links.length;
						cards.removeArray(links);
					}
					if (!links || !links.length) await player.gainMaxHp();
					if (cards.length) await target.gain(cards, 'gain2');
					player.addTempSkill('gjcxs_shidu_block');
					player.tempBanSkill('gjcxs_shidu');
				},
				subSkill: {
					block: {
						mark: true,
						mod: {
							cardEnabled2: (card) => {
								if (get.position(card) === 'h') return false;
							},
						},
						intro: {
							content: '不能使用或打出手牌',
						},
						charlotte: true,
					},
				},
			},
			gjcxs_yuanrong: {
				audio: 'quanfeng',
				enable: 'phaseUse',
				filter(event, player) {
					return (
						!player.getStat().skill.gjcxs_yuanrong &&
						game.hasPlayer((current) => {
							return player.canCompare(current);
						})
					);
				},
				filterTarget(card, player, target) {
					return player !== target && player.canCompare(target);
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					const result = await player
						.chooseToCompare(target)
						.set('small', player.hp >= Math.ceil(player.maxHp / 2))
						.forResult();
					if (result.bool) {
						let hp = Math.ceil(player.maxHp / 2) - player.hp;
						if (hp) {
							if (hp > 0) await player.recover(hp);
							else await player.loseHp(-hp);
						}
					} else {
						const next = target.draw(game.countGroup());
						next.gaintag.add('gjcxs_yuanrong');
						await next;
						target.when({ player: 'phaseUseBegin' }).then(() => {
							let cards = player.getCards('h', (i) => i.hasGaintag('gjcxs_yuanrong'));
							if (cards.length) player.modedDiscard(cards);
						});
					}
				},
				ai: {
					order: 8.7,
					result: {
						player(player, target) {
							let cache = lib.skill.gjcxs_yuanrong.ai.cacheAi(player);
							let att = get.attitude(player, target);
							let known = target.getKnownCards(player);
							let th = target.countCards('h') - known.length;
							let func = (odds, status) => {
								if (status && known.some((i) => get.number(i, target) < cache.m)) odds = 1;
								if (!status && known.some((i) => get.number(i, target) >= cache.m)) odds = 0;
								_status.event.putTempCache('gjcxs_yuanrong', target.playerid, odds);
								return odds * (cache.hp - cache.draw) + cache.draw;
							};
							if (att >= 0) {
								if (!att || cache.win) return func(1 - Math.pow((14 - cache.m) / 13, th), 1);
								return func(Math.pow((cache.m - 1) / 13, th), 0);
							}
							if (cache.win) return func(Math.pow((cache.m - 1) / 13, th), 1);
							return func(1 - Math.pow((14 - cache.m) / 13, th), 0);
						},
						target(player, target) {
							let cache = lib.skill.gjcxs_yuanrong.ai.cacheAi(player);
							let odds = _status.event.getTempCache('gjcxs_yuanrong', target.playerid);
							if (typeof odds !== 'number') {
								alert('Error: The odds of "gjcxs_yuanrong" is not a number!');
								lib.skill.gjcxs_yuanrong.ai.result.player(player, target);
								odds = _status.event.getTempCache('gjcxs_yuanrong', target.playerid);
							}
							let att = get.attitude(player, target);
							if (att > 0 && player.hasSkill('gjcxs_shidu'))
								return (1 - odds) * Math.max(0, cache.group - player.storage.gjcxs_shidu);
							return (1 - odds) * cache.group * (1 - 1 / Math.sqrt(get.distance(player, target, 'absolute')));
						},
					},
					cacheAi: (player) => {
						let cache = _status.event.getTempCache('gjcxs_yuanrong', 'tempAi');
						if (cache) return cache;
						let hp = Math.ceil(player.maxHp / 2) - player.hp;
						let draw = player.hasSkill('gjcxs_shidu') ? game.countGroup() : 0;
						let win = 2 * hp > draw;
						let m = win ? 0 : 13;
						player.getCards('h', (i) => {
							if (hp > 0) m = Math.max(m, get.number(i, player));
							else m = Math.min(m, get.number(i, player));
						});
						draw = Math.min(draw, player.storage.gjcxs_shidu) - 1;
						cache = {
							hp: 2 * hp - 1,
							draw: draw,
							win: win,
							m: m,
							group: game.countGroup(),
						};
						_status.event.putTempCache('gjcxs_yuanrong', 'tempAi', cache);
						return cache;
					},
					threaten(player, target) {
						if (target.hasSkill('gjcxs_shidu')) return Math.sqrt(1 + game.countGroup());
						return 1;
					},
				},
			},
			gjcxs_daishi: {
				audio: 'xinfu_zhenxing',
				init(player) {
					game.countPlayer((cur) => {
						cur.storage.gjcxs_daishi_gain = 0;
					});
				},
				trigger: {
					global: 'roundStart',
				},
				filter(event, player) {
					if (game.roundNumber <= 1) return false;
					return !game.hasPlayer((cur) => {
						return cur.storage.gjcxs_daishi_gain > player.storage.gjcxs_daishi_gain;
					});
				},
				forced: true,
				content() {
					player.addTempSkill('gjcxs_daishi_damage', 'roundStart');
					player.addTempSkill('gjcxs_daishi_task', 'roundStart');
					player.addMark('gjcxs_daishi_task', player.storage.gjcxs_daishi_gain);
					game.countPlayer((cur) => {
						cur.storage.gjcxs_daishi_gain = 0;
					});
				},
				group: 'gjcxs_daishi_gain',
				subSkill: {
					gain: {
						trigger: {
							global: ['gainAfter', 'loseAsyncAfter'],
						},
						filter(event, player) {
							if (event.name === 'loseAsync') return event.type === 'gain';
							return event.giver;
						},
						silent: true,
						content() {
							game.countPlayer((cur) => {
								let cards = trigger.getl(cur).cards2;
								if (!cards.length) return;
								game.countPlayer((tar) => {
									if (cur === tar) return false;
									let cardsg = trigger.getg(tar);
									for (let i of cardsg) {
										if (cards.includes(i)) tar.storage.gjcxs_daishi_gain++;
									}
								});
							});
						},
						sub: true,
					},
					damage: {
						trigger: {
							source: 'damageBegin2',
						},
						forced: true,
						charlotte: true,
						content() {
							trigger.num++;
						},
					},
					task: {
						mark: true,
						marktext: '使',
						onremove(player) {
							if (player.storage.gjcxs_daishi_task) player.loseHp(player.storage.gjcxs_daishi_task);
						},
						intro: {
							content(storage, player) {
								let str = '本轮造成伤害+1';
								if (storage) return str + '，还需造成至少<font color=#FFFF00>' + storage + '</font>点伤害';
								return str;
							},
						},
						trigger: {
							source: 'damageSource',
						},
						filter(event, player) {
							return player.hasMark('gjcxs_daishi_task');
						},
						silent: true,
						charlotte: true,
						content() {
							player.removeMark('gjcxs_daishi_task', trigger.num);
						},
					},
				},
			},
			gjcxs_qianxin: {
				audio: 'xinfu_qianxin',
				init() {
					game.addGlobalSkill('gjcxs_qianxin_global');
				},
				onremove() {
					if (
						!game.hasPlayer((cur) => {
							return cur.hasSkill('gjcxs_qianxin', null, null, false);
						}, true)
					)
						game.removeGlobalSkill('gjcxs_qianxin_global');
				},
				trigger: {
					player: 'dieAfter',
				},
				filter(event, player) {
					return !game.hasPlayer((cur) => {
						return cur.hasSkill('gjcxs_qianxin', null, null, false);
					}, true);
				},
				silent: true,
				forceDie: true,
				content() {
					game.removeGlobalSkill('gjcxs_qianxin_global');
				},
				subSkill: {
					global: {
						trigger: {
							player: 'phaseZhunbeiBegin',
						},
						filter(event, player) {
							if (!player.countCards('h')) return false;
							if (player.hasSkill('gjcxs_qianxin')) return true;
							return game.hasPlayer((cur) => {
								return player !== cur && cur.hasSkill('gjcxs_qianxin');
							});
						},
						async cost(event, trigger, player) {
							event.result = await player
								.chooseCardTarget({
									prompt: '是否发动〖遣信〗，将一张手牌交给其他角色？',
									filterCard: true,
									filterTarget(card, player, target) {
										if (player === target) return false;
										if (player.hasSkill('gjcxs_qianxin')) return true;
										return target.hasSkill('gjcxs_qianxin');
									},
									position: 'h',
									ai1: (card) => {
										return 12 - get.value(card);
									},
									ai2: (target) => {
										let att = get.attitude(_status.event.player, target);
										if (att <= 0) return 0;
										return (att * get.threaten(target)) / Math.max(1, target.hp);
									},
								})
								.forResult();
						},
						async content(event, trigger, player) {
							const target = event.targets[0];
							player.give(event.cards, target);
							let result = await target
								.chooseControl()
								.set('choiceList', ['手牌上限-2直至你下个回合结束', '令' + get.translation(player) + '摸一张牌'])
								.set('prompt', '遣信：请选择一项')
								.set('ai', () => get.event('idx'))
								.set(
									'idx',
									(function () {
										let att = get.attitude(target, player);
										if (att > 0) return 1;
										let dis = player.needsToDiscard(2, null, true);
										if (target.getHandcardLimit() <= 0 || dis <= 0) return 0;
										if (!att || dis - player.needsToDiscard(0, null, true) > 1) return 1;
										return 0;
									})()
								)
								.forResult();
							if (result.index) player.draw();
							else {
								if (target.storage.gjcxs_qianxin_sx) target.storage.gjcxs_qianxin_sx += 2;
								else target.storage.gjcxs_qianxin_sx = 2;
								target.addTempSkill('gjcxs_qianxin_sx', { player: 'phaseEnd' });
							}
						},
					},
					sx: {
						mark: true,
						marktext: '谴',
						intro: {
							content: '手牌上限-#',
						},
						mod: {
							maxHandcard(player, num) {
								return num - player.storage.gjcxs_qianxin_sx;
							},
						},
						charlotte: true,
					},
				},
				ai: {
					threaten: 3.6,
				},
			},
			gjcxs_lizhan: {
				audio: 'dczhanyi',
				trigger: {
					player: 'phaseUseBegin',
				},
				async cost(event, trigger, player) {
					let result = await player
						.chooseControl(['basic', 'trick', 'equip'], 'cancel2')
						.set('prompt', get.prompt('gjcxs_lizhan'))
						.set('prompt2', '弃置一种类型的所有牌')
						.set('ai', () => {
							let player = _status.event.player,
								getval = (control) => {
									if (control === 'cancel2') return 0;
									let hs = player.getCards('h'),
										eff = 0;
									let es = player.getCards('e');
									let ss = player.getCards('s');
									let sha = player.getCardUsable({ name: 'sha' });
									for (let i of hs) {
										let type = get.type2(i);
										if (type === control) eff -= get.value(i, player);
										else {
											switch (type) {
												case 'basic':
													if (sha > 0 && get.name(i) === 'sha') {
														sha--;
														let add = 3;
														if (!player.hasValueTarget(i) && player.hasValueTarget(i, false))
															add += player.getUseValue(i, false);
														eff += add;
													}
													break;
												case 'trick':
													if (player.hasValueTarget(i)) eff += 6;
													break;
												case 'equip':
													if (player.hasValueTarget({ name: 'guohe_copy2' }))
														eff += player.getUseValue({ name: 'guohe_copy2' });
													break;
											}
										}
									}
									if (control === 'equip')
										for (let i of es) {
											eff -= get.value(i, player);
										}
									else {
										for (let i of ss) {
											let type = get.type2(i);
											if (type === control) continue;
											switch (type) {
												case 'basic':
													if (sha > 0 && get.name(i) === 'sha') {
														sha--;
														let add = 3;
														if (!player.hasValueTarget(i) && player.hasValueTarget(i, false))
															add += player.getUseValue(i, false);
														eff += add;
													}
													break;
												case 'trick':
													if (player.hasValueTarget(i)) eff += 6;
													break;
												case 'equip':
													if (player.hasValueTarget({ name: 'guohe_copy2' }))
														eff += player.getUseValue({ name: 'guohe_copy2' });
													break;
											}
										}
									}
									return eff;
								};
							let controls = _status.event.controls.slice(0);
							let eff = 0,
								current = 'cancel2';
							for (let i of controls) {
								let effx = getval(i);
								if (effx > eff) {
									eff = effx;
									current = i;
								}
							}
							return current;
						})
						.forResult();
					event.result = {
						bool: result.control !== 'cancel2',
						cost_data: result.control,
					};
				},
				async content(event, trigger, player) {
					let type = event.cost_data,
						cards = player.getCards('he', (card) => {
							return get.type2(card, player) === type;
						});
					if (cards.length) await player.modedDiscard(cards);
					for (let i of ['basic', 'trick', 'equip']) {
						if (i !== type) player.addTempSkill('dczhanyi_' + i, { player: 'phaseBegin' });
					}
				},
				ai: {
					threaten: 2,
				},
			},
			gjcxs_jianliang: {
				audio: 'jianliang',
				trigger: {
					player: 'phaseUseBegin',
				},
				filter(event, player) {
					return player.countCards('h');
				},
				forced: true,
				async content(event, trigger, player) {
					let suits = [];
					await player.showHandcards();
					player.countCards('h', (card) => {
						suits.add(get.suit(card, player));
					});
					const result = await player
						.chooseTarget('简亮：选择至多' + get.cnNumber(suits.length) + '名角色各摸一张牌', [1, suits.length], true)
						.set('ai', (target) => {
							return get.attitude(_status.event.player, target);
						})
						.forResult();
					if (result.bool) {
						let targets = result.targets.sortBySeat();
						player.line(targets, 'green');
						await game.asyncDraw(targets);
					}
				},
			},
			gjcxs_sujian: {
				audio: 'olsujian',
				trigger: {
					player: 'phaseDiscardEnd',
				},
				filter(event, player) {
					return player.hasHistory('lose', (evt) => {
						return evt.type === 'discard' && evt.getParent('phaseDiscard') === event && evt.cards2 && evt.cards.length;
					});
				},
				forced: true,
				async content(event, trigger, player) {
					if (trigger.delay === false) await game.delay();
					let cards = [];
					player.getHistory('lose', (evt) => {
						if (evt.type === 'discard' && evt.getParent('phaseDiscard') === trigger && evt.cards2)
							for (let i of evt.cards2) {
								if (get.position(i, true) === 'd') cards.push(i);
							}
					});
					if (_status.connectMode)
						game.broadcastAll(() => {
							_status.noclearcountdown = true;
						});
					let given_map = {},
						targets;
					while (cards.length) {
						const result = await player
							.chooseButton(['素俭：请分配本次弃置的牌', cards], [1, cards.length], true)
							.set('ai', (button) => {
								if (_status.event.goon && ui.selected.buttons.length === 0) return 1 + Math.abs(get.value(button.link));
								return 0;
							})
							.set(
								'goon',
								(() => {
									for (let i = 0; i < cards.length; i++) {
										if (cards[i].name === 'du') return true;
									}
									return game.hasPlayer((current) => {
										return player !== current && get.attitude(player, current) > 0;
									});
								})()
							)
							.forResult();
						if (!result.bool) break;
						cards.removeArray(result.links);
						const togive = result.links.slice(0);
						targets = await player
							.chooseTarget('选择一名其他角色获得' + get.translation(result.links), true, lib.filter.notMe)
							.set('ai', (target) => {
								let att = get.attitude(_status.event.player, target);
								if (target.hasJudge('lebu')) {
									if (att > 0) att /= 10;
									else if (att === 0) att += 0.01;
									else att *= 5;
								}
								att /= target.hp;
								if (_status.event.enemy) return -att;
								if (att > 0) return att / (1 + target.countCards('h'));
								return att * (1 + target.countCards('h'));
							})
							.set('enemy', get.value(togive[0], player, 'raw') < 0)
							.forResultTargets();
						if (targets && targets.length) {
							let id = targets[0].playerid,
								map = given_map;
							if (!map[id]) map[id] = [];
							map[id].addArray(togive);
						}
					}
					if (_status.connectMode)
						game.broadcastAll(() => {
							delete _status.noclearcountdown;
							game.stopCountChoose();
						});
					let list = [];
					targets = [];
					for (let i in given_map) {
						let source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
						list.push([source, given_map[i]]);
						targets.push(source);
					}
					if (!targets.length) return;
					player.line(targets, 'green');
					targets = targets.sortBySeat();
					const next = game.loseAsync({
						gain_list: list,
						giver: player,
						animate: 'gain2',
					});
					next.setContent('gaincardMultiple');
					await next;
					if (get.mode() !== 'identity' || player.identity !== 'nei') player.addExpose(0.15);
					while (targets.length) {
						const tar = targets.shift(),
							suits = [];
						if (tar.isDamaged()) {
							tar.countCards('h', (card) => {
								let suit = get.suit(card, tar);
								if (!suits.includes(suit)) suits.add(suit);
							});
							if (suits.length >= tar.hp) await tar.recover();
						}
					}
				},
			},
			gjcxs_zhenting: {
				audio: 'spzhenting',
				init(player) {
					player.storage.gjcxs_zhenting = 0;
					player.addSkill('gjcxs_zhenting_reset');
				},
				onremove(player) {
					delete player.storage.gjcxs_zhenting;
					player.removeSkill('gjcxs_zhenting_reset');
				},
				trigger: {
					global: 'useCard',
				},
				filter(event, player) {
					return player !== event.player && player.countCards('he') >= player.storage.gjcxs_zhenting;
				},
				async cost(event, trigger, player) {
					let eff = 0;
					if (!trigger.targets.length && get.info(trigger.card, false).notarget)
						eff += get.effect(trigger.player, trigger.card, trigger.player, _status.event.player);
					for (let i of trigger.targets) {
						eff += get.effect(i, trigger.card, trigger.player, _status.event.player);
					}
					if (player.storage.gjcxs_zhenting)
						event.result = await player
							.chooseToDiscard('he', player.storage.gjcxs_zhenting)
							.set('prompt', get.prompt('gjcxs_zhenting', trigger.player))
							.set(
								'prompt2',
								'弃置' +
									get.cnNumber(player.storage.gjcxs_zhenting) +
									'张牌令' +
									get.translation(trigger.player) +
									'使用的' +
									get.translation(trigger.card) +
									'无效'
							)
							.set('ai', (card) => {
								if (_status.event.eff >= 0) return 0;
								if (
									_status.event.card.name === 'tiesuo' ||
									_status.event.card.name === 'huogong' ||
									_status.event.card.name === 'yiyi' ||
									_status.event.card.name === 'phd_wy' ||
									_status.event.card.name === 'shandian' ||
									(get.type(_status.event.card) === 'equip' &&
										get.subtype(_status.event.card) !== 'equip2' &&
										get.subtype(_status.event.card) !== 'equip5')
								)
									return 0;
								let val = _status.event.eff;
								if (!ui.selected.cards.length || !_status.event.kz) val += get.value(card, _status.event.player);
								for (let i of ui.selected.cards) {
									val += get.value(i, _status.event.player);
								}
								return -val;
							})
							.set('eff', eff)
							.set('card', trigger.card)
							.set('kz', player.hasSkill('gjcxs_kezun'))
							.forResult();
					else
						event.result = await player
							.chooseBool()
							.set('prompt', get.prompt(event.name, trigger.player))
							.set('prompt2', '令' + get.translation(trigger.player) + '使用的' + get.translation(trigger.card) + '无效')
							.set('ai', () => {
								return _status.event.eff < 0;
							})
							.set('eff', eff)
							.forResult();
				},
				logTarget: 'player',
				async content(event, trigger, player) {
					if (get.mode() !== 'identity' || player.identity !== 'nei') player.addExpose(0.18);
					trigger.targets.length = 0;
					trigger.all_excluded = true;
					player.storage.gjcxs_zhenting++;
					game.log(trigger.card, '被无效了');
				},
				group: 'gjcxs_zhenting_gain',
				subSkill: {
					gain: {
						trigger: {
							player: 'phaseEnd',
						},
						direct: true,
						content() {
							let cards = [];
							game.getGlobalHistory('cardMove', (evt) => {
								if (evt.player === player) return;
								if (evt.name === 'cardsDiscard' && evt.parent.name === 'orderingDiscard') return;
								for (let i of evt.cards) {
									if (get.position(i, true) === 'd') cards.push(i);
								}
							});
							if (cards.length) {
								player.logSkill('gjcxs_zhenting');
								player.gain(cards, 'gain2');
							}
						},
						sub: true,
					},
					reset: {
						trigger: {
							global: 'roundStart',
						},
						silent: true,
						charlotte: true,
						content() {
							player.storage.gjcxs_zhenting = 0;
						},
					},
				},
				ai: {
					threaten: 3,
				},
			},
			gjcxs_kezun: {
				trigger: {
					player: 'loseAfter',
					global: 'loseAsyncAfter',
				},
				filter(event, player) {
					if (event.type !== 'discard') return false;
					let evt = event.getl(player);
					return evt && evt.cards2 && evt.cards2.length >= 2;
				},
				async cost(event, trigger, player) {
					let cards = trigger.getl(player).cards2.filterInD('d'),
						result = {};
					if (cards.length)
						result = await player
							.chooseButton(['克遵：选择要获得的牌', cards], 1)
							.set('ai', (button) => get.value(button.link, _status.event.player, 'raw'));
					event.result = {
						bool: result.bool,
						cost_data: result.links,
					};
				},
				async content(event, trigger, player) {
					player.gain(event.cost_data, 'gain2', 'log');
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (card.name === 'yiyi') return [1, 1];
						},
					},
				},
			},
			gjcxs_weien: {
				audio: 'refuman',
				init() {
					game.addGlobalSkill('gjcxs_weien_global');
				},
				onremove() {
					if (
						!game.hasPlayer((cur) => {
							return cur.hasSkill('gjcxs_weien', null, null, false);
						}, true)
					)
						game.removeGlobalSkill('gjcxs_weien_global');
				},
				enable: 'phaseUse',
				filter(event, player) {
					return (
						player.countCards('h') &&
						game.hasPlayer((cur) => {
							return (
								player !== cur &&
								!cur.hasCard((i) => {
									return i.hasGaintag('gjcxs_weien');
								})
							);
						})
					);
				},
				filterCard: true,
				position: 'h',
				filterTarget(card, player, target) {
					return (
						target !== player &&
						!target.hasCard((i) => {
							return i.hasGaintag('gjcxs_weien');
						})
					);
				},
				lose: false,
				delay: false,
				discard: false,
				check(card) {
					let num = Math.ceil(card.number / 2);
					if (num <= 0 || num >= game.countPlayer()) return -1;
					let player = get.event().player,
						f = game.findPlayer((cur) => {
							return (
								player !== cur &&
								get.attitude(player, cur) > 0 &&
								!cur.hasCard((i) => {
									return i.hasGaintag('gjcxs_weien');
								})
							);
						}),
						ens = game.countPlayer((cur) => {
							return cur !== f && get.effect(cur, { name: 'nanman' }, f, player) >= 0;
						});
					if (num > ens) return 0;
					return num / (7 + num - get.value(card));
				},
				content() {
					player.give(cards, target, 'give').gaintag.add('gjcxs_weien');
				},
				ai: {
					order: 4,
					result: {
						target(player, target) {
							if (!ui.selected.cards.length) return 0;
							let effs = [],
								num = Math.ceil(get.number(ui.selected.cards[0], target) / 2);
							game.countPlayer((cur) => {
								if (cur === target) return false;
								effs.push(get.effect(cur, { name: 'nanman', cards: ui.selected.cards }, target, target));
							});
							if (num < 0 || num > effs.length) return get.effect(target, { name: 'losehp' }, target, target);
							return effs
								.sort((a, b) => b - a)
								.slice(0, num)
								.reduce((acc, val) => acc + val, 0);
						},
					},
				},
				subSkill: {
					global: {
						mod: {
							aiOrder(player, card, num) {
								if (get.itemtype(card) === 'card' && card.hasGaintag('gjcxs_weien'))
									return Math.max(get.order({ name: 'nanman' }) - 0.2, num, 1);
							},
							aiValue(player, card, num) {
								if (get.itemtype(card) !== 'card' || !card.hasGaintag('gjcxs_weien')) return num;
								let number = Math.ceil(get.number(card, player) / 2);
								if (number <= 0 || number > game.countPlayer((cur) => cur !== player)) return -10;
								return (
									12 -
									3 *
										Math.abs(
											number -
												game.countPlayer((cur) => {
													return get.attitude(player, cur) <= 0;
												})
										)
								);
							},
							aiUseful(player, card, num) {
								if (get.itemtype(card) === 'card' && card.hasGaintag('gjcxs_weien')) return -10;
							},
							cardname(card, player) {
								if (get.itemtype(card) === 'card' && card.hasGaintag('gjcxs_weien')) return 'nanman';
							},
							cardEnabled(card, player) {
								if (card.cards)
									for (let i of card.cards) {
										if (i.hasGaintag('gjcxs_weien')) {
											let num = Math.ceil(get.number(card, player) / 2);
											if (num < 0 || num > game.countPlayer((cur) => cur !== player)) return false;
										}
									}
								else if (get.itemtype(card) === 'card') {
									if (i.hasGaintag('gjcxs_weien')) {
										let num = Math.ceil(get.number(card, player) / 2);
										if (num <= 0 || num > game.countPlayer((cur) => cur !== player)) return false;
									}
								}
							},
						},
						trigger: {
							player: ['useCardBegin', 'phaseEnd', 'dieAfter'],
						},
						filter(event, player) {
							if (event.name === 'phase')
								return (
									game.hasPlayer((cur) => {
										return cur.hasSkill('gjcxs_weien');
									}) &&
									player.hasCard((i) => {
										return i.hasGaintag('gjcxs_weien');
									})
								);
							if (event.name === 'die') return !game.hasPlayer((i) => i.hasSkill('gjcxs_shiru', null, null, false), true);
							return (
								event.cards &&
								event.cards.some((i) => {
									return i.hasGaintag('gjcxs_weien');
								})
							);
						},
						silent: true,
						forceDie: true,
						async content(event, trigger, player) {
							if (trigger.name === 'die') {
								game.removeGlobalSkill('gjcxs_shiru_global');
								return;
							}
							if (trigger.name === 'phase') {
								let cards = player.getCards('h', (i) => {
									return i.hasGaintag('gjcxs_weien');
								});
								if (cards.length) {
									player.logSkill('gjcxs_weien_global');
									await player.modedDiscard(cards);
									await player.loseHp();
								}
								return;
							}
							let num = Math.ceil(get.number(trigger.card, player) / 2);
							if (num <= 0 || num > game.countPlayer((cur) => cur !== player)) {
								player.logSkill('gjcxs_weien_global');
								if (num === 0) trigger.targets.length = 0;
								else trigger.cancel();
								return;
							}
							let result = await player
								.chooseTarget('威恩：请选择此牌目标', num, true, lib.card.nanman.filterTarget)
								.set('ai', (target) => {
									let trigger = get.event().getTrigger(),
										player = get.event().player;
									return get.effect(target, trigger.card, trigger.player, player);
								})
								.forResult();
							if (result.bool) {
								player.logSkill('gjcxs_weien_global');
								trigger.targets = result.targets;
							}
						},
					},
				},
			},
			gjcxs_xiaojun: {
				audio: 'ext:官将重修/audio/skill:2',
				trigger: {
					global: 'phaseUseBegin',
				},
				filter(event, player) {
					return player !== event.player && player.countCards('h');
				},
				prompt2(event, player) {
					let names = [];
					player.getCards('h').forEach((i) => {
						names.add(get.translation(i.name));
					});
					names = get.translation(names);
					return (
						'将所有手牌交给' +
						get.translation(event.player) +
						'。若如此做，其于此阶段使用' +
						names +
						'时，你为其重新指定/取消目标；此阶段结束时，你摸X张牌（X为其此阶段使用' +
						names +
						'造成的伤害总值）。'
					);
				},
				check(event, player) {
					if (get.attitude(_status.event.player, event.player) <= 0) return false;
					let shas = event.player.getCardUsable('sha') - event.player.countCards('h', 'sha');
					return (
						player.countCards('h', (i) => {
							if (!get.tag(i, 'damage')) return false;
							if (i.name === 'sha') {
								if (shas > 0) {
									shas--;
									return true;
								}
								return false;
							}
							return true;
						}) > Math.max(0, 3 - player.hp)
					);
				},
				logTarget: 'player',
				content() {
					let cards = player.getCards('h');
					player.addTempSkill('gjcxs_xiaojun_record', 'phaseUseAfter');
					player.storage.gjcxs_xiaojun_record.player = trigger.player;
					cards.forEach((i) => {
						player.storage.gjcxs_xiaojun_record.names.add(i.name);
					});
					player.give(cards, trigger.player);
					trigger.player.addTempSkill('gjcxs_xiaojun_control', 'phaseUseAfter');
					trigger.player.storage.gjcxs_xiaojun_control.player = player;
					trigger.player.storage.gjcxs_xiaojun_control.names = player.storage.gjcxs_xiaojun_record.names;
				},
				subSkill: {
					record: {
						init(player) {
							if (!player.storage.gjcxs_xiaojun_record)
								player.storage.gjcxs_xiaojun_record = {
									player: null,
									names: [],
								};
						},
						onremove(player) {
							delete player.storage.gjcxs_xiaojun_record;
						},
						trigger: {
							global: ['useCard', 'phaseUseEnd'],
						},
						filter(event, player) {
							if (event.player !== player.storage.gjcxs_xiaojun_record.player) return false;
							if (event.name === 'phaseUse') return true;
							return (
								player.storage.gjcxs_xiaojun_record.names.includes(event.card.name) &&
								event.targets &&
								event.targets.length
							);
						},
						silent: true,
						locked: true,
						async content(event, trigger, player) {
							if (trigger.name === 'phaseUse') {
								let num = 0;
								player.storage.gjcxs_xiaojun_record.player.getHistory('sourceDamage', (evt) => {
									if (
										evt.card &&
										evt.getParent('phaseUse') === trigger &&
										player.storage.gjcxs_xiaojun_record.names.includes(evt.card.name)
									)
										num += evt.num;
								});
								if (num) {
									player.logSkill('gjcxs_xiaojun');
									await player.draw(num);
								}
								return;
							}
							const result = await player
								.chooseTarget(
									'晓军：为' + get.translation(trigger.card) + '重新指定目标，或点“取消”取消所有目标',
									(card, player, target) => {
										return _status.event.user.canUse(_status.event.card, target);
									},
									trigger.targets.length
								)
								.set('ai', (target) => {
									return get.effect(target, _status.event.card, _status.event.user, player);
								})
								.set('card', trigger.card)
								.set('user', trigger.player)
								.forResult();
							if (result.bool) {
								let same = true;
								for (let i of result.targets) {
									if (!trigger.targets.includes(i)) {
										same = false;
										break;
									}
								}
								if (!same) {
									player.logSkill('gjcxs_xiaojun');
									trigger.targets = result.targets;
									game.log(player, '为', trigger.card, '重新指定目标', result.targets);
									if (get.mode() !== 'identity' || player.identity !== 'nei') player.addExpose(0.12);
								}
							} else {
								player.logSkill('gjcxs_xiaojun');
								trigger.targets.length = 0;
								trigger.all_excluded = true;
								game.log(player, '取消了', trigger.card, '的所有目标');
							}
						},
					},
					control: {
						init: (player) => {
							if (!player.storage.gjcxs_xiaojun_control)
								player.storage.gjcxs_xiaojun_control = {
									player: null,
									names: [],
								};
						},
						onremove: (player) => {
							delete player.storage.gjcxs_xiaojun_control;
						},
						trigger: {
							global: 'dieAfter',
						},
						filter: (event, player) => {
							return event.player === player.storage.gjcxs_xiaojun_control;
						},
						silent: true,
						forceDie: true,
						charlotte: true,
						content() {
							player.removeSkill('gjcxs_xiaojun_control');
						},
						ai: {
							effect: {
								player_use(card, player, target) {
									if (typeof card !== 'object') return;
									let info = get.info(card);
									if (!info || info.notarget) return;
									if (
										get.attitude(player, player.storage.gjcxs_xiaojun_control.player) < 0 &&
										player.storage.gjcxs_xiaojun_control.names.includes(card.name)
									)
										return 'zeroplayertarget';
								},
							},
						},
					},
				},
				ai: {
					viewHandcard: true,
					skillTagFilter(player, tag, arg) {
						return player !== arg;
					},
				},
			},
			gjcxs_mianxiu: {
				audio: 'shenxian',
				onremove: true,
				marktext: '贤',
				intro: {
					mark(dialog, storage, player) {
						if (!storage || !storage.length) return;
						dialog.addText('本回合已对');
						dialog.addSmall([storage.map((i) => i.name), 'character']);
						dialog.addText('发动过〖勉脩〗');
					},
				},
				trigger: {
					global: ['loseAfter', 'loseAsyncAfter'],
				},
				filter(event, player) {
					if (event.type !== 'discard' || event.getlx === false) return false;
					if (event.name === 'lose' && event.player === player) return false;
					return game.hasPlayer((cur) => {
						if (player === cur || player.getStorage('gjcxs_mianxiu').includes(cur)) return false;
						let evt = event.getl(cur),
							cards;
						if (!evt || !evt.cards) return false;
						cards = evt.cards.slice(0);
						for (let i = 0; i < cards.length; i++) {
							if (get.type(cards[i], null, evt.hs && evt.hs.includes(cards[i]) ? cur : false) === 'basic') return true;
						}
						return false;
					});
				},
				frequent: true,
				content() {
					let tars = game.filterPlayer((cur) => {
						if (player === cur || player.getStorage('gjcxs_mianxiu').includes(cur)) return false;
						let evt = trigger.getl(cur),
							cards;
						if (!evt || !evt.cards) return false;
						cards = evt.cards.slice(0);
						for (let i = 0; i < cards.length; i++) {
							if (get.type(cards[i], null, evt.hs && evt.hs.includes(cards[i]) ? cur : false) === 'basic') return true;
						}
						return false;
					});
					player.draw(tars.length);
					player.markAuto('gjcxs_mianxiu', tars);
				},
				ai: {
					threaten: 1.8,
				},
				group: 'gjcxs_mianxiu_clear',
				subSkill: {
					clear: {
						trigger: {
							global: 'phaseAfter',
						},
						silent: true,
						content() {
							player.storage.gjcxs_mianxiu = [];
							player.unmarkSkill('gjcxs_mianxiu');
						},
						sub: true,
					},
				},
			},
			gjcxs_jingsi: {
				audio: 'ext:官将重修/audio/skill:2',
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				async content(event, trigger, player) {
					const result = await player
						.judge((card) => {
							if (
								game.hasPlayer((cur) => {
									return get.event('player').canUse('sha', cur);
								})
							)
								return get.number(card);
							return 1 / get.number(card);
						})
						.forResult();
					player.storage.gjcxs_jingsi_sha = result.number;
					player.addTempSkill('gjcxs_jingsi_sha', 'phaseUseEnd');
				},
				subSkill: {
					sha: {
						mark: true,
						marktext: '祀',
						intro: {
							content: '使用点数不大于#的【杀】无距离限制、不小于#的【杀】无次数限制',
						},
						mod: {
							targetInRange(card, player) {
								if (card.name === 'sha') {
									let num = get.number(card);
									if (num === 'unsure' || num <= player.storage.gjcxs_jingsi_sha) return true;
								}
							},
							cardUsable(card, player) {
								if (card.name === 'sha') {
									let num = get.number(card);
									if (num === 'unsure' || num >= player.storage.gjcxs_jingsi_sha) return true;
								}
							},
						},
						charlotte: true,
					},
				},
			},
			gjcxs_yuyan: {
				audio: 'twyuyan',
				trigger: {
					target: 'useCardToTarget',
				},
				filter(event, player) {
					return player.hp < event.player.hp && get.tag(event.card, 'damage');
				},
				forced: true,
				logTarget: 'player',
				async content(event, trigger, player) {
					let num = get.number(trigger.card) || 0,
						result;
					if (
						!trigger.player.hasCard((card) => {
							if (_status.connectMode && get.position(card) === 'h') return true;
							return get.number(card) > num;
						}, 'he')
					)
						result = { bool: false };
					else
						result = await trigger.player
							.chooseCard(
								'he',
								(card) => {
									return get.number(card) > _status.event.number;
								},
								'交给' + get.translation(player) + '一张点数大于' + num + '的牌，或取消此目标'
							)
							.set('number', num)
							.set(
								'val',
								get.effect(player, trigger.card, trigger.player, trigger.player) > 0 ? 9 - Math.min(4, player.hp) : 0
							)
							.set('ai', (card) => {
								if (card.name === 'shan' || card.name === 'tao' || card.name === 'jiu') return false;
								return get.event('val') - get.value(card);
							});
					if (result.bool) trigger.player.give(result.cards, player);
					else {
						trigger.targets.remove(player);
						trigger.getParent().triggeredTargets2.remove(player);
						trigger.untrigger();
					}
				},
				ai: {
					effect: {
						target_use(card, player, target, current) {
							if (player.hp <= target.hp || !get.tag(card, 'damage')) return;
							if (get.attitude(player, target) >= 0) return 'zerotarget';
							let num = get.number(card) || 0,
								bs = player.getCards('h', (cardx) => {
									return get.number(cardx) > num;
								});
							if (bs.length < 2) return 0;
							if (player.hasSkill('jiu') || player.hasSkill('tianxianjiu')) return;
							if (bs.length <= 2) {
								for (let i = 0; i < bs.length; i++) {
									if (get.value(bs[i]) < 6) return [1, 0.5, 1, -0.5];
								}
								return 'zerotarget';
							}
							return [1, 0.5, 1, -0.5];
						},
					},
				},
			},
			gjcxs_chengshang: {
				audio: 'chengshang',
				trigger: {
					global: 'useCardAfter',
				},
				filter(event, player) {
					if (player === event.player || !event.targets || event.targets.length !== 1 || player !== event.targets[0])
						return false;
					if (
						!event.cards ||
						player.hasHistory('damage', (evt) => {
							return evt.card === event.card;
						})
					)
						return false;
					return event.cards.some((i) => {
						return get.position(i, true) === 'o';
					});
				},
				frequent: true,
				content() {
					let cards = trigger.cards.filter((i) => {
						return get.position(i, true) === 'o';
					});
					if (cards.length) player.gain(cards, 'gain2');
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (
								typeof card !== 'object' ||
								player === target ||
								(get.type(card) !== 'trick' && get.type(card) !== 'basic')
							)
								return;
							if (get.tag(card, 'damage') && !player.hasSkillTag('jueqing', false, target))
								return 4 / (4 + target.countCards('h'));
							return [1.5, 1];
						},
					},
				},
			},
			gjcxs_sheqi: {
				audio: 'ext:官将重修/audio/skill:3',
				mod: {
					maxHandcard(player, num) {
						return 1 + player.countCards('e');
					},
					aiValue(player, card, num) {
						if (
							get.itemtype(card) === 'card' &&
							get.type(card) === 'equip' &&
							(player === _status.currentPhase || get.position(card) === 'h')
						)
							return 0.7 * num;
					},
				},
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				forced: true,
				async content(event, trigger, player) {
					let es = [0, 0, 0, 0, 0, 0, 0],
						sub = 0;
					for (let i = 1; i < 7; i++) {
						if (i === 5) continue;
						get.cardPile2((card) => {
							if (get.subtype(card) === 'equip' + i) {
								es[i]++;
								return true;
							}
							return false;
						});
						if (es[i]) sub++;
					}
					const result = await player
						.chooseControl()
						.set('choiceList', ['从牌堆中随机获得副类别不同的装备牌各一张（宝物牌除外）', '移动场上的一张牌'])
						.set('prompt', '奢绮：请选择一项')
						.set('ai', () => {
							const player = get.player();
							if (!player.canMoveCard(true)) return 0;
							if (!sub) return 1;
							if (sub > 2 || player.countCards('e') < player.hp) return 0;
							return 1;
						})
						.forResult();
					if (result.index) {
						if (player.canMoveCard()) await player.moveCard(true);
					} else {
						let cards = [];
						for (let i = 1; i < 7; i++) {
							if (i === 5) continue;
							let card = get.cardPile2((card) => {
								return get.subtype(card) === 'equip' + i;
							});
							if (card) cards.push(card);
						}
						if (cards.length) await player.gain(cards, 'gain2');
						game.updateRoundNumber();
					}
				},
				group: 'gjcxs_sheqi_discard',
				subSkill: {
					discard: {
						trigger: {
							player: 'phaseDiscardBegin',
						},
						filter(event, player) {
							return player.hasCard((card) => {
								return get.type(card) === 'equip';
							}, 'h');
						},
						forced: true,
						async content(event, trigger, player) {
							let cards = player.getCards('h', { type: 'equip' });
							if (cards.length) {
								await player.loseToDiscardpile(cards);
								await player.draw(cards.length);
							}
						},
						sub: true,
					},
				},
			},
			gjcxs_shiru: {
				init() {
					game.addGlobalSkill('gjcxs_shiru_global');
				},
				onremove() {
					if (
						!game.hasPlayer((cur) => {
							return cur.hasSkill('gjcxs_shiru', null, null, false);
						}, true)
					)
						game.removeGlobalSkill('gjcxs_shiru_global');
				},
				trigger: {
					global: 'roundStart',
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget('师儒：是否重新选择一名角色作“儒生”？')
						.set('ai', (target) => {
							return (
								Math.abs(get.threaten(target, get.event('player')) * get.attitude(get.event('player'), target)) +
								(get.event('player') === target ? 12 / target.hp : 0)
							);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					if (target !== player.storage.gjcxs_shiru_ru) {
						player.removeSkill('gjcxs_shiru_ru');
						player.storage.gjcxs_shiru_ru = target;
						player.addSkill('gjcxs_shiru_ru');
					}
				},
				group: 'gjcxs_shiru_trick',
				subSkill: {
					ru: {
						mark: 'character',
						intro: {
							content(storage, player) {
								if (player === storage) return get.translation(storage) + '为当世大儒';
								return get.translation(storage) + '为' + get.translation(player) + '重点栽培的儒生';
							},
						},
						charlotte: true,
					},
					trick: {
						trigger: {
							global: 'useCardToPlayered',
						},
						filter(event, player) {
							if (!event.targets || !event.isFirstTarget || get.type(event.card) !== 'trick') return false;
							if (
								event.targets.some((i) => {
									return i === player.storage.gjcxs_shiru_ru;
								})
							)
								return true;
							let info = get.info(event.card);
							if (info.allowMultiple === false) return false;
							return lib.filter.targetEnabled2(event.card, event.player, player.storage.gjcxs_shiru_ru);
						},
						async cost(event, trigger, player) {
							const ru = player.storage.gjcxs_shiru_ru;
							if (trigger.targets.some((i) => i === ru))
								event.result = await player
									.chooseBool('师儒：是否令' + get.translation(trigger.card) + '对' + get.translation(ru) + '无效？')
									.set('ai', () => get.event('bool'))
									.set('bool', get.effect(ru, trigger.card, trigger.player, get.event('player')) < 0)
									.forResult();
							else
								event.result = await player
									.chooseBool(
										'师儒：是否令' + get.translation(ru) + '成为' + get.translation(trigger.card) + '的额外目标？'
									)
									.set('ai', () => get.event('bool'))
									.set('bool', get.effect(ru, trigger.card, trigger.player, get.event('player')) > 0)
									.forResult();
						},
						async content(event, trigger, player) {
							const ru = player.storage.gjcxs_shiru_ru;
							if (trigger.targets.some((i) => i === ru)) trigger.getParent().excluded.add(ru);
							else trigger.targets.push(ru);
							if (player !== ru && (get.mode() !== 'identity' || player.identity !== 'nei')) player.addExpose(0.12);
						},
						sub: true,
					},
					global: {
						trigger: {
							player: 'dieAfter',
						},
						filter(event, player) {
							return !game.hasPlayer((i) => i.hasSkill('gjcxs_shiru', null, null, false), true);
						},
						silent: true,
						forceDie: true,
						content() {
							game.removeGlobalSkill('gjcxs_shiru_global');
						},
						ai: {
							effect: {
								target_use(card, player, target) {
									if (typeof card !== 'object' || card.name === 'wuxie' || get.type(card) !== 'trick') return;
									let hs = game.findPlayer((i) => i.hasSkill('gjcxs_shiru'));
									if (!hs) return;
									let att = get.attitude(target, hs);
									if (att > 0) return 1.5;
									else if (att < 0) return [1, -1.2];
								},
							},
						},
					},
				},
				ai: {
					threaten: 2.1,
				},
			},
			gjcxs_lizhu: {
				mod: {
					aiOrder(player, card, num) {
						if (num <= 0 || !player.isPhaseUsing()) return num;
						let fs = 0,
							es = 0,
							idx =
								player.getHistory('useCard', (evt) => {
									return evt.getParent('phaseUse') === _status.event.getParent('phaseUse');
								}).length - 1;
						game.countPlayer((cur) => {
							if (player === cur || cur.countCards('hs') < idx) return;
							if (get.attitude(get.event('player'), cur) > 0) fs++;
							else es++;
						});
						if (fs === es) return;
						return num * (Math.abs((get.number(card, player) || 0) - 7) + 3) * Math.pow(1 + Math.abs(es - fs), 2);
					},
				},
				trigger: {
					player: 'useCard0',
				},
				filter(event, player) {
					return player.isPhaseUsing();
				},
				forced: true,
				async content(event, trigger, player) {
					let idx = player.getHistory('useCard', (evt) => {
							return evt.getParent('phaseUse') === trigger.getParent('phaseUse');
						}).length,
						num = get.number(trigger.card, player) || 0;
					let result = await player
						.chooseControl('不能大于', '不能小于')
						.set('choiceList', [
							'令所有其他角色于其下个出牌阶段使用的第' + get.cnNumber(idx, true) + '张牌不能大于' + num,
							'令所有其他角色于其下个出牌阶段使用的第' + get.cnNumber(idx, true) + '张牌不能小于' + num,
						])
						.set('prompt', '历注：请选择一项')
						.set('ai', () => get.event('idx'))
						.set(
							'idx',
							(function () {
								let fs = 0,
									es = 0;
								game.countPlayer((cur) => {
									if (player === cur || cur.countCards('hs') + 2 < idx) return;
									if (get.attitude(get.event('player'), cur) > 0) fs++;
									else es++;
								});
								if (es > fs) return num > 7 ? 1 : 0;
								return num < 7 ? 1 : 0;
							})()
						)
						.forResult();
					game.countPlayer((cur) => {
						if (player === cur) return;
						cur.addTempSkill('gjcxs_lizhu_use', { player: 'phaseUseAfter' });
						if (!cur.storage.gjcxs_lizhu_use) cur.storage.gjcxs_lizhu_use = [];
						cur.storage.gjcxs_lizhu_use[idx - 1] = [num, result.index ? 1 : -1];
					});
				},
				subSkill: {
					use: {
						mark: true,
						intro: {
							content(storage, player) {
								if (!storage || !storage.length) return;
								let txt = (player.isPhaseUsing() ? '本' : '于下个出牌') + '阶段使用的<br>';
								for (let i = 0; i < storage.length; i++) {
									txt +=
										'第' +
										get.cnNumber(i + 1, true) +
										'张牌不能' +
										(storage[i][1] > 0 ? '小于' : '大于') +
										storage[i][0] +
										'；<br>';
								}
								return txt.slice(0, -5);
							},
						},
						onremove: true,
						mod: {
							cardUsable(card, player) {
								if (!player.isPhaseUsing()) return;
								let evt = _status.event.getParent('phaseUse'),
									idx = player.getHistory('useCard', (i) => {
										return i.getParent('phaseUse') === evt.getParent('phaseUse');
									}).length;
								if (
									player.storage.gjcxs_lizhu_use[idx] &&
									(player.storage.gjcxs_lizhu_use[idx][0] - get.number(card, player)) *
										player.storage.gjcxs_lizhu_use[idx][1] >
										0
								)
									return false;
							},
							cardSavable(card, player) {
								if (!player.isPhaseUsing()) return;
								let evt = _status.event.getParent('phaseUse'),
									idx = player.getHistory('useCard', (i) => {
										return i.getParent('phaseUse') === evt.getParent('phaseUse');
									}).length;
								if (
									player.storage.gjcxs_lizhu_use[idx] &&
									(player.storage.gjcxs_lizhu_use[idx][0] - get.number(card, player)) *
										player.storage.gjcxs_lizhu_use[idx][1] >
										0
								)
									return false;
							},
						},
						charlotte: true,
					},
				},
			},
			gjcxs_qingke: {
				audio: 'ext:官将重修/audio/skill:2',
				trigger: {
					player: 'equipAfter',
				},
				filter(event, player) {
					return game.hasPlayer((current) => {
						return player.canUse('sha', current, false);
					});
				},
				direct: true,
				async content(event, trigger, player) {
					await player
						.chooseUseTarget(
							{ name: 'sha' },
							get.prompt('gjcxs_qingke'),
							'视为使用一张无距离限制且不计入使用次数的【杀】',
							false,
							'nodistance'
						)
						.set('logSkill', 'gjcxs_qingke');
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							if (
								get.type(card) === 'equip' &&
								!get.cardtag(card, 'gifts') &&
								game.hasPlayer((current) => {
									return target.canUse('sha', current, false);
								})
							)
								return [1, 1.5];
						},
					},
					reverseEquip: true,
					skillTagFilter(player, tag, arg) {
						return game.hasPlayer((current) => {
							return player.canUse('sha', current, false);
						});
					},
				},
			},
			gjcxs_fenggong: {
				audio: 'ext:官将重修/audio/skill:2',
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(event, player) {
					let evt = event.getl(player);
					return (
						evt &&
						evt.player === player &&
						evt.es &&
						evt.es.length > 0 &&
						game.hasPlayer((current) => {
							return current.hp <= Math.max(1, player.countCards('e'));
						})
					);
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(
							get.prompt('gjcxs_fenggong'),
							'令一名体力值不大于' + Math.max(1, player.countCards('e')) + '的角色选择回复1点体力或摸两张牌',
							(card, player, target) => {
								return target.hp <= Math.max(1, player.countCards('e'));
							}
						)
						.set('ai', (target) => {
							if (get.attitude(player, target) <= 0) return false;
							return get.attitude(player, target);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					await target.chooseDrawRecover(2, true);
				},
				ai: {
					noe: true,
					skillTagFilter(player, tag, arg) {
						return game.hasPlayer((current) => {
							return current.hp <= Math.max(1, player.countCards('e') - 1) && get.attitude(player, current) > 0;
						});
					},
				},
			},
			gjcxs_yanji: {
				audio: 'spyanji',
				trigger: {
					player: 'phaseUseBegin',
				},
				filter(event, player) {
					return ['zhengsu_leijin', 'zhengsu_bianzhen', 'zhengsu_mingzhi'].some((i) => !player.hasSkill(i));
				},
				async cost(event, trigger, player) {
					let result = await player
						.chooseButton([
							get.prompt('gjcxs_yanji'),
							[['zhengsu_leijin', 'zhengsu_bianzhen', 'zhengsu_mingzhi'].filter((i) => !player.hasSkill(i)), 'vcard'],
						])
						.set('ai', () => Math.random())
						.forResult();
					event.result = {
						bool: result.bool,
						cost_data: result.bool ? result.links[0][2] : null,
					};
				},
				async content(event, trigger, player) {
					const name = event.cost_data;
					player.addTempSkill('gjcxs_zhengsu', { player: ['phaseDiscardAfter', 'phaseAfter'] });
					player.addTempSkill(name, { player: ['phaseDiscardAfter', 'phaseAfter'] });
					player.popup(name, 'thunder');
					game.asyncDelayx();
				},
			},
			gjcxs_zuojun: {
				audio: 'diancai',
				trigger: {
					global: 'drawAfter',
				},
				filter(event, player) {
					if (event.player.hasSkill('gjcxs_zuojun_draw')) return false;
					return event.isPhaseUsing();
				},
				prompt2(event, player) {
					return '令' + get.translation(event.player) + '摸一张牌';
				},
				check(event, player) {
					return get.attitude(get.event().player, event.player) > 0;
				},
				logTarget: 'player',
				content() {
					if (player !== trigger.player && (get.mode() !== 'identity' || player.identity !== 'nei')) player.addExpose(0.12);
					trigger.player.draw();
					trigger.player.addTempSkill('gjcxs_zuojun_draw');
				},
				subSkill: {
					draw: {
						charlotte: true,
					},
				},
				ai: {
					threaten: 1.8,
				},
			},
			gjcxs_shoucheng: {
				audio: 'fubi',
				init(player) {
					game.addGlobalSkill('gjcxs_shoucheng_global');
				},
				onremove() {
					if (
						!game.hasPlayer((cur) => {
							return cur.hasSkill('gjcxs_shoucheng', null, null, false);
						}, true)
					)
						game.removeGlobalSkill('gjcxs_shoucheng_global');
				},
				marktext: '丞',
				intro: {
					content(storage) {
						if (!storage || !storage.length) return '暂未记录牌名';
						return '已记录的牌名：' + get.translation(storage);
					},
				},
				trigger: {
					player: 'useCard2',
				},
				filter(event, player) {
					if (get.type(event.card, false, player) !== 'trick') return false;
					return !player.getStorage('gjcxs_shoucheng').includes(event.card.name);
				},
				direct: true,
				async content(event, trigger, player) {
					let name = trigger.card.name,
						over = -1;
					for (let i = 0; i < ui.discardPile.childElementCount; i++) {
						if (ui.discardPile.childNodes[i].name === name) {
							let info = get.info(trigger.card);
							if (!trigger.targets || info.allowMultiple === false) over = 1;
							else if (
								info.multitarget ||
								game.hasPlayer((current) => {
									return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, player, current);
								})
							)
								over = 0;
							else over = 1;
							break;
						}
					}
					if (over < 0) {
						player.logSkill('gjcxs_shoucheng');
						player.markAuto('gjcxs_shoucheng', name);
					}
					if (over) return;
					const targets = await player
						.chooseTarget(get.prompt('gjcxs_shoucheng'), (card, player, target) => {
							if (_status.event.targets.includes(target)) return true;
							return lib.filter.targetEnabled2(_status.event.card, player, target);
						})
						.set('prompt2', '为' + get.translation(trigger.card) + '增加或减少一个目标')
						.set('ai', (target) => {
							let trigger = _status.event.getTrigger(),
								player = _status.event.player;
							return get.effect(target, trigger.card, player, player) * (get.event('targets').includes(target) ? -1 : 1);
						})
						.set('targets', trigger.targets)
						.set('card', trigger.card)
						.forResult();
					if (!targets || !targets.length) return;
					if (!event.isMine() && !event.isOnline()) await game.delayx();
					const target = targets[0];
					player.logSkill('gjcxs_shoucheng', target);
					if (player !== target && (get.mode() !== 'identity' || player.identity !== 'nei')) player.addExpose(0.12);
					if (trigger.targets.includes(target)) trigger.targets.remove(target);
					else trigger.targets.add(target);
				},
				group: ['gjcxs_shoucheng_draw', 'gjcxs_shoucheng_wash'],
				subSkill: {
					draw: {
						audio: 'mjdingyi',
						trigger: {
							global: 'useCard',
						},
						filter(event, player) {
							if (player === event.player || player.hasSkill('gjcxs_shoucheng_banned')) return false;
							return player.getStorage('gjcxs_shoucheng').includes(event.card.name) && get.type(event.card) === 'trick';
						},
						forced: true,
						content() {
							player.draw();
						},
						sub: true,
					},
					wash: {
						trigger: {
							global: 'washCard',
						},
						forced: true,
						content() {
							player.storage.gjcxs_shoucheng = [];
							player.markSkill('gjcxs_shoucheng');
						},
						sub: true,
					},
					global: {
						trigger: {
							player: 'dieAfter',
						},
						filter(event, player) {
							return !game.hasPlayer((i) => i.hasSkill('gjcxs_shoucheng', null, null, false), true);
						},
						silent: true,
						forceDie: true,
						content() {
							game.removeGlobalSkill('gjcxs_shoucheng_global');
						},
						ai: {
							effect: {
								player_use(card, player, target) {
									if (typeof card !== 'object') return;
									let ss = game.findPlayer((i) => {
										return i.hasSkill('gjcxs_shoucheng') && i.getStorage('gjcxs_shoucheng').includes(card.name);
									});
									if (!ss) return;
									return [1, get.sgnAttitude(player, ss)];
								},
							},
						},
					},
					banned: {
						mark: true,
						intro: {
							content: '〖首丞〗②失效直到本轮结束',
						},
						charlotte: true,
					},
				},
			},
			gjcxs_zuici: {
				audio: 'zuici',
				trigger: {
					target: 'useCardToTarget',
				},
				filter(event, player) {
					if (player === event.player || !event.targets || event.targets.length !== 1 || !player.hasSkill('gjcxs_shoucheng'))
						return false;
					return (
						!player.hasSkill('gjcxs_shoucheng_banned') &&
						!get.is.blocked('gjcxs_shoucheng', player) &&
						!player.isTempBanned('gjcxs_shoucheng')
					);
				},
				check(event, player) {
					let eff = get.effect(player, event.card, event.player, _status.event.player);
					if (eff >= 0) return false;
					if (!player.getStorage('gjcxs_shoucheng').length) return true;
					let end = game.findPlayer((i) => {
							return i.getSeatNum() === 1;
						}),
						cur = _status.currentPhase || end,
						num = 0;
					do {
						if (!cur.isTurnedOver()) {
							if (!cur.isPhaseUsing()) num += 2;
							num += cur.countCards('h');
						}
						cur = cur.next;
					} while (cur !== end);
					return 0.36 * num * Math.sqrt(player.storage.gjcxs_shoucheng.length) + eff < 0;
				},
				prompt2(event, player) {
					return '令〖首丞〗②于本轮失效，然后令' + get.translation(event.card) + '对你无效。';
				},
				content() {
					player.addTempSkill('gjcxs_shoucheng_banned', 'roundStart');
					trigger.targets.remove(player);
					trigger.getParent().triggeredTargets2.remove(player);
					game.delay();
				},
			},
			gjcxs_gongci: {
				audio: ['xingchong2.mp3', 'liunian2.mp3'],
				trigger: {
					global: 'roundStart',
				},
				direct: true,
				locked: true,
				async content(event, trigger, player) {
					let ms;
					if (!player.storage.gjcxs_gongci_character) {
						ms = game.filterPlayer((cur) => {
							return cur.sex === 'male';
						});
						if (!ms.length)
							ms = game.filterPlayer((cur) => {
								return cur !== player;
							});
						const target = ms.randomGet();
						player.storage.gjcxs_gongci_character = target;
						player.addSkill('gjcxs_gongci_character');
						player.logSkill('gjcxs_gongci_character', target);
						game.log(player, '被许配给', target);
						await game.asyncDelay();
						return;
					}
					(ms = game.filterPlayer((cur) => {
						return (
							cur.sex === 'male' &&
							!game.hasPlayer((tar) => {
								return tar.sex === 'male' && tar.storage.gjcxs_gongci_used > cur.storage.gjcxs_gongci_used;
							})
						);
					})),
						(rec = false);
					if (!ms.length || (ms.length === 1 && player.storage.gjcxs_gongci_character === ms[0])) rec = true;
					else {
						let result;
						if (ms.length === 1)
							result = {
								bool: true,
								targets: ms,
							};
						else
							result = await player
								.chooseTarget('公赐：请选择一位如意郎君', (card, player, target) => {
									return get.event('ms').includes(target);
								})
								.set('ai', (target) => {
									let val = get.attitude(get.event('player'), target);
									if (target === get.event('old')) val += player.isDamaged() ? 12 : 5;
									return val;
								})
								.set('ms', ms)
								.set('old', player.storage.gjcxs_gongci_character)
								.forResult();
						if (result.bool) {
							const target = result.targets[0];
							if (target === player.storage.gjcxs_gongci_character) rec = true;
							else {
								player.removeSkill('gjcxs_gongci_character');
								player.storage.gjcxs_gongci_character = target;
								player.addSkill('gjcxs_gongci_character');
								player.logSkill('gjcxs_gongci_used', target);
								game.log(player, '被许配给', target);
							}
						}
					}
					if (rec) {
						player.logSkill('gjcxs_gongci_character');
						if (player.maxHp < game.countPlayer()) await player.gainMaxHp();
						await player.recover(2);
					}
					game.countPlayer((cur) => {
						cur.storage.gjcxs_gongci_used = 0;
					}, true);
					await game.asyncDelay();
				},
				group: 'gjcxs_gongci_used',
				subSkill: {
					character: {
						audio: 'xingchong2.mp3',
						mark: 'character',
						intro: {
							content: '已下嫁给$',
						},
						onremove: true,
						charlotte: true,
					},
					used: {
						audio: 'liunian2.mp3',
						init(player) {
							game.countPlayer((cur) => {
								cur.storage.gjcxs_gongci_used = 0;
							}, true);
						},
						trigger: {
							global: 'useCard0',
						},
						silent: true,
						content() {
							trigger.player.storage.gjcxs_gongci_used++;
						},
						sub: true,
					},
				},
			},
			gjcxs_shangzhu: {
				audio: ['liunian1.mp3', 'xingchong1.mp3'],
				mark: true,
				marktext: '☯',
				intro: {
					content(storage, player) {
						if (!player.storage.gjcxs_gongci_character) return;
						if (storage) return get.translation(player.storage.gjcxs_gongci_character) + '弃置牌后，你可以获得这些牌';
						return get.translation(player.storage.gjcxs_gongci_character) + '使用牌后，你可以令其摸一张牌';
					},
				},
				group: ['gjcxs_shangzhu_use', 'gjcxs_shangzhu_discard'],
				zhuanhuanji: true,
				subSkill: {
					use: {
						audio: 'liunian1.mp3',
						trigger: {
							global: 'useCardEnd',
						},
						filter(event, player) {
							return (
								event.player === player.storage.gjcxs_gongci_character &&
								!player.storage.gjcxs_shangzhu &&
								event.player.isIn()
							);
						},
						prompt2(event, player) {
							return '令' + get.translation(event.player) + '摸一张牌';
						},
						logTarget: 'player',
						check(event, player) {
							return get.attitude(_status.event.player, event.player) > 0;
						},
						content() {
							player.changeZhuanhuanji('gjcxs_shangzhu');
							trigger.player.draw();
						},
					},
					discard: {
						audio: 'xingchong1.mp3',
						trigger: {
							global: ['loseAfter', 'loseAsyncAfter'],
						},
						filter(event, player) {
							return (
								event.type === 'discard' &&
								player.storage.gjcxs_shangzhu &&
								game.hasPlayer((cur) => {
									return cur === player.storage.gjcxs_gongci_character && event.getl(cur).cards2.length;
								})
							);
						},
						prompt2(event, player) {
							let cards = event.getl(player.storage.gjcxs_gongci_character).cards2.filter((i) => {
								let pos = get.position(i, true);
								return pos === 'o' || pos === 'd';
							});
							if (cards.length) return '获得' + get.translation(cards);
							return '将〖尚主〗转换为阴状态';
						},
						content() {
							let cards = trigger.getl(player.storage.gjcxs_gongci_character).cards2.filter((i) => {
								let pos = get.position(i, true);
								return pos === 'o' || pos === 'd';
							});
							player.changeZhuanhuanji('gjcxs_shangzhu');
							if (cards.length) player.gain(cards, 'gain2');
						},
						sub: true,
					},
				},
			},
			gjcxs_shouxi: {
				audio: 'shouxi',
				trigger: {
					target: 'useCardToTargeted',
				},
				filter(event, player) {
					return player !== event.player && event.targets.length === 1;
				},
				forced: true,
				async content(event, trigger, player) {
					const type = get.type2(trigger.card);
					const bool = await trigger.player
						.chooseBool()
						.set(
							'prompt',
							'守玺：展示手牌并弃置其中所有' +
								get.translation(type) +
								'牌，否则' +
								get.translation(trigger.card) +
								'对' +
								get.translation(player) +
								'无效'
						)
						.set('ai', () => get.event('bool'))
						.set(
							'bool',
							(() => {
								const cards = trigger.player.getCards('h', (i) => {
									return get.type2(i) === type;
								});
								return (
									get.effect(player, trigger.card, trigger.player, trigger.player) +
										cards.reduce((acc, card) => {
											return acc - get.value(card, trigger.player);
										}, 0) >
									0
								);
							})()
						)
						.forResultBool();
					if (bool) {
						const cards = trigger.player.getCards('h');
						await trigger.player.showCards(cards);
						const dis = trigger.player.getCards('h', (i) => {
							return get.type2(i) === type;
						});
						if (dis.length) {
							await trigger.player.modedDiscard(dis);
							if (dis.length < cards.length) return;
							var next = game.createEvent('shouxiFailed', false);
							next.player = player;
							next.target = trigger.player;
							next.num = dis.length;
							next.setContent(lib.skill.gjcxs_zhixi.content);
						}
					} else {
						trigger.cancel();
					}
				},
				ai: {
					effect: {
						target_use(card, player, target) {
							if (player === target || !target.hasFriend()) return;
							const type = get.type2(card);
							let dis = player.countCards('h', (i) => {
								if (card === i || (card.cards && card.cards.includes(i))) return false;
								return get.type2(i) === type;
							});
							if (!get.tag(card, 'multitarget') || get.info(card).singleCard) {
								return [1 / (dis + 1), 0, 1 / (dis + 1), -dis];
							}
						},
					},
				},
			},
			gjcxs_zhixi: {
				audio: 'ext:官将重修/audio/skill:true',
				trigger: {
					global: 'shouxiFailed',
				},
				silent: true,
				juexingji: true,
				skillAnimation: true,
				animationColor: 'thunder',
				derivation: ['gjcxs_jishi', 'huimin'],
				async content(event, trigger, player) {
					const target = event.target;
					const num = event.num;
					player.logSkill('gjcxs_zhixi', target);
					await target.draw(num);
					await player.reinitCharacter('gjcx_caojie', 'gjcx_hm_caojie');
				},
			},
			gjcxs_jishi: {
				audio: 'ext:官将重修/audio/skill:2',
				trigger: {
					player: 'phaseZhunbei',
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2('gjcxs_jishi'))
						.set('filterTarget', (card, player, target) => {
							return target.hp <= player.hp;
						})
						.set('ai', (target) => {
							return Math.min(2, target.getDamagedHp()) * get.attitude(get.event('player'), target);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					const num = [0, 1, 2].randomGet();
					if (get.mode() !== 'identity' || player.identity !== 'nei') player.addExpose(0.2);
					if (num) await target.recover(num);
				},
			},
			gjcxs_biwen: {
				group: ['gjcxs_biwen_damage', 'gjcxs_biwen_recover'],
				subSkill: {
					damage: {
						trigger: {
							global: 'damageBegin2',
						},
						filter(event, player) {
							return event.source && event.source.isIn() && !player.hasSkill('gjcxs_biwen_dam');
						},
						prompt2(event, player) {
							return '令' + get.translation(event.source) + '获得牌堆中的一张黑色牌并令此伤害-1';
						},
						logTarget: 'source',
						check(event, player) {
							let gain = get.effect(event.source, { name: 'draw' }, event.source, _status.event.player),
								reduce = 0;
							if (
								event.num &&
								(event.num === 1 ||
									!event.player.hasSkillTag('filterDamage', null, {
										player: event.source,
										card: event.card,
									}))
							)
								reduce = -get.damageEffect(event.player, event.source, _status.event.player);
							if (ui.cardPile.length === 1) gain /= 2;
							else if (!ui.cardPile.length) gain = 0;
							return gain + reduce > 0;
						},
						content() {
							player.addTempSkill('gjcxs_biwen_dam', 'roundStart');
							let card = get.cardPile2((i) => get.color(i, false) === 'black');
							if (card) trigger.source.gain(card, 'gain2');
							trigger.num--;
							if (player !== trigger.player && (get.mode() !== 'identity' || player.identity !== 'nei'))
								player.addExpose(0.06);
							game.updateRoundNumber();
						},
						sub: true,
					},
					recover: {
						trigger: {
							global: 'recoverBegin',
						},
						filter(event, player) {
							return !player.hasSkill('gjcxs_biwen_rec');
						},
						prompt2(event, player) {
							return '令' + get.translation(event.player) + '弃置一张红色牌并令回复值+1';
						},
						logTarget: 'player',
						check(event, player) {
							let discard = 0,
								recover = 0;
							if (event.player.countCards('he', { color: 'red' }))
								discard = get.effect(event.player, { name: 'guohe' }, event.player, _status.event.player);
							if (player.getDamagedHp() > 1) recover = get.recoverEffect(event.player, event.player, get.event('player'));
							return discard + recover > 0;
						},
						content() {
							player.addTempSkill('gjcxs_biwen_rec', 'roundStart');
							if (trigger.player.countCards('he', { color: 'red' }))
								trigger.player.chooseToDiscard('he', true, (card) => {
									return get.color(card) === 'red';
								});
							trigger.num++;
							if (player !== trigger.player && (get.mode() !== 'identity' || player.identity !== 'nei'))
								player.addExpose(0.05);
						},
						sub: true,
					},
					dam: {
						charlotte: true,
					},
					rec: {
						charlotte: true,
					},
				},
			},
			gjcxs_pizhuan: {
				audio: 'ext:官将重修/audio/skill:2',
				mod: {
					ignoredHandcard(card, player) {
						if (card.name === 'phd_shu') return true;
					},
					cardDiscardable(card, player, name) {
						if (name === 'phaseDiscard' && card.name === 'phd_shu') return false;
					},
				},
				trigger: {
					player: 'useCard',
					target: 'useCardToTarget',
				},
				filter(event, player, name) {
					if (name === 'useCardToTarget' && event.player === event.target) return false;
					return get.suit(event.card) === 'spade';
				},
				forced: true,
				content() {
					player.gain(game.createCard('phd_shu', lib.suit.randomGet(), Math.ceil(9 * Math.random())), 'gain2');
				},
				ai: {
					effect: {
						player_use(card, player, target) {
							if (typeof card === 'object' && get.suit(card) === 'spade') return [1, 0.7];
						},
						target_use(card, player, target) {
							if (typeof card === 'object' && get.suit(card) === 'spade' && player !== target) return [1, 0.7];
						},
					},
				},
				group: 'gjcxs_pizhuan_destroy',
				subSkill: {
					destroy: {
						trigger: {
							player: 'loseAfter',
							global: 'loseAsyncAfter',
						},
						filter(event, player) {
							let evt = event.getl(player);
							if (!evt || !evt.hs || !evt.hs.length) return false;
							for (let i of evt.hs) {
								if (i.name !== 'phd_shu') continue;
								if (get.position(i, true) === 'o' || get.position(i, true) === 'd') return true;
							}
							return false;
						},
						silent: true,
						forceDie: true,
						charlotte: true,
						async content(event, trigger, player) {
							const hs = trigger.getl(player).hs;
							let list = [];
							for (let i of hs) {
								if (i.name !== 'phd_shu') continue;
								if (get.position(i, true) === 'o' || get.position(i, true) === 'd') list.push(i);
							}
							game.cardsGotoSpecial(list);
							game.log(list, '已散佚');
						},
						sub: true,
					},
				},
			},
			gjcxs_tongbo: {
				audio: 'ext:官将重修/audio/skill:2',
				trigger: { player: 'phaseDrawEnd' },
				filter(event, player) {
					let cards = player.getCards('he'),
						suits = [];
					for (let i = 0; i < cards.length; i++) {
						if (!suits.contains(get.suit(cards[i]))) suits.add(get.suit(cards[i]));
					}
					return suits.length >= 4;
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseToDiscard(get.prompt2('gjcxs_tongbo'), 'he', 4, (card, player) => {
							for (let i = 0; i < ui.selected.cards.length; i++) {
								if (get.suit(ui.selected.cards[i]) === get.suit(card)) return false;
							}
							return true;
						})
						.set('complexCard', true)
						.set('ai', (card) => {
							if (card.name === 'phd_shu') return true;
							return 6 - get.value(card);
						})
						.set('logSkill', 'gjcxs_tongbo')
						.forResult();
				},
				async content(event, trigger, player) {
					event.num = event.cards.length;
					const targets = await player
						.chooseTarget('请选择一名角色摸' + get.cnNumber(event.num) + '张牌并执行一个额外的出牌阶段', true)
						.set('ai', (target) => {
							return get.attitude(player, target);
						})
						.forResultTargets();
					if (targets && targets.length) {
						const target = targets[0];
						player.line(target, 'green');
						await target.draw(event.num);
						let next = target.phaseUse();
						event.next.remove(next);
						trigger.getParent().next.push(next);
					}
				},
			},
			gjcxs_wulve: {
				mod: {
					cardname(card, player) {
						if (player !== _status.currentPhase) return 'sha';
					},
				},
				group: ['gjcxs_wulve_add', 'gjcxs_wulve_remove'],
				subSkill: {
					add: {
						trigger: {
							player: ['gainAfter', 'phaseAfter'],
							global: 'loseAsyncAfter',
						},
						filter(event, player) {
							if (event.name === 'phase') return true;
							return player !== _status.currentPhase && event.getg(player).length;
						},
						silent: true,
						content() {
							player.addGaintag(player.getCards('h'), 'sha_notshan');
						},
						sub: true,
					},
					remove: {
						trigger: {
							player: 'phaseBegin',
						},
						filter(event, player) {
							return player.countCards('h');
						},
						silent: true,
						content() {
							player.removeGaintag('sha_notshan', player.getCards('h'));
						},
						sub: true,
					},
				},
				ai: {
					neg: true,
				},
			},
			gjcxs_quce: {
				audio: 'twkunsi',
				trigger: {
					global: 'phaseUseEnd',
				},
				filter(event, player) {
					if (player === event.player) return false;
					if (event.player.isMaxHandcard()) return player.canUse(new lib.element.VCard({ name: 'juedou' }), event.player);
					return event.player.canUse(new lib.element.VCard({ name: 'juedou' }), player);
				},
				prompt2(event, player) {
					if (event.player.isMaxHandcard()) return '视为对' + get.translation(event.player) + '使用一张【决斗】';
					return '令' + get.translation(event.player) + '使用对你一张【决斗】';
				},
				logTarget: 'player',
				check(event, player) {
					if (event.player.isMaxHandcard())
						return get.effect(event.player, { name: 'juedou' }, player, _status.event.player) > 0;
					return get.effect(player, { name: 'juedou' }, event.player, _status.event.player) > 0;
				},
				content() {
					if (trigger.player.isMaxHandcard()) {
						if (player.canUse(new lib.element.VCard({ name: 'juedou' }), trigger.player))
							player.useCard({ name: 'juedou', isCard: true }, trigger.player);
					} else if (trigger.player.canUse(new lib.element.VCard({ name: 'juedou' }), player))
						trigger.player.useCard({ name: 'juedou', isCard: true }, player);
				},
				ai: {
					threaten(player, target) {
						let num = target.hp / player.hp;
						if (target.hasSkill('gjcxs_wulve') && target.countCards('h') > player.countCards('hs', 'sha')) num *= 1.5;
						return num;
					},
				},
			},
			gjcxs_niju: {
				audio: 'ext:官将重修/audio/skill:2',
				trigger: {
					target: 'useCardToTargeted',
				},
				filter(event, player) {
					return event.player === _status.currentPhase && player.canCompare(_status.currentPhase);
				},
				forced: true,
				logTarget: 'player',
				async content(event, trigger, player) {
					const bool = await player
						.chooseToCompare(_status.currentPhase)
						.set('small', get.effect(player, trigger.card, trigger.player, _status.event.player) >= 0)
						.forResultBool();
					if (bool) trigger.getParent().excluded.add(player);
					else await _status.currentPhase.draw(2);
				},
				ai: {
					effect: {
						target_use(card, player, target) {
							if (player === _status.currentPhase && !_status.event.lycheck && target.canCompare(player)) {
								let cards = [card];
								if (card.cards && card.cards.length) cards.addArray(card.cards);
								if (ui.selected.cards.length) cards.addArray(ui.selected.cards);
								if (
									player.countCards('h', (i) => {
										return !cards.includes(i);
									}) === target.countCards('h')
								)
									return;
								if (target.hasSkill('gjcxs_niju')) return [0.2, -1, 0.2, -0.6];
								return [0.46, -1, 0.46, -0.58];
							}
						},
					},
				},
			},
			gjcxs_zangpi: {
				audio: 'xinfu_kannan1.mp3',
				init(player) {
					game.addGlobalSkill('gjcxs_zangpi_global');
				},
				onremove() {
					if (
						!game.hasPlayer((cur) => {
							return cur.hasSkill('gjcxs_zangpi', null, null, false);
						}, true)
					)
						game.removeGlobalSkill('gjcxs_zangpi_global');
				},
				trigger: {
					global: 'compare',
				},
				filter(event, player) {
					return !event.iwhile;
				},
				direct: true,
				locked: true,
				async content(event, trigger, player) {
					let currents = [trigger.player, trigger.target];
					while (currents.length) {
						const current = currents.shift();
						if (!current.isIn() || player.countCards('h') === current.countCards('h')) continue;
						const result = await player
							.chooseControl('+6', '-6')
							.set('prompt', '臧否：令' + get.translation(current) + '的拼点牌点数？')
							.set('ai', () => {
								const player = get.event('player'),
									current = get.event('current'),
									target = get.event('tp'),
									att = get.attitude(player, current);
								if (current !== target && att * get.attitude(player, _status.event.tp) > 0) {
									if (Boolean(_status.event.small) === Boolean(att > 0)) return 0;
									return 1;
								}
								if (Boolean(_status.event.small) === Boolean(att > 0)) return 1;
								return 0;
							})
							.set('current', current)
							.set('tp', trigger.player)
							.set('small', trigger.small)
							.set('logSkill', ['gjcxs_zangpi', current])
							.forResult();
						let num = result.index ? -6 : 6;
						if (current === trigger.player) trigger.num1 += num;
						else trigger.num2 += num;
						current.popup(num > 0 ? '+6' : '-6');
						if (get.mode() !== 'identity' || player.identity !== 'nei') player.addExpose(0.1);
						game.log(current, '拼点牌点数', '#y' + (num > 0 ? '+6' : '-6'));
					}
				},
				subSkill: {
					global: {
						trigger: {
							player: 'dieAfter',
						},
						filter(event, player) {
							return !game.hasPlayer((current) => current.hasSkill('gjcxs_zangpi', null, null, false), true);
						},
						silent: true,
						forceDie: true,
						content() {
							game.removeGlobalSkill('gjcxs_zangpi_global');
						},
						ai: {
							effect: {
								player(card, player, target) {
									if (card.name === 'phd_fdcx') {
										let cards = [card];
										if (card.cards && card.cards.length) cards.addArray(card.cards);
										if (ui.selected.cards.length) cards.addArray(ui.selected.cards);
										let ph = player.countCards('h', (i) => {
												return !cards.includes(i);
											}),
											pp = 1,
											tp = 1;
										game.countPlayer((current) => {
											if (!current.hasSkill('gjcxs_zangpi') || ph === current.countCards('h')) return false;
											let att = get.attitude(player, current);
											if (!att) return false;
											if (att > 0) tp /= 5;
											else pp /= 5;
										});
										return [pp, 0, tp, 0];
									}
								},
							},
						},
					},
				},
			},
			gjcxs_sijian: {
				audio: 'sijian',
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(event, player) {
					if (player.countCards('h')) return false;
					if (event.name === 'gain' && event.player === player) return false;
					let evt = event.getl(player);
					return evt && evt.hs && evt.hs.length > 0;
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget('死谏：请选择要受到1点伤害的角色', true, lib.filter.notMe)
						.set('ai', (target) => {
							return get.damageEffect(target, _status.event.player, _status.event.player);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					player.line(target, 'green');
					if (get.mode() !== 'identity' || player.identity !== 'nei') player.addExpose(0.2);
					await target.damage('nocard');
				},
				ai: {
					noh: true,
					skillTagFilter(player, tag, arg) {
						if (tag === 'noh') return player.countCards('h') === 1;
					},
					effect: {
						player(card, player, target) {
							if (get.itemtype(card) === 'card' && get.position(card) === 'h' && player.countCards('h') === 1) return [1, 2];
						},
						target(card, player, target) {
							if (target.countCards('h') === 1 && (get.tag(card, 'discard') || get.tag(card, 'lose'))) return [1, 2];
						},
					},
				},
			},
			gjcxs_suishi: {
				audio: 'suishi',
				trigger: {
					global: ['dying', 'dieAfter'],
				},
				filter(event, player) {
					if (!player.isIn()) return false;
					return event.name === 'dying' || player !== event.player;
				},
				forced: true,
				forceDie: true,
				async content(event, trigger, player) {
					if (trigger.name === 'dying') {
						await player.draw(2);
						return;
					}
					let result;
					if (player.countCards('h'))
						result = await player
							.chooseControl(['弃牌', '掉血'])
							.set('choiceList', ['弃置所有手牌', '失去1点体力'])
							.set('prompt', '随势：请选择一项')
							.set('ai', () => {
								if (_status.event.dis < _status.event.lose) return 1;
								return 0;
							})
							.set(
								'dis',
								(function () {
									let dis = player.countCards('h');
									if (!player.hasSkill('gjcxs_sijian') || get.is.blocked('gjcxs_sijian', player)) return -dis;
									return (
										Math.max(
											...game
												.filterPlayer((i) => {
													return player !== i;
												})
												.map((i) => {
													return get.damageEffect(i, player, _status.event.player);
												})
										) /
											get.attitude(player, player) -
										dis
									);
								})()
							)
							.set(
								'lose',
								get.effect(player, { name: 'losehp' }, player, _status.event.player) / get.attitude(player, player)
							)
							.forResult();
					else result = { index: 1 };
					if (result.index) await player.loseHp();
					else if (player.countCards('h')) await player.modedDiscard(player.getCards('h'));
				},
				ai: {
					halfneg: true,
					skillTagFilter(player, tag, arg) {
						if (tag === 'halfneg') return player.hasSkill('gjcxs_sijian') || player.hasSkillTag('noh');
					},
				},
			},
			gjcxs_fulu: {
				audio: 'zlshoufu',
				enable: 'phaseUse',
				usable: 1,
				async content(event, trigger, player) {
					await player.draw();
					let result = await player
						.chooseCardTarget({
							prompt: '符箓：将一张手牌作为「符」置于一名其他角色的武将牌上',
							filterCard: true,
							filterTarget: lib.filter.notMe,
							position: 'h',
							forced: true,
							ai1: (card) => {
								return 6 - get.value(card);
							},
							ai2: (target) => {
								return get.threaten(target) * get.attitude(_status.event.player, target) * target.hp;
							},
						})
						.forResult();
					if (result.bool) {
						const target = result.targets[0];
						player.line(target, 'green');
						target.addToExpansion(result.cards, player, 'give').gaintag.add('gjcxs_fulu_fu');
						if (get.mode() !== 'identity' || player.identity !== 'nei') player.addExpose(0.12);
						target.addSkill('gjcxs_fulu_fu');
					}
					await game.asyncDelay();
				},
				subSkill: {
					fu: {
						marktext: '符',
						intro: {
							content: 'expansion',
							markcount: 'expansion',
						},
						onremove(player, skill) {
							let cards = player.getExpansions(skill);
							if (cards.length) player.loseToDiscardpile(cards);
						},
						mod: {
							cardEnabled(card, player) {
								if (
									player.getExpansions('gjcxs_fulu_fu').some((i) => {
										return (
											get.suit(i) === get.suit(card) ||
											get.name(i) === get.name(card) ||
											get.number(i) === get.number(card)
										);
									})
								)
									return false;
							},
							cardRespondable(card, player) {
								if (
									player.getExpansions('gjcxs_fulu_fu').some((i) => {
										return (
											get.suit(i) === get.suit(card) ||
											get.name(i) === get.name(card) ||
											get.number(i) === get.number(card)
										);
									})
								)
									return false;
							},
							cardSavable(card, player) {
								if (
									player.getExpansions('gjcxs_fulu_fu').some((i) => {
										return (
											get.suit(i) === get.suit(card) ||
											get.name(i) === get.name(card) ||
											get.number(i) === get.number(card)
										);
									})
								)
									return false;
							},
						},
						trigger: {
							player: 'changeHpAfter',
						},
						filter(event, player) {
							return event.num < 0;
						},
						silent: true,
						charlotte: true,
						content() {
							player.removeSkill('gjcxs_fulu_fu');
						},
					},
				},
			},
			gjcxs_daofa: {
				audio: 'zlhuji',
				trigger: {
					global: ['judgeAfter', 'dieAfter', 'washCard'],
				},
				filter(event, player) {
					return player.isAlive();
				},
				forced: true,
				async content(event, trigger, player) {
					if (trigger.name === 'judge') await player.useSkill('gjcxs_fulu');
					else if (trigger.name === 'die') player.gainMaxHp();
					else {
						await player.recover(player.getDamagedHp());
						let name = get.character(player.name2, 3).includes('gjcxs_daofa') ? player.name2 : player.name1;
						let gods = [];
						for (let i in lib.character) {
							let info = get.character(i);
							if (info.group === 'shen' && info.sex === 'male') gods.push(i);
						}
						if (gods.length) {
							await player.reinitCharacter(name, gods.randomGet());
						}
					}
				},
				ai: {
					threaten: 2.5,
				},
			},
			gjcxs_bingli: {
				audio: 'bingxin',
				enable: 'chooseToUse',
				hiddenCard(player, name) {
					if (get.type(name) === 'basic' && lib.inpile.includes(name))
						return !player.hasHistory('useCard', (evt) => {
							return get.name(evt.card) === name;
						});
				},
				filter(event, player) {
					if (event.type === 'wuxie') return false;
					let hs = player.getCards('h');
					if (hs.length !== player.hp) return false;
					for (let i of lib.inpile) {
						if (
							get.type(i) !== 'basic' ||
							player.hasHistory('useCard', (evt) => {
								return get.name(evt.card) === i;
							})
						)
							continue;
						let card = { name: i, isCard: true };
						if (event.filterCard(get.autoViewAs(card, 'unsure'), player, event)) return true;
						if (i === 'sha') {
							for (let j of lib.inpile_nature) {
								card.nature = j;
								if (event.filterCard(get.autoViewAs(card, 'unsure'), player, event)) return true;
							}
						}
					}
					return false;
				},
				chooseButton: {
					dialog(event, player) {
						let list = [];
						for (let i of lib.inpile) {
							if (
								get.type(i) !== 'basic' ||
								player.hasHistory('useCard', (evt) => {
									return get.name(evt.card) === i;
								})
							)
								continue;
							let card = { name: i, isCard: true };
							if (event.filterCard(get.autoViewAs(card, 'unsure'), player, event)) list.push(['基本', '', i]);
							if (i === 'sha') {
								for (let j of lib.inpile_nature) {
									card.nature = j;
									if (event.filterCard(get.autoViewAs(card, 'unsure'), player, event)) list.push(['基本', '', i, j]);
								}
							}
						}
						return ui.create.dialog('冰鲤', [list, 'vcard'], 'hidden');
					},
					check(button) {
						let player = _status.event.player,
							dis = player.countCards('h', (card) => {
								return get.color(card) !== 'black' && lib.filter.cardDiscardable(card, player, 'gjcxs_bingli');
							});
						if (dis > 1 && player.countCards('hs', button.link[2])) return 0;
						if (button.link[2] === 'shan') return 3 - dis;
						let val = player.getUseValue({ name: button.link[2], nature: button.link[3] });
						if (button.link[2] === 'tao') {
							let more = player.countCards('h') - dis - player.hp + 1;
							if (more > 0) val <<= 2;
							else if (!more) val >>= 2;
						}
						if (button.link[2] === 'jiu') {
							if (player.hp <= 0 || !player.countCards('h', 'sha')) return 0;
						}
						return val - dis;
					},
					backup(links, player) {
						return {
							selectCard: -1,
							filterCard: () => false,
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
								isCard: true,
							},
							precontent() {
								let cards = player.getCards('h', (card) => {
									return get.color(card) !== 'black';
								});
								player.logSkill('gjcxs_bingli');
								if (cards.length) player.modedDiscard(cards);
								player.draw();
								delete event.result.skill;
							},
						};
					},
					prompt(links, player) {
						let name = links[0][2],
							nature = links[0][3];
						return '弃置所有不为黑色的手牌并摸一张牌，然后视为使用' + (get.translation(nature) || '') + get.translation(name);
					},
				},
				ai: {
					order: 10,
					respondShan: true,
					respondSha: true,
					skillTagFilter(player, tag, arg) {
						if (arg === 'respond') return false;
						if (
							tag === 'respondSha' &&
							player.hasHistory('useCard', (evt) => {
								return get.name(evt.card) === 'sha';
							})
						)
							return false;
						if (
							tag === 'respondShan' &&
							player.hasHistory('useCard', (evt) => {
								return get.name(evt.card) === 'shan';
							})
						)
							return false;
						return player.countCards('h') === player.hp;
					},
					result: {
						player(player) {
							if (_status.event.dying) return get.attitude(player, _status.event.dying);
							return 1;
						},
					},
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'lose') || get.tag(card, 'discard')) {
								let cs = target.countCards('h') - target.hp;
								if (cs > 0) return 0.4;
								if (!cs) return 3;
							}
							if (get.tag(card, 'gain') || get.tag(card, 'draw')) {
								let cs = target.countCards('h') - target.hp;
								if (cs < 0) return 3;
								if (!cs) return 0.4;
							}
						},
					},
				},
			},
			gjcxs_qingda: {
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				onremove(player, skill) {
					let cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				trigger: {
					global: ['gainAfter', 'loseAsyncAfter'],
				},
				filter(event, player) {
					let cards = event.getg(player);
					if (!cards.length) return false;
					return game.hasPlayer((current) => {
						if (current === player) return false;
						let evt = event.getl(current);
						if (evt && evt.cards && evt.cards.length) return true;
						return false;
					});
				},
				forced: true,
				locked: false,
				content() {
					let cards = trigger.getg(player);
					player.addToExpansion(cards, 'give', player).gaintag.add('gjcxs_qingda');
				},
				group: 'gjcxs_qingda_draw',
				subSkill: {
					draw: {
						trigger: {
							global: 'phaseEnd',
						},
						filter(event, player) {
							return (
								player !== event.player &&
								player.getExpansions('gjcxs_qingda').length &&
								player.countCards('h') !== player.hp
							);
						},
						async cost(event, trigger, player) {
							const num = player.hp - player.countCards('h');
							event.result = await player
								.chooseButton([
									'###是否发动技能〖清达〗，移去一张「清」牌并' +
										(num > 0 ? '摸' + get.cnNumber(num) + '张' : '弃置' + get.cnNumber(-num) + '张手') +
										'牌？###',
									player.getExpansions('gjcxs_qingda'),
								])
								.set('ai', (button) => {
									if (_status.event.num > 0) return 1;
									return 0;
								})
								.set('num', num)
								.forResult();
							event.result.cost_data = event.result.links;
						},
						async content(event, trigger, player) {
							const num = player.hp - player.countCards('h');
							await player.loseToDiscardpile(event.cost_data);
							if (num > 0) await player.draw(num);
							else await player.chooseToDiscard('h', -num, true);
						},
					},
				},
			},
			gjcxs_zhongyun: {
				audio: 'zhongyun',
				trigger: { global: 'judge' },
				filter(event, player) {
					let color = get.color(event.player.judging[0], event.player);
					return player.countCards('hes', (card) => {
						if (_status.connectMode && get.position(card) !== 'e') return true;
						return get.color(card) !== color;
					});
				},
				async cost(event, trigger, player) {
					let color = get.color(trigger.player.judging[0], trigger.player);
					event.result = await player
						.chooseCard(
							get.translation(trigger.player) +
								'的' +
								(trigger.judgestr || '') +
								'判定为' +
								get.translation(trigger.player.judging[0]) +
								'，' +
								get.prompt(event.name.slice(0, -5)),
							'h',
							(card) => {
								if (get.color(card) === _status.event.color) return false;
								let player = _status.event.player,
									mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
								if (mod2 !== 'unchanged') return mod2;
								let mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
								if (mod !== 'unchanged') return mod;
								return true;
							}
						)
						.set('ai', (card) => {
							let trigger = _status.event.getTrigger(),
								player = _status.event.player,
								judging = _status.event.judging,
								result = trigger.judge(card) - trigger.judge(judging),
								att = get.attitude(player, trigger.player),
								pos = player.hasSkill('gjcxs_shenpin') ? Math.max(0, 6 - get.value(card)) / 10 : 0;
							if (att === 0 || result === 0) return pos;
							if (att > 0) return result + pos;
							return pos - result;
						})
						.set('judging', trigger.player.judging[0])
						.set('color', color)
						.forResult();
				},
				popup: false,
				async content(event, trigger, player) {
					const cards = event.cards;
					await player.respond(cards, 'highlight', event.name, 'noOrdering');
					if (trigger.player.judging[0].clone) {
						trigger.player.judging[0].clone.classList.remove('thrownhighlight');
						game.broadcast(function (card) {
							if (card.clone) {
								card.clone.classList.remove('thrownhighlight');
							}
						}, trigger.player.judging[0]);
						game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
					}
					await game.cardsDiscard(trigger.player.judging[0]);
					trigger.player.judging[0] = cards[0];
					trigger.orderingCards.addArray(cards);
					game.log(trigger.player, '的判定牌改为', cards[0]);
					await game.delay(2);
				},
				ai: {
					rejudge: true,
					tag: {
						rejudge: 1,
					},
				},
			},
			gjcxs_shenpin: {
				audio: 'shenpin',
				trigger: {
					player: ['loseAfter', 'changeHp'],
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(event, player) {
					if (event.name === 'changeHp') return player.countCards('h') === player.hp;
					let cards1 = event.getl(player).hs,
						cards2 = [];
					if (event.getg) cards2 = event.getg(player);
					return (cards1.length || cards2.length) && player.countCards('h') === player.hp;
				},
				async cost(event, trigger, player) {
					let tars = [player],
						info = '选择自己摸牌';
					if (
						game.hasPlayer((current) => {
							return current !== player && current.countDiscardableCards(player, 'he') > 0;
						})
					) {
						tars.addArray(
							game.filterPlayer((current) => {
								return current !== player && current.countDiscardableCards(player, 'he') > 0;
							})
						);
						info += '，选择其他角色弃牌';
					}
					event.result = await player
						.chooseTarget((card, player, target) => {
							return _status.event.tars.includes(target);
						})
						.set('prompt', get.prompt('gjcxs_shenpin'))
						.set('prompt2', info)
						.set('ai', (target) => {
							let player = _status.event.player;
							if (player === target) {
								if (_status.event.cha > 0) num = 0.5;
								else if (_status.event.cha === 0) num = 1.5;
								else if (_status.event.cha === -1) num = 2;
								else num = -3 / _status.event.cha;
								return num * get.effect(target, { name: 'draw' }, _status.event.player);
							}
							return get.effect(target, new lib.element.VCard({ name: 'guohe' }), _status.event.player);
						})
						.set('tars', tars)
						.set('cha', player.hp - player.countCards('h'))
						.forResult();
				},
				async content(event, trigger, player) {
					let target = event.targets[0],
						num = 0;
					if (player === target) player.draw();
					else {
						if (get.mode() !== 'identity' || player.identity !== 'nei') player.addExpose(0.15);
						player.discardPlayerCard(target, true, 'he');
					}
				},
				ai: {
					effect: {
						player(card, player, target) {
							if (get.itemtype(card) !== 'card' || get.position(card) !== 'h') return;
							if (player.countCards('h') - player.hp === 1) return [1, 1];
						},
						target(card, player, target) {
							if (player === target) return;
							let num = player.countCards('h') - player.hp;
							if (get.tag(card, 'draw') || get.tag(card, 'gain')) {
								if (num === 0) return [1, 1];
								if (num === 1) {
									if (get.tag(card, 'lose') || get.tag(card, 'discard')) return [1, 2];
									return [1, 1];
								}
							} else if (get.tag(card, 'lose') || get.tag(card, 'discard')) {
								if (num === 1) return [1, 1];
							}
						},
					},
				},
			},
			shit: {
				trigger: {
					player: 'enterGame',
					global: 'phaseBefore',
				},
				filter(event, player) {
					return event.name !== 'phase' || game.phaseNumber === 0;
				},
				forced: true,
				unique: true,
				charlotte: true,
				superCharlotte: true,
				skillAnimation: true,
				animationColor: 'thunder',
				async content(event, trigger, player) {
					try {
						const others = game.filterPlayer((cur) => player !== cur);
						game.broadcastAll(
							(player, others) => {
								player.identity = 'zhu';
								game.zhu = player;
								player.showIdentity();
								others.forEach((cur) => {
									cur.identity = 'fan';
									cur.showIdentity();
								});
							},
							player,
							others
						);
						await event.trigger('zhuUpdate');
						await event.trigger('changeIdentity');
					} catch (e) {
						alert('傻逼QQ又出bug了：\n' + e.stack);
						await trigger.trigger('bug');
					}
				},
			},
			ban: {
				init() {
					game.addGlobalSkill('ban_global');
				},
				onremove() {
					if (
						!game.hasPlayer((cur) => {
							return cur.hasSkill('ban', null, null, false);
						}, true)
					)
						game.removeGlobalSkill('ban_global');
				},
				trigger: {
					global: 'useCardToTargeted',
				},
				filter(event, player) {
					if (player === event.player || event.player === event.target) return false;
					try {
						let condition;
						if (Math.random() < 0.25) condition = 'suit';
						if (Math.random() < 0.25) condition = 'number';
						if (Math.random() < 0.25) condition = 'name';
						if (Math.random() < 0.25) condition = 'type';
						if (Math.random() < 0.25) condition = 'nature';
						const info = get[condition](event.card);
						return !player.hasCard((i) => {
							return get[condition](i) === info;
						}, 'hesj');
					} catch (e) {
						alert('傻逼QQ又出bug了：\n' + e.stack);
						event.trigger('bug');
					}
				},
				forced: true,
				unique: true,
				charlotte: true,
				superCharlotte: true,
				logTarget(event, player) {
					if (!game.me) return event.player;
					if (player === event.player || event.player.isHealthy()) return game.me;
					return event.player;
				},
				async content(event, trigger, player) {
					try {
						trigger.targets.remove(trigger.target);
						if (game.me && trigger.player !== game.me && (player === trigger.player || trigger.player.isHealthy())) {
							alert(ui.joint`
								经检测，你开的房间内有部分玩家存在违规操作。
								房主有义务引导并监督玩家遵守QQ规范。
								否则QQ有权进行功能限制、封禁等处罚，情节严重者将踢出房间。
								感谢你的理解与支持。'
							`);
						} else
							game.log(
								trigger.player,
								'因不使用与QQ持有牌',
								'#y' + ['花色', '点数', '牌名', '类型', '属性'].randomGet(),
								'相同的牌已被他人举报。请规范用牌，否则QQ有权进行用牌限制、翻面等处罚，感谢你的理解'
							);
						if (
							player.hasHistory('useSkill', (evt) => {
								return evt.skill === 'ban' && evt.targets.includes(trigger.player);
							})
						)
							await trigger.player.turnOver();
					} catch (e) {
						alert('傻逼QQ又出bug了：\n' + e.stack);
						await trigger.trigger('bug');
					}
				},
				subSkill: {
					global: {
						ai: {
							effect: {
								player_use(card, player, target) {
									if (player === target || player.hasSkill('bug')) return;
									const qq = game.findPlayer((cur) => cur.hasSkill('bug'));
									if (!qq) return;
									const num = qq.countCards('hesj'),
										name = get.name(card),
										type = get.type(card),
										nature = get.nature(card);
									let eff = 0.016 * Math.min(4.8, num) + 0.007 * Math.min(14, num);
									if (name === 'sha') eff += 0.035 * Math.min(4.2, num);
									else if (name === 'shan') eff += 0.018 * Math.min(7, num);
									else if (name === 'tao') eff += 0.012 * Math.min(12, num);
									if (type === 'basic') eff += 0.094 * Math.min(3, num);
									else if (type === 'trick') eff += 0.052 * Math.min(5, num);
									else if (type === 'equip') eff += 0.031 * Math.min(8, num);
									else eff += 0.01 * Math.min(20, num);
									if (!nature) eff += 0.035 * Math.min(7, num);
									else if (nature === 'thunder') eff += 0.014 * Math.min(16, num);
									else if (nature === 'fire') eff += 0.012 * Math.min(21, num);
									else eff += 0.006 * Math.min(36, num);
									return [eff, (-1.78 * player.hp) / player.maxHp];
								},
							},
						},
					},
				},
			},
			hucksterize: {
				trigger: {
					global: 'phaseBegin',
				},
				filter(event, player) {
					return player !== event.player;
				},
				forced: true,
				unique: true,
				charlotte: true,
				superCharlotte: true,
				logTarget: 'player',
				async content(event, trigger, player) {
					try {
						if (!_status.production) _status.production = game.createCard('du', 'spade', 4);
						await trigger.player.gain(_status.production, 'gain2');
					} catch (e) {
						alert('傻逼QQ又出bug了：\n' + e.stack);
						await trigger.trigger('bug');
					}
				},
			},
			nonfeasance: {
				trigger: {
					global: 'bug',
				},
				filter(event, player) {
					return player !== event.player;
				},
				forced: true,
				unique: true,
				charlotte: true,
				superCharlotte: true,
				logTarget: 'player',
				async content(event, trigger, player) {
					await trigger.player.die();
					if (trigger.player.isDead()) game.log(trigger.player, '已被QQ封号');
				},
			},
		},
		translate: {
			gjcx: '官将重修',
			gjcx_cz: '<font color=#FF3300>官将重制</font>',
			gjcx_xg: '<font color=#70F3FF>官将修改</font>',

			gjcx_caochun: '曹纯',
			gjcxs_tongqi: '统骑',
			gjcxs_tongqi_info: ui.joint`
				锁定技，你的攻击范围无限；
				一名角色使用坐骑牌后，你视为使用一张不计入使用次数的【杀】；
				当有坐骑牌进入弃牌堆后，若这些牌不是从你的区域移动的，你获得这些坐骑牌。
			`,
			gjcxs_shangxue: '尚学',
			gjcxs_shangxue_info: '出牌阶段限一次，你可以重铸任意张装备牌，然后视为使用一张不计入使用次数的【书】。',
			'#ext:官将重修/audio/skill/gjcxs_shangxue1': '兵道之法，有武且要晓人心。',
			'#ext:官将重修/audio/skill/gjcxs_shangxue2': '纲纪督御，不失其理。',

			gjcx_caojinyu: '金乡公主',
			gjcx_caojinyu_ab: '曹金玉',
			gjcxs_xianyan: '先言',
			gjcxs_xianyan_info: ui.joint`
				每轮开始时，你可以预测将于本轮进入濒死状态的一名角色。若猜对，你可以选择一名角色防止其下次受到的致命伤害。
			`,
			gjcxm_xianyan: '先言',
			gjcxs_shanshen: '善身',
			gjcxs_shanshen_info: ui.joint`
				锁定技，一名角色的回合结束时，若你本回合没有造成或受到过伤害，你回复1点体力；若你本回合未成为过任何角色使用牌的目标，你摸一张牌。
			`,

			gjcx_caopi: '曹丕',
			gjcxs_jianbo: '俭薄',
			gjcxs_jianbo_info: '锁定技，一名角色摸牌时，若其有手牌，你令其将摸牌数改为1。',
			gjcxs_lundian: '论典',
			gjcxs_lundian_info: ui.joint`
				锁定技，其他角色获得牌后，若其手牌数大于你，你令其选择一项：令你弃置其一张手牌；所有非锁定技失效直至当前回合结束。
			`,
			gjcxs_lundian_append: ui.joint`
				<span style="font-family:xinwei">若触发〖论典〗的角色因〖论典〗触发的其他技能继续得到了牌，则该角色随机更换其所有武将牌。</span>
			`,
			gjcxs_songwei: '颂威',
			gjcxs_songwei_info: '主公技，锁定技，你不能对已受伤的魏势力角色发动〖俭薄〗，你对魏势力角色发动〖论典〗不作手牌数比较。',

			gjcx_chenlin: '陈琳',
			gjcxs_xiwen: '檄文',
			gjcxs_xiwen_info: ui.joint`
				出牌阶段，你可以将一张手牌扣置于一名没有「檄」的其他角色的武将牌上，称为「檄」。
				所有角色对有「檄」的角色使用牌无距离限制；
				有「檄」的角色回合开始时，其须选择一项：弃置与「檄」字数不同的所有牌；受到1点无来源伤害并弃置「檄」。
			`,
			gjcxm_xiwen: '檄文',
			gjcxs_sanyi: '三易',
			gjcxs_sanyi_info: '当你受到其他角色造成的伤害时，若其有「檄」，你可以令其获得其武将牌上的「檄」并防止此伤害。',

			gjcx_duji: '杜畿',
			gjcxs_andong: '安东',
			gjcxs_andong_info: ui.joint`
				其他角色A受到另一名其他角色B造成的伤害时，若A有手牌，你可以防止此伤害并观看A的手牌：
					若其中有♥️牌，你将其中一张♥️牌交给B；否则你失去1点体力或将一张♥️牌交给B。
			`,
			gjcxs_kuanhui: '宽惠',
			gjcxs_kuanhui_info: ui.joint`
				摸牌阶段结束时，你从牌堆获得一张不计入手牌数的♥️牌，然后你可以展示一张手牌并令一名其他角色获得牌堆中所有与此牌花色点数均相同的牌。
			`,

			gjcx_hanhaoshihuan: '韩浩史涣',
			gjcxs_jinwei: '禁卫',
			gjcxs_jinwei_info: '其他角色受到伤害时，你可以令其将一张黑色手牌当【兵粮寸断】对自己使用。若如此做，你防止此伤害。',
			gjcxs_yonglve: '勇略',
			gjcxs_yonglve_info: ui.joint`
				其他角色的判定阶段开始时，你可以弃置其判定区里的一张牌，然后选择一项：摸一张牌；视为对其使用一张【杀】。
			`,

			gjcx_liangxi: '梁习',
			gjcxs_zhizui: '治最',
			gjcxs_zhizui_info: '一名角色的回合结束时，你可以视为使用你上一轮使用过的第X张牌（X为该角色座位号）。',
			gjcxs_daisi: '代思',
			gjcxs_daisi_info: ui.joint`
				其他角色A成为另一名其他角色B使用牌的唯一目标后，其可以将目标改为你。
				此牌结算完毕后，你须选择一项：令〖治最〗中第Y张牌永久锁定为此牌（Y为A的座位号）；令A不能再发动本技能。
			`,

			gjcx_litong: '李通',
			gjcxs_tuifeng: '推锋',
			gjcxs_tuifeng_info: '当你造成1点伤害后，你可以摸一张不计入手牌数的牌。若此牌为【杀】，你使用之。',

			gjcx_liuhui: '刘徽',
			gjcxs_geyuan: '割圆',
			gjcxs_geyuan_info: ui.joint`
				锁定技，游戏开始时，你将牌堆顶的一张牌扣置于武将牌上，称为「圆」；当你使用或打出一张牌后，你进行一次“割圆”。
			`,
			gjcxs_geyuan_append: ui.joint`
				<span style="font-family:xinwei">
					你猜测「圆」的点数。
					若猜对，获得「圆」并将牌堆顶的一张牌置于武将牌上；
					否则系统提示估值与答案的大小关系，若此次估值与上次估值均大于/小于答案，
					根据“割圆术”系统会额外提示此次估值-/+两估值差值与答案的大小关系
				</span>
			`,
			gjcxs_mouhe: '牟合',
			gjcxs_mouhe_info: '当有牌从游戏外加入你的手牌后，你可以从牌堆/弃牌堆获得与这些牌点数相同的牌各一张。',

			gjcx_luzhi: '鲁芝',
			gjcxs_qingzhong: '清忠',
			gjcxs_qingzhong_info: ui.joint`
				锁定技，你于出牌阶段使用伤害牌无次数限制；
				出牌阶段限X次（X为你的体力上限），当你使用牌造成伤害后，你从牌堆/弃牌堆获得Y张同名牌（Y为伤害值）。
			`,
			gjcxs_lizhong: '礼终',
			gjcxs_lizhong_info: '锁定技，出牌阶段开始时或你造成伤害后，你令你不能使用伤害牌直至你下次使用牌。',

			gjcx_lvqian: '吕虔',
			gjcxs_weilu: '威虏',
			gjcxs_weilu_info: ui.joint`
				锁定技，其他角色对你造成伤害后，你令其获得一枚「威」；
				有「威」的角色手牌上限-X，于你出牌阶段开始时失去体力至1点并随机弃置X张牌（X为其「威」标记数）；
				出牌阶段结束时，你移去场上所有「威」标记并令这些角色将体力调整至此阶段开始前的体力值。
			`,
			gjcxm_weilu: '威虏',
			gjcxs_zengdao: '赠刀',
			gjcxs_zengdao_info: '当你获得武器牌后，你可以将此牌交给一名其他角色，其于下回合首次造成的伤害+1、使用【杀】的次数上限+1。',

			gjcx_ruanhui: '阮氏女',
			gjcx_ruanhui_ab: '阮慧',
			gjcxs_mingcha: '明察',
			gjcxs_mingcha_info: ui.joint`
				回合结束时，你可以选择一名其他角色。
				其下个出牌阶段结束时展示所有手牌：若其中没有黑色牌，你可以令其回复1点体力；否则其选择一项：弃置手牌中所有黑色牌；失去1点体力。
			`,
			gjcxs_jingzhong: '敬重',
			gjcxs_jingzhong_info: ui.joint`
				每轮限一次，其他角色的回合结束时，若其于本回合弃置了至少两张黑色牌，则你可以随机获得其于本回合因使用而进入弃牌堆的至多两张牌。
			`,

			gjcx_simalang: '司马朗',
			'#ext:官将重修/audio/character/gjcx_simalang:die': '遭此役疬，难报国恩。',
			gjcxs_paiyi: '派医',
			gjcxs_paiyi_info: ui.joint`
				一名其他角色的回合开始时，若其判定区内有牌且其已受伤，你可以弃置一张红色牌并令其回复1点体力。
				若如此做，其可以展示所有手牌（至少一张）并弃置其中的所有黑色牌，然后销毁判定区内的所有牌。
			`,
			'#ext:官将重修/audio/skill/gjcxs_paiyi1': '蒙主厚恩，自当爱兵如子。',
			'#ext:官将重修/audio/skill/gjcxs_paiyi2': '臣等，定救百姓于水火。',
			gjcxs_jizu: '疾卒',
			gjcxs_jizu_info: ui.joint`
				锁定技，准备阶段，你将一张【瘟疫】置入你的判定区内；结束阶段，你从牌堆/弃牌堆随机获得X张红色牌（X为你已损失体力值+1）。
			`,
			'#ext:官将重修/audio/skill/gjcxs_jizu': '这点小痛，算不得什么。',

			gjcx_xiahouhui: '夏侯徽',
			gjcxs_shidu: '识度',
			gjcxs_shidu_info: ui.joint`
				其他角色于其出牌阶段弃置手牌后，你可以获得其中至多X张牌，然后令其收回其余牌。
				若如此做，此技能失效且你不能使用或打出手牌直至当前回合结束；若你未以此法获得牌，你加1点体力上限。（X为5-你以此法获得过的牌数）
			`,
			gjcxs_yuanrong: '媛容',
			gjcxs_yuanrong_info: ui.joint`
				出牌阶段限一次，你可以和一名其他角色拼点。
				若你赢，你将体力值调整至体力上限的一半（向上取整）；否则你令对方摸X张于其下个出牌阶段开始时弃置的牌（X为场上势力数）。
			`,

			gjcx_zhanggong: '张恭',
			gjcxs_daishi: '代使',
			gjcxs_daishi_info: ui.joint`
				锁定技，非首轮游戏开始时，若上轮你从其他角色处得到的牌数为全场最多，你获得以下效果直至本轮结束：
					你每次造成的伤害+1；本轮结束时，若X＞0，你失去X点体力（X为你上轮从其他角色处获得的牌数-你本轮造成的伤害总和）。
			`,
			gjcxs_qianxin: '遣信',
			gjcxs_qianxin_info: ui.joint`
				每名角色的准备阶段，若当前回合角色：为你，你可以将一张手牌交给其他角色；不为你，该角色可以将一张手牌交给你。
				以此法得到牌的角色须选择一项：手牌上限-2直至其下个回合结束；令当前回合角色摸一张牌。
			`,

			gjcx_zhuling: '朱灵',
			gjcxs_lizhan: '力战',
			gjcxs_lizhan_info: ui.joint`
				出牌阶段开始时，你可以弃置所有基本牌/锦囊牌/装备牌（无牌则不弃），然后获得另外两种类型牌对应效果直到你的下个回合开始：
					基本牌，你使用基本牌无距离限制，且伤害值和回复值基数+1；
					锦囊牌，你使用锦囊牌时摸一张牌，且锦囊牌不计入手牌上限；
					装备牌，当装备牌进入你的装备区时，你可弃置一名其他角色的一张牌。
			`,

			gjcx_dengzhi: '邓芝',
			gjcxs_jianliang: '简亮',
			gjcxs_jianliang_info: '锁定技，出牌阶段开始时，你展示所有手牌并令至多X名角色各摸一张牌（X为你手牌中包含的花色数）。',
			gjcxs_sujian: '素俭',
			gjcxs_sujian_info: ui.joint`
				锁定技，弃牌阶段结束时，你将于此阶段弃置的牌任意分配给其他角色。然后若这些角色手牌中的花色数不小于其体力值，其回复1点体力。
			`,

			gjcx_jiangwan: '蒋琬',
			gjcxs_zhenting: '镇庭',
			gjcxs_zhenting_info: ui.joint`
				①其他角色使用牌时，你可以弃置X张牌令此牌无效（X为本轮你发动过此项的次数）。
				<br>②回合结束时，你获得本回合从你以外的区域内进入弃牌堆的所有牌。
			`,
			gjcxs_kezun: '克遵',
			gjcxs_kezun_info: '当你一次性弃置至少两张牌后，你可以获得其中一张。',

			gjcx_mazhong: '马忠',
			gjcxs_weien: '威恩',
			gjcxs_weien_info: ui.joint`
				出牌阶段，你可以将一张手牌正面朝上交给一名手牌中没有“威恩”牌的其他角色，
				此牌视为须指定X个目标的【南蛮入侵】（X为此牌点数的一半，向上取整）；
				一名角色的回合结束时，若其手牌中有“威恩”牌，弃置之并失去1点体力。
			`,

			gjcx_xiangchong: '向宠',
			gjcxs_xiaojun: '晓军',
			gjcxs_xiaojun_info: ui.joint`
				①锁定技，其他角色的手牌对你可见。
				<br>②其他角色的出牌阶段开始时，你可以将所有手牌交给其。若如此做，其于此阶段使用与这些牌同名的牌时，你为其重新指定/取消目标；
				此阶段结束时，你摸X张牌（X为其此阶段使用与这些牌同名的牌造成的伤害总值）。
			`,
			'#ext:官将重修/audio/skill/gjcxs_xiaojun1': '军资统一调配，方可物尽其用！',
			'#ext:官将重修/audio/skill/gjcxs_xiaojun2': '晓畅军事之机，方知睦阵之利！',

			gjcx_zhangxingcai: '敬哀皇后',
			gjcx_zhangxingcai_ab: '张星彩',
			gjcxs_mianxiu: '勉脩',
			gjcxs_mianxiu_info: '每回合每名角色各限一次，当有其他角色因弃置而失去基本牌时，你可以摸一张牌。',
			gjcxs_jingsi: '敬祀',
			gjcxs_jingsi_info: ui.joint`
				锁定技，出牌阶段开始时，你须进行一次判定。
				然后直到此阶段结束，你使用点数不大于判定点数的【杀】无距离限制、不小于判定点数的【杀】无次数限制。
			`,
			'#ext:官将重修/audio/skill/gjcxs_jingsi1': '俭以养德，住行可效古来先贤、有何陋之？',
			'#ext:官将重修/audio/skill/gjcxs_jingsi2': '宁俭不奢，衣食当思维艰物力、来之不易。',

			gjcx_zongyu: '宗预',
			gjcxs_yuyan: '御严',
			gjcxs_yuyan_info: ui.joint`
				锁定技，当你成为体力值大于你的角色使用的伤害牌的目标时，你令其选择一项：交给你一张点数大于此牌的牌；取消此目标。
			`,
			gjcxs_chengshang: '承赏',
			gjcxs_chengshang_info: ui.joint`
				其他角色使用牌结算结束后，若你是此牌的唯一目标且没有受到此牌造成的伤害，你可以获得位于处理区的这些牌。
			`,

			gjcx_heqi: '贺齐',
			'#ext:官将重修/audio/character/gjcx_heqi:die': '我军器精甲坚，竟也落败……',
			gjcxs_sheqi: '奢绮',
			gjcxs_sheqi_info: ui.joint`
				锁定技，你的手牌上限为X（X为你装备区内的牌数+1）；
				准备阶段开始时，你须选择一项：从牌堆中随机获得副类别不同的装备牌各一张（宝物牌除外）；移动场上的一张牌。
				弃牌阶段开始时，重铸你手牌中的所有装备牌。
			`,
			'#ext:官将重修/audio/skill/gjcxs_sheqi1': '让你见识一下什么才叫大场面！',
			'#ext:官将重修/audio/skill/gjcxs_sheqi2': '和我来一场华丽的战斗吧！',
			'#ext:官将重修/audio/skill/gjcxs_sheqi3': '兵利革韧，他人如何不羡？',

			gjcx_kanze: '阚泽',
			gjcxs_shiru: '师儒',
			gjcxs_shiru_info: ui.joint`
				一轮游戏开始时，你可以重新选择一名角色A。
				其他角色使用普通锦囊牌指定目标后，若其中：包含A，你可以令此牌对A无效；不包含A，你可以令A成为额外目标。
			`,
			gjcxs_lizhu: '历注',
			gjcxs_lizhu_info: '锁定技，你于出牌阶段使用第X张牌时，你令所有其他角色于其下个出牌阶段使用的第X张牌不能大于或小于此牌点数。',

			gjcx_lvdai: '吕岱',
			gjcxs_qingke: '清恪',
			gjcxs_qingke_info: '当有牌进入你的装备区后，你可以视为使用一张无距离限制且不计入使用次数的【杀】。',
			'#ext:官将重修/audio/skill/gjcxs_qingke1': '为国勤事，体素精勤。',
			'#ext:官将重修/audio/skill/gjcxs_qingke2': '体素精勤，躬亲王事。',
			gjcxs_fenggong: '奉公',
			gjcxs_fenggong_info: ui.joint`
				当有牌离开你的装备区后，你可以令一名体力值不大于X的角色选择回复1点体力或摸两张牌（X为你装备区内的牌数且至少为1）。
			`,
			'#ext:官将重修/audio/skill/gjcxs_fenggong1': '忠勤为国，通达治体。',
			'#ext:官将重修/audio/skill/gjcxs_fenggong2': '以器任干职，以心辅君国。',

			gjcx_lvfan: '吕范',
			gjcxs_yanji: '严纪',
			gjcxs_yanji_info: '出牌阶段开始时，你可以进行一次“整肃”。',
			gjcxs_zuojun: '佐君',
			gjcxs_zuojun_info: '每回合每名角色各限一次，一名角色于出牌阶段摸牌后，你可以令其摸一张牌。',

			gjcx_sunshao: '孙邵',
			gjcxs_shoucheng: '首丞',
			gjcxs_shoucheng_info: ui.joint`
				①你使用普通锦囊牌时，若此牌名未被记录过且：弃牌堆没有与之同名的牌，你记录此牌名；否则你可以为此牌增加或减少一个目标。
				<br>②其他角色使用牌时，若你记录过此牌牌名，你摸一张牌。
				<br>③牌堆洗切后，你清除记录的牌名。
			`,
			gjcxs_zuici: '罪辞',
			gjcxs_zuici_info: ui.joint`
				其他角色使用牌指定你为唯一目标时，若你的〖首丞〗②未失效，你可以令〖首丞〗②于本轮失效，然后令此牌对你无效。
			`,

			gjcx_tenggongzhu: '滕公主',
			gjcxs_gongci: '公赐',
			gjcxs_gongci_info: ui.joint`
				锁定技，一轮游戏开始时，
				你须选择上一轮场上使用牌次数最多的一名男性角色并将此技能记录改为其（第一次随机分配，若与已有记录相同则不变更）；
				若记录未变更，你加1点体力上限（不超过存活角色数）并回复2点体力。
			`,
			gjcxs_shangzhu: '尚主',
			gjcxs_shangzhu_info: ui.joint`
				转换技，阴：〖公赐〗记录的角色使用牌后，你可以令其摸一张牌；阳：〖公赐〗记录的角色弃置牌后，你可以获得这些牌。
			`,

			gjcx_caojie: '掷玺曹节',
			gjcx_caojie_ab: '曹节',
			'#ext:官将重修/audio/character/gjcx_caojie:die': '苍天有眼，绝不能让你长久！',
			gjcxs_shouxi: '守玺',
			gjcxs_shouxi_info: '锁定技，当你成为其他角色使用牌的唯一目标后，其需展示手牌并弃置其中所有同类型的牌；否则你令此牌对你无效。',
			gjcxs_zhixi: '掷玺',
			gjcxs_zhixi_info: '觉醒技，一名角色因〖守玺〗弃置所有手牌后，你令其摸等量的牌，然后你将武将牌变更为“惠民曹节”。',
			'#ext:官将重修/audio/skill/gjcxs_zhixi': '真龙尚在，逆臣岂敢觊觎神器？',

			gjcx_hm_caojie: '惠民曹节',
			gjcx_hm_caojie_ab: '曹节',
			'#ext:官将重修/audio/character/gjcx_hm_caojie:die': '行医，也不失为一种活法。',
			gjcxs_jishi: '济世',
			gjcxs_jishi_info: '准备阶段，你可以令一名体力值不大于你的角色随机回复0～2点体力。',
			'#ext:官将重修/audio/skill/gjcxs_jishi1': '惠山阳之民，更愿泽披天下黎庶。',
			'#ext:官将重修/audio/skill/gjcxs_jishi2': '与夫君救百姓于水火，亦是幸事。',

			gjcx_caimaozhangyun: '蔡瑁张允',
			gjcxs_biwen: '蔽闻',
			gjcxs_biwen_info: ui.joint`
				每轮每项各限一次：
					①一名角色造成伤害时，你可以令其获得牌堆中的一张黑色牌并令此伤害-1；
					②一名角色回复体力时，你可以令其弃置一张红色牌并令回复值+1。
			`,

			gjcx_caiyong: '蔡邕',
			'#ext:官将重修/audio/character/gjcx_caiyong:die': '以后的路，为父不能陪你走下去了……',
			gjcxs_pizhuan: '辟撰',
			gjcxs_pizhuan_info: '锁定技，你的【书】不计入手牌数；当你使用♠牌或成为♠牌的目标后，你获得一张【书】。',
			'#ext:官将重修/audio/skill/gjcxs_pizhuan1': '撰古人之事，知来者之途。',
			'#ext:官将重修/audio/skill/gjcxs_pizhuan2': '大汉青史，流于笔下。',
			gjcxs_tongbo: '通博',
			gjcxs_tongbo_info: '摸牌阶段结束时，你可以弃置四张花色各不相同的牌，然后令一名角色摸等量的牌并执行一个额外的出牌阶段。',
			'#ext:官将重修/audio/skill/gjcxs_tongbo1': '通晓古今，博万家之言。',
			'#ext:官将重修/audio/skill/gjcxs_tongbo2': '群书通博，高论自得。',

			gjcx_jianshuo: '蹇硕',
			gjcxs_wulve: '武略',
			gjcxs_wulve_info: '锁定技，你的回合外，你所有手牌均视为【杀】。',
			gjcxs_quce: '驱策',
			gjcxs_quce_info: '其他角色的出牌阶段结束时，你可以令其视为对你使用一张【决斗】。若其手牌数为全场最多，则改为你使用之。',

			gjcx_liuyao: '刘繇',
			gjcxs_niju: '逆拒',
			gjcxs_niju_info: '锁定技，当前回合角色使用牌指定你为目标后，你须与其拼点。若你赢，你令此牌对你无效；否则你令其摸两张牌。',
			'#ext:官将重修/audio/skill/gjcxs_niju1': '愿穷涓埃之力，无肆问鼎之奸！',
			'#ext:官将重修/audio/skill/gjcxs_niju2': '此皆汉臣之责，无图戡复之勋！',
			gjcxs_zangpi: '臧否',
			gjcxs_zangpi_info: '锁定技，有角色拼点牌亮出后，若其手牌数与你不同，你令此牌点数+6或-6。',

			gjcx_tianfeng: '田丰',
			gjcxs_sijian: '死谏',
			gjcxs_sijian_info: '锁定技，当你失去最后一张手牌后，你对一名其他角色造成1点伤害。',
			gjcxs_suishi: '随势',
			gjcxs_suishi_info: '锁定技，一名角色进入濒死状态时，你摸两张牌；其他角色死亡后，你弃置所有手牌或失去1点体力。',

			gjcx_zhangling: '张道陵',
			gjcxs_fulu: '符箓',
			gjcxs_fulu_info: ui.joint`
				出牌阶段限一次，你可以摸一张牌，然后将一张手牌置于一名其他角色的武将牌上，称为「符」；
				有「符」的角色不能使用或打出与「符」牌名、花色或点数相同的牌，其体力值减少后，将其武将牌上的所有「符」置入弃牌堆。
			`,
			gjcxs_daofa: '道法',
			gjcxs_daofa_info: ui.joint`
				锁定技，一名角色的判定牌生效后，你发动一次〖符箓〗；
				一名角色死亡后，你加1点体力上限；
				牌堆洗切后，你回满体力并将此武将牌变更为随机一张神势力武将牌。
			`,

			gjcx_wangxiang: '王祥',
			gjcxs_bingli: '冰鲤',
			gjcxs_bingli_info: ui.joint`
				当你需要使用本回合未使用过的基本牌时，若你的手牌数等于体力值，你可以弃置所有不为黑色的手牌并摸一张牌，然后视为使用之。
			`,
			gjcxs_qingda: '清达',
			gjcxs_qingda_info: ui.joint`
				当你从其他角色处获得牌后，你将这些牌置于武将牌上称为「清」；
				其他角色的回合结束时，若你武将牌上有「清」，你可以移去一张「清」并将手牌数调整至与体力值相同。
			`,

			gjcx_weiguan: '卫瓘',
			gjcxs_zhongyun: '忠允',
			gjcxs_zhongyun_info: '一名角色的判定牌生效前，你可以打出一张与判定牌颜色不同的手牌代替之。',
			gjcxs_shenpin: '神品',
			gjcxs_shenpin_info: '当你的手牌数或体力值发生变化后，若二者因此相等，你可以摸一张牌或弃置其他角色一张牌。',

			sbqq: '傻逼QQ',
			shit: '众矢',
			shit_info: '锁定技，游戏开始时，你将身份改为主公，并将其他角色的身份改为反贼。',
			ban: '封禁',
			ban_info: ui.joint`
				锁定技，其他角色A使用牌指定另一名角色B为目标后，你从“花色”“点数”“牌名”“类型”“属性”中随机抽取一项作为条件：
				若你的牌中不包含与此牌［条件］相同的牌，你令此牌对B无效。
				若你本回合已对A发动过〖封禁〗，你令其翻至背面朝上。
			`,
			hucksterize: '推送',
			hucksterize_info: '锁定技，其他角色的回合开始时，你令其获得一张【毒】。',
			nonfeasance: '优化',
			nonfeasance_info: '锁定技，你的技能出现bug时一律不修并尝试解决引起bug的其他角色。',
		},
	};
	for (let i in gjcx.character) {
		gjcx.character[i] = new lib.element.Character(gjcx.character[i]);
	}
	return gjcx;
});
