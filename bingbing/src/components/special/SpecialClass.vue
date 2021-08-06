<template>
	<div class="layui-card">
		<div class="layui-card-header">中国语言文学类</div>
		<div class="layui-card-body">
			<SpecialBox></SpecialBox>
			<SpecialBox></SpecialBox>

		</div>
	</div>
</template>

<script>
	import SpecialBox from './SpecialBox.vue'
	export default {
		name: 'SpecialClass',
		mounted() {
			layui.use('element', function(){
			  var element = layui.element;
			  
			  //…
			});
		},
		components: {
			SpecialBox
		}
	}
</script>

<style>
	
	.layui-card{
		margin-top: 20px;
	}
	
	.layui-card-header{
		font-size: 18px;
		font-weight: 550;
		color: #5FB878;
	}
</style>
