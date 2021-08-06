<template>
	<div class="major_item" data-growing-title="计算机相关" data-growing-container="">
		<a href="https://gkcx.eol.cn/school/566/professional" target="_blank">
			<h3>
				计算机类
			</h3>
			<p style="-webkit-box-orient: vertical;">
				计算机科学与技术
			</p>
			<img src="https://img3.eol.cn/e_images/gk/2019/PC/rmzyxb101.png" alt="">
		</a>
	</div>
</template>

<script>
	export default{
		name: 'SpecialRecommend',
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
	
		
		.major_item {
		    width: 209px;
		    height: 168px;
		    margin-right: 10px;
		    float: left;
		    text-align: center;
		    background: #FFFFFF;
		    padding-top: 20px;
		    margin-bottom: 10px;
		    transition: all .2s linear;
		    cursor: pointer;
			box-shadow: 0px 0px 15px #e6e6e6;
		}
		
		 .major_item h3 {
		    font-size: 16px;
		    color: #000000;
		    margin-bottom: 8px;
		    font-weight: bold;
		    transition: all 0.4s;
		    height: 20px;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    padding: 0 4px;
		}
		.major_item p {
		    color: #999999;
		    font-size: 12px;
		    margin-bottom: 10px;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    display: -webkit-box;
		    -webkit-line-clamp: 2;
		    padding: 0 4px;
		    height: 35px;
		}
		.major_item img {
		    width: 60px;
		    height: 60px;
		}
</style>
