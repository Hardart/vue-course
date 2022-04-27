<template>
	<div class="uk-section">
		<div class="uk-container">
			<!-- <menu-test class="uk-margin-bottom"></menu-test> -->
			<main-menu></main-menu>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import MenuTest from '@/components/MenuTest.vue'
import NewCardForm from '@/components/NewCardForm.vue'
import CardList from '@/components/CardList.vue'
import SelectInput from './components/UI/SelectInput.vue'
import MainMenu from './components/MainMenu.vue'

export default {
	components: {
		NewCardForm,
		CardList,
		MenuTest,
		SelectInput,
MainMenu,
	},
	
}
</script>

<style></style>
