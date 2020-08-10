<template>
	<!-- 注意：最多100页，多了要改z-index最大值 -->
	<view>
		
		<!-- 操作层 -->
		<view class="action" @touchstart.stop="touchStart" @touchend.stop="touchEnd" @touchmove.stop="touchMove">
			<view class="item left" @click.stop="prePage"></view>
			<view class="item mid" @click.stop="showMenu"></view>
			<view class="item right" @click.stop="nextPage"></view>
		</view>
		
		<!-- 仅用于计算 -->
		<view class="container hidden">
			<view class="chapter">
				{{chapterName}}
			</view>
			<view id="content" class="content"
				:style="{height:`${contentHeight}px`, width: `${contentWidth}px`,
				 columns: `${contentWidth}px`, columnGap:`${columnGap}px`}"
			>
				<view class="book-inner" id="text" v-html="text"
					:style="{fontSize: `${fontSize}px`, lineHeight: `${lineHeight*fontSize}px`}"
				>
				</view>
			</view>
			<view class="bottom-bar">
				显示电量、页码
			</view>
		</view>
		
		<view class="container hidden">
			<view class="chapter">
				{{chapterName}}
			</view>
			<view id="content" class="content"
				:style="{height:`${contentHeight}px`, width: `${contentWidth}px`,
				 columns: `${contentWidth}px`, columnGap:`${columnGap}px`}"
			>
				<view class="book-inner" id="preText" v-html="preText"
					:style="{fontSize: `${fontSize}px`, lineHeight: `${lineHeight*fontSize}px`}"
				>
				</view>
			</view>
			<view class="bottom-bar">
				显示电量、页码
			</view>
		</view>
		
		<view class="container hidden">
			<view class="chapter">
				{{chapterName}}
			</view>
			<view id="content" class="content"
				:style="{height:`${contentHeight}px`, width: `${contentWidth}px`,
				 columns: `${contentWidth}px`, columnGap:`${columnGap}px`}"
			>
				<view class="book-inner" id="nextText" v-html="nextText"
					:style="{fontSize: `${fontSize}px`, lineHeight: `${lineHeight*fontSize}px`}"
				>
				</view>
			</view>
			<view class="bottom-bar">
				显示电量、页码
			</view>
		</view>
		
		<!-- 阅读页 -->
		
		<!-- 上一章 -->
		<view class="container" :class="{container0: background === 0, container1: background === 1}"
			:style="{zIndex: 300, transform: `translateX(${preTranslateX}px)`, transition: `all ${showAnimation?turnPageTime:0}s`}"
		>
			<view class="chapter">
				{{preChapterName}}
			</view>
			<view class="content"
				:style="{height:`${contentHeight}px`, width: `${contentWidth}px`,
				fontSize: `${fontSize}px`,color: `${colorList[background]}`,
				transform: `translateX(-${(prePages.length-1)*(contentWidth+columnGap)}px)`,
				columns: `${contentWidth}px`, columnGap:`${columnGap}px`}"
			>
				<view class="book-inner" v-html="text"
					:style="{fontSize: `${fontSize}px`, lineHeight: `${lineHeight*fontSize}px`}"
				>
				</view>
			</view>
			<view class="bottom-bar">
				{{prePages.length}}/{{prePages.length}}
			</view>
		</view>
		
		<!-- 本章 -->
		<view class="container" :class="{container0: background === 0, container1: background === 1}"
			v-for="item of pages" :key="item.id" 
			:style="{zIndex: item.zIndex, transform: `translateX(${item.translateX}px)`, transition: `all ${showAnimation?turnPageTime:0}s`}"
		>
		<!-- v-if="item.id - currentPage < 2 && item.id - currentPage > -2" -->
			<view class="chapter">
				{{chapterName}}
			</view>
			<view class="content"
				:style="{height:`${contentHeight}px`, width: `${contentWidth}px`,
				fontSize: `${fontSize}px`,color: `${colorList[background]}`,
				transform: `translateX(-${item.id*(contentWidth+columnGap)}px)`,
				columns: `${contentWidth}px`, columnGap:`${columnGap}px`}"
			>
				<view class="book-inner" v-html="text"
					:style="{fontSize: `${fontSize}px`, lineHeight: `${lineHeight*fontSize}px`}"
				>
				</view>
			</view>
			<view class="bottom-bar">
				{{item.id + 1 }}/{{pages.length}}
			</view>
		</view>
		
		<!-- 下一章 -->
		<view class="container" :class="{container0: background === 0, container1: background === 1}"
			:style="{zIndex: 100, transform: `translateX(0px)`}"
			v-if="pages.length"
		>
			<view class="chapter">
				{{nextChapterName}}
			</view>
			<view class="content"
				:style="{height:`${contentHeight}px`, width: `${contentWidth}px`,
				fontSize: `${fontSize}px`,color: `${colorList[background]}`,
				transform: `translateX(0px)`,
				columns: `${contentWidth}px`, columnGap:`${columnGap}px`}"
			>
				<view class="book-inner" v-html="nextText"
					:style="{fontSize: `${fontSize}px`, lineHeight: `${lineHeight*fontSize}px`}"
				>
				</view>
			</view>
			<view class="bottom-bar">
				1/{{nextPages.length}}
			</view>
		</view>
		
		<!-- 菜单层 -->
			
		<view class="top" :style="{height: `${statusBarHeight + 30}px`, top: menuShow ? 0 : `-${statusBarHeight + 30}px`}">
			<view :style="{height: `${statusBarHeight}px`}"></view>
			<view class="head">
				<view class="back" @click="back">返回</view>
				<view>
					{{chapterName}}
				</view>
			</view>
		</view>
		<view class="bottom" :style="{bottom: menuShow ? 0 : `-300px`}">
			<view class="item">
				<view class="item-name">字号</view>
				<view class="icon" @click.stop="bigSize">A+</view>
				<view class="icon" @click.stop="smallSize">A-</view>
			</view>
			<view class="item">
				<view class="item-name">排版</view>
				<view class="type-setting" :class="{active: lineHeight === 1}" @click.stop="changeLineHeight(1)">
					<view class="line" :class="{active: lineHeight === 1}" v-for="i in 5" :key="i"></view>
				</view>
				<view class="type-setting" :class="{active: lineHeight === 1.5}" @click.stop="changeLineHeight(1.5)">
					<view class="line" :class="{active: lineHeight === 1.5}" v-for="i in 4" :key="i"></view>
				</view>
				<view class="type-setting" :class="{active: lineHeight === 2}" @click.stop="changeLineHeight(2)">
					<view class="line" :class="{active: lineHeight === 2}" v-for="i in 3" :key="i"></view>
				</view>
			</view>
			<view class="item">
				<view class="item-name">背景</view>
				<view class="icon" style="background: url(../../static/background1.jpg);" :class="{active: background === 0}" @click.stop="changeBackground(0)"></view>
				<view class="icon" style="background-color: #000;" :class="{active: background === 1}" @click.stop="changeBackground(1)"></view>
			</view>
		</view>
			
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chapterId: '',
				chapterName: '',
				preChapterName: '',
				nextChapterName: '',
				textFixed:`<p>灯火通明的内殿之中，金碧辉煌，气势威严，殿内有着长明灯燃烧，其中燃烧着一颗青石，袅袅的青烟升腾而起，盘绕在殿内。</p><p>那是青檀石，燃烧起来会释放出异香，有着凝神静心之效，乃是修炼时必备之物，不过此物价格不低，能够当做燃料般来使用，足以说明此地主人颇有地位。 </p><p>内殿中，一名身着明黄袍服的中年男子负手而立，他面容坚毅，眼目之间有着威严之气，显然久居高位，而其身后，隐有气息升腾，似炎似雷，发出低沉轰鸣之声。 </p><p>只是若是看向其右臂，却是发现空空荡荡，竟是一只断臂。 </p><p>在他的身旁，还有着一位宫装美妇，她娇躯纤细，容貌雍容而美丽，不过其脸颊，却是显得分外的苍白与虚弱。 </p><p>而此时的这对显然地位不低的男女，都是面带着一丝紧张之色的望着前方，只见得在那里的床榻上，有着一名约莫十三四岁的少年盘坐，少年身躯略显单薄，双目紧闭，那张属于少年人本应该朝气蓬勃的脸庞，却是萦绕着一股血气。 </p><p>那股诡异的血气，在他的皮肤下窜动，隐隐间，仿佛有着怨毒的龙啸声传出。 </p><p>而伴随着那道龙啸，少年额头上青筋耸动，身体不断的颤抖着，面庞变得狰狞，似乎是承受了难于言语的痛苦。 </p><p>在少年的身侧，一名白发老者手持一面铜镜，铜镜之上，有着柔和的光芒散发出来，照耀在少年身体上，而在那光芒的照耀下，少年面庞上的诡异血气则是开始渐渐的平复。 </p><p>血气在持续了一炷香时间后，终是尽数的退去，最后缩回了少年的掌心之中。 </p><p>白发老者见到这一幕，顿时如释重负的松了一口气，然后转过身来，对着一旁紧张等待的中年男子以及宫装美妇弯身道：“恭喜王上，王后，这三年一道的大坎，殿下总算是熬了过来，接下来的三年，应当都无大碍。” </p><p>中年男子与宫装美妇闻言，皆是面露喜色，紧握的拳头都是渐渐的松开。 </p><p>“秦师，如今元儿已是十三，一般这个年龄的少年，都已八脉成形，可以开始修炼了，那元儿？”身着明黄袍服的威严男子，期待的望着眼前的白发老者，问道。 </p><p>听到此问，白发老者神色顿时黯淡了一些，他微微摇头，道：“王上，这一次老夫依然没有探测到殿下体内八脉...” </p><p>威严男子闻言，眼神同样是黯淡了下来。 </p><p>在这天地间，修行之道，始于人体，人体内拥有着无数经脉，而其中最为重要的，便是八大脉，而除了某些特殊的情况，一般的人，体内的八脉要在十二三岁左右时，方才会渐渐的成形，而这个时候，就需要将这八脉找出来，只有找到了这八脉，才能够开始修炼，吞纳天地源力，打通八脉。 </p><p>这就是开脉境，一切修炼之始。 </p><p>而修炼者因吞吐天地本源之力，蜕变自身，故而也被称为源师。 </p><p>秦师瞧得中年男子面庞上的黯淡，也是有些不忍，轻叹一声，道：“殿下本是圣龙之命，当惊艳于世，傲视苍穹，怎料到却遭此劫难...” </p><p>中年男子双掌紧握，一旁的宫装美妇也是眼眶红润，然后捂着嘴剧烈的咳嗽了两声。 </p><p>“王后保重身体，您先前损失大量精血以滋养殿下，不可心绪激荡。”秦师见状，连忙出声道。</p> <p>宫装美妇却是摆了摆手，眼露哀色的望着那盘坐在床榻上的少年，道：“元儿体内之毒，三年爆发一次，一次比一次厉害，想要根除，唯有依靠他自己，可如今他八脉不显，三年之后，又该如何？”</p><p>秦师沉默了一会，缓缓的道：“三年之后，外力压制将会失效，若还是如此，恐怕殿下，性命堪忧。” </p><p>此言一出，殿内顿时一片沉默，中年男子双掌紧握，身躯微微颤抖，而宫装美妇，更是捂着嘴发出低低的泣声。 </p><p>“这么说...我的寿命只剩下三年了？”沉默之中，忽有一道略显稚嫩，但却平静的声音，突然的响起。 </p><p>大殿三人闻言，都是一惊，连忙抬头，只见得床榻上的少年不知何时睁开了眼睛，正望着他们。 </p><p>三人面面相觑一眼，显然都没想到少年苏醒得如此之快，要知道以前，他可是要昏睡两三天才能缓过来。 </p><p>“元儿...” </p><p>被称为元儿的少年，名为周元，而眼前的中年男子与美妇，便是这大周王朝的王上与王后，周擎，秦玉。 </p><p>周元抿了抿嘴，稚嫩的脸庞显得有些苍白，或许是因为从小身子单薄，他只能多读书的缘故，看上去有些书卷气，他沉默了片刻，缓缓的伸出手掌。 </p><p>只见得在其掌心处，竟是有着一团暗沉的血色，那道血色犹如是烙印到了血肉最深处，它慢慢的蠕动着，看上去仿佛一条张牙舞爪的血龙一般，隐隐的，似乎有着浓浓的怨憎之气，自那其中散发出来，令人不寒而栗。 </p><p>“父王，母后...这一次，你们总该告诉我，在我身上，究竟发生了什么吧？” </p><p>周元盯着掌心中这犹如一条小小血龙般的东西，牙齿忍不住的紧咬起来，就是这个东西，让他体会到了什么叫做生不如死般的痛苦。 </p><p>每过三年，这个东西就开始作怪，犹如是要将他浑身的血肉一寸寸的给吞噬了一般，带来无边的痛苦。 </p><p>听到周元的话，周擎与秦玉面色都是变得没有了多少血色，特别是前者，拳头紧握，脸庞上浮现着浓浓的悔恨与自责之色。 </p><p>沉默持续了半晌，空气都有些凝固，周擎终于是深深吸了一口气，声音嘶哑的道：“这是，怨龙毒。” </p><p>“怨龙毒？”周元眉头紧皱，不明所以。 </p><p>周擎手掌有些颤抖的摸着周元的脑袋，道：“这些事，如今你也应该知道了，元儿，你知道吗，你是我周家圣龙！” </p><p>周元忍不住的苦笑一声，有这么惨的圣龙吗？连体内八脉都找不到。 </p><p>周擎坐在周元身旁，声音低沉的道：“元儿，如今我们大周王朝，在这无尽的苍茫大陆上，或许只能算做偏隅小国，但你却是不知，十五年前，我们大周，却是巍峨大国，诸国来朝，威震四方。” </p><p>周元小脸上浮现一些惊讶之色，这苍茫大陆上，王朝帝国众多，而他们大周王朝在其中并不算太过的起眼，没想到以往还有如此地位？ </p><p>“你可知那大武王朝？”周擎在说起这个名字的时候，一字一顿，仿佛是刻骨铭心。 </p><p>“大武王朝？”周元点了点头，大武王朝，乃是这苍茫大陆中顶尖级别的王朝，国运鼎盛，源师无数，比起他们大周，可谓是巨人与矮子。 </p><p>周擎的眼睛，却是在此时一点点的通红起来，眼中流露出深深的仇恨：“那你可又知道，在十五年前，如今的大武皇室，却只是我们大周王朝的臣属？” </p><p>周元的眼中终于是出现了一丝震惊之色，如今那大武皇室，竟然曾经是他们大周的臣属？他们大周十五年前，竟然是如此的强大？ </p><p>“那...那为什么会变成这样？”周元忍不住的问道。 </p><p>“在我大周成立的数百年间，武家一直跟随我们周家四方征战，忠心耿耿，后来我们大周立国，念其功劳，更是封武家为世袭武王，享受无边权利，而武家也在百年间，守护大周边境，震慑四方。” </p><p>周擎身体微微颤抖，眼中的血丝在此时攀爬出来：“然而，谁都没想到，十五年前，武家忽然发动叛乱，到得此时，我们周氏皇族方才发现，经过这些年的韬光养晦，那武家已经拥有了极为强大的力量，而且王朝内的诸多封王，都是被其所拉拢。” </p><p>“短短不到一年，我们周氏溃败，一路南逃，逃向我们周氏发迹的祖地，也就是如今我们大周的这片地域。” </p><p>“我不知道武家为何会叛变，他们在我们大周享有的地位，丝毫不弱于皇族...” </p><p>“直到后来，密探从武家得到了一些情报，那是一句流传在武家内部数百年的预言...” </p><p>“预言？”周元微怔。 </p><p>周擎咬着牙齿，一字字的道：“蟒雀吞龙，大武当兴！” </p><p>“蟒雀吞龙，大武当兴？”周元轻轻的念了一次，却是不明其意，道：“这是什么意思？” </p><p>周擎的眼睛在此时变得赤红起来，他盯着周元，眼神无比的哀痛：“当初我也不知道这究竟是什么意思，直到那一天...” </p><p>“我们大周溃败，我率领着大周残部，不断撤退，武家紧追不舍，直到追击到我们脚下这座大周城，但武家却是围而不攻，仿佛在等待。” </p><p>“等待什么？”周元感觉到一股不安。 </p><p>周擎盯着周元，脸庞上浮现出一股似哭非哭之色，那种绝望与愤怒，让得周元心都是在颤抖。 </p><p>“他们在等待你的出生。” </p><p>周擎的这句话，让得周元心头剧震，一脸的措手不及。 </p><p>在那一旁，周元的母亲，秦玉已是捂着嘴，发出了压抑到极致的哭泣声。 </p><p>“你知道你出生的时候是怎么样的吗？”周擎望着周元，眼睛血红的道：“元儿，你出生的那一刻，天有异象，紫气蒸腾，有龙气缠身，龙吟震天地，乃是圣龙气象。” </p><p>“你天生八脉自开，刚刚出生，就已迈过开脉境，直达养气。” </p><p>“这是传说中的“圣龙气运”，亿万无一，未来可入大境界，与天地同光，日月同寿，你是我周家前所未有的圣龙！” </p><p>周擎语气无比的激动，浑身剧烈的颤抖着，当周元出生时，可以想象他是何等的激动，天不亡周家，在这危难时刻，让得他们周家迎来了圣龙诞生。 </p><p>周元也是睁大了眼睛，显然是无法想象，在他出生之时，竟然会有如此异象。 </p><p>“那...那为什么...”他手掌微微有些颤抖的抚摸着自己的身体，既然他是天生八脉自开的话，那为何如今却是体内连八脉都是找不到？ </p><p>周擎激动的声音噶然而止，他眼中的光芒，仿佛是在此刻散尽，只有着浓浓的悲哀之色，他神色灰败的道：“因为就在你出生的那一刻，城外武王之妻，也是诞下了一男一女，男婴身缠蛟蟒之气，女.婴头有灵雀之气，也是身具气运！” </p><p>“而据我们得到的情报，那武王之妻，怀胎已是足足三年，却始终未产，却是在今日，突然产下...” </p><p>“以往我还尚不知为何，那时却是终于明白过来，传闻同年同月同日生者，可互噬气运，原来，那武家筹谋多年，所为的，并不是简单的谋我大周，而是谋我周家之龙！” </p><p>周元张了张嘴，一股寒意自脚底冲上了天灵盖：“这是一个阴谋！” </p><p>天下间哪有这么巧的事，这显然是一个酝酿百年，并且针对着他们周氏，甚至...专门针对着他的一个大阴谋。 </p><p>为了此，他们甚至使劲手段，让那武王之妻三年不产，就是在等他！ </p><p>周擎点了点头，声音嘶哑的道：“的确是一个阴谋，武家在我大周隐忍数百年，为我大周南征北战，尽取信任，然而谁都没想到，他们的百年隐忍，都是为了你而来！” </p><p>“那一日，武王入城，以亿万大周子民为要挟，要在我与你母后面前，夺你的圣龙气运...”说到此处，周擎的眼中甚至是有着血泪流淌出来。 </p><p>在那一旁，秦师也是面色悲痛，他声音低沉的道：“那一日，王上为了保护殿下，与武王战于大周山，却是不敌，被其斩断一臂，若不是那武王怕其他人毁了殿下的圣龙气运同归于尽，恐怕连王上都得战死其手。” </p><p>“而为了顺利的夺得殿下的气运，武王立祖誓，百年内大武不踏足大周半步。” </p><p>当年那可怕的一幕再度从脑海深处涌了出来，一旁的秦玉，再也忍受不住情绪，跪倒在了周元身前，将他紧紧的抱住，痛哭起来，哭声撕心裂肺。 </p><p>“元儿！我可怜的儿！母后对不起你！” </p><p>那一日的残酷记忆，再度被血淋淋的撕开，她清晰的记得，刚刚出生的周元，被当做阵眼，置于武王所布置的祭坛之上。 </p><p>而在祭坛中，还有着那武王刚刚出生的一对儿女。 </p><p>只不过，一个是被夺，两个是在得。 </p><p>气运剥夺，犹如血肉剥离，那种痛苦难以想象。 </p><p>而那时候的秦玉，刚刚得子之喜，但却只能眼睁睁的看着自家孩儿在那冰凉的祭坛中，承受着无边痛苦，将稚嫩的声音都哭得嘶哑起来。 </p><p>那种绝望与无力，几乎是令得那时候的她惨些晕死过去。 </p><p>噗嗤。 </p><p>而因为心情激荡，秦玉脸颊瞬间苍白起来，一口鲜血忍不住的喷了出来，染红了周元的头发。 </p><p>“母后？！你怎么了？”周元大惊，急忙帮秦玉搽去嘴角的血迹。 </p><p>一旁的秦师赶紧走上来，掌心散发着柔和之气，自秦玉天灵盖灌注而进，帮助她稳住体内的气血，他看了一眼脸色苍白的秦玉，然后对着周元叹息道：“殿下，你也莫怪王上与王后未能保护好你，王上当年拼尽了一切，险些战死。” </p><p>“而王后更是在当初你被剥夺气运后，将自身精血注入你的体内，之后年年为你输血，如此殿下才能够活到今日，不过王后也为此付出了极大的代价，她每输血一次，都将会减寿三年，十二年里，她已减寿三十六年，元气大伤，如今已是仅有不到十年的寿命。” </p><p>“什么？！你说什么？！” </p><p>周元听到此话，顿时如遭雷击，眼中血丝疯狂的攀爬出来，先前即便是听见自身气运被夺，他都未曾有如此强烈的情绪波动，毕竟这些事发生在他年幼不记事时，因此对那所谓的“圣龙气运”也没有太过强烈的归属感，即便被设计剥夺，也只是感到有些震惊。 </p><p>武家设计他百年，他心中虽有波澜，但却能够压制住，但他们将疼爱他的母亲逼到寿元枯竭，却是让得周元心中第一次拥有了无法遏制的杀意。 </p><p>所以，当此时听到秦师这句话时，周元再也保持不了情绪，浑身血液都在疯狂的对着脑子涌去，令得他的脸庞变得血红，清秀的稚嫩面庞，竟是显得有些狰狞起来。 </p><p>“武家，你们安敢逼害我母后！真该死！” </p><p>周元浑身颤抖着，眼睛血红，一股滔天般的震怒与杀意自心头涌起。 </p><p>周擎将秦玉抱起，让她靠在玉榻上，此时他的头发仿佛都是在此时苍白了一些，威严的气势荡然无存，他语气木然的道：“天地间有气运一说，武家底蕴单薄，想要立国，绵延后代，震慑四方，那就必须需要足够的气运支撑，而你的圣龙气运，就是最佳之物。” </p><p>“武王夺你气运，赐予其子与女，自此，大武有龙凤相护，国运鼎盛，大武王朝的兴盛，全是因为夺了你的气运。” </p><p>“而你身怀的圣龙气运，被那蟒雀之命强行掠夺，自然就产生了强烈的怨恨之气，那武王故意将这怨恨之气封于你的体内，从而形成了怨龙毒，它吞食你的精血不断的壮大，直到某一天成熟爆发，就会将你的生机彻底吞灭。” </p><p>“同时你圣龙.根被破，天生八脉消退，直到今日，八脉都未曾再显，修行之路艰难...” </p><p>周擎声音苍凉，其中透着无边的无力，难以想象，那一日对他们周氏而言，是一种何等绝望。 </p><p>那一日，城外蟒雀齐鸣，霞光万丈，借势蜕变。 </p><p>那一日，城内圣龙哀鸣，化为青烟，袅袅而散。 </p><p>此为，蟒雀吞龙。 </p><p></p>`,
				text: '',
				nextText: '',
				preText: '',
				preTranslateX: 0,  //上一章的位移
				
				showAnimation: false, //是否开启动画
				pages: [],
				prePages: [],
				nextPages: [],
				contentWidth: 0,
				contentHeight: 0,
				windowWidth: 0,
				windowHeight: 0,
				platform: '',  //设备
				batteryState: '', //电池状态
				batteryLevel: '', //电量
				
				statusBarHeight: 0, //状态栏高度
				columnGap: 40,
				currentPage: 0,
				touchStartX: 0,  // 触屏起始点
				touchStartT: 0,  //触屏起始时间
				touchTimer: null  ,//用于触摸节流
				menuShow: false,
				turnPageTime: 0.5,  //翻页动画时间
				
				fontSize: '',
				lineHeight: '',
				background: '',
				colorList: ['#000', '#666'],
				
				wait: false   //翻至章节交接时，会导致翻至空白页bug,需要等待章节轮换
				
			}
		},
		onLoad() {
			this.getSystemInfo()
		},
		mounted() {
			this.initPage()
		},
		computed:{
			progress() {
				return this.currentPage / (this.pages.length - 1);
			}
		},
		methods: {
			
			/**
			* 返回上一页面
			**/
			back() {
				uni.navigateBack()
			},
			
			/**
			* 获取设备信息
			**/
			getSystemInfo() {
				
				const { windowWidth, windowHeight, statusBarHeight, platform } = uni.getSystemInfoSync();
				this.statusBarHeight = statusBarHeight;
				this.windowWidth = windowWidth;
				this.windowHeight = windowHeight;
				this.contentWidth = windowWidth - 40;
				this.contentHeight = windowHeight - 60;
				this.platform = platform;
				
				// #ifdef APP-PLUS
					plus.navigator.setFullscreen(true);
					// 获取安卓电量
					if (this.platform === 'ios') {
						let UIDevice = plus.ios.import("UIDevice");  
						let dev = UIDevice.currentDevice();  
						if (!dev.isBatteryMonitoringEnabled()) {  
						    dev.setBatteryMonitoringEnabled(true);  
						}  
						this.batteryState = dev.batteryState();
						this.batteryLevel = dev.batteryLevel();
					}
					else {
						let main = plus.android.runtimeMainActivity();
						let Intent = plus.android.importClass('android.content.Intent');  
						let recevier = plus.android.implements('io.dcloud.feature.internal.reflect.BroadcastReceiver', {  
						    onReceive: (context, intent) => {  
						        let action = intent.getAction();  
						        if (action == Intent.ACTION_BATTERY_CHANGED) {  
						            this.batteryState = intent.getIntExtra("status", 0); //电池状态  
									this.batteryLevel = intent.getIntExtra("level", 0); //电量
						        }  
						    }  
						 });  
						let IntentFilter = plus.android.importClass('android.content.IntentFilter');  
						let filter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);  
						main.registerReceiver(recevier, filter); 
					}
					
				// #endif
				
				// 获取字体、排版等信息
				this.fontSize = uni.getStorageSync('fontSize') || 16;
				this.lineHeight = uni.getStorageSync('lineHeight') || 1.5;
				this.background = uni.getStorageSync('background') || 0;
			},
			
			/**
			* 获取数据初始化页面
			**/
			async initPage() {
				this.preTranslateX = -this.windowWidth - 20;
				await this.getData()
				this.$nextTick(() => {
					this.calcPages()
				})
			},
			
			/**
			* 计算阅读页长度,并生成pages,并跳转至某页（如果有）
			**/
			calcPages(type, progress) {
				const query = uni.createSelectorQuery().in(this);
				query.select('#text').boundingClientRect(data => {
					let width = data.width;
					let height = data.height;
					this.pages = this.genPages(width, height)
					if (type === 1) {
						this.currentPage = Math.floor((this.pages.length - 1) * progress)
						this.goToPage(this.currentPage)
					}
				}).exec();
				this.calcPrePages()
				this.calcNextPages()
			},
			
			/**
			* 计算上一章阅读页长度,并生成pages
			**/
			calcPrePages() {
				const query = uni.createSelectorQuery().in(this);
				query.select('#preText').boundingClientRect(data => {
					let width = data.width;
					let height = data.height;
					this.prePages = this.genPages(width, height)
				}).exec();
			},
			
			/**
			* 计算下一章阅读页长度,并生成pages
			**/
			calcNextPages() {
				const query = uni.createSelectorQuery().in(this);
				query.select('#nextText').boundingClientRect(data => {
					let width = data.width;
					let height = data.height;
					this.nextPages = this.genPages(width, height)
				}).exec();
			},
			
			
			/**
			* 生成阅读页pages
			**/
			genPages(width, height) {
				let arr = [];
				let id = 0;
				if (this.platform === 'ios') {
					while (height > 0) {
						arr.push({
							id,
							zIndex: 200 - id,
							translateX: 0
						});
						id++;
						height -= this.contentHeight
					}
				}
				else {
					while (width > 0) {
						arr.push({
							id,
							zIndex: 200 - id,
							translateX: 0
						});
						id++;
						width -= this.contentWidth + this.columnGap
					}
				}
				return arr;
			},
			
			/**
			* 触摸开始
			**/
			touchStart(e) {
				this.showAnimation = false;
				this.touchStartX = e.touches[0].clientX;
				this.touchStartT = e.timeStamp;
			},
			
			/**
			* 触摸结束
			**/
			touchEnd(e) {
				this.showAnimation = true;
				let deltaX = e.changedTouches[0].clientX - this.touchStartX;
				if (deltaX > this.windowWidth/2) {
					this.prePage()
				}
				else if (deltaX < -this.windowWidth/2) {
					this.nextPage()
				}
				else {
					let v = 0;
					v = deltaX / (e.timeStamp - this.touchStartT);
					if (v <= 0.1 && v > 0) {  //翻页速度慢，取消翻页
						if (this.currentPage !== 0) {
							this.pages[this.currentPage - 1].translateX = -this.windowWidth - 20;
						}
						else {
							this.preTranslateX = -this.windowWidth - 20;
						}
					}
					else if (v >= -0.1 && v < 0) {  //翻页速度慢，取消翻页
						this.pages[this.currentPage].translateX = 0;
					}
					else if(v > 0.1) {
						this.prePage()
					}
					else if (v < -0.1) {
						this.nextPage()
					}
				}
			},
			
			/**
			* 触摸
			**/
			touchMove(e) {
				
				if (!this.touchTimer) {
					let deltaX = e.touches[0].clientX - this.touchStartX;
					if (deltaX < 0) {
						if (this.currentPage === this.pages.length - 1) {  //如果翻至最后一页
							if (this.nextText.length === 0) {  //如果没有下一章
								uni.showToast({
									title: '这是最后一章',
									icon: 'none'
								})
							}
							else {
								this.pages[this.currentPage].translateX = deltaX;
							}
						}
						else {
							this.pages[this.currentPage].translateX = deltaX;
						}
					}
					else {
						if (this.currentPage === 0) {  //如果是第一页
							if (this.preText.length === 0) {  //如果没有上一章
								uni.showToast({
									title: '这是第一章',
									icon: 'none'
								})
							}
							else {
								this.preTranslateX = -this.windowWidth + deltaX;
							}
						}
						else {
							this.pages[this.currentPage - 1].translateX = -this.windowWidth + deltaX;
						}
					}
					this.touchTimer = setTimeout(() => {
						this.touchTimer = null;
					}, 10)
				}
			},
			
			/**
			* 呼出菜单
			**/
			showMenu() {
				// #ifdef APP-PLUS
					// plus.navigator.setFullscreen(this.menuShow);
				// #endif
				this.menuShow = !this.menuShow;
			},
			
			
			/**
			* 上一页
			**/
			prePage() {
				if (this.menuShow) {
					this.menuShow = false;
					// #ifdef APP-PLUS
						// plus.navigator.setFullscreen(true);
					// #endif
					return
				}
				if (this.currentPage === 0) {
					if ( this.preText.length === 0) {
						uni.showToast({
							title: '这是第一章',
							icon: 'none'
						})
					}
					else if (!this.wait) {
						this.wait = true;
						uni.showToast({
							title: this.preChapterName,
							icon: 'none'
						})
						this.preTranslateX = 0;
						// 动画结束后获取上一章,重置页面
						setTimeout(() => {
							this.preChapter()
						}, this.turnPageTime*1000)
					}
				}
				else{
					this.pages[this.currentPage - 1].translateX = 0;
					this.currentPage--;
				}
			},
			
			/**
			* 下一页
			**/
			nextPage() {
				if (this.menuShow) {
					this.menuShow = false;
					// #ifdef APP-PLUS
						// plus.navigator.setFullscreen(true);
					// #endif
					return
				}
				if (this.currentPage === this.pages.length - 1) {
					if ( this.nextText.length === 0) {
						uni.showToast({
							title: '这是最后一章',
							icon: 'none'
						})
					}
					else if (!this.wait) {
						this.wait = true;
						uni.showToast({
							title: this.nextChapterName,
							icon: 'none'
						})
						this.pages[this.currentPage].translateX = -this.windowWidth - 20;
						// 动画结束后获取下一章,重置页面
						setTimeout(() => {
							this.nextChapter()
						}, this.turnPageTime*1000)
					}
				}
				else {
					this.pages[this.currentPage].translateX = -this.windowWidth - 20;
					this.currentPage++;
				}
				
			},
			
			/**
			* 获取下一章,重置页面，将本章变为前一章，将下一章变为本章，获取下一章内容
			**/
			nextChapter() {
				this.chapterId++;
				this.preText = this.text;
				this.text = this.nextText;
				this.nextText = '';
				this.getText(this.chapterId + 1, 'next')
				this.prePages = this.pages.map((value) => {
					value.translateX = 0;
					return value
				});
				this.pages = [].concat(this.nextPages);
				this.nextPages = [];
				this.preChapterName = this.chapterName;
				this.chapterName = this.nextChapterName;
				this.nextChapterName = '';
				this.wait = false;
				this.currentPage = 0;
				this.goToPage(this.currentPage)
				
			},
			
			/**
			* 获取上一章,重置页面，将本章变为后一章，将上一章变为本章，获取上一章内容
			**/
			preChapter() {
				this.preTranslateX = -this.windowWidth - 20;
				this.chapterId--;
				this.nextText = this.text;
				this.text = this.preText;
				this.preText = '';
				this.getText(this.chapterId - 1, 'pre')
				this.nextPages = this.pages.map((value) => {
					value.translateX = 0;
					return value
				});
				this.pages = [].concat(this.prePages);
				this.prePages = [];
				this.nextChapterName = this.chapterName;
				this.chapterName = this.preChapterName;
				this.preChapterName = '';
				this.wait = false;
				
				this.currentPage = this.pages.length - 1;
				this.goToPage(this.currentPage)
			},
			
			/**
			* 根据页码跳转
			**/
			goToPage(page) {
				if (page > this.pages.length - 1) {
					page = this.pages.length - 1;
				}
				this.showAnimation = false;
				this.pages.forEach((value, index) => {
					if (index < page) {
						value.translateX = -this.windowWidth - 20
					}
				})
			},
			
			/**
			* 加大字体
			**/
			bigSize() {
				if (this.fontSize < 25) {
					let progress = this.progress;
					this.fontSize++;
					uni.setStorageSync('fontSize', this.fontSize)
					this.$nextTick(() => {
						this.calcPages(1, progress)
					})
				}
				else {
					uni.showToast({
						title: '最大字体',
						icon: 'none'
					})
				}
				
				
			},
			
			/**
			* 缩小字体
			**/
			smallSize() {
				if (this.fontSize > 14) {
					let progress = this.progress;
					this.fontSize--;
					uni.setStorageSync('fontSize', this.fontSize)
					this.$nextTick(() => {
						this.calcPages(1, progress)
					})
				}
				else {
					uni.showToast({
						title: '最小字体',
						icon: 'none'
					})
				}
			},
			
			/**
			* 改变行距
			**/
			changeLineHeight(lineHeight) {
				if (lineHeight === this.lineHeight) {
					return
				}
				else {
					let progress = this.progress;
					this.lineHeight = lineHeight;
					uni.setStorageSync('lineHeight', this.lineHeight)
					this.$nextTick(() => {
						this.calcPages(1, progress)
					})
				}
			},
			
			/**
			* 改变背景
			**/
			changeBackground(background) {
				if (background === this.background) {
					return
				}
				else {
					this.background = background;
					uni.setStorageSync('background', this.background)
				}
			},
			
			/**
			* 获取数据，包括阅读到第几章，以及前中后三章内容
			**/
			getData() {
				uni.showLoading({mask: true})
				return new Promise((resolve, reject) => {
					// 模拟网络时间
					setTimeout(() => {
						uni.hideLoading()
						this.chapterId = 2;
						this.chapterName = `第${this.chapterId}章 蟒雀吞龙`;
						this.preChapterName = `第${this.chapterId - 1}章 蟒雀吞龙`;
						this.nextChapterName = `第${this.chapterId + 1}章 蟒雀吞龙`;
						this.text = this.chapterId + this.textFixed;
						this.preText = this.chapterId - 1 + this.textFixed;
						this.nextText = this.chapterId + 1 + this.textFixed;
						resolve()
					}, 1000)
				})
				
			},
			
			/**
			* 获取上一章或下一章数据
			**/
			getText(chapterId, type) {
				// 模拟网络时间
				setTimeout(() => {
					if (type === 'next') {
						this.nextText = chapterId + this.textFixed;
						this.nextChapterName = `第${chapterId}章 蟒雀吞龙`;
						this.$nextTick(() => {
							this.calcNextPages()
						})
					}
					else {
						if (chapterId === 0) {
							this.preText = '';
							this.preChapterName = '';
						}
						else {
							this.preText = chapterId + this.textFixed;
							this.preChapterName = `第${chapterId}章 蟒雀吞龙`;
							this.$nextTick(() => {
								this.calcPrePages()
							})
						}
					}
					
				}, 1000)
			}
			
			
		}
	}
</script>

<style lang="scss">
	page{
		position: relative;
		width: 100%;
		height: 100%;
	}
	.hidden{
		opacity: 0;
	}
	.icon{
		
	}
	.action{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		z-index: 201;
		.item{
			flex: 1;
			height: 100%;
		}
	}
	.container{
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 0px 20px;
		box-sizing: border-box;
		height: 100%;
		width: 100%;
		background-color: #fff;
		box-shadow: 0 0 10px 0 rgba(0,0,0,.4);
		overflow: hidden;
		.chapter{
			font-size: 14px;
			color: $minor-text-color;
			height:30px;
			line-height: 30px;
		}
		.bottom-bar{
			font-size: 14px;
			color: $minor-text-color;
			height:30px;
			line-height: 30px;
		}
		.content{
			.book-inner{
				text-indent: 2em;
				text-align:justify;
			}
		}
	}
	.container0{
		background: url(../../static/background1.jpg);
		background-color: #fff;
		background-size: 100% 100%;
	}
	.container1{
		background-color: #000;
	}
	.top{
		position: fixed;
		left: 0;
		width: 100%;
		background-color: #666;
		z-index: 400;
		transition: top .3s;
		.head{
			height: 30px;
			width: 100%;
			line-height: 30px;
			color: #fff;
			text-align: center;
		}
		.back{
			float: left;
			padding-left: 10px;
		}
	}
	.bottom-holder{
		height: 300px;
	}
	.bottom{
		position: fixed;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 10px 20px;
		height: 300px;
		width: 100%;
		background-color: #666;
		box-sizing: border-box;
		z-index: 400;
		transition: bottom .3s;
		.item{
			display: flex;
			align-items: center;
			.item-name{
				padding: 10px;
				color: #000;
				font-size: 15px;
			}
			.icon{
				margin-right: 10px;
				padding: 5px 20px;
				box-sizing: content-box;
				font-size: 16px;
				height: 20px;
				line-height: 20px;
				width: auto;
				text-align: center;
				border-radius: 20px;
				border: #fff solid 1px;
			}
			.type-setting{
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: center;
				margin-right: 10px;
				padding: 5px;
				box-sizing: content-box;
				height: 20px;
				width: 20px;
				border-radius: 5px;
				border: #fff solid 1px;
				.line{
					width: 100%;
					border-bottom: #fff solid 1px; 
				}
				.active{
					border-bottom: #FF9900 solid 1px;
				}
			}
			.active{
				border: #FF9900 solid 2px;
			}
		}
	}
	
</style>