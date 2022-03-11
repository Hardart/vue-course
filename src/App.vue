<template>
	<div class="uk-section">
		<div class="uk-container">
			<menu-test></menu-test>
			<uk-modal :show="modalVisible" :id="modalID">
				<new-card-form :modalID="modalID" @create="createPost" />
			</uk-modal>
			<uk-button class="uk-margin-bottom" color="secondary" roundBorder @click="modalTrigger">Добавить новость</uk-button>
			<card-list :cards="cards" @remove="deletePost" />
		</div>
	</div>
</template>

<script>
import MenuTest from '@/components/MenuTest.vue'
import NewCardForm from '@/components/NewCardForm.vue'
import CardList from '@/components/CardList.vue'

export default {
	components: {
		NewCardForm,
		CardList,
		MenuTest,
	},
	data() {
		return {
			modalID: 'add-news',
			modalVisible: false,
			cards: [
				{
					id: 1,
					title: 'Имя 1',
					body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi laudantium consequatur. Illum laboriosam quas odit atque corrupti a expedita obcaecati earum! Officiis labore quos voluptatem totam non aspernatur illum!',
					color: 'secondary',
				},
				{
					id: 2,
					title: 'Имя 2',
					body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi laudantium consequatur. Illum laboriosam quas odit atque corrupti a expedita obcaecati earum! Officiis labore quos voluptatem totam non aspernatur illum!',
					color: 'primary',
				},
				{
					id: 3,
					title: 'Имя 3',
					body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi laudantium consequatur. Illum laboriosam quas odit atque corrupti a expedita obcaecati earum! Officiis labore quos voluptatem totam non aspernatur illum!',
					color: 'default',
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
		modalTrigger() {
			this.modalVisible = true
			setTimeout(() => {
				UIkit.modal(`#${this.modalID}`, {
					escClose: false,
					container: false,
				}).show()
				UIkit.util.on(`#${this.modalID}`, 'hidden', () => {
					this.modalVisible = false
				})
			}, 0)
		},
	},
	async created() {
		// GET request using fetch with async/await
		const response = await fetch('http://localhost:3000/test')
		const data = await response.json()
	},
}
</script>

<style></style>
