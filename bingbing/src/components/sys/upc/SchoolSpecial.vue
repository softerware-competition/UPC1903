<template>
	<div class="School-special">
		<span>| 开设专业</span>
		<div class="col-lg-9">
			<el-card class="characteristic-special-box">
				<h5>国家特色专业</h5>
				<el-link :underline="false">勘查技术与工程</el-link>
				<el-link :underline="false">机械设计制造及其自动化</el-link>
				<el-link :underline="false">化学工程与工艺</el-link>
				<el-link :underline="false">过程装备与控制工程</el-link>
				<el-link :underline="false">应用化学</el-link>
				<el-link :underline="false">应用物理学</el-link>
				<el-link :underline="false">自动化环保设备工程</el-link>
				<el-link :underline="false">油气储运工程</el-link>
				<el-link :underline="false">资源勘查工程</el-link>
				<el-link :underline="false">安全工程</el-link>
				<el-link :underline="false">石油工程</el-link>
				<el-table :data="tableData" border style="width: 100%">
					<el-table-column prop="class" label="院系" width="300">
					</el-table-column>
					<el-table-column prop="special" label="专业" width="600">
					</el-table-column>
				</el-table>
			</el-card>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'SchoolSpecial',
		data() {
			return {
				tableData: [{
					class: '计算机学院',
					special: '计算机科学与技术 软件工程'
				}, {
					class: '计算机学院',
					special: '计算机科学与技术 软件工程'
				}, {
					class: '计算机学院',
					special: '计算机科学与技术 软件工程'
				}, {
					class: '计算机学院',
					special: '计算机科学与技术 软件工程'
				}, {
					class: '计算机学院',
					special: '计算机科学与技术 软件工程'
				}, {
					class: '计算机学院',
					special: '计算机科学与技术 软件工程'
				}, {
					class: '计算机学院',
					special: '计算机科学与技术 软件工程'
				}, {
					class: '计算机学院',
					special: '计算机科学与技术 软件工程'
				}, {
					class: '计算机学院',
					special: '计算机科学与技术 软件工程'
				}, {
					class: '计算机学院',
					special: '计算机科学与技术 软件工程'
				}, {
					class: '计算机学院',
					special: '计算机科学与技术 软件工程'
				}]
			}
		}
	}
</script>

<style scoped>
	span {
		font-size: 20px;
		font-weight: 500;
	}
	
	.characteristic-special {
		margin-top: 40px;
	}
	
	.characteristic-special-box {
		margin-top: 20px;
	}
	
	h5 {
		color: #67C23A;
		margin-left: 15px;
	}
	
	.el-link {
		margin-top: 20px;
		margin-left: 15px;
	}
	.el-table{
		margin-left: 15px;
		margin-right: 15px;
		margin-top: 20px;
	}
</style>
