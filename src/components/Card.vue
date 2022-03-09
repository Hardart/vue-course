<template>
	<div class="uk-card uk-card-hover uk-card-small uk-border-rounded">
		<close-button @click="$emit('remove', card)"></close-button>
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
		color: {
			type: String,
			default: 'default',
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
