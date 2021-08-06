<template>
	<div>
		<span class="demonstration">院校类型：</span>
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
		name: 'ClassSelector',
	    data() {
	      return {
	        options: [{
	          value: '选项1',
	          label: '全部'
	        }, {
	          value: '选项2',
	          label: '理工'
	        }, {
	          value: '选项3',
	          label: '文学'
	        }, {
	          value: '选项4',
	          label: '管理'
	        }, {
	          value: '选项5',
	          label: '经济'
	        }],
	        value: ''
	      }
	    }
	  }
</script>

<style>
</style>
