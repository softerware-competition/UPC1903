<template>
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
			<div class="container">
				<div class="row">
					<div class="layui-tab col-md-9">
						<ul class="layui-tab-title">
							<li class="layui-this">院校大全</li>
							
						</ul>
						<div class="layui-tab-content">
							<div class="layui-tab-item layui-show">
								<div class="layui-row layui-col-space15">
									<div class="layui-col-md12">
										<div class="layui-panel">
											<!--面板-->
											<div style="padding: 30px;">
												<div class="input-group" style="width: 50%;">
													<input type="text" class="form-control" placeholder="输入学校名称">
													<span class="input-group-btn">
														<button class="btn btn-default" type="button">
															<font color="#FFFFFF">搜索</font>
														</button>
													</span>
												</div>
											</div>
											<div class="school-select">
												<div class="row">
													<div class="col-lg-5">
														<AreaSelector></AreaSelector>
													</div>
													<div class="col-lg-5">
														<ClassSelector></ClassSelector>
													</div>
													<div class="col-lg-5">
														<FeatureSelector style="margin-top: 10px;"></FeatureSelector>
													</div>
													<div class="col-lg-5">
														<RankSelector style="margin-top: 10px;"></RankSelector>
													</div>
													<div class="col-lg-8">
														<div class="input-fenshu">
															<span>分数区间：&nbsp;&nbsp;&nbsp;&nbsp;</span>
															<el-input  v-model="input1" placeholder="0" style="width: 150px;"></el-input>
															<span>&nbsp;--&nbsp;</span>
															<el-input  v-model="input2" placeholder="750" style="width: 150px;"></el-input>
														</div>
													</div>
												</div>
												
											</div>
										</div>
									</div>
									<div class="layui-col-md12">
										<div class="layui-panel">
											<div style="padding: 30px;">
												<SchoolTable></SchoolTable>
											</div>
										</div>
									</div>
								</div>

							</div>
							
						</div>
					</div>
					<div class="col-md-3">
						图片导航2
					</div>


				</div>

			</div>
		</div>
	
		<div class="bottom">
			<PageBottom></PageBottom>
		</div>
	</div>

</template>

<script>
	import PageTop from '../components/basic/PageTop.vue'
	import AreaSelector from '../components/schools/AreaSelector.vue'
	import ClassSelector from '../components/schools/ClassSelector.vue'
	import FeatureSelector from '../components/schools/FeatureSelector.vue'
	import RankSelector from '../components/schools/RankSelector.vue'
	import SchoolTable from '../components/schools/SchoolTable.vue'
	import PageBottom from '../components/basic/PageBottom.vue'
	
	export default {
		name: 'school',
		components:{
			PageTop,
			AreaSelector,
			ClassSelector,
			FeatureSelector,
			RankSelector,
			SchoolTable,
			PageBottom
		},
		data() {
		    return {
		      input1: '',
		      input2: '',
		    }
		  },
		mounted() {
			layui.use('element', function() {
				var element = layui.element
			})
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
	.input-group-btn .btn{
		background-color: #1eb450;
		
	}
	
	.search{
		margin-top: -10px;
	}
	
	
	.onepage{
		margin-top: 20px;
	}
	
	
	@media screen and (min-width: 1280px){
	    .container{
	        width:1280px;
	    }
	
	}
	
	.firsthead{
	    line-height: 25px;
	}
	
	.logo img{
	    width: 100%;
	}
	div.head{
	    display: block;
	    background: #eee;
	    border-bottom: 1px solid #ccc;
	    font-size: 18px;
	    text-align: center;
	    font-weight: 800;
	    text-decoration: none;
	}
	
	.onepage ul > li {
		font-size: 20px;
		font-weight: 500;
	}
	
	.school-select{
		margin-bottom: 20px;
	}
	.input-fenshu{
		margin-top: 20px;
		margin-left: 22px;
	}
	
</style>