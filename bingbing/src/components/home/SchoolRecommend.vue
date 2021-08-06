<template>
	<div class="school_item col-lg-3 col-md-6 col-sm-12" title="山东中医药大学"
			data-growing-title="首页-A4-二屏推荐院校小图-山东中医药大学" data-growing-container="">
			<a href="/upc" target="_blank">
				<img src="https://static-data.eol.cn/upload/logo/1142.jpg" alt="">
				<div class="school_msg">
					<h3>山东中医药大学</h3>
					<div class="clearfix check_btn">
						<span class="school_class">医药类</span>
						<span>
							学校排名：
							<i></i>
						</span>
					</div>
				</div>
			</a>
		</div>
</template>

<script>
	export default{
		name: 'SchoolRecommend',
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
	.popular-school .school_item {
		cursor: pointer;
		float: left;
		width: 290px;
		height: 110px;
		overflow: hidden;
		margin-right: 1.4%;
		margin-bottom: 10px;
		position: relative;
		transition: all .2s linear;
		top: 0;
		box-shadow: 0px 0px 15px #e6e6e6;
	}
	.popular-school .school_item img{
		width: 65px;
		height: 65px;
		position: absolute;
		left: 15px;
		top: 50%;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
	}
	
	.popular-school .school_item .school_msg h3 {
	    color: #000000;
	    font-size: 16px;
	    margin-top: 23px;
		margin-left: 120px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    transition: all 0.4s;
	    font-weight: bold;
	}
	
	.popular-school .school_item .school_msg .check_btn .school_class {
	    display: inline-block;
		margin-left: 120px;
		margin-top: 30px;
	    padding: 0px 6px;
	    border: 1px solid #EEEEEE;
	}
	
	.popular-school .school_item .school_msg .check_btn span+span {
		margin-top: 30px;
		margin-right: 26px;
	    float: right;
	    display: -ms-flexbox;
	    display: flex;
	    -ms-flex-pack: center;
	    justify-content: center;
	    -ms-flex-align: center;
	    align-items: center;
	}
	.first-school{
		background-color: #1eb450;
		height: 100%;
		margin-left: 0px;
		margin-top: -30px;
		
		float: left;
		padding: 0 2px 2px 0;
		position: relative;
		overflow: hidden;
	}
	
	
	
	
</style>
