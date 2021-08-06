<template>
	<div class="container">
		<div class="special-introduction">
			<span>| 专业详解</span>
			<el-card class="special-introduction-box">
				<h4>什么是软件工程？</h4>
				<p>完整的计算机系统由两部分组成，即计算机的硬件系统和软件系统。而计算机软件是指计算机系统中除硬件以外的所有事物，一般包括计算机程序、程序说明以及其他资料等。
软件工程专业是2002年国家教育部新增专业，随着计算机应用领域的拓展及中国经济建设的不断发展，软件工程专业已成为一个热门专业。
软件工程是采用工程的概念、原理、技术和方法来开发、维护软件，把管理技术与开发技术有效地结合起来，以计算机科学与技术学科为基础，强调软件开发的工程性，培养能够从事软件开发、测试、维护和软件项目管理的高级专门人才的一门学科。
如果把计算机软件比作积木，那么软件工程则相当于玩积木的高手。<br />
				</p>
				
				
				<div>
					<el-link @click="show3 = !show3">展开全部</el-link>
				
					<div style="margin-top: 20px; height: 100%;">
						<el-collapse-transition>
							<div v-show="show3">
								<div class="transition-box">
									<h4>软件工程学什么？</h4>
									<p>
										以浙江大学为例，软件工程专业的核心课程有：离散数学及其应用、数据结构基础、高级数据结构与算法分析、面向对象程序设计、计算机系统原理、数据库系统原理、操作系统原理、操作系统分析与实验、软件工程基础、计算机网络基础项目管理与案例分析、软件需求分析与设计、软件体系结构、人机交互工程。
										除此之外，浙大软件工程专业还结合学院的科研和应用特色，开设了软件开发技术、金融信息技术、信息安全技术三个应用领域方向课程。各校软件工程专业根据培养体系、专业侧重等不同情况，课程设置也有所差异，考生可具体查看各校详细专业和课程设置情况。
									</p>
									<h4>计算机科学与技术专业与软件工程专业的区别</h4>
									<p>这两个专业都需要掌握计算机科学的基础知识及编程的基本功，但是这两个专业的关注点有很大不同。计算机专业学习技术，是为了改进技术，提高技术，研究出更好的理论。扎实地知道计算机底层是怎么工作的，才能研究出更好的计算机；而软件工程专业学习技术，是为了知道在什么情况下应该用什么样的技术可以最好地解决问题，更关注开发大型软件系统的组织方法和流程。

用建筑行业打比方：计算机专业研究物理、力学理论，研究新型材料；而软件工程专业则听取客户的盖房要求，选择合适的材料和技术，组织成百上千的工人把房子盖起来。两者工作的难度和重心是不同的。从同学们熟知的偶像角度打个比方，计算机专业仰慕图灵，而软件工程专业则仰慕盖茨和乔布斯。</p>
									<h4>社会上对这个专业的认识误区</h4>
									<p>有些人认为，学计算机相关的专业是青春饭，到了30多岁后就没有发展前途了，总不能一辈子就当个程序员吧？这是一个很大的认识误区。实际上，软件工程专业更关注开发大型软件系统的组织方法和流程，培养学生掌握大型软件开发和管理的能力，随着经验和能力的增长，他们更能胜任越来越大的项目的组织和管理，成为千百程序员的管理者。
还有人认为，现在懂编程的人太多了，凡是理工专业都学过编程，抓来就能用。但是，软件工程专业所掌握的大型软件开发的组织、设计和管理技术，不是普通的编程技术可以比拟的。打个比方说，普通的工人稍微训练一下，让他盖个猪圈、砌堵墙没问题，但是让他去造一个摩天大楼就不行了。而软件工程培养的是有能力设计和制造摩天大楼的人才。</p>
								</div>
							</div>
						</el-collapse-transition>
					</div>
				</div>
			</el-card>
		</div>
		
		<div class="row">
			<div class="col-lg-5">
				<div class="male-female-ratio">
					<span>| 男女比例</span>
					<el-card class="male-female-box">
					  <div class="row">
					  	<div class="col-lg-2">
					  		<img src="../../../assets/male.png" style="width: 35px; float: right;"/> 
					  	</div>
					  	<div class="col-lg-8">
					  		<el-progress
					  		:text-inside="true" 
					  		:stroke-width="24" 
					  		:percentage="70" 
					  		status="success"
					  		style="width: 100%; margin-top: 10px;"
					  		></el-progress>
					  	</div>
					  	<div class="col-lg-2"><img src="../../../assets/female.png" style="width: 35px;"/></div>
					  </div>
					</el-card>
				</div>
			</div>
			<div class="col-lg-1"></div>
			<div class="col-lg-5">
				<div class="unity-coherence-ratio">
					<span>| 文理比例</span>
					<el-card class="unity-coherence-box">
					  <div class="row">
					  	<div class="col-lg-2" style="font-size: 20px; font-weight: 500;">
					  		文
					  	</div>
					  	<div class="col-lg-8">
					  		<el-progress
					  		:text-inside="true" 
					  		:stroke-width="24" 
					  		:percentage="70" 
							status="exception"
					  		style="width: 100%; margin-top: 10px;"
					  		></el-progress>
					  	</div>
					  	<div class="col-lg-2"  style="font-size: 20px; font-weight: 500;">理</div>
					  </div>
					</el-card>
				</div>
			</div>
		</div>
		
		<div class="employment-rate">
			<span>| 就业率（近三年）</span>
			<div class="col-lg-9">
				<el-card class="employment-box">
					<el-steps :active="3" align-center>
					  <el-step title="2019" description="90%-95%"></el-step>
					  <el-step title="2020" description="90%-95%"></el-step>
					  <el-step title="2021" description="90%-95%"></el-step>
					</el-steps>
				</el-card>
			</div>
		</div>
		
		<div class="elective-suggestion">
			<span>| 选考学科建议 ：</span>
			<span>不限/物理/化学/生物</span>
		</div>
		
		<div class="similar-special">
			<span>| 相近专业</span><br />
			<div class="special-link">
				<el-link :underline="false">计算机科学技术</el-link>
				<el-link :underline="false">物联网工程</el-link>
				<el-link :underline="false">人工智能</el-link>
				<el-link :underline="false">计算机应用技术</el-link>
				
			</div>
		</div>
		
		<div class="graduate-direction">
			<span>| 考研方向</span><br />
			<div class="special-link">
				<el-link :underline="false">计算机科学技术</el-link>
				<el-link :underline="false">物联网工程</el-link>
				<el-link :underline="false">人工智能</el-link>
				<el-link :underline="false">计算机应用技术</el-link>
				
			</div>
		</div>
		
	</div>
</template>

<script>
	
	export default{
		name: 'SpecialIntro',
		data: () => ({
			show3: false
		}),
		mounted() {
			layui.use('element', function() {
				var element = layui.element;
			
				//…
			});
		}
	}
</script>

<style scoped>
	p {
		text-indent: 2em;
	}
	span{
		font-size: 20px;
		font-weight: 500;
	}
	.special-introduction{
		margin-top: 20px;
	}
	.special-introduction-box{
		margin-top: 20px;
	}

	.special-introduction .el-link{
		color: #009688;
	}
	
	.male-female-ratio{
		margin-top: 30px;
	}
	
	.male-female-box{
		margin-top: 20px;
		width: auto;
	}
	.unity-coherence-ratio{
		margin-top: 30px;
	}
	
	.unity-coherence-box{
		margin-top: 20px;
		width: auto;
	}
	
	.employment-rate{
		margin-top: 40px;
	}
	
	.employment-box{
		margin-top: 20px;
		width: auto;
	}
	
	.elective-suggestion{
		margin-top: 40px;
	}
	.similar-special{
		margin-top: 40px;
	}
	.special-link .el-link{
		margin-top: 20px;
		margin-left: 15px;
	}
	.graduate-direction{
		margin-top: 40px;
	}
</style>
