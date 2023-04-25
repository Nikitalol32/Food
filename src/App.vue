<template>
	<div id="app">
		<SideBar class="sidebar"></SideBar>
		<Home></Home>
		<router-view/>
	</div>
</template>

<script lang="typescript">
import Home from '@/views/Home.vue'
import SideBar from '@/components/SideBar.vue'

export default {
	components: {
		Home,
		SideBar,
	}
}
</script>


<style lang="stylus">

@font-face {
	font-family "Circe-Bold"
	src url('@/assets/fonts/Circe/Circe-Bold.woff2') format(woff2)
}

@font-face {
	font-family "Circe-ExtraBold"
	src url('@/assets/fonts/Circe/Circe-ExtraBold.woff2') format(woff2)
}

@font-face {
	font-family "Circe"
	src url('@/assets/fonts/Circe/Circe-Light.woff2') format(woff2)
}

@font-face {
	font-family "Circe-Regular"
	src url('@/assets/fonts/Circe/Circe-Regular.woff2') format(woff2)
}

*
	margin 0
	padding 0
	--bg-bar #262525
	--brown-of-light #B59571
	font-family Circe

body,
html
	width 100%
	height 100%

#app
	height 100%
	width 100%

.chapter-container
	display flex
	flex-direction row
	align-items center
	margin-bottom 80px

.chapter-name
	text-transform uppercase
	letter-spacing 1px
	font-size 20px
	font-weight 700
	margin-right 30px

.stripe
	width 60px
	height 3px
	background-color var(--brown-of-light)
	border-radius 1px


</style>
