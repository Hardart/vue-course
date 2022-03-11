<template>
	<div v-if="show" :id="id" uk-modal>
		<div class="uk-modal-dialog uk-modal-body uk-border-rounded">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'uk-modal',
	props: {
		id: {
			type: String,
			required: true,
		},
		show: {
			type: Boolean,
			default: true,
		},
	},
}
</script>
<style></style>
