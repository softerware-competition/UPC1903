<template>
	<div>
		<span class="demonstration">院校特色：&nbsp;&nbsp;&nbsp;</span>
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
		name: 'FeatureSelector',
	    data() {
	      return {
	        options: [{
	          value: '选项1',
	          label: '全部'
	        }, {
	          value: '选项2',
	          label: '985'
	        }, {
	          value: '选项3',
	          label: '211'
	        }, {
	          value: '选项4',
	          label: '双一流'
	        }, {
	          value: '选项5',
	          label: '教育部直属'
	        }],
	        value: ''
	      }
	    }
	  }
</script>

<style>
</style>
