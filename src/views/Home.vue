<template>
	<div class="home">
		<SideBar></SideBar>
		<header class="home-header">

			<div class="home_header-container">
				<nav class="home_nav"></nav>
				<h1 class="home_text">Видовой ресторан Food Exxe Relo на Крестовском острове</h1>
			</div>
		</header>
	</div>
</template>

<script lang="typescript">
import SideBar from '@/components/SideBar.vue'

export default {
	components: {
		SideBar
	}
}
</script>

<style lang="stylus">
.home
	width 100%
	height 100vh
	display flex
	flex-direction row

	&_text
		color white

</style>
