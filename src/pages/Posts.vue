<template>
	<!-- <div v-if="!dataLoading" class="uk-flex uk-flex-center uk-flex-middle uk-width-expand uk-height-1-1 uk-position-absolute">
		<div uk-spinner></div>
	</div> -->

	<uk-modal :show="modalVisible" :id="modalID">
		<new-card-form :modalID="modalID" @create="createPost" />
	</uk-modal>
	<h1>Последние новости</h1>
	<div class="uk-flex uk-flex-right uk-flex-middle uk-margin-bottom">
		<h3 class="uk-width-expand uk-margin-remove">Список новостей</h3>
		<text-input v-model="searchQuery" class="uk-margin-small-right uk-width-auto" placeholder="Поиск..."></text-input>
		<icon-button class="uk-margin-small-right" icon="arrow-down" roundBorder @click="sortAsc"></icon-button>
		<icon-button class="uk-margin-small-right" icon="arrow-up" roundBorder @click="sortDesc"></icon-button>
		<select-input class="uk-margin-small-right" :options="options" v-model="selectedOption"></select-input>
		<icon-button icon="plus" color="secondary" roundBorder @click="modalTrigger"></icon-button>
	</div>
	<card-list :cards="searchInSortCards" @remove="deletePost" @more="loadMorePosts" :pending="isLoad"/>
	<!-- <uk-pagination :pageCount="totalPages" :curPage="currentPage" @changePage="setActivePage"></uk-pagination> -->
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
			modalID: 'add-news',
			modalVisible: false,
			cards: [],
			selectedOption: '',
			searchQuery: '',
			options: [
				{ value: 'id', name: 'по id' },
				{ value: 'title', name: 'по названию' },
				{ value: 'body', name: 'по тексту' },
			],
			orderBy: 1,
			pages: {
				currentPage: 1,
				limitCardsOnPage: 10,
				totalPages: 1,
			},

			dataLoading: false,
			isLoad: false,
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
					// escClose: false,
					// container: false,
				}).show()
				UIkit.util.on(`#${this.modalID}`, 'hidden', () => {
					this.modalVisible = false
				})
			}, 0)
		},
		async loadPosts() {
			try {
				const params = {
					_limit: this.pages.limitCardsOnPage,
					_page: this.pages.currentPage,
				}
				const response = await fetch('https://jsonplaceholder.typicode.com/posts?' + new URLSearchParams(params))

				const data = await response.json()
				this.cards = data
				this.pages.totalPages = Math.floor(response.headers.get('x-total-count') / this.pages.limitCardsOnPage)
			} catch (error) {
				console.log(error)
			} finally {
				this.dataLoading = true
			}
		},
		async loadMorePosts() {
			try {
				this.pages.currentPage += 1
				const params = {
					_limit: this.pages.limitCardsOnPage,
					_page: this.pages.currentPage,
				}
				this.isLoad = true
				const response = await fetch('https://jsonplaceholder.typicode.com/posts?' + new URLSearchParams(params))
				const data = await response.json()
				this.pages.totalPages = Math.floor(response.headers.get('x-total-count') / this.pages.limitCardsOnPage)
				this.cards = [...this.cards, ...data]
			} catch (error) {
				console.log(error)
			} finally {
				this.isLoad = false
			}
		},
		sortAsc() {
			this.orderBy = 1
		},
		sortDesc() {
			this.orderBy = -1
		},
		setActivePage(page) {
			this.pages.currentPage = page
		},
	},
	mounted() {
		this.loadPosts()
		
	},
	computed: {
		sortCards() {
			const value = this.selectedOption ? this.selectedOption : 'id'
			return [...this.cards].sort((a, b) => (a[value] > b[value] ? this.orderBy : -this.orderBy))
		},
		searchInSortCards() {
			return this.sortCards.filter((card) => card.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
		},
	},
}
</script>

<style></style>
