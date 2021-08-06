<template>
	<div class="container">
		<div class="firsthead clearfix">
			<div class="search" style="padding: 100px 100px 10px;">
				<form class="bs-example bs-example-form" role="form">
					<div class="row">
						<div class="col-lg-3">

						</div>
						<div class="col-lg-7">
							<div class="input-group">
								<input type="text" class="form-control" placeholder="查大学,查专业,查咨询">
								<span class="input-group-btn">
									<button class="btn btn-default" type="button">
										<font color="#FFFFFF">搜索</font>
									</button>
								</span>
							</div><!-- /input-group -->
						</div>
						<div class="col-lg-2">
							<div class="col-md-6">
								<a href="#">青岛市</a>
							</div>
							<div class="col-md-6">
								<div class="row">[切换城市]</div>
							</div>
						</div>
					</div><!-- /.row -->
				</form>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'PageTop',
	}
</script>

<style scoped>
	.input-group-btn .btn {
		background-color: #1eb450;

	}

	.search {
		margin-top: -10px;
	}

	.navigation_bar {
		margin-top: 20px;
	}


	.navigation_bar ul.nav>li>a {
		color: #000000;
		font-size: 17px;
		font-weight: 560;
	}
</style>
