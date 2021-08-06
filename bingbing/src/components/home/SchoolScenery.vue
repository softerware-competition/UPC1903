<template>
	<div class="campus_scenery col-md-3">
		<a href="/upc">
			<img src="../../assets/school.png" style="width: 300px;" />
			<div class="classicon1">
				<h3>选择你心仪的学校</h3>
				<h1><strong>选择学校</strong></h1>
			</div>
		</a>
	</div>
</template>

<script>
	export default{
		name: 'SchoolScenery',
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
	.campus_scenery {
		float: left;
		background-color: #FFFFFF;
		margin-top: 20px;
		padding: 0 2px 2px 0;
		position: relative;
		overflow: hidden;
	}

	.campus_scenery>a {
		width: 300px;
		height: 185x;
		float: left;
		text-align: center;
		position: relative;
	}

	.classicon1 h1 {
		margin-top: 70px;
		color: #dle973;
	}

	.classicon1 h3 {
		color: #fff5e1;
	}
	.classicon1 {
		width: 300px;
		height: 200px;
		position: absolute;
		left: 0;
		top: 0;
		color: #fff;
		opacity: 0;
	}
	.classicon1:hover{
		background: #1eb450;
		opacity: 0.9;
		transition: opacity 0.5s;
		-webkit-transition: opacity 0.5s;
	}
	 .copyright-con {
	    position: relative;
	    margin-bottom: 0px;
	    margin: 0 auto;
	    width: 1200px;
	}
</style>
