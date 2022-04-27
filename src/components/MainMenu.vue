<template>
	<nav class="uk-navbar-container uk-border-rounded" uk-navbar>
		<div class="uk-navbar-left">
			<ul class="uk-navbar-nav">
				<li class="uk-active" @click="$router.push('/')">Главная</li>
				<li @click="$router.push('/news')">Новости</li>
				<!-- <li>
					<a href="#">Parent</a>
					<div class="uk-navbar-dropdown">
						<ul class="uk-nav uk-navbar-dropdown-nav">
							<li class="uk-active"><a href="#">Active</a></li>
							<li><a href="#">Item</a></li>
							<li><a href="#">Item</a></li>
						</ul>
					</div>
				</li> -->
			</ul>
		</div>
	</nav>
</template>

<script>
export default {}
</script>

<style>
.uk-navbar-nav li {
	padding: 20px 10px;
}
.uk-navbar-nav li:hover:not(.uk-active) {
	background: #e9e5e5;
}
.uk-navbar-nav li:not(.uk-active) {
	cursor: pointer;
}
</style>
