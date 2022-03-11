<template>
	<button class="uk-icon-button" :class="[buttonColor, buttonSize, { 'uk-border-rounded': roundBorder }]" :uk-toggle="modalTarget" :uk-icon="icon">
		<slot></slot>
	</button>
</template>
<script>
export default {
	name: 'icon-button',
	props: {
		color: {
			type: String,
			default: 'default',
		},
		roundBorder: Boolean,
		small: Boolean,
		large: Boolean,
		target: String,
		icon: String,
	},
	data() {
		return {
			buttonColor: 'uk-button-' + this.color,
			buttonSize: this.small ? 'uk-button-small' : this.large ? 'uk-button-large' : '',
			modalTarget: this.target ? 'target: #' + this.target : null,
		}
	},
}
</script>
<style></style>
