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
				textFixed:`<p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p><p>测试测试测试测试测试，测试测试，测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测试测试测试，测试测试测。</p>`,
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
				
				wait: false   ,//翻至章节交接时，会导致翻至空白页bug,需要等待章节轮换
				nextPageLoaded: false,   //下一章是否加载完毕
				prePageLoaded: false,   //上一章是否加载完毕
				turePage: false,   //加载章节后是否跳转页面
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
			* 计算上一章阅读页长度,并生成pages,并跳转至某页（如果有）
			**/
			calcPrePages() {
				const query = uni.createSelectorQuery().in(this);
				query.select('#preText').boundingClientRect(data => {
					let width = data.width;
					let height = data.height;
					this.prePages = this.genPages(width, height)
					if (this.turePage) {
						this.turePage = false;
						this.prePage()
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
					if (this.turePage) {
						this.turePage = false;
						this.nextPage()
					}
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
							if (!this.nextPageLoaded) {
								this.turePage = true;
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
							if (!this.prePageLoaded) {
								this.turePage = true;
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
					if (!this.prePageLoaded) {
						this.turePage = true;
						uni.showLoading({
							mask: true,
							title: '正在加载中请稍候'
						})
						return
					}
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
					if (!this.nextPageLoaded) {
						this.turePage = true;
						uni.showLoading({
							mask: true,
							title: '正在加载中请稍候'
						})
						return
					}
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
					this.nextPageLoaded = true;
					this.prePageLoaded = true;
					setTimeout(() => {
						uni.hideLoading()
						this.chapterId = 2;
						this.chapterName = `第${this.chapterId}章 测试测试`;
						this.preChapterName = `第${this.chapterId - 1}章 测试测试`;
						this.nextChapterName = `第${this.chapterId + 1}章 测试测试`;
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
				if (type === 'next') {
					this.nextPageLoaded = false;
				}
				else {
					this.prePageLoaded = false;
				}
				// 模拟网络时间
				setTimeout(() => {
					uni.hideLoading()
					if (type === 'next') {
						this.nextPageLoaded = true;
						this.nextText = chapterId + this.textFixed;
						this.nextChapterName = `第${chapterId}章 测试测试`;
						this.$nextTick(() => {
							this.calcNextPages()
						})
					}
					else {
						this.prePageLoaded = true;
						if (chapterId === 0) {
							this.preText = '';
							this.preChapterName = '';
						}
						else {
							this.preText = chapterId + this.textFixed;
							this.preChapterName = `第${chapterId}章 测试测试`;
							this.$nextTick(() => {
								this.calcPrePages()
							})
						}
					}
					
				}, 500)
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
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 30px;
			width: 100%;
			line-height: 30px;
			color: #fff;
		}
		.back{
			position: absolute;
			top: 0;
			left: 10px;
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