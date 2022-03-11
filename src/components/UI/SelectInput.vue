<template>
	<select :value="modelValue" @change="updateInput" class="uk-select uk-width-auto">
		<option value="" disabled>Выберите из списка</option>
		<option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
	</select>
</template>

<script>
export default {
	name: 'select-input',
	props: {
		modelValue: String,
		options: Array,
	},
	methods: {
		updateInput(e) {
			this.$emit('update:modelValue', e.target.value)
		},
	},
}
</script>

<style></style>
