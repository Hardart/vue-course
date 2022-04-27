export default {
	mounted(el, binding) {
		
		const options = {
			threshold: 1,
		}
		const callback = (entries, observer) => {
			console.log(entries[0].rootBounds)
			if (entries[0].isIntersecting) {
				binding.value.$emit('more')
			}
		}
		const observer = new IntersectionObserver(callback, options)
		observer.observe(el)
	},
	name: 'intersection',
}
