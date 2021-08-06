<template>
	<div class="container">
		<div class="layui-tab-content">
				<div class="layui-tab-item layui-show">
					<div class="layui-row layui-col-space15">
						<div class="layui-col-md12">
							<div class="layui-panel">
								<!--面板-->
								<div class="school-select">
									<div class="row" style="margin-top: 10px; margin-bottom: 10px;">
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
	</div>
	
</template>

<script>
	import PageTop from '../../basic/PageTop.vue'
	import AreaSelector from '../../schools/AreaSelector.vue'
	import ClassSelector from '../../schools/ClassSelector.vue'
	import FeatureSelector from '../../schools/FeatureSelector.vue'
	import RankSelector from '../../schools/RankSelector.vue'
	import SchoolTable from '../../schools/SchoolTable.vue'
	import PageBottom from '../../basic/PageBottom.vue'
	
	export default{
		name: 'AboutSchool',
		components:{
			PageTop,
			AreaSelector,
			ClassSelector,
			FeatureSelector,
			RankSelector,
			SchoolTable,
			PageBottom
		},
		mounted() {
			layui.use('element', function() {
				var element = layui.element
			})
		}
	}
</script>

<style scoped>
	.container{
		margin-top: 30px;
	}
	
</style>
