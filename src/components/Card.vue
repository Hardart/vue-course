<template>
	<div class="uk-card uk-card-secondary uk-card-small uk-border-rounded">
		<close-button @click="$emit('remove', card)"></close-button>
		<div v-if="card.label" class="uk-card-badge uk-label">{{ card.label }}</div>
		<div class="uk-card-header">
			<h3>{{ card.title }}</h3>
		</div>
		<div class="uk-card-body">
			<p>{{ card.body }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		card: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style scoped>
.uk-modal-close-default {
	opacity: 0;
}
.uk-card:hover .uk-modal-close-default {
	opacity: 1;
}
</style>
