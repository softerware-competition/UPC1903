<template>
	<el-table :data="tableData" border style="width: 100%">
		<el-table-column prop="name" label="院校名称" width="180">
			 <el-link href="/upc" target="_blank" >中国石油大学（华东）</el-link>
		</el-table-column>
		<el-table-column prop="address" label="所在地" width="180">
		</el-table-column>
		<el-table-column prop="type" label="院校类型" width="180">
		</el-table-column>
		<el-table-column prop="class" label="学历层次" width="180">
		</el-table-column>
		<el-table-column prop="shuangyiliu" label="双一流" >
		</el-table-column>
	</el-table>
</template>

<script>
	export default {
		name: 'SchoolTable',
		data() {
			return {
				tableData: [{
					name: '王小虎',
					address: '上海市',
					type: '综合',
					class: '本科',
					shuangyiliu :'√'
				}, {
					name: '王小虎',
					address: '上海市',
					type: '综合',
					class: '本科',
					shuangyiliu :'√'
				}, {
					name: '王小虎',
					address: '上海市',
					type: '综合',
					class: '本科',
					shuangyiliu :' '
				}, 
				{
					name: '王小虎',
					address: '上海市',
					type: '综合',
					class: '本科',
					shuangyiliu :' '
				},
				{
					name: '王小虎',
					address: '上海市',
					type: '综合',
					class: '本科',
					shuangyiliu :' '
				},
				{
					name: '王小虎',
					address: '上海市',
					type: '综合',
					class: '本科',
					shuangyiliu :' '
				},
				{
					name: '王小虎',
					address: '上海市',
					type: '综合',
					class: '本科',
					shuangyiliu :' '
				},{
					name: '王小虎',
					address: '上海市',
					type: '综合',
					class: '本科',
					shuangyiliu :'√'
				}]
			}
		}
	}
</script>

<style>
</style>
