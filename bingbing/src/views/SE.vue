<template>
	<div class="SE">
		<div class="container">
			<div>
				<PageTop></PageTop>
				 <div class="navigation_bar ">
				 	<ul class="nav nav-tabs nav-justified">
				 		<li class="nav-item"><a class="nav-link" href="/">首页</a></li>
				 		<li class="nav-item"><a class="nav-link" href="/">模拟填志愿</a></li>
				 		<li class="nav-item"><a class="nav-link" href="/school">查学校</a></li>
				 		<li class="nav-item"><a class="nav-link active" href="/special">查专业</a></li>
				 		<li class="nav-item"><a class="nav-link" href="/">智能选大学</a></li>
				 		<li class="nav-item"><a class="nav-link" href="/">高考全知道</a></li>
				 	</ul>
				 </div>
			</div>
		
			<div class="onepage">
				<div class="layui-card">
					<div class="layui-card-header" style="height: 100%;">
						<SpecialTitle></SpecialTitle>
					</div>
					<div class="layui-card-body">
						<FirstPage></FirstPage>
					</div>
				</div>
			</div>
		
			<div class="twopage">
				<el-tabs v-model="activeName" type="card" >
					<el-tab-pane label="专业概况" name="SpecialIntro">
						<SpecialIntro></SpecialIntro>
					</el-tab-pane>
					<el-tab-pane label="开设院校" name="AboutSchool">
						<AboutSchool></AboutSchool>
					</el-tab-pane>
					<el-tab-pane label="相关就业" name="AboutOccupation">
						<AboutOccupation></AboutOccupation>
					</el-tab-pane>
				</el-tabs>
		
			</div>
		
		</div>
		
		<div class="bottom-part">
			<PageBottom></PageBottom>
		</div>
	</div>
</template>

<script>
	import SpecialTitle from '../components/sys/SE/SpecialTitle.vue'
	import PageTop from '../components/basic/PageTop.vue'
	import PageBottom from '../components/basic/PageBottom.vue'
	import FirstPage from '../components/sys/SE/FirstPage.vue'
	import SpecialIntro from '../components/sys/SE/SpecialIntro.vue'
	import AboutSchool from '../components/sys/SE/AboutSchool.vue'
	import AboutOccupation from '../components/sys/SE/AboutOccupation.vue'
	
	export default {
		name: 'SE',
		mounted() {
			layui.use('element', function() {
				var element = layui.element;
	
				//…
			});
		},
		data() {
			return {
				activeName: 'SpecialIntro'
			}
		},
		components: {
			SpecialTitle,
			FirstPage,
			PageBottom,
			PageTop,
			SpecialIntro,
			AboutSchool,
			AboutOccupation
		}
	}
</script>

<style>
	.navigation_bar {
		margin-top: 20px;
	}
	
	
	.navigation_bar ul.nav>li>a {
		color: #000000;
		font-size: 17px;
		font-weight: 560;
	}
	
	.SE .onepage {
		margin-top: 40px;
	}
	
	.SE .el-link {
		font-size: 17px;
	}
	
	.SE .onepage .layui-card {
		background: -webkit-linear-gradient(bottom,white, #90EE90, #67C23A) no-repeat;
	}
	
	.SE .onepage p {
		text-indent: 2em;
	}
	
	.SE .el-tabs__item {
		font-size: 23px !important;
		width: 200px !important;
		height: 40px !important;
		text-align:center;
	}
</style>
