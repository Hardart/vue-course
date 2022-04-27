<template>
	<ul class="uk-pagination uk-flex-center" uk-margin>
		<li @click="$emit('changePage', page)" v-for="page in pageCount" :key="page" :class="{ 'uk-active': curPage == page }">
			<span>{{ page }}</span>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'uk-pagination',

	props: {
		pageCount: {
			type: Number,
			default: 1,
		},
		curPage: {
			type: Number,
			default: 1,
		},
	},
}
</script>

<style>
.uk-pagination li:not(.uk-active) {
	cursor: pointer;
}

.uk-active {
	font-weight: 600;
}
</style>
