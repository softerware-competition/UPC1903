<template>
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
			<div class="container">
				<div class="row">
					<div class="special-search col-lg-9">
						<div class="input-group" style="width: 50%;">
							<input type="text" class="form-control" placeholder="输入专业名称">
							<span class="input-group-btn">
								<button class="btn btn-default" type="button">
									<font color="#FFFFFF">搜索</font>
								</button>
							</span>
						</div>
						<div class="special-class" style="margin-top: 20px;">
							<span style="font-size: 16px;font-weight: 500;">
								专业分类<i class="layui-icon" style="color: 	#B0C4DE;">&#xe602;</i>
							</span>
							<div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
								<ul class=" layui-tab-title">
									<li class="layui-this">全部</li>
									<li>
										<el-link :underline="false">文学</el-link>
									</li>
									<li>
										<el-link :underline="false">理学</el-link>
									</li>
									<li>
										<el-link :underline="false">工学</el-link>
									</li>
									<li>
										<el-link :underline="false">工学</el-link>
									</li>
									<li>
										<el-link :underline="false">教育学</el-link>
									</li>
									<li>
										<el-link :underline="false">经济学</el-link>
									</li>
									<li>
										<el-link :underline="false">历史学</el-link>
									</li>
									<li>
										<el-link :underline="false">哲学</el-link>
									</li>
									<li>
										<el-link :underline="false">管理学</el-link>
									</li>
									<li>
										<el-link :underline="false">医学</el-link>
									</li>
									<li>
										<el-link :underline="false">艺术学</el-link>
									</li>
								</ul>
								<div class="layui-tab-content">
									<div class="layui-tab-item layui-show">
										<h3>文学</h3>
										<SpecialClass></SpecialClass>
										<SpecialClass></SpecialClass>
										<SpecialClass></SpecialClass>

										<h3>理学</h3>
										<SpecialClass></SpecialClass>
										<SpecialClass></SpecialClass>


										<SpecialClass></SpecialClass>

										<SpecialClass></SpecialClass>


										<h3>工学</h3>
										<SpecialClass></SpecialClass>



										<ul class="pagination">
											<li><a href="#">&laquo;</a></li>
											<li><a href="#">1</a></li>
											<li><a href="#">2</a></li>
											<li><a href="#">3</a></li>
											<li><a href="#">4</a></li>
											<li><a href="#">5</a></li>
											<li><a href="#">&raquo;</a></li>
										</ul>
									</div>
									<div class="layui-tab-item">
										<span style="font-size: 28px; font-weight: 530;">文学</span>
										<el-select v-model="value" placeholder="请选择" style="margin-left: 20px;">
											<el-option-group v-for="group in options" :key="group.label"
												:label="group.label">
												<el-option v-for="item in group.options" :key="item.value"
													:label="item.label" :value="item.value">
												</el-option>
											</el-option-group>
										</el-select>
									</div>
							

									<div class="layui-tab-item">
										<h3>理学</h3>
										<SpecialClass></SpecialClass>
										<SpecialClass></SpecialClass>

									</div>
									<div class="layui-tab-item">
										<h3>工学</h3>
										<SpecialClass></SpecialClass>
										<SpecialClass></SpecialClass>

									</div>
									<div class="layui-tab-item">5</div>
									<div class="layui-tab-item">6</div>
									<div class="layui-tab-item">6</div>
									<div class="layui-tab-item">6</div>
									<div class="layui-tab-item">6</div>
									<div class="layui-tab-item">6</div>
									<div class="layui-tab-item">6</div>
									<div class="layui-tab-item">6</div>
									<div class="layui-tab-item">6</div>

								</div>

								
							</div>
						</div>
					</div>

					<div class="special-ranking col-lg-3  d-none d-xl-block">
						<SpecialRank></SpecialRank>

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
	import SpecialClass from '../components/special/SpecialClass.vue'
	import SpecialRank from '../components/special/SpecialRank.vue'
	import PageBottom from '../components/basic/PageBottom.vue'

	export default {
		name: 'special',
		mounted() {
			layui.use('element', function() {
				var element = layui.element;

				//…
			});
		},
		components: {
			PageTop,
			SpecialClass,
			SpecialRank,
			PageBottom
		},
		data() {
			return {
				options: [{
					label: '热门城市',
					options: [{
						value: 'Shanghai',
						label: '上海'
					}, {
						value: 'Beijing',
						label: '北京'
					}]
				}, {
					label: '城市名',
					options: [{
						value: 'Chengdu',
						label: '成都'
					}, {
						value: 'Shenzhen',
						label: '深圳'
					}, {
						value: 'Guangzhou',
						label: '广州'
					}, {
						value: 'Dalian',
						label: '大连'
					}]
				}],
				value: ''
			}
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
	.input-group-btn .btn {
		background-color: #1eb450;

	}

	.search {
		margin-top: -10px;
	}



	.onepage {
		margin-top: 20px;
	}


	.input-group {
		margin-top: 10px;
	}

	.layui-card {
		margin-top: 20px;
	}

	.layui-card-header {
		font-size: 18px;
		font-weight: 550;
		color: #5FB878;
	}

	.son_list {
		padding: 15px 0;
		border-bottom: 1px dashed #EEEEEE;
		position: relative;
	}

	.son_title {
		font-size: 16px;
		color: #000000;
		margin-bottom: 10px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.4s;
	}

	.son_tags {
		cursor: pointer;
	}

	.son_list .son_tags span {
		font-size: 14px;
		color: #555555;
		display: inline-block;
		padding-right: 13px;
		position: relative;
		margin-right: 13px;
		border-right: 1px solid #555555;
		line-height: 15px;
	}

	.son_list .set_school {
		width: 74px;
		height: 32px;
		background: #5FB878;
		border-radius: 4px;
		text-align: center;
		line-height: 32px;
		font-size: 14px;
		color: #FFFFFF;
		position: absolute;
		right: 0;
		top: 50%;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		cursor: pointer;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-pack: center;
		justify-content: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.layui-tab-item h3 {
		margin-top: 25px;
		font-weight: 530;
	}

	.bottom {
		height: auto;
		padding: 20px 0 29px 0;
		color: #333;
		text-align: center;
		line-height: 26px;
		font-size: 12px;
		background: #FFFFFF;
		margin: auto;
	}


	.bottom-part .copy-first {
		text-align: center;
		color: #000000;
		font-size: 14px;
		margin: 0 auto;
		margin-top: 30px;
	}

	.bottom-part .copy-first span {
		padding: 0 10px;
		color: #000000;
		font-size: 14px;
		margin-bottom: 20px;
	}


</style>
