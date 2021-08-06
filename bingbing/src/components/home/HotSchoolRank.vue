<template>
	<div>
		<div class="school-hot">
			<div class="hot-title">
				<p class="hot-title-p">热度排行</p>
			</div>
			<div class="hot_school_content">
				<HotSchool></HotSchool>
				<HotSchool></HotSchool>
				<HotSchool></HotSchool>
				<HotSchool></HotSchool>
				<HotSchool></HotSchool>
				<HotSchool></HotSchool>
				<HotSchool></HotSchool>
				<HotSchool></HotSchool>
				<HotSchool></HotSchool>
				<HotSchool></HotSchool>
				<HotSchool></HotSchool>
				<HotSchool></HotSchool>
				
			</div>
		</div>
		
		
		<div class="check_more cursor am_l hover_style">查看更多</div>
	</div>
</template>

<script>
	import HotSchool from './HotSchool.vue'
	export default{
		name: 'HotSchoolRank',
		mounted() {
			layui.use('element', function() {
				var element = layui.element
			})
		},
		components:{
			HotSchool
		}
	}
</script>

<style scoped>
	.school-hot {
	    width: 350px;
	    float: right;
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
	
	.school-hot .hot_school_content .academy_item_box {
	    margin-bottom: 27px;
	    height: 18px;
	    line-height: 18px;
	}
	
	
	.school-hot .hot_school_content .academy_item_box .academy_item_title {
	    float: left;
	}
	
	.school-hot .hot_school_content .academy_item_box .academy_item_title .academy_num {
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
	.school-hot .hot_school_content .academy_item_box .academy_item_title .ellipsis {
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
