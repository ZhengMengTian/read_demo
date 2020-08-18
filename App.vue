<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@font-face {
		  font-family: 'iconfont' ;  /* project id 1997429 */
		  src: url('https://at.alicdn.com/t/font_1997429_y2jbyasuswe.eot');
		  src: url('https://at.alicdn.com/t/font_1997429_y2jbyasuswe.eot?#iefix') format('embedded-opentype'),
		  url('https://at.alicdn.com/t/font_1997429_y2jbyasuswe.woff2') format('woff2'),
		  url('https://at.alicdn.com/t/font_1997429_y2jbyasuswe.woff') format('woff'),
		  url('https://at.alicdn.com/t/font_1997429_y2jbyasuswe.ttf') format('truetype'),
		  url('https://at.alicdn.com/t/font_1997429_y2jbyasuswe.svg#iconfont') format('svg');
	}
	.iconfont{
	    font-family:"iconfont" !important;
		font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;
	}
	*,view{
		box-sizing: border-box;
	}
	
</style>
