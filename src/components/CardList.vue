<template>
	<div v-if="cards.length > 0" class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-small" uk-grid>
		<div v-for="card in cards" :key="card.id">
			<card :card="card" @remove="$emit('remove', card)" />
		</div>
	</div>
	<div v-else>
		<h3>Список новостей пуст</h3>
	</div>
</template>

<script>
import Card from './Card.vue'

export default {
	components: { Card },
	props: {
		cards: {
			type: Array,
			required: true,
		},
	},
}
</script>
