<template>
	<div v-if="!dataLoading" class="uk-flex uk-flex-center uk-flex-middle uk-width-expand uk-height-1-1 uk-position-absolute">
		<div uk-spinner></div>
	</div>
	<div v-else class="uk-section">
		<div class="uk-container">
			<menu-test class="uk-margin-bottom"></menu-test>
			<uk-modal :show="modalVisible" :id="modalID">
				<new-card-form :modalID="modalID" @create="createPost" />
			</uk-modal>
			<div class="uk-flex uk-flex-right uk-flex-middle">
				<h3 class="uk-width-expand">Список новостей</h3>
				<select-input :options="options" v-model="selectedOption" class="uk-margin-small-right"></select-input>
				<icon-button icon="plus" color="secondary" roundBorder @click="modalTrigger"></icon-button>
			</div>
			<card-list :cards="cards" @remove="deletePost" />
		</div>
	</div>
</template>

<script>
import MenuTest from '@/components/MenuTest.vue'
import NewCardForm from '@/components/NewCardForm.vue'
import CardList from '@/components/CardList.vue'
import SelectInput from './components/UI/SelectInput.vue'

export default {
	components: {
		NewCardForm,
		CardList,
		MenuTest,
		SelectInput,
	},
	data() {
		return {
			modalID: 'add-news',
			modalVisible: false,
			cards: [],
			selectedOption: '',
			options: [
				{ value: 'id', name: 'по id' },
				{ value: 'title', name: 'по названию' },
				{ value: 'body', name: 'по тексту' },
			],
			dataLoading: false,
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
		async loadPosts() {
			try {
				const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
				const data = await response.json()

				this.cards = data
			} catch (error) {
				console.log(error)
			} finally {
				this.dataLoading = true
			}
		},
	},
	mounted() {
		this.loadPosts()
	},
	watch: {
		selectedOption(value) {
			this.cards.sort((a, b) => {
				return a[value] > b[value] ? 1 : -1
			})
		},
	},
}
</script>

<style></style>
