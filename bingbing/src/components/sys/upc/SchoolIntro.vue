<template>
	<div>
		<div class="col-lg-9">
			<BasicInfo></BasicInfo>
			<CharacteristicSpecial></CharacteristicSpecial>
			<SchoolScenery></SchoolScenery>
		</div>
		
	</div>
</template>

<script>
	import BasicInfo from './BasicInfo.vue'
	import CharacteristicSpecial from './CharacteristicSpecial.vue'
	import SchoolScenery from './SchoolScenery.vue'
	
	export default {
		name: 'SchoolIntro',
		components:{
			BasicInfo,
			CharacteristicSpecial,
			SchoolScenery
		}
	}
</script>

<style scoped>
	
</style>
