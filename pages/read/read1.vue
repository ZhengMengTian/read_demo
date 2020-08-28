<template>
	<view>
		
		<!-- 操作层 -->
		<view class="action" @touchstart="touchStart" @touchend="touchEnd" @touchmove="touchMove">
		</view>
		
		<!-- 仅用于计算 -->
		<view class="container hidden">
			<view class="chapter">
				章节名
			</view>
			<view id="content" class="content"
				:style="{height:`${contentHeight}px`, width: `${contentWidth}px`,
				 columns: `${contentWidth}px`, columnGap:`${columnGap}px`}"
			>
				<view class="book-inner" id="curChapter" v-html="curChapter.text"
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
				章节名
			</view>
			<view id="content" class="content"
				:style="{height:`${contentHeight}px`, width: `${contentWidth}px`,
				 columns: `${contentWidth}px`, columnGap:`${columnGap}px`}"
			>
				<view class="book-inner" id="preChapter" v-html="preChapter.text"
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
				章节名
			</view>
			<view id="content" class="content"
				:style="{height:`${contentHeight}px`, width: `${contentWidth}px`,
				 columns: `${contentWidth}px`, columnGap:`${columnGap}px`}"
			>
				<view class="book-inner" id="nextChapter" v-html="nextChapter.text"
					:style="{fontSize: `${fontSize}px`, lineHeight: `${lineHeight*fontSize}px`}"
				>
				</view>
			</view>
			<view class="bottom-bar">
				显示电量、页码
			</view>
		</view>
		
		<!-- 阅读页 -->
		
		
		<!-- 上一页 -->
		<view class="container" :class="{container0: background === 1, container1: background === 2}"
			:style="{zIndex: 102, transform: `translateX(${prePage.pageTranslate}px)`, transition: `all ${showAnimation?turnPageTime:0}s`,
			boxShadow:showShadow?'0 0 10px 0 rgba(0,0,0,.4)':''}"
		>
			<view v-if="prePage.isCover">
				我是封面
			</view>
			<view v-else>
				<view class="chapter">
					{{prePage.chapterName}}
				</view>
				<view class="content"
					:style="{height:`${contentHeight}px`, width: `${contentWidth}px`,
					fontSize: `${fontSize}px`,color: `${colorList[background - 1]}`,
					transform: `translateX(-${prePage.pageNum*(contentWidth+columnGap)}px)`,
					columns: `${contentWidth}px`, columnGap:`${columnGap}px`}"
				>
					<view class="book-inner" v-html="prePage.text"
						:style="{fontSize: `${fontSize}px`, lineHeight: `${lineHeight*fontSize}px`}"
					>
					</view>
				</view>
				<view class="bottom-bar">
					<view>
						{{systemTimeStr}}
					</view>
					<view>
						{{prePage.pageNum + 1}}/{{prePage.totalPage}}
					</view>
					<view>
						<battery :level="batteryLevel" :charging="batteryState === 2"></battery>
					</view>
				</view>
			</view>
			
		</view>
		
		<!-- 本页 -->
		<view class="container" :class="{container0: background === 1, container1: background === 2}"
			:style="{zIndex: 101, transform: `translateX(${curPage.pageTranslate}px)`, transition: `all ${showAnimation?turnPageTime:0}s`,
			boxShadow:showShadow?'0 0 10px 0 rgba(0,0,0,.4)':''}"
		>
			<view v-if="curPage.isCover">
				我是封面
			</view>
			<view v-else>
				<view class="chapter">
					{{curPage.chapterName}}
				</view>
				<view class="content"
					:style="{height:`${contentHeight}px`, width: `${contentWidth}px`,
					fontSize: `${fontSize}px`,color: `${colorList[background - 1]}`,
					transform: `translateX(-${curPage.pageNum*(contentWidth+columnGap)}px)`,
					columns: `${contentWidth}px`, columnGap:`${columnGap}px`}"
				>
					<view class="book-inner" v-html="curPage.text"
						:style="{fontSize: `${fontSize}px`, lineHeight: `${lineHeight*fontSize}px`}"
					>
					</view>
				</view>
				<view class="bottom-bar">
					<view>
						{{systemTimeStr}}
					</view>
					<view>
						{{curPage.pageNum + 1}}/{{curPage.totalPage}}
					</view>
					<view>
						<battery :level="batteryLevel" :charging="batteryState === 2"></battery>
					</view>
				</view>
			</view>
			
		</view>
		
		<!-- 下一页 -->
		<view class="container" :class="{container0: background === 1, container1: background === 2}"
			:style="{zIndex: 100, transform: `translateX(${nextPage.pageTranslate}px)`}"
		>
			<view>
				<view class="chapter">
					{{nextPage.chapterName}}
				</view>
				<view class="content"
					:style="{height:`${contentHeight}px`, width: `${contentWidth}px`,
					fontSize: `${fontSize}px`,color: `${colorList[background - 1]}`,
					transform: `translateX(-${nextPage.pageNum*(contentWidth+columnGap)}px)`,
					columns: `${contentWidth}px`, columnGap:`${columnGap}px`}"
				>
					<view class="book-inner" v-html="nextPage.text"
						:style="{fontSize: `${fontSize}px`, lineHeight: `${lineHeight*fontSize}px`}"
					>
					</view>
				</view>
				<view class="bottom-bar">
					<view>
						{{systemTimeStr}}
					</view>
					<view>
						{{nextPage.pageNum + 1}}/{{nextPage.totalPage}}
					</view>
					<view>
						<battery :level="batteryLevel" :charging="batteryState === 2"></battery>
					</view>
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
				</view>
			</view>
			
			<view class="menu-bottom" :style="{bottom: itemShow ? 0 : '-100%'}" @touchend.stop>
				<view class="show-page">{{curChapter.chapterName}}</view>
				<view class="progress-box">
					<text @click="goPreChapter">上一章</text>
					<view style="flex: 1;height: 100%;padding: 0 10px;">
						<!-- 
						 
						 goToChapter要限流！！！！！！！！！！！！！！
						 
						 -->
						<my-progress :total="directoryList.length - 1" :index="curChapter.chapterIndex" @indexChange="goToPage"></my-progress>
					</view>
					<text @click="goNextChapter">下一章</text>
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
				<scroll-view scroll-y="true" class="directory-list" :scroll-into-view="`chapter${curChapter.chapterIndex}`">
					<view v-for="(item, index) of directoryList" :key="item.chapterId" class="directory-listItem" :class="{active: index === curChapter.chapterIndex}"
					 :id="`chapter${index}`" @click="goToChapter(item.chapterId)">
						{{item.name}}
					</view>
				</scroll-view>
			</view>
		</view>
		
		<!-- 遮罩层 用于防止章节轮换时操作 -->
		<!-- <view :style="{height:`${windowHeight}px`, width: `${windowWidth}px`,
				 zIndex: 1000, position: 'relative'}" v-if="showMask"></view> -->
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
				bookName: '我是书名',
				indexHistory: 0,
				text:`<p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p>`,
				directoryList: [],  //目录列表
				currentPage: 0,
				
				preChapter: {
					ready: false,  //是否准备完毕
					chapterIndex: '',
					chapterName: '',
					text: '',
					totalPage: ''
				},
				
				curChapter: {
					chapterIndex: '',
					chapterName: '',
					text: '',
					totalPage: ''
				},
				
				nextChapter: {
					ready: false,  //是否准备完毕
					chapterIndex: '',
					chapterName: '',
					text: '',
					totalPage: ''
				},
				
				tmpChapter: {},  //暂存章节内容
				
				cover: {
					pageTranslate: 0  //页面位移
				},
				
				prePage: {
					ready: false,  //是否准备完毕
					isAd: false,  //是否广告
					chapterName: '',
					text: '',
					pageNum: '',
					totalPage: 1,
					pageTranslate: 0,  //页面位移
				},
				
				curPage: {
					ready: false,  //是否准备完毕
					isAd: false,  //是否广告
					chapterName: '',
					text: '',
					pageNum: 1,
					totalPage: 1,
					pageTranslate: 0,  //页面位移
				},
				
				nextPage: {
					ready: false,  //是否准备完毕
					isAd: false,  //是否广告
					chapterName: '',
					text: '',
					pageNum: '',
					totalPage: '',
					pageTranslate: 0,  //页面位移
				},
				
				pageStatus: 0,   //页面状态  0:未翻页，1：翻上页，2：翻下页
				
				next: false,  //用户是否正在左滑
				pre: false,  //用户是否正在右滑
				
				waitForNext: false,  //是否正在等待下一页准备完毕后跳转
				waitForPre: false,  //是否正在等待上一页准备完毕后跳转
				waitForNextChapter: false,  //是否正在等待下一章准备完毕后跳转
				waitForPreChapter: false,  //是否正在等待上一章准备完毕后跳转
				
				showAnimation: false, //是否开启动画
				showShadow: false, //是否显示页面阴影
				
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
				touchStartX: 0,  // 触屏起始点
				touchX: 0,  // 瞬时触屏点
				deltaX: 0,  // 手指瞬时位移
				
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
				return this.currentPage / this.curChapter.totalPage
				
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
				this.contentWidth = windowWidth - this.columnGap;
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
			* 获取数据并计算页面
			**/
			async initPage() {
				uni.showLoading({
					title: '加载中'
				})
				await this.getDirectoryList()
				await this.getThreeChapter(this.indexHistory)
				this.goToPage(0)
				uni.hideLoading()
				
			},
			
			/**
			* 计算阅读页长度
			**/
			calcCurChapter() {
				return new Promise((resolve, reject) => {
					this.$nextTick(() => {
						const query = uni.createSelectorQuery().in(this);
						query.select('#curChapter').boundingClientRect(data => {
							let width = data.width;
							let height = data.height;
							this.curChapter.totalPage = this.calcPageNum(width, height)
							this.curChapter.ready = true   //页面准备完毕
							resolve()
						}).exec();
					})
					
				})
			},
			
			/**
			* 计算上一章阅读页长度,并翻页（如果有）
			**/
			calcPreChapter() {
				return new Promise((resolve, reject) => {
					this.$nextTick(() => {
						const query = uni.createSelectorQuery().in(this);
						query.select('#preChapter').boundingClientRect(data => {
							let width = data.width;
							let height = data.height;
							this.preChapter.totalPage = this.calcPageNum(width, height)
							this.preChapter.ready = true   //章节准备完毕
							if (this.waitForPre) {
								uni.hideLoading()
								this.waitForPre = false;
								//页面准备完毕
								this.prePage.ready = this.preChapter.ready
								this.prePage.chapterName = this.preChapter.chapterName
								this.prePage.text = this.preChapter.text
								this.prePage.pageNum = this.preChapter.totalPage - 1
								this.prePage.totalPage = this.preChapter.totalPage
								this.prePage.pageTranslate = -this.windowWidth
								this.goPrePage()
							}
							if (this.waitForPreChapter) {
								uni.hideLoading()
								this.waitForPreChapter = false
								this.goPreChapter()
							}
							resolve()
						}).exec();
					})
					
				})
				
			},
			
			/**
			* 计算下一章阅读页长度,并翻页（如果有）
			**/
			calcNextChapter() {
				return new Promise((resolve, reject) => {
					this.$nextTick(() => {
						const query = uni.createSelectorQuery().in(this);
						query.select('#nextChapter').boundingClientRect(data => {
							let width = data.width;
							let height = data.height;
							this.nextChapter.totalPage = this.calcPageNum(width, height)
							this.nextChapter.ready = true   //章节准备完毕
							if (this.waitForNext) {
								uni.hideLoading()
								this.waitForNext = false;
								//页面准备完毕
								this.nextPage.ready = this.nextChapter.ready
								this.nextPage.chapterName = this.nextChapter.chapterName
								this.nextPage.text = this.nextChapter.text
								this.nextPage.pageNum = 0
								this.nextPage.totalPage = this.nextChapter.totalPage
								this.nextPage.pageTranslate = 0
								
								this.goNextPage()
							}
							if (this.waitForNextChapter) {
								uni.hideLoading()
								this.waitForNextChapter = false
								this.goNextChapter()
							}
							resolve()
						}).exec();
						
					})
					
				})
				
			},
			
			
			/**
			* 计算页数
			**/
			calcPageNum(width, height) {
				let num = 0;
				// #ifdef APP-PLUS
				if (this.platform === 'ios') {
					num = Math.ceil(height/this.contentHeight)
				}
				else {
					num = Math.ceil(width/(this.contentWidth + this.columnGap))
				}
				// #endif
				// #ifndef APP-PLUS
				num = Math.ceil(width/(this.contentWidth + this.columnGap))
				// #endif
				return num || 1;
			},
			
			/**
			* 触摸开始, 页面轮换
			**/
			touchStart(e) {
				this.showAnimation = false
				this.touchX = e.touches[0].clientX;
				this.touchStartX = e.touches[0].clientX;
				if (this.waitForNext || this.waitForPre) {
					return
				}
				//重置页面状态
				if (this.pageStatus === 2) {
					this.prePage = Object.assign({}, this.curPage)
					this.curPage = Object.assign({}, this.nextPage)
					if (this.currentPage === this.curChapter.totalPage - 1) {  //翻至章节末尾了
						if (this.nextChapter.ready && this.nextChapter.isEnd) {    //翻至最后一章了
							this.nextPage.ready = true
							this.nextPage.isEnd = true
							this.nextPage.pageTranslate = 0
						}
						else {
							this.nextPage.ready = this.nextChapter.ready
							this.nextPage.chapterName = this.nextChapter.chapterName
							this.nextPage.text = this.nextChapter.text
							this.nextPage.pageNum = 0
							this.nextPage.totalPage = this.nextChapter.totalPage
							this.nextPage.pageTranslate = 0
						}
					}
					else {
						this.nextPage.ready = true
						this.nextPage.chapterName = this.curChapter.chapterName
						this.nextPage.text = this.curChapter.text
						this.nextPage.pageNum = this.currentPage + 1
						this.nextPage.totalPage = this.curChapter.totalPage
						this.nextPage.pageTranslate = 0
					}
					this.pageStatus = 0
				}
				else if (this.pageStatus === 1) {
					this.nextPage = Object.assign({}, this.curPage)
					this.curPage = Object.assign({}, this.prePage)
					if (this.currentPage === 0) {  //翻至章节开头了
						if (this.preChapter.ready && this.preChapter.isCover) {    //翻至封面了
							this.prePage.ready = true
							this.prePage.isCover = true
							this.prePage.pageTranslate = -this.windowWidth
						}
						else {
							this.prePage.ready = this.preChapter.ready
							this.prePage.chapterName = this.preChapter.chapterName
							this.prePage.text = this.preChapter.text
							this.prePage.pageNum = this.preChapter.totalPage - 1
							this.prePage.totalPage = this.preChapter.totalPage
							this.prePage.pageTranslate = -this.windowWidth
						}
						
					}
					else {
						this.prePage.ready = true
						this.prePage.chapterName = this.curChapter.chapterName
						this.prePage.text = this.curChapter.text
						this.prePage.pageNum = this.currentPage - 1
						this.prePage.totalPage = this.curChapter.totalPage
						this.prePage.pageTranslate =-this.windowWidth
					}
					this.pageStatus = 0
				}
				
			},
			
			/**
			* 触摸
			**/
			touchMove(e) {
				this.showShadow = true;
				let deltaX = e.touches[0].clientX - this.touchStartX;
				this.deltaX = e.touches[0].clientX - this.touchX;
				this.touchX = e.touches[0].clientX;
				if (this.waitForNext || this.waitForPre) {
					return
				}
				if (this.next) {   //首次左滑后
					if (this.nextPage.isEnd) {
						return
					}
					this.curPage.pageTranslate = deltaX>0?0:deltaX
				}
				else if (!this.pre &&  deltaX < 0) {  //首次左滑
					this.next = true
					if (this.nextPage.ready) {  //页面准备好了
						if (this.nextPage.isEnd) {
							uni.showToast({
								title:'跳转推荐页',
								icon:'none'
							})
						}
						else {
							this.curPage.pageTranslate = deltaX
						}
					}
					else {
						this.waitForNext = true   //等待下一页准备完毕后跳转
						uni.showLoading({
							title: '正在准备下一章'
						})
					}
				}
				if (this.pre) {   //首次右滑后
					if (this.curPage.isCover) {
						return
					}
					else {
						this.prePage.pageTranslate = -this.windowWidth+deltaX<-this.windowWidth?-this.windowWidth:-this.windowWidth+deltaX
					}
				}
				else if (!this.next && deltaX > 0) {  //首次右滑
					this.pre = true
					if (this.prePage.ready) {  //页面准备好了
						this.prePage.pageTranslate = -this.windowWidth + deltaX
					}
					else if(!this.curPage.isCover){
						this.waitForPre = true   //等待上一页准备完毕后跳转
						uni.showLoading({
							title: '正在准备上一章'
						})
					}
					else {  //当前页为封面
						uni.showToast({
							title:'已经是第一页了',
							icon:'none'
						})
					}
					
				}
				
			},
			
			/**
			* 触摸结束
			**/
			touchEnd(e) {
				this.showAnimation = true
				this.showShadow = false;
				let deltaX = e.changedTouches[0].clientX - this.touchStartX;
				if (deltaX === 0) {
					if (e.changedTouches[0].clientX<this.windowWidth/3 && !this.waitForNext && !this.waitForPre) { //点击屏幕左1/3为上一页
						
						if (this.prePage.ready) {
							this.goPrePage()
						}
						else {
							this.waitForPre = true   //等待上一页准备完毕后跳转
							uni.showLoading({
								title: '正在准备上一章'
							})
						}
					}
					else if (e.changedTouches[0].clientX>this.windowWidth/3*2 && !this.waitForNext && !this.waitForPre) { //点击屏幕右1/3为下一页
					
						if (this.nextPage.ready) {
							this.goNextPage()
						}
						else {
							this.waitForNext = true   //等待下一页准备完毕后跳转
							uni.showLoading({
								title: '正在准备下一章'
							})
						}
					}
					else if (e.changedTouches[0].clientX<=this.windowWidth/3*2 && e.changedTouches[0].clientX>=this.windowWidth/3) { //点击屏幕中间1/3为呼出菜单
						this.showMenu()
					}
				}
				else if (!this.waitForNext && !this.waitForPre) {
					if (this.next && this.deltaX <= 0) {  //下一页
						this.goNextPage()
					}
					else if (this.next && this.deltaX > 0) {  //取消翻页
						this.curPage.pageTranslate = 0
					}
					else if (this.pre && this.deltaX >= 0) {  //上一页
						this.goPrePage()
					}
					else if (this.pre && this.deltaX < 0) {  //取消翻页
						this.prePage.pageTranslate = -this.windowWidth
					}
				}
				this.next = false
				this.pre = false
				
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
			goPrePage() {
				if (this.curPage.isCover) {
					return 
				}
				this.currentPage -= 1
				this.prePage.pageTranslate = 0
				
				if (this.currentPage === -1) {   //翻至上一章了
					if (this.preChapter.isCover) {  //翻至封面了
						this.nextChapter = Object.assign({}, this.curChapter)
						this.curChapter = Object.assign({}, this.preChapter)
						this.preChapter = {}
						this.currentPage = 0
					}
					else {
						uni.showToast({
							title: this.preChapter.chapterName,
							icon: 'none'
						})
						this.currentPage = this.preChapter.totalPage - 1
						this.chapterRotate('pre')
					}
				}
				
				this.pageStatus = 1
			},
			
			
			/**
			* 下一页
			**/
			goNextPage() {
				
				if (this.nextPage.isEnd) {
					uni.showToast({						title:'跳转推荐页',						icon:'none'					})
					return 
				}
				this.currentPage += 1
				this.curPage.pageTranslate = -this.windowWidth
				
				if (this.currentPage === this.curChapter.totalPage) {   //翻至下一章了
					uni.showToast({
						title: this.nextChapter.chapterName,
						icon: 'none'
					})
					this.currentPage = 0
					this.chapterRotate('next')
				}
				
				this.pageStatus = 2
				
			},
			
			/**
			* 章节轮换
			**/
			async chapterRotate(type) {
				if (type === 'next') {
					this.preChapter = Object.assign({}, this.curChapter)
					this.curChapter = Object.assign({}, this.nextChapter)
					if (this.curChapter.chapterIndex !== this.directoryList.length - 1) {
						this.nextChapter = {
							ready: false,
							chapterIndex: this.curChapter.chapterIndex + 1,
							chapterName: this.directoryList[this.curChapter.chapterIndex + 1].name,
						}
						await this.getOneChapter(this.directoryList[this.curChapter.chapterIndex + 1].chapterId)
						this.$set(this.nextChapter, 'text', this.tmpChapter.text)
						this.calcNextChapter()
					}
					else {
						this.nextChapter = {ready: true,isEnd: true}
					}
				}
				if (type === 'pre') {
					this.nextChapter = Object.assign({}, this.curChapter)
					this.curChapter = Object.assign({}, this.preChapter)
					if (this.curChapter.chapterIndex !== 0) {
						this.preChapter = {
							ready: false,
							chapterIndex: this.curChapter.chapterIndex - 1,
							chapterName: this.directoryList[this.curChapter.chapterIndex - 1].name,
						}
						await this.getOneChapter(this.directoryList[this.curChapter.chapterIndex - 1].chapterId)
						this.$set(this.preChapter, 'text', this.tmpChapter.text)
						this.calcPreChapter()
					}
					else {
						this.preChapter = {ready: true,isCover: true, totalPage: 1, chapterName: this.bookName}
					}
				}
			},
			
			
			/**
			* 跳转下一章
			**/
			goNextChapter() {
				if (this.curChapter.chapterIndex === this.directoryList.length - 1) {
					uni.showToast({
						title: '已经是最后一章了',
						icon: 'none'
					})
					return
				}
				if (this.waitForNext || this.waitForPre) {
					return 
				}
				if (this.nextChapter.ready) {
					this.chapterRotate('next')
					this.goToPage(0)
				}
				else {
					uni.showLoading({
						title: '正在准备下一章'
					})
					this.waitForNextChapter = true
				}
				
			},
			
			/**
			* 跳转上一章
			**/
			goPreChapter(page) {
				if (this.curChapter.chapterIndex === 0) {
					uni.showToast({
						title: '这是第一章',
						icon: 'none'
					})
					return
				}
				if (this.waitForNext || this.waitForPre) {
					return 
				}
				if (this.preChapter.ready) {
					this.chapterRotate('pre')
					this.goToPage(0)
				}
				else {
					uni.showLoading({
						title: '正在准备上一章'
					})
					this.waitForPreChapter = true
				}
			},
			
			
			/**
			* 根据页码跳转
			**/
			goToPage(page) {
				
				this.currentPage = page
				this.pageStatus = 0
				this.showAnimation = false
				
				this.curPage.ready = this.curChapter.ready
				this.curPage.chapterName = this.curChapter.chapterName
				this.curPage.text = this.curChapter.text
				this.curPage.pageNum = this.currentPage
				this.curPage.totalPage = this.curChapter.totalPage
				this.curPage.pageTranslate = 0
				
				if (this.currentPage === 0) {
					if (this.preChapter.ready && this.preChapter.isCover) {    //翻至封面了
						this.prePage.ready = true
						this.prePage.isCover = true
						this.prePage.pageTranslate = -this.windowWidth
					}
					else {
						this.prePage.ready = this.preChapter.ready
						this.prePage.chapterName = this.preChapter.chapterName
						this.prePage.text = this.preChapter.text
						this.prePage.pageNum = this.preChapter.totalPage - 1
						this.prePage.totalPage = this.preChapter.totalPage
						this.prePage.pageTranslate = -this.windowWidth
					}
				}
				else {
					this.prePage.ready = this.curChapter.ready
					this.prePage.chapterName = this.curChapter.chapterName
					this.prePage.text = this.curChapter.text
					this.prePage.pageNum = this.currentPage - 1
					this.prePage.totalPage = this.curChapter.totalPage
					this.prePage.pageTranslate = -this.windowWidth
				}
				
				
				
				if (this.currentPage >= this.curChapter.totalPage - 1) {
					if (this.nextChapter.ready && this.nextChapter.isEnd) {    //翻至最后一章了
						this.nextPage.ready = true
						this.nextPage.isEnd = true
						this.nextPage.pageTranslate = 0
					}
					else {
						this.nextPage.ready = this.nextChapter.ready
						this.nextPage.chapterName = this.nextChapter.chapterName
						this.nextPage.text = this.nextChapter.text
						this.nextPage.pageNum = 0
						this.nextPage.totalPage = this.nextChapter.totalPage
						this.nextPage.pageTranslate = 0
					}
				}
				else {
					this.nextPage.ready = true
					this.nextPage.chapterName = this.curChapter.chapterName
					this.nextPage.text = this.curChapter.text
					this.nextPage.pageNum = this.currentPage + 1
					this.nextPage.totalPage = this.curChapter.totalPage
					this.nextPage.pageTranslate = 0
				}
			},
			
			/**
			* 跳转到指定章节
			**/
			async goToChapter(index) {
				uni.showLoading({
					title: '加载中'
				})
				await this.getThreeChapter(index)
				this.goToPage(0)
				uni.hideLoading()
			},
			
			
			/**
			* 加大字体
			**/
			async bigSize() {
				if (this.fontSize < 25) {
					this.fontSize++;
					uni.setStorageSync('fontSize', this.fontSize)
					await this.calcCurChapter()
					if (this.preChapter.ready && !this.preChapter.isCover) {
						this.preChapter.ready = false
						await this.calcPreChapter()
					}
					if (this.nextChapter.ready && !this.nextChapter.isEnd) {
						this.nextChapter.ready = false
						await this.calcNextChapter()
					}
					let page = Math.floor((this.curChapter.totalPage - 1) * this.progress)
					this.goToPage(page)
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
			async smallSize() {
				if (this.fontSize > 14) {
					this.fontSize--;
					uni.setStorageSync('fontSize', this.fontSize)
					await this.calcCurChapter()
					if (this.preChapter.ready && !this.preChapter.isCover) {
						this.preChapter.ready = false
						await this.calcPreChapter()
					}
					if (this.nextChapter.ready && !this.nextChapter.isEnd) {
						this.nextChapter.ready = false
						await this.calcNextChapter()
					}
					let page = Math.floor((this.curChapter.totalPage - 1) * this.progress)
					this.goToPage(page)
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
					this.preChapter.text = traditionalized(this.preChapter.text)
					this.curChapter.text = traditionalized(this.curChapter.text)
					this.nextChapter.text = traditionalized(this.nextChapter.text)
					this.prePage.text = traditionalized(this.prePage.text)
					this.curPage.text = traditionalized(this.curPage.text)
					this.nextPage.text = traditionalized(this.nextPage.text)
					this.simplified = false
					uni.setStorageSync('simplified', false)
				}
				else {   //切换为简体
					this.preChapter.text = simplized(this.preChapter.text)
					this.curChapter.text = simplized(this.curChapter.text)
					this.nextChapter.text = simplized(this.nextChapter.text)
					this.prePage.text = simplized(this.prePage.text)
					this.curPage.text = simplized(this.curPage.text)
					this.nextPage.text = simplized(this.nextPage.text)
					this.simplified = true
					uni.setStorageSync('simplified', true)
				}
			},
			
			
			/**
			* 改变行距
			**/
			async changeLineHeight(lineHeight) {
				if (lineHeight === this.lineHeight) {
					return
				}
				else {
					this.lineHeight = lineHeight;
					uni.setStorageSync('lineHeight', this.lineHeight)
					await this.calcCurChapter()
					if (this.preChapter.ready && !this.preChapter.isCover) {
						this.preChapter.ready = false
						await this.calcPreChapter()
					}
					if (this.nextChapter.ready && !this.nextChapter.isEnd) {
						this.nextChapter.ready = false
						await this.calcNextChapter()
					}
					let page = Math.floor((this.curChapter.totalPage - 1) * this.progress)
					this.goToPage(page)
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
			* 获取目录
			**/
			getDirectoryList() {
				return new Promise((resolve, reject) => {
					// 模拟网络时间
					setTimeout(() => {
						// 生成目录，正常是后端传过来
						for (let i=1;i<=5;i++) {
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
			* 获取一章数据
			**/
			getOneChapter(chapterId) {
				return new Promise((resolve, reject) => {
					// 模拟网络时间
					setTimeout(() => {
						
						this.tmpChapter.text = chapterId + this.text  //模拟数据
						
						if (!this.simplified) {   //切换为繁体
							this.tmpChapter.text = traditionalized(this.tmpChapter.text)
						}
						
						resolve()
					}, 300)
				})
			},
			
			
			/**
			* 获取三章数据
			**/
			async getThreeChapter(index) {
				await this.getOneChapter(this.directoryList[index].chapterId)
				this.$set(this.curChapter, 'text', this.tmpChapter.text)
				this.curChapter.chapterIndex = index
				this.curChapter.chapterName = this.directoryList[index].name
				
				if (this.curChapter.chapterIndex !== 0) {
					await this.getOneChapter(this.directoryList[index - 1].chapterId)
					this.$set(this.preChapter, 'text', this.tmpChapter.text)
					this.preChapter.chapterIndex = index - 1
					this.preChapter.chapterName = this.directoryList[index - 1].name
				}
				else {
					this.preChapter = {ready: true,isCover: true, totalPage: 1, chapterName: this.bookName}
				}
				
				if (this.curChapter.chapterIndex !== this.directoryList.length - 1) {
					await this.getOneChapter(this.directoryList[index + 1].chapterId)
					this.$set(this.nextChapter, 'text', this.tmpChapter.text)
					this.nextChapter.chapterIndex = index + 1
					this.nextChapter.chapterName = this.directoryList[index + 1].name
				}
				else {
					this.nextChapter = {ready: true,isEnd: true}
				}
				await this.calcCurChapter()
				await this.calcPreChapter()
				await this.calcNextChapter()
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