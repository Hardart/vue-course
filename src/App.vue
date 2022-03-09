<template>
	<div class="uk-section">
		<div class="uk-container">
			<form @submit.prevent>
				<div class="uk-margin">
					<input v-model="title" class="uk-input" type="text" placeholder="Заголовок сообщения" />
				</div>

				<div class="uk-margin">
					<label class="uk-form-label" for="form-stacked-text">Text</label>
					<input v-model="body" class="uk-input" id="form-stacked-text" type="text" placeholder="Текст сообщения" />
				</div>
				<div class="uk-margin uk-flex uk-flex-right">
					<button @click="createPost" class="uk-button uk-button-secondary">Добавить</button>
				</div>
			</form>
			<div v-for="card in cards" class="uk-card uk-card-secondary uk-card-small uk-margin">
				<div class="uk-card-header">
					<h3>{{ card.title }}</h3>
				</div>
				<div class="uk-card-body">
					<p>{{ card.body }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			cards: [
				{
					title: 'Имя 1',
					body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi laudantium consequatur. Illum laboriosam quas odit atque corrupti a expedita obcaecati earum! Officiis labore quos voluptatem totam non aspernatur illum!',
				},
				{
					title: 'Имя 2',
					body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi laudantium consequatur. Illum laboriosam quas odit atque corrupti a expedita obcaecati earum! Officiis labore quos voluptatem totam non aspernatur illum!',
				},
				{
					title: 'Имя 3',
					body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi laudantium consequatur. Illum laboriosam quas odit atque corrupti a expedita obcaecati earum! Officiis labore quos voluptatem totam non aspernatur illum!',
				},
			],

			title: '',
			body: '',
		}
	},
	methods: {
		createPost() {
			const newCard = {
				title: this.title,
				body: this.body,
			}
			this.cards.push(newCard)
			this.title = ''
			this.body = ''
		},
	},
}
</script>

<style></style>
