<template>
	<form @submit.prevent>
		<div class="uk-margin">
			<label class="uk-form-label" for="form-stacked-title">Title</label>
			<text-input v-model="card.title" id="form-stacked-title" placeholder="Заголовок" />
		</div>

		<div class="uk-margin">
			<label class="uk-form-label" for="form-stacked-text">Text</label>
			<text-input v-model="card.body" id="form-stacked-text" placeholder="Текст сообщения" />
		</div>
		<div class="uk-margin uk-flex uk-flex-right">
			<secondary-button @click="createPost">Добавить</secondary-button>
		</div>
	</form>
</template>

<script>
export default {
	data() {
		return {
			card: {
				title: '',
				body: '',
			},
		}
	},
	methods: {
		createPost() {
			this.card.id = Date.now()
			this.$emit('create', this.card)
			this.card = {
				title: '',
				body: '',
			}
		},
	},
}
</script>
<style></style>
