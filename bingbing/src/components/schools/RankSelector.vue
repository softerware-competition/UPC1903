<template>
	<div>
		<span class="demonstration">办学类型：</span>
		<el-select v-model="value"  placeholder="请选择">
		    <el-option
		      v-for="item in options"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value"
			  >
		    </el-option>
		</el-select>
	</div>
	
</template>

<script>
	export default {
		name: 'RankSelector',
	    data() {
	      return {
	        options: [{
	          value: '选项1',
	          label: '全部'
	        }, {
	          value: '选项2',
	          label: '本科'
	        }, {
	          value: '选项3',
	          label: '专科'
	        }, {
	          value: '选项4',
	          label: '中外合作办学'
	        }, {
	          value: '选项5',
	          label: '民办'
	        }],
	        value: ''
	      }
	    }
	  }
</script>

<style>
</style>
