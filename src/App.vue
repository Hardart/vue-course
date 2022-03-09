<template>
	<div class="uk-section">
		<div class="uk-container">
			<new-card-form @create="createPost" />
			<card-list :cards="cards" @remove="deletePost" />
		</div>
	</div>
</template>

<script>
import NewCardForm from '@/components/NewCardForm.vue'
import CardList from '@/components/CardList.vue'
export default {
	components: {
		NewCardForm,
		CardList,
	},
	data() {
		return {
			cards: [
				{
					id: 1,
					title: 'Имя 1',
					body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi laudantium consequatur. Illum laboriosam quas odit atque corrupti a expedita obcaecati earum! Officiis labore quos voluptatem totam non aspernatur illum!',
				},
				{
					id: 2,
					title: 'Имя 2',
					body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi laudantium consequatur. Illum laboriosam quas odit atque corrupti a expedita obcaecati earum! Officiis labore quos voluptatem totam non aspernatur illum!',
				},
				{
					id: 3,
					title: 'Имя 3',
					body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi laudantium consequatur. Illum laboriosam quas odit atque corrupti a expedita obcaecati earum! Officiis labore quos voluptatem totam non aspernatur illum!',
				},
			],
		}
	},
	methods: {
		createPost(card) {
			this.cards.push(card)
		},
		deletePost(card) {
			this.cards = this.cards.filter((c) => c.id !== card.id)
		},
	},
}
</script>

<style></style>
