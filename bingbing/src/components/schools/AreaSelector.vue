<template>
	<div class="block">
	  <span class="demonstration">院校所在地：</span>
	  <el-cascader
	    :options="options"
		:props="props"
		collapse-tags
		filterable
	    clearable></el-cascader>
	</div>
</template>

<script>
	export default {
		name:'AreaSelector',
	    data() {
		  return {
			props: { multiple: true },
			options: [{
			  value: 1,
			  label: '东南',
			  children: [{
				value: 2,
				label: '上海',
				children: [
				  { value: 3, label: '普陀' },
				  { value: 4, label: '黄埔' },
				  { value: 5, label: '徐汇' }
				]
			  }, {
				value: 7,
				label: '江苏',
				children: [
				  { value: 8, label: '南京' },
				  { value: 9, label: '苏州' },
				  { value: 10, label: '无锡' }
				]
			  }, {
				value: 12,
				label: '浙江',
				children: [
				  { value: 13, label: '杭州' },
				  { value: 14, label: '宁波' },
				  { value: 15, label: '嘉兴' }
				]
			  }]
			}, {
			  value: 17,
			  label: '西北',
			  children: [{
				value: 18,
				label: '陕西',
				children: [
				  { value: 19, label: '西安' },
				  { value: 20, label: '延安' }
				]
			  }, {
				value: 21,
				label: '新疆维吾尔族自治区',
				children: [
				  { value: 22, label: '乌鲁木齐' },
				  { value: 23, label: '克拉玛依' }
				]
			  }]
			}]
		  };
		},
	    methods: {
	      handleChange(value) {
	        console.log(value);
	      }
	    }
	  };
</script>

<style >
	.demonstration{
		margin-left: 25px !important;
	}
</style>
