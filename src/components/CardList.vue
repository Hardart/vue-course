<template>
	<div v-if="cards.length > 0" uk-margin>
		<h3>Список новостей</h3>
		<card v-for="card in cards" :card="card" :key="card.id" @remove="$emit('remove', card)" />
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
