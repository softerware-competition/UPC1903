<template>
	<div class="container">
		<div class="industry-distribution">
			<span>| 就业行业分布</span>
			<div class="echart">echarts图表</div>
		</div>

		<div class="station-distribution">
			<span>| 就业岗位分布</span>
			<div class="echart">echarts图表</div>
		</div>

		<div class="area-distribution">
			<span>| 就业地区分布</span>
			<div class="echart">echarts图表</div>
		</div>
	</div>

</template>

<script>
	
	export default {
		name: 'AboutOccupation',
		
	}
</script>

<style scoped>
	span {
		font-size: 20px;
		font-weight: 500;
	}

	.industry-distribution {
		margin-top: 30px;
	}

	.station-distribution {
		margin-top: 40px;
	}

	.area-distribution {
		margin-top: 40px;
	}

</style>
