<template>
	<div>
		<Alice @back="back" />
		<Bob @back="back" />
		<hr />
		<p>info: {{ this.info }}</p>
	</div>
</template>

<script>
import Alice from './components/Alice.vue';
import Bob from './components/Bob.vue';

export default {
	data() {
		return {
			info: "",
		}
	},
	components: {
		Alice,
		Bob,
	},
	methods: {
		back(a, b, c) {
			// console.log(a, b, c);
			this.info = this.info + c + '\n';
		},
	}
}
</script>

<style>
</style>