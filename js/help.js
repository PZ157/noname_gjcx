import { lib, game, ui, get, ai, _status } from './utils.js';

export let help = {
	官将重修: ui.joint`
		<span style="font-family: xinwei">FAQ：</span>
		<br>下面列出几个本扩展相关的没解释清楚的问答
		<br><br>①<span style="font-family: shousha">Q:什么情况下使用【方天画戟】会亮明身份？</span>
		<br><span style="font-family: xingkai">
			A:身份局内，当你使用【方天画戟】额外指定目标后，如果场上能额外指定这么多目标数的势力只有一方（主忠、反、内），那么系统就会亮明你的身份。
			鉴于明忠模式主公也会隐藏身份，如果此时只能确定你是主忠方但无法确定你是主公还是忠臣，那么就不会亮明身份。
		</span>
		<br><br>②<span style="font-family: shousha">Q:【衠钢槊】原版和〔我弃他后他弃我〕不都是彼此弃牌嘛，有啥区别？</span>
		<br><span style="font-family: xingkai">
			A:原版是对方先弃你的手牌，前提是你必须有手牌，他有没有无所谓；〔我弃他后他弃我〕则相反，有时候你可以白嫖
		</span>
		<br><br>③<span style="font-family: shousha">Q:为啥重启后生效的选项是魏体？开局后重启生效的选项是行楷？即时生效是默认字体？</span>
		<br><span style="font-family: xingkai">
			A:个人认为，魏体显庄重（最难以更改形态即重启生效），行楷虽飘逸但规整（类推），不做改动的字体选项数最多，所以懒得改动
		</span>
	`,
};
