<template>
	<div class="container">
		<div>
			<PageTop></PageTop>
			<div class="navigation_bar ">
				<ul class="nav nav-tabs nav-justified">
					<li class="nav-item"><a class="nav-link active" href="/">首页</a></li>
					<li class="nav-item"><a class="nav-link" href="/">模拟填志愿</a></li>
					<li class="nav-item"><a class="nav-link" href="/school">查学校</a></li>
					<li class="nav-item"><a class="nav-link" href="/special">查专业</a></li>
					<li class="nav-item"><a class="nav-link" href="/">智能选大学</a></li>
					<li class="nav-item"><a class="nav-link" href="/">高考全知道</a></li>
				</ul>
			</div>
		</div>
		<div class="onepage" id="onepage">
			<el-carousel indicator-position="outside">
				<el-carousel-item v-for="item in imagebox" :key="item.id">
					<img :src="item.idView" class="image">
				</el-carousel-item>
			</el-carousel>

			<div class="container" style="width: 100%;">
				<News></News>
			</div>
		</div>


		<div class="twopage">
			<div class="container" style="width: 100%; margin-top: 40px;">
				<div class="row">
					<div class="recommended-schools col-md-9">
						<fieldset class="layui-elem-field">
							<legend>
								热门学校推荐
								<a href="#">更多 > </a>
							</legend>
							<div class="layui-field-box">
								<div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
									<div>
										<ul class="layui-tab-title">
											<li class="layui-this">全国热门学校</li>
											<li>热门本科院校</li>
											<li>热门专科院校</li>
										</ul>
									</div>
									<div class="layui-tab-content">
										<div class="layui-tab-item layui-show">
											<div class="popular-school">
												<div class="row">
													<SchoolRecommend></SchoolRecommend>
													<SchoolRecommend></SchoolRecommend>
													<SchoolRecommend></SchoolRecommend>
													<SchoolRecommend></SchoolRecommend>
													<SchoolRecommend></SchoolRecommend>
													<SchoolRecommend></SchoolRecommend>
													<SchoolRecommend></SchoolRecommend>
													<SchoolRecommend></SchoolRecommend>
													<SchoolRecommend></SchoolRecommend>
													
												</div>
											</div>
										</div>
										<div class="layui-tab-item">
											<div class="popular-school">
												<div class="row">
													<SchoolRecommend></SchoolRecommend>
													<SchoolRecommend></SchoolRecommend>
													<SchoolRecommend></SchoolRecommend>
													<SchoolRecommend></SchoolRecommend>
													<SchoolRecommend></SchoolRecommend>
													<SchoolRecommend></SchoolRecommend>
													<SchoolRecommend></SchoolRecommend>
													<SchoolRecommend></SchoolRecommend>
													<SchoolRecommend></SchoolRecommend>
													<SchoolRecommend></SchoolRecommend>
													<SchoolRecommend></SchoolRecommend>
													<SchoolRecommend></SchoolRecommend>
												</div>
											</div>
										</div>
										<div class="layui-tab-item">内容3</div>
										<div class="layui-tab-item">内容4</div>
										<div class="layui-tab-item">内容5</div>
									</div>
								</div>
							</div>
						</fieldset>
					</div>
					<div class="school-ranking col-md-3 d-none d-xl-block">
						<HotSchoolRank></HotSchoolRank>
					</div>
				</div>

			</div>

		</div>

		<div class="threepage">
			<div class="container" style="width: 100%;">
				<fieldset class="layui-elem-field">
					<legend>
						热门专业推荐
						<a href="#">更多 > </a>
					</legend>
					<div class="layui-field-box">
						<div class="row">
							<div class="popular-majors col-md-9">
								<SpecialRecommend></SpecialRecommend>
								<SpecialRecommend></SpecialRecommend>
								<SpecialRecommend></SpecialRecommend>
								<SpecialRecommend></SpecialRecommend>
								<SpecialRecommend></SpecialRecommend>
								<SpecialRecommend></SpecialRecommend>
								<SpecialRecommend></SpecialRecommend>
								<SpecialRecommend></SpecialRecommend>


							</div>
							<div class="first-major col-md-3 d-none d-xl-block">
								<div class="classicon">
									<h3>选择你心仪的专业</h3>
									<h1><strong>热门专业</strong></h1>
								</div>
							</div>
						</div>
					</div>
				</fieldset>

			</div>
		</div>

		<div class="fourpage">
			<div class="container" style="width: 100%;">
				<fieldset class="layui-elem-field">
					<legend>
						校园风光
						<a href="#">更多 > </a>
					</legend>
					<div class="layui-field-box">
						<div class="row">
							<SchoolScenery></SchoolScenery>
							<SchoolScenery></SchoolScenery>
							<SchoolScenery></SchoolScenery>
							<SchoolScenery></SchoolScenery>
							<SchoolScenery></SchoolScenery>
							<SchoolScenery></SchoolScenery>
							<SchoolScenery></SchoolScenery>
							<SchoolScenery></SchoolScenery>
						</div>
					</div>
				</fieldset>
			</div>
		</div>

		<div class="fivepage">
			<div class="container" style="width: 100%;">
				<fieldset class="layui-elem-field">
					<legend>
						路线规划
					</legend>
					<div class="to-school-path">
						<img src="../assets/map.png" /><span>智能规划路线</span>
					</div>

				</fieldset>
			</div>
		</div>

		<div class="bottom">
			<PageBottom></PageBottom>
		</div>


	</div>



</template>

<script>
	import PageTop from '../components/basic/PageTop.vue'
	import News from '../components/home/news.vue'
	import SchoolRecommend from '../components/home/SchoolRecommend.vue'
	import HotSchoolRank from '../components/home/HotSchoolRank.vue'
	import SpecialRecommend from '../components/home/SpecialRecommend.vue'
	import SchoolScenery from '../components/home/SchoolScenery.vue'
	import PageBottom from '../components/basic/PageBottom.vue'

	export default {
		name: 'Home',
		mounted() {
			layui.use('element', function() {
					var element = layui.element
				});
				// 首次加载时,需要调用一次
			this.screenWidth = window.innerWidth;
			this.setSize();
			// 窗口大小发生改变时,调用一次
			window.onresize = () => {
				this.screenWidth = window.innerWidth;
				this.setSize();
			}
		},
		components: {
			PageTop,
			News,
			SchoolRecommend,
			HotSchoolRank,
			SpecialRecommend,
			SchoolScenery,
			PageBottom
		},
		data() {
			return {
				imagebox: [{
						id: 0,
						idView: require('../assets/01.jpg')
					},
					{
						id: 1,
						idView: require('../assets/carousel2.jpg')
					},
					{
						id: 2,
						idView: require('../assets/carousel3.jpg')
					}
				],

				// 浏览器宽度
				screenWidth: 0
			}
		},
		methods: {
			setSize: function() {
				// 通过浏览器宽度(图片宽度)计算高度
				this.bannerHeight = 400 / 1920 * this.screenWidth;
			},
		}
	}
</script>

<style scoped>
	.navigation_bar {
		margin-top: 20px;
	}


	.navigation_bar ul.nav>li>a {
		color: #000000;
		font-size: 17px;
		font-weight: 560;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}



	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
	
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 200px;
		margin: 0;
	}
	
	
	
	img {
		/*设置图片宽度和浏览器宽度一致*/
		width: 100%;
		height: inherit;
	}

	.onepage {
		margin-top: 20px;
	}


	.twopage {
		padding: 2px 0 0 2px;
		height: auto;
		margin-top: 40px;
	}

	.twopage .container {
		margin-top: 40px;
	}

	.threepage .container {
		margin-top: 40px;
	}

	.fourpage .container {
		margin-top: 40px;
	}

	.fivepage .container {
		margin-top: 40px;
	}



	.twopage .row {

		margin-top: 10px;

	}



	.layui-tab ul.layui-tab-title>li {
		float: left;
		font-size: 18px;
		color: #000000;
		margin-right: 32px;
		cursor: pointer;
		font-weight: bold;
	}


	.twopage .layui-elem-field {
		width: 97%;
	}

	.layui-elem-field legend {
		color: #000000;
		font-weight: bold;
		margin-left: 45px;
	}

	.threepage .layui-elem-field {
		margin-top: 40px;
		width: 97%;
	}

	.layui-elem-field legend>a {
		color: #000000;
		font-weight: 200;
		font-size: 17px;
		margin-left: 665px;
		color: #009688;
	}


	.first-major {
		background-color: #1eb450;
		height: 370px;
		margin-left: 0px;
		margin-top: -30px;
		width: 280px;
		float: left;
		padding: 0 2px 2px 0;
		position: relative;
		overflow: hidden;
	}



	.classicon h3 {
		margin-top: 120px;
		color: #fff5e1;
		margin-left: 50px;
	}

	.classicon h1 {
		margin-top: 30px;
		color: #fff5e1;
		margin-left: 70px;
	}
</style>
