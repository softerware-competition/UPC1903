<template>
	<div class="basic-info">
		<span>| 基本信息</span>
		<el-card class="information-box">
			<dl class="basicInfo-block basicInfo-left">
				<dt class="basicInfo-item name">中文名</dt>
				<dd class="basicInfo-item value">
					中国石油大学（华东）
				</dd>
				<dt class="basicInfo-item name">外文名</dt>
				<dd class="basicInfo-item value">
					China University of Petroleum (East China)
				</dd>
				<dt class="basicInfo-item name">简&nbsp;&nbsp;&nbsp;&nbsp;称</dt>
				<dd class="basicInfo-item value">
					中石大、石大（UPC）
				</dd>
				<dt class="basicInfo-item name">创办时间</dt>
				<dd class="basicInfo-item value">
					1953年
				</dd>
				<dt class="basicInfo-item name">办学性质</dt>
				<dd class="basicInfo-item value">
					公立大学
				</dd>
				<dt class="basicInfo-item name">学校类别</dt>
				<dd class="basicInfo-item value">
					理工
				</dd>
				<dt class="basicInfo-item name">学校特色</dt>
				<dd class="basicInfo-item value">
					世界一流学科建设高校（2017年）
					<br>全国重点大学（1960年）
					<br>211工程（1997年）
					<br>卓越工程师教育培养计划（2010年）
				</dd>
				<dt class="basicInfo-item name">主管部门</dt>
				<dd class="basicInfo-item value">
					中华人民共和国教育部
				</dd>
				<dt class="basicInfo-item name">现任领导</dt>
				<dd class="basicInfo-item value">
					党委书记：王勇、校长：郝芳<sup class="sup--normal" data-sup="4" data-ctrmap=":4,">
						[4]</sup><a class="sup-anchor" name="ref_[4]_239232">&nbsp;</a>
				</dd>
				<dt class="basicInfo-item name">本科专业</dt>
				<dd class="basicInfo-item value">
					70个
				</dd>
				<dt class="basicInfo-item name">硕士点</dt>
				<dd class="basicInfo-item value">
					学术学位授权一级学科33个
					<br>学术学位授权二级学科150个
					<br>专业学位授权类别5个
					<br>专业学位授权领域24个
				</dd>
			</dl>
			<dl class="basicInfo-block basicInfo-right">
				<dt class="basicInfo-item name">博士点</dt>
				<dd class="basicInfo-item value">
					学术学位授权一级学科14个<sup class="sup--normal" data-sup="1" data-ctrmap=":1,">
						[1]</sup><a class="sup-anchor" name="ref_[1]_239232">&nbsp;</a>
	
					<br>学术学位授权二级学科45个
				</dd>
				<dt class="basicInfo-item name">博士后</dt>
				<dd class="basicInfo-item value">
					科研流动站11个
				</dd>
				<dt class="basicInfo-item name">国家重点学科</dt>
				<dd class="basicInfo-item value">
					二级学科7个（含培育2个）
				</dd>
				<dt class="basicInfo-item name">院系设置</dt>
				<dd class="basicInfo-item value">
					石油工程学院、地球科学与技术学院、化学工程学院、机电工程学院、储运与建筑工程学院等19个学院（部）
				</dd>
				<dt class="basicInfo-item name">校&nbsp;&nbsp;&nbsp;&nbsp;训</dt>
				<dd class="basicInfo-item value">
					惟真惟实
				</dd>
				<dt class="basicInfo-item name">校&nbsp;&nbsp;&nbsp;&nbsp;歌</dt>
				<dd class="basicInfo-item value">
					《北京石油学院学生之歌》
				</dd>
				<dt class="basicInfo-item name">校庆日</dt>
				<dd class="basicInfo-item value">
					10月1日
				</dd>
				<dt class="basicInfo-item name">地&nbsp;&nbsp;&nbsp;&nbsp;址</dt>
				<dd class="basicInfo-item value">
					青岛校区：青岛市黄岛区长江西路66号（266580）
					<br>东营校区：山东省东营市东营区北一路739号（257061）
				</dd>
				<dt class="basicInfo-item name">院校代码</dt>
				<dd class="basicInfo-item value">
					10425
				</dd>
			</dl>
		</el-card>
	</div>
</template>

<script>
	export default{
		name: 'BasicInfo',
		
	}
</script>

<style scoped>
	span {
		font-size: 20px;
		font-weight: 500;
	}
	
	.basic-info {
		margin-top: 30px;
		margin: 20px 0 35px;
		*overflow: hidden;
		clear: both;
	}
	
	.basic-info .basicInfo-block {
		width: 395px;
		float: left;
	}
	
	.information-box {
		margin-top: 20px;
	}
	
	.basic-info .basicInfo-block .basicInfo-item {
		line-height: 26px;
		display: block;
		padding: 0;
		margin: 0;
		float: left;
	}
	
	.basic-info .basicInfo-block .basicInfo-item.name {
		width: 90px;
		padding: 0 5px 0 12px;
		font-weight: 700;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		word-wrap: normal;
		color: #67C23A;
	}
	
	.basic-info .basicInfo-block .basicInfo-item.value {
		zoom: 1;
		color: #333;
		width: 285px;
		float: left;
		position: relative;
		word-break: break-all;
	}
	
	dl {
		display: block;
		margin-block-start: 1em;
		margin-block-end: 1em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
	}
	
	dt {
		margin-top: 20px;
	}
	
	dd {
		display: block;
		margin-inline-start: 40px;
	}
</style>
