<template>
	<router-link
		class="logo"
		to="/"
		@click="clickLogo"
	>
		<img src="@/assets/img/logo.svg" alt="" class="logo-img">
	</router-link>
</template>

<script>
export default {
	methods: {
		clickLogo() {
			window.scrollTo(0, 0);
		}
	}
}
</script>

<style lang="stylus">
.logo
	width max-content

	&-img
		cursor pointer
</style>