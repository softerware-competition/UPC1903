<template>
	<div class="school-hot">
		<div class="hot-title">
			<p class="hot-title-p">热度排行</p>
		</div>
		<div class="hot_school_content">
			<HotSpecial></HotSpecial>
			<HotSpecial></HotSpecial>
			<HotSpecial></HotSpecial>
			<HotSpecial></HotSpecial>
			<HotSpecial></HotSpecial>
			<HotSpecial></HotSpecial>
			<HotSpecial></HotSpecial>
			<HotSpecial></HotSpecial>
			<HotSpecial></HotSpecial>
			<HotSpecial></HotSpecial>
			<HotSpecial></HotSpecial>
			
			<div class="check_more cursor am_l hover_style">查看更多</div>
		</div>
	</div>
</template>

<script>
	import HotSpecial from './HotSpecial.vue'
	
	export default{
		name: 'SpecialRank',
		mounted() {
			layui.use('element', function() {
				var element = layui.element;
		
				//…
			});
		},
		components: {
			HotSpecial
		}
	}
</script>

<style scoped>
	.school-hot {
		width: 350px;
		margin-top: 90px;
		margin-left: 20px;
	}

	.school-hot .hot-title {
		height: 47px;
		line-height: 47px;
	}

	.school-hot .hot-title .hot-title-p {
		float: left;
		font-size: 20px;
		color: #000000;
		font-weight: bold;
	}

	.school-hot .hot_school_content {
		height: 536px;
		border: 1px solid #EEEEEE;
		padding: 20px;
	}

	.school-hot .hot_school_content .check_more {
			width: 98px;
			height: 39px;
			border: 1px solid #EEEEEE;
			line-height: 39px;
			text-align: center;
			font-size: 14px;
			color: #555555;
			margin: 0 auto;
		}
</style>
