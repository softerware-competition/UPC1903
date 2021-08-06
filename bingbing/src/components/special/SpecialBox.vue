<template>
	<div class="son_list">
		<el-link href="/SE" :underline="false" target="_blank">汉语言文学</el-link>
		
		<div class="son_tags">
			<span>专业代码：050101</span>
			<span>修业年限：四年</span>
			<span>授予学位：文学学士</span>
			<span>男女比例：16:84</span>
		</div>
		<div class="set_school">开设院校</div>
	</div>
</template>

<script>
	export default{
		name:'SpecialBox'
	}
</script>

<style>
	.son_list {
	    padding: 15px 0;
	    border-bottom: 1px dashed #EEEEEE;
	    position: relative;
	}
	.son_list .el-link{
		font-size: 16px;
		color: #000000;
		margin-bottom: 10px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.4s;
	}
	 .son_title {
	    font-size: 16px;
	    color: #000000;
	    margin-bottom: 10px;
	    font-weight: 600;
	    cursor: pointer;
	    transition: all 0.4s;
	}
	 .son_tags {
	    cursor: pointer;
	}
	 .son_list .son_tags span {
	    font-size: 14px;
	    color: #555555;
	    display: inline-block;
	    padding-right: 13px;
	    position: relative;
	    margin-right: 13px;
	    border-right: 1px solid #555555;
	    line-height: 15px;
	}
	
	.son_list .set_school {
	    width: 74px;
	    height: 32px;
	    background: #5FB878;
	    border-radius: 4px;
	    text-align: center;
	    line-height: 32px;
	    font-size: 14px;
	    color: #FFFFFF;
	    position: absolute;
	    right: 0;
	    top: 50%;
	    -ms-transform: translateY(-50%);
	    transform: translateY(-50%);
	    cursor: pointer;
	    display: -ms-flexbox;
	    display: flex;
	    -ms-flex-pack: center;
	    justify-content: center;
	    -ms-flex-align: center;
	    align-items: center;
	}
</style>
