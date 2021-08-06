<template>
	<div class="upc">
		<div class="container">
			<div>
				<PageTop></PageTop>
				 <div class="navigation_bar ">
				 	<ul class="nav nav-tabs nav-justified">
				 		<li class="nav-item"><a class="nav-link" href="/">首页</a></li>
				 		<li class="nav-item"><a class="nav-link" href="/">模拟填志愿</a></li>
				 		<li class="nav-item"><a class="nav-link active" href="/school">查学校</a></li>
				 		<li class="nav-item"><a class="nav-link" href="/special">查专业</a></li>
				 		<li class="nav-item"><a class="nav-link" href="/">智能选大学</a></li>
				 		<li class="nav-item"><a class="nav-link" href="/">高考全知道</a></li>
				 	</ul>
				 </div>
			</div>
		
			<div class="onepage">
				<div class="layui-card">
					<div class="layui-card-header" style="height: 100%;">
						<SchoolTitle></SchoolTitle>
					</div>
					<div class="layui-card-body">
						<div class="row">
							<div class="col-lg-9">
								<FirstPage></FirstPage>
							</div>
							<div class="col-lg-3 d-none d-xl-block">
								<img src="https://static-data.eol.cn/upload/logo/120.jpg" style="width: 100%;" />
							</div>
						</div>
					</div>
				</div>
			</div>
		
			<div class="twopage">
				<el-tabs v-model="activeName" type="card" >
					<el-tab-pane label="学校概况" name="SchoolIntro">
						<SchoolIntro></SchoolIntro>
					</el-tab-pane>
					<el-tab-pane label="开设专业" name="SchoolSpecial">
						<SchoolSpecial></SchoolSpecial>
					</el-tab-pane>
					<el-tab-pane label="历年分数" name="SchoolScores">
						<schoolScores></schoolScores>
					</el-tab-pane>
					<el-tab-pane label="招生简章" name="SchoolRegular">
						<SchoolRegular></SchoolRegular>
					</el-tab-pane>
				</el-tabs>
		
			</div>
		
		</div>
		
		<div class="bottom">
			<PageBottom></PageBottom>
		</div>
	</div>
	
</template>

<script>
	import SchoolIntro from '../components/sys/upc/SchoolIntro'
	import SchoolRegular from '../components/sys/upc/SchoolRegular'
	import schoolScores from '../components/sys/upc/schoolScores'
	import FirstPage from '../components/sys/upc/FirstPage'
	import PageTop from '../components/basic/PageTop.vue'
	import SchoolTitle from '../components/sys/upc/SchoolTitle.vue'
	import PageBottom from '../components/basic/PageBottom.vue'
	import SchoolSpecial from '../components/sys/upc/SchoolSpecial.vue'
	
	export default {
		name: 'upc',
		data() {
			return {
				activeName: 'SchoolIntro'
			}
		},
		mounted() {
			layui.use('element', function() {
				var element = layui.element;

				//…
			});
		},
		
		components: {
			SchoolTitle,
			SchoolIntro,
			SchoolRegular,
			schoolScores,
			FirstPage,
			PageTop,
			PageBottom,
			SchoolSpecial
		}
	}
</script>

<style >
	.navigation_bar {
		margin-top: 20px;
	}
	
	
	.navigation_bar ul.nav>li>a {
		color: #000000;
		font-size: 17px;
		font-weight: 560;
	}
	
	.upc .onepage {
		margin-top: 40px;
	}

	.upc .el-link {
		font-size: 17px;
	}

	.upc .onepage .layui-card {
		background: -webkit-linear-gradient(bottom, white, #90EE90, #67C23A) no-repeat;
	}

	.upc .onepage p {
		text-indent: 2em;
	}

	.upc .el-tabs__item {
		font-size: 23px !important;
		width: 200px !important;
		height: 40px !important;
		text-align:center;
	}
</style>
