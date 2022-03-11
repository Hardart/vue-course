<template>
	<input :value="modelValue" @input="updateInput" class="uk-input" type="text" />
</template>

<script>
export default {
	name: 'text-input',
	props: {
		modelValue: [String, Number],
	},
	methods: {
		updateInput(e) {
			this.$emit('update:modelValue', e.target.value)
		},
	},
}
</script>
