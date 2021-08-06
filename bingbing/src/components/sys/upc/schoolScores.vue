<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-9">
				<h4>历年录取分数线</h4>
				<el-table :data="tableData1" border style="width: 100%">
					<el-table-column prop="date" label="年份" width="180">
					</el-table-column>
					<el-table-column prop="pici" label="录取批次" width="180">
					</el-table-column>
					<el-table-column prop="type" label="招生类型">
					</el-table-column>
					<el-table-column prop="lowest" label="最低分/最低位次">
					</el-table-column>
					<el-table-column prop="line" label="省控线">
					</el-table-column>
				</el-table>

				<h4 style="margin-top: 50px;">专业分数线</h4>
				<el-table :data="tableData2" border style="width: 100%">
					<el-table-column prop="name" label="专业名称" width="180">
					</el-table-column>
					<el-table-column prop="pici" label="录取批次" width="180">
					</el-table-column>
					<el-table-column prop="type" label="招生类型">
					</el-table-column>
					<el-table-column prop="lowest" label="最低分/最低位次">
					</el-table-column>
					<el-table-column prop="request" label="选科要求">
					</el-table-column>
				</el-table>
			</div>
			<div class="col-lg-3 d-none d-xl-block"></div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'SchoolScores',
		 data() {
			  return {
				tableData1: [{
				  date: '2016',
				  pici: '普通类一段',
				  type: '普通',
				  lowest: '599/27668',
				  line: '499'
				}, {
				  date: '2016',
				  pici: '普通类一段',
				  type: '普通',
				  lowest: '599/27668',
				  line: '499'
				}, {
				  date: '2016',
				  pici: '普通类一段',
				  type: '普通',
				  lowest: '599/27668',
				  line: '499'
				},{
				  date: '2016',
				  pici: '普通类一段',
				  type: '普通',
				  lowest: '599/27668',
				  line: '499'
				}],
				tableData2: [{
				  name: '计算机科学与技术',
				  pici: '普通类一段',
				  type: '普通',
				  lowest: '617/16387',
				  request: '物理必选'
				}, {
				  name: '计算机科学与技术',
				  pici: '普通类一段',
				  type: '普通',
				  lowest: '617/16387',
				  request: '物理必选'
				}, {
				  name: '计算机科学与技术',
				  pici: '普通类一段',
				  type: '普通',
				  lowest: '617/16387',
				  request: '物理必选'
				},{
				  name: '计算机科学与技术',
				  pici: '普通类一段',
				  type: '普通',
				  lowest: '617/16387',
				  request: '物理必选'
				}]
			  }
			}
	}
</script>

<style>
</style>
