<template>
	<div class="lset academy_item_box clearfix">
		<a href="/SE" target="_blank">
			<div class="academy_item_title clearfix">
				<p class="academy_num ">8</p>
				<p class="ellipsis cursor">人工智能</p>
			</div>
	
		</a>
	</div>
</template>

<script>
	export default{
		name: 'HotSpecial',
		mounted() {
			layui.use('element', function() {
				var element = layui.element;
		
				//…
			});
		},
		components: {
			
		}
	}
</script>

<style scoped>
	 .academy_item_box {
		margin-bottom: 27px;
		height: 18px;
		line-height: 18px;
	}
	
	
	 .academy_item_box .academy_item_title {
		float: left;
	}
	
	.academy_item_box .academy_item_title .academy_num {
		float: left;
		margin: 0;
		width: 18px;
		text-align: center;
		background: #1eb450;
		opacity: 0.9;
		color: white;
		font-size: 12px;
		margin-right: 17px;
	}
	
	.academy_item_box .academy_item_title .ellipsis {
		float: left;
		margin: 0;
		font-size: 18px;
		color: #000000;
		transition: all 0.4s;
		max-width: 187px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	
</style>
