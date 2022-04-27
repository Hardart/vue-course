<template>
	<div class="uk-card uk-card-primary uk-card-hover uk-border-rounded">
		<div class="uk-card-header">
			<h1>{{ post.title }}</h1>
		</div>
		<div class="uk-card-body">
			<p>{{ post.body }}</p>
			<a @click="$router.push(`/news`)">Назад</a>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
	computed: {
		...mapGetters('posts', { postPoxy: 'one' }),
		post() {
			return this.postPoxy(+this.$route.params.id)
		},
		hasPost() {
			return typeof this.post !== undefined
		},
	},
}
</script>

<style></style>
