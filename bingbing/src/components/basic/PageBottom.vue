<template>
	<div class="bottom">
		<div class="bottom-part">
			<p class="copy-first">
				<span class="span">
					<a href="#" target="_Blank">冰冰教育</a>
				</span> 
				<br />
				<span class="span">
					邮箱：2321931200@qq.com
				</span>
			</p>
		</div>
	</div>
	
</template>

<script>
	export default{
		name: 'PageBottom',
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
		.bottom{
			height: auto;
			padding: 20px 0 29px 0;
			color: #333;
			text-align: center;
			line-height: 26px;
			font-size: 12px;
			background: #FFFFFF;
			margin: auto;
		}
</style>
