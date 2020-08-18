<template>
	<!-- 注意：最多100页，多了要改z-index最大值 -->
	<view>
		
		<!-- 操作层 -->
		<view class="action" @touchstart="touchStart" @touchend="touchEnd" @touchmove="touchMove">
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
		<view class="container" :class="{container0: background === 1, container1: background === 2}"
			:style="{zIndex: 300, transform: `translateX(${preTranslateX}px)`, transition: `all ${showAnimation?turnPageTime:0}s`}"
		>
			<view class="chapter">
				{{preChapterName}}
			</view>
			<view class="content"
				:style="{height:`${contentHeight}px`, width: `${contentWidth}px`,
				fontSize: `${fontSize}px`,color: `${colorList[background - 1]}`,
				transform: `translateX(-${(prePages.length-1)*(contentWidth+columnGap)}px)`,
				columns: `${contentWidth}px`, columnGap:`${columnGap}px`}"
			>
				<view class="book-inner" v-html="text"
					:style="{fontSize: `${fontSize}px`, lineHeight: `${lineHeight*fontSize}px`}"
				>
				</view>
			</view>
			<view class="bottom-bar">
				<view>
					{{systemTimeStr}}
				</view>
				<view>
					{{prePages.length}}/{{prePages.length}}
				</view>
				<view>
					<battery :level="batteryLevel" :charging="batteryState === 2"></battery>
				</view>
			</view>
		</view>
		
		<!-- 本章 -->
		<view class="container" :class="{container0: background === 1, container1: background === 2}"
			v-for="item of pages" :key="item.id" 
			:style="{zIndex: item.zIndex, transform: `translateX(${item.translateX}px)`, transition: `all ${showAnimation?turnPageTime:0}s`}"
		>
		<!-- v-if="item.id - currentPage < 2 && item.id - currentPage > -2" -->
			<view class="chapter">
				{{chapterName}}
			</view>
			<view class="content"
				:style="{height:`${contentHeight}px`, width: `${contentWidth}px`,
				fontSize: `${fontSize}px`,color: `${colorList[background - 1]}`,
				transform: `translateX(-${item.id*(contentWidth+columnGap)}px)`,
				columns: `${contentWidth}px`, columnGap:`${columnGap}px`}"
			>
				<view class="book-inner" v-html="text"
					:style="{fontSize: `${fontSize}px`, lineHeight: `${lineHeight*fontSize}px`}"
				>
				</view>
			</view>
			<view class="bottom-bar">
				<view>
					{{systemTimeStr}}
				</view>
				<view>
					{{item.id + 1 }}/{{pages.length}}
				</view>
				<view>
					<battery :level="batteryLevel" :charging="batteryState === 2"></battery>
				</view>
			</view>
		</view>
		
		<!-- 下一章 -->
		<view class="container" :class="{container0: background === 1, container1: background === 2}"
			:style="{zIndex: 100, transform: `translateX(0px)`}"
			v-if="pages.length"
		>
			<view class="chapter">
				{{nextChapterName}}
			</view>
			<view class="content"
				:style="{height:`${contentHeight}px`, width: `${contentWidth}px`,
				fontSize: `${fontSize}px`,color: `${colorList[background - 1]}`,
				transform: `translateX(0px)`,
				columns: `${contentWidth}px`, columnGap:`${columnGap}px`}"
			>
				<view class="book-inner" v-html="nextText"
					:style="{fontSize: `${fontSize}px`, lineHeight: `${lineHeight*fontSize}px`}"
				>
				</view>
			</view>
			<view class="bottom-bar">
				<view>
					{{systemTimeStr}}
				</view>
				<view>
					1/{{pages.length}}
				</view>
				<view>
					<battery :level="batteryLevel" :charging="batteryState === 2"></battery>
				</view>
			</view>
		</view>
		
		<!-- 菜单层 -->
		<view class="menu" :style="{height: `${windowHeight}px`, width: `${windowWidth}px`,background: directoryShow?'rgba(0, 0, 0, .5)':''}" 
		v-if="menuShow" @touchend="closeMenu">
			
			<view class="menu-top" :style="{height: `${statusBarHeight + 40}px`, top: itemShow ? 0 : `-100%`}" @touchend.stop>
				<view :style="{height: `${statusBarHeight}px`}"></view>
				<view class="head">
					<text class="iconfont back" @click="back">&#xe71a;</text>
					<view>
						{{chapterName}}
					</view>
				</view>
			</view>
			
			<view class="menu-bottom" :style="{bottom: itemShow ? 0 : '-100%'}" @touchend.stop>
				<view class="show-page">{{currentPage + 1 }}/{{pages.length}}</view>
				<view class="progress-box">
					<text @click="preChapter">上一章</text>
					<view style="flex: 1;height: 100%;padding: 0 10px;">
						<my-progress :total="pages.length - 1 || 1" :index="currentPage" @indexChange="goToPage"></my-progress>
					</view>
					<text @click="nextChapter">下一章</text>
				</view>
				<view class="items-box">
					<view class="item-box" @click="openDirectory">
						<text class="iconfont" style="font-size: 25px;">&#xe601;</text>
						<text style="font-size: 13px;">目录</text>
					</view>
					<view class="item-box" v-if="background === 2" @click="changeBackground(1)">
						<text class="iconfont" style="font-size: 25px;">&#xe63e;</text>
						<text style="font-size: 13px;">夜间</text>
					</view>
					<view class="item-box" v-if="background === 1" @click="changeBackground(2)">
						<text class="iconfont" style="font-size: 25px;">&#xe64c;</text>
						<text style="font-size: 13px;">日间</text>
					</view>
					<view class="item-box" @click="openSetting">
						<text class="iconfont" style="font-size: 25px;">&#xe61d;</text>
						<text style="font-size: 13px;">设置</text>
					</view>
					
				</view>
			</view>
			
			<view class="setting" :style="{bottom: settingShow ? 0 : `-100%`}" @touchend.stop>
				<view class="item">
					<view class="item-name">字号</view>
					<view class="icon" @click="bigSize">A+</view>
					<view class="icon" @click="smallSize">A-</view>
					<view class="icon" @click="changeFont(false)" v-if="simplified">繁體</view>
					<view class="icon" @click="changeFont(true)" v-else style="border: #FF9900 solid 1px;color: #FF9900">繁體</view>
				</view>
				<view class="item">
					<view class="item-name">排版</view>
					<view class="type-setting" :class="{active: lineHeight === 1}" @click="changeLineHeight(1)">
						<view class="line" :class="{active: lineHeight === 1}" v-for="i in 5" :key="i"></view>
					</view>
					<view class="type-setting" :class="{active: lineHeight === 1.5}" @click="changeLineHeight(1.5)">
						<view class="line" :class="{active: lineHeight === 1.5}" v-for="i in 4" :key="i"></view>
					</view>
					<view class="type-setting" :class="{active: lineHeight === 2}" @click="changeLineHeight(2)">
						<view class="line" :class="{active: lineHeight === 2}" v-for="i in 3" :key="i"></view>
					</view>
				</view>
				<view class="item">
					<view class="item-name">背景</view>
					<view class="icon" style="background: url(../../static/background1.jpg);" :class="{active: background === 1}" @click="changeBackground(1)"></view>
					<view class="icon" style="background-color: #000;" :class="{active: background === 2}" @click="changeBackground(2)"></view>
				</view>
			</view>
			
			<!-- 目录层 -->
			<view class="directory" :class="{container0: background === 1, container1: background === 2}"
			 :style="{left: directoryShow ? 0 : '-100%',color: `${colorList[background - 1]}`}"  @touchend.stop>
				<view class="bookname">书名</view>
				<scroll-view scroll-y="true" class="directory-list" :scroll-into-view="`chapter${chapterId}`">
					<view v-for="item of directoryList" :key="item.chapterId" class="directory-listItem" :class="{active: item.chapterId === chapterId}"
					 :id="`chapter${item.chapterId}`" @click="goToChapter(item.chapterId)">
						{{item.name}}
					</view>
				</scroll-view>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	import myProgress from '../../components/myProgress.vue'
	import battery from '../../components/battery.vue'
	import { traditionalized, simplized, dateToStr } from '../../utils/utils.js'
	export default {
		components:{
			myProgress,
			battery
		},
		data() {
			return {
				chapterId: '',
				chapterName: '',
				preChapterName: '',
				nextChapterName: '',
				textFixed:`<p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p>`,
				text: '',
				nextText: '',
				preText: '',
				directoryList: [],  //目录列表
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
				batteryLevel: 100, //电量
				systemTime: '',   //系统时间
				systemTimeStr: '',   //系统时间字符串
				statusBarHeight: 0, //状态栏高度
				
				columnGap: 40,
				currentPage: 0,
				touchStartX: 0,  // 触屏起始点
				touchStartT: 0,  //触屏起始时间
				touchTimer: null  ,//用于触摸节流
				menuShow: false,  //菜单栏box是否渲染
				itemShow: false,  // 菜单栏动画控制
				settingShow: false,  //设置栏动画控制
				directoryShow: false,  //目录动画控制
				turnPageTime: 0.5,  //翻页动画时间
				
				fontSize: '',
				simplified: '',
				lineHeight: '',
				background: '',
				colorList: ['#000', '#666'],
				
				nextChapterLoaded: false,   //下一章是否加载完毕
				preChapterLoaded: false,   //上一章是否加载完毕
				waitForTurnChapter: false,   //加载章节后是否跳转页面
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
					// 全屏
					plus.navigator.setFullscreen(true);
					// 取消左滑返回
					let page = this.$mp.page.$getAppWebview();
					page.setStyle({ popGesture: 'none' });
					// 获取ios电量
					if (this.platform === 'ios') {
						let UIDevice = plus.ios.import("UIDevice");  
						let dev = UIDevice.currentDevice();  
						if (!dev.isBatteryMonitoringEnabled()) {  
						    dev.setBatteryMonitoringEnabled(true);  
						}
						setInterval(() => {
							this.batteryState = dev.batteryState();
							this.batteryLevel = dev.batteryLevel() * 100;
						}, 1000)
						
					}
					else {
						// 获取安卓电量
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
				
				// 设置时间
				let date = new Date()
				this.systemTime = Date.parse(date)
				this.systemTimeStr = dateToStr(this.systemTime)
				setInterval(() => {
					this.systemTime += 60000
					this.systemTimeStr = dateToStr(this.systemTime)
				}, 60000)
				
				// 获取字体、排版等信息
				this.fontSize = uni.getStorageSync('fontSize') || 16;
				this.simplified = uni.getStorageSync('simplified');
				this.lineHeight = uni.getStorageSync('lineHeight') || 1.5;
				this.background = uni.getStorageSync('background') || 1;
				
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
			* 计算上一章阅读页长度,并生成pages,并跳转至某页（如果有）
			**/
			calcPrePages() {
				const query = uni.createSelectorQuery().in(this);
				query.select('#preText').boundingClientRect(data => {
					let width = data.width;
					let height = data.height;
					this.prePages = this.genPages(width, height)
					this.preChapterLoaded = true;
					if (this.waitForTurnChapter) {
						uni.hideLoading()
						this.waitForTurnChapter = false;
						this.preChapter()
					}
				}).exec();
			},
			
			/**
			* 计算下一章阅读页长度,并生成pages,并跳转至某页（如果有）
			**/
			calcNextPages() {
				const query = uni.createSelectorQuery().in(this);
				query.select('#nextText').boundingClientRect(data => {
					let width = data.width;
					let height = data.height;
					this.nextPages = this.genPages(width, height)
					this.nextChapterLoaded = true;
					if (this.waitForTurnChapter) {
						uni.hideLoading()
						this.waitForTurnChapter = false;
						this.nextChapter()
					}
				}).exec();
			},
			
			
			/**
			* 生成阅读页pages
			**/
			genPages(width, height) {
				let arr = [];
				let id = 0;
				// #ifdef APP-PLUS
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
				// #endif
				// #ifndef APP-PLUS
				while (width > 0) {
					arr.push({
						id,
						zIndex: 200 - id,
						translateX: 0
					});
					id++;
					width -= this.contentWidth + this.columnGap
				}
				// #endif
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
				if (deltaX === 0) {  //deltaX === 0为点击
					if (e.changedTouches[0].clientX<this.windowWidth/3) {
						this.prePage()
					}
					else if (e.changedTouches[0].clientX>this.windowWidth/3*2) {
						this.nextPage()
					}
					else {
						this.showMenu()
					}
				}
				else {
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
							if (!this.nextChapterLoaded) {
								this.waitForTurnChapter = true;
								uni.showLoading({
									mask: true,
									title: '正在加载中请稍候'
								})
								return
							}
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
							if (!this.preChapterLoaded) {
								this.waitForTurnChapter = true;
								uni.showLoading({
									mask: true,
									title: '正在加载中请稍候'
								})
								return
							}
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
					}, 100)
				}
			},
			
			/**
			* 呼出菜单
			**/
			showMenu() {
				// #ifdef APP-PLUS
					plus.navigator.setFullscreen(false);
				// #endif
				this.menuShow = true;
				setTimeout(() => {
					this.itemShow = true
				},100)
			},
			
			/**
			* 关闭菜单
			**/
			closeMenu() {
				// #ifdef APP-PLUS
					plus.navigator.setFullscreen(true);
				// #endif
				this.itemShow = false
				this.settingShow = false
				this.directoryShow = false
				setTimeout(() => {
					this.menuShow = false
				},300)
			},
			
			/**
			* 关闭菜单栏，呼出设置栏
			**/
			openSetting() {
				
				this.itemShow = false
				setTimeout(() => {
					this.settingShow = true
				},300)
			},
			
			/**
			* 关闭菜单栏，呼出目录栏
			**/
			openDirectory() {
				// #ifdef APP-PLUS
					plus.navigator.setFullscreen(true);
				// #endif
				this.itemShow = false
				setTimeout(() => {
					this.directoryShow = true
				},300)
			},
			
			/**
			* 上一页
			**/
			prePage() {
				if (this.currentPage === 0) {
					if (!this.preChapterLoaded) {
						this.preChapter()
						return
					}
					if ( this.preText.length === 0) {
						uni.showToast({
							title: '这是第一章',
							icon: 'none'
						})
					}
					else  {
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
				if (this.currentPage === this.pages.length - 1) {
					if (!this.nextChapterLoaded) {  //下一章未加载完毕
						this.nextChapter()
						return
					}
					if ( this.nextText.length === 0) {
						uni.showToast({
							title: '这是最后一章',
							icon: 'none'
						})
					}
					else {
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
				if (!this.nextChapterLoaded) {
					this.waitForTurnChapter = true;
					uni.showLoading({
						mask: true,
						title: '正在加载中请稍候'
					})
					return
				}
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
				this.currentPage = 0;
				this.goToPage(this.currentPage)
				
			},
			
			/**
			* 获取上一章,重置页面，将本章变为后一章，将上一章变为本章，获取上一章内容
			**/
			preChapter() {
				if (!this.preChapterLoaded) {
					this.waitForTurnChapter = true;
					uni.showLoading({
						mask: true,
						title: '正在加载中请稍候'
					})
					return
				}
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
				this.currentPage = page
				this.pages.forEach((value, index) => {
					if (index < page) {
						value.translateX = -this.windowWidth - 20
					}
					else {
						value.translateX = 0
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
			* 切换繁体简体
			**/
			changeFont(type) {
				if (!type) {   //切换为繁体
					this.text = traditionalized(this.text)
					this.preText = traditionalized(this.preText)
					this.nextText = traditionalized(this.nextText)
					this.simplified = false
					uni.setStorageSync('simplified', false)
				}
				else {   //切换为简体
					this.text = simplized(this.text)
					this.preText = simplized(this.preText)
					this.nextText = simplized(this.nextText)
					this.simplified = true
					uni.setStorageSync('simplified', true)
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
						this.nextChapterLoaded = true;
						this.preChapterLoaded = true;
						this.chapterId = 2;
						this.chapterName = `第${this.chapterId}章 测试测试`;
						this.preChapterName = `第${this.chapterId - 1}章 测试测试`;
						this.nextChapterName = `第${this.chapterId + 1}章 测试测试`;
						this.text = this.chapterId + this.textFixed;
						this.preText = this.chapterId - 1 + this.textFixed;
						this.nextText = this.chapterId + 1 + this.textFixed;
						if (!this.simplified) {   //切换为繁体
							this.text = traditionalized(this.text)
							this.preText = traditionalized(this.preText)
							this.nextText = traditionalized(this.nextText)
						}
						
						// 生成目录，正常是后端传过来
						for (let i=1;i<=100;i++) {
							this.directoryList.push({
								chapterId: i,
								name: `第${i}章 测试测试`
							})
						}
						resolve()
					}, 1000)
				})
				
			},
			
			/**
			* 获取上一章或下一章数据
			**/
			getText(chapterId, type) {
				if (type === 'next') {
					this.nextChapterLoaded = false;
				}
				else {
					this.preChapterLoaded = false;
				}
				// 模拟网络时间
				setTimeout(() => {
					if (type === 'next') {
						
						this.nextText = chapterId + this.textFixed;
						this.nextChapterName = `第${chapterId}章 测试测试`;
						if (!this.simplified) {   //切换为繁体
							this.nextText = traditionalized(this.nextText)
						}
						this.$nextTick(() => {
							this.calcNextPages()
						})
					}
					else {
						if (chapterId === 0) {
							this.preText = '';
							this.preChapterName = '';
							this.$nextTick(() => {
								this.calcPrePages()
							})
						}
						else {
							this.preText = chapterId + this.textFixed;
							this.preChapterName = `第${chapterId}章 测试测试`;
							if (!this.simplified) {   //切换为繁体
								this.preText = traditionalized(this.preText)
							}
							this.$nextTick(() => {
								this.calcPrePages()
							})
						}
					}
					
				}, 1000)
			},
			
			/**
			* 跳转到指定章节
			**/
			goToChapter(chapterId) {
				this.closeMenu()
				uni.showLoading({mask: true})
				return new Promise((resolve, reject) => {
					// 模拟网络时间
					
					setTimeout(() => {
						uni.hideLoading()
						this.nextChapterLoaded = true;
						this.preChapterLoaded = true;
						this.chapterId = chapterId;
						this.chapterName = `第${this.chapterId}章 测试测试`;
						this.preChapterName = `第${this.chapterId - 1}章 测试测试`;
						this.nextChapterName = `第${this.chapterId + 1}章 测试测试`;
						this.text = this.chapterId + this.textFixed;
						this.preText = this.chapterId - 1 + this.textFixed;
						this.nextText = this.chapterId + 1 + this.textFixed;
						if (!this.simplified) {   //切换为繁体
							this.text = traditionalized(this.text)
							this.preText = traditionalized(this.preText)
							this.nextText = traditionalized(this.nextText)
						}
						this.$nextTick(() => {
							this.calcPages(1, 0)
						})
						resolve()
					}, 1000)
				})
			}
			
			
		}
	}
</script>

<style lang="scss" scoped>
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
		z-index: 301;
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
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 14px;
			color: $minor-text-color;
			height:30px;
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
	.menu{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 302;
		transition: all .3s;
		.menu-top{
			position: absolute;
			left: 0;
			width: 100%;
			background-color: #333;
			transition: top .3s;
			.head{
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 40px;
				width: 100%;
				line-height: 40px;
				color: #fff;
			}
			.back{
				position: absolute;
				top: 0;
				left: 10px;
			}
		}
		.directory{
			position: absolute;
			top: 0;
			display: flex;
			flex-flow: column;
			width: 600rpx;
			height: 100%;
			transition: left .3s;
			.bookname{
				padding: 20px 0 20px 10px;
				width: 100%;
				font-size: 18px;
			}
			.directory-list{
				flex:1;
				min-height: 200px;
				.directory-listItem{
					display: flex;
					align-items: center;
					padding-left: 10px;
					min-height: 40px;
					font-size: 14px;
					border-bottom: #eee solid 1px;
				}
				.active{
					color: red
				}
			}
		}
		.menu-bottom{
			position: absolute;
			left: 0;
			width: 100%;
			background-color: #333;
			transition: bottom .3s;
			color: #fff;
			.show-page{
				position: absolute;
				left: 50%;
				top: 0;
				transform: translate(-50%, -110%);
				padding: 5px 10px;
				height: 30px;
				line-height: 20px;
				border-radius: 10rpx;
				font-size: 13px;
				background-color: #333;
			}
			.progress-box{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 20px;
				height: 50px;
				width: 100%;
				font-size: 15px;
			}
			.items-box{
				display: flex;
				justify-content: space-around;
				align-items: center;
				height: 80px;
				width: 100%;
				.item-box{
					display: flex;
					flex-flow: column;
					justify-content: center;
					align-items: center;
					height: 100%;
				}
			}
		}
		.setting{
			position: absolute;
			left: 0;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			padding: 10px 20px;
			width: 100%;
			color: #fff;
			background-color: #333;
			transition: bottom .3s;
			.item{
				display: flex;
				align-items: center;
				height: 70px;
				.item-name{
					padding: 10px;
					color: #fff;
					font-size: 14px;
				}
				.icon{
					margin-right: 10px;
					padding: 5px 20px;
					font-size: 16px;
					height: 32px;
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
					height: 30px;
					width: 30px;
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
	}
	
</style>