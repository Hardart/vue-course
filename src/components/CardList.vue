<template>
	<div ref="grid" v-if="cards.length > 0" class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-small uk-margin-bottom" uk-grid>
		<transition-group name="list">
			<div v-for="card in cards" :key="card.id">
				<card :card="card" @remove="$emit('remove', card)" />
			</div>
		</transition-group>
		<div v-if="pending" class="uk-flex uk-flex-center uk-flex-middle uk-width-expand">
			<div uk-spinner></div>
		</div>
		<div v-intersection="this" class="observer uk-width-1-1"></div>
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
			pending: Boolean,
		},
	}
</script>

<style>
	.list-move, /* apply transition to moving elements */
	.list-enter-active,
	.list-leave-active {
		transition: all 0.5s ease;
	}

	.list-enter-from,
	.list-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}

	/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
	.list-leave-active {
		position: absolute;
	}

</style>
