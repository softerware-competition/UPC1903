<template>
	<div>
		<p>中国石油大学（华东）是教育部直属全国重点大学，国家首批世界一流学科建设高校，国家“211工程”和“985工程优势学科创新平台”重点建设高校，高水平行业特色大学优质资源共享联盟成员，入选国家“111计划”、卓越工程师教育培养计划、国家建设高水平大学公派研究生项目、国家大学生创新性实验计划、国家级大学生创新创业训练计划、新工科研究与实践项目、全国毕业生就业典型经验高校、全国深化创新创业教育改革示范高校，是教育部和五大能源企业集团公司、教育部和山东省人民政府共建的高校，是石油、石化高层次人才培养的重要基地，被誉为“石油科技人才的摇篮”，已成为一所以工为主、石油石化特色鲜明、多学科协调发展的大学。设有研究生院和国家大学科技园。<br />
		</p>
		<p>学校始建于1953年，1960年被确定为全国重点高校，1988年更名为石油大学，逐步形成山东、北京两地办学的格局，1997年正式进入国家“211工程”首批重点建设的高校行列；2005年1月，学校更名为中国石油大学。<br />
		</p>
		
		<div>
			<el-link @click="show3 = !show3">展开全部</el-link>
		
			<div style="margin-top: 20px; height: 100%;">
				<el-collapse-transition>
					<div v-show="show3">
						<div class="transition-box">
							<p>
								截至2021年3月，学校有青岛、东营两个校区，校园总面积5024亩，建筑面积140万平方米，图书馆藏书315万册；下设16个学院（部）；有11个博士后科研流动站，14个博士学位授权一级学科，3个博士学位授权自主设置二级学科，2种博士专业学位授权类别，32个硕士学位授权一级学科，1个硕士学位授权二级学科，15种硕士专业学位授权类别，70个本科专业
								[1] ；有教师1700余人，全日制在校本科生近19000人、研究生近9500人，留学生1000余人。
							</p>
						</div>
					</div>
				</el-collapse-transition>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name: 'FirstPage',
		data: () => ({
			show3: false
		}),
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		}
	}
</script>

<style scoped>
	.el-link {
	
		font-size: 17px;
	}
	
	.onepage .layui-card {
		background: -webkit-linear-gradient(bottom, white, #90EE90, #67C23A) no-repeat;
	}
	
	.onepage p {
		text-indent: 2em;

	}
	
	.el-tabs__item {
		font-size: 26px !important;
	
	}
</style>
