<template>
	<div class="new-message-box">
		<div class="box-title">
			<p>
				<el-link :underline="false" href="#">山东：2021高考“6选3”选科情况总体均衡，选考物理可报本科计划最多</el-link>
			</p>
		</div>
		<div class="new-message">
			<p>
				<el-link :underline="false" href="#">山东：2021高考“6选3”选科情况总体均衡，选考物理可报本科计划最多</el-link>
				<br />
				<el-link :underline="false" href="#">山东：2021高考“6选3”选科情况总体均衡，选考物理可报本科计划最多</el-link>
				<br />
				<el-link :underline="false" href="#">山东：2021高考“6选3”选科情况总体均衡，选考物理可报本科计划最多</el-link>
			</p>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'News',
		mounted() {
			layui.use('element', function() {
				var element = layui.element
			})
		},
		components:{
		}
	}
</script>

<style scoped>
	.new-message-box{
		margin-top: 20px;
		margin-bottom: 40px;
		height: 100%;
		width: 100%;
		float: left;
		background-color: #FFFFFF;
		box-shadow: 0px 0px 15px #e6e6e6;
		padding: 20px;
	}
	.new-message {
		margin-top: 17px;
		line-height: 23px;
	}
	.box-title .el-link{
		font-size: 17px;
		font-weight: 560;
		color: #000000;
	}
	.new-message .el-link{
		font-size: 15px;
	}
</style>
