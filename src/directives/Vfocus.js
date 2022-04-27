export default {
	mounted(el) {
		setTimeout(() => {
			el.focus()
		}, 100)
	},
	name: 'focus',
}
