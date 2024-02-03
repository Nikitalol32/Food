<template>
	<div id="app">
		<SideBar></SideBar>
		<router-view/>
		<FooterComponent></FooterComponent>
	</div>
</template>

<script lang="ts">
import SideBar from '@/components/SideBar.vue'
import FooterComponent from '@/components/Footer.vue'
import router from '@/router/index'

export default {
	components: {
		SideBar,
		FooterComponent,
	},
	methods: {
		anal() {
			console.log('anal')
		}
	},
	mounted() {
		router.beforeEach((to, from, next) => {
			if (to.name !== from.name) {
				window.scrollTo(0, 0);
			}

			next()
		})
	}
}
</script>


<style lang="stylus">


@font-face {
	font-family "Circe"
	src url('@/assets/fonts/Circe/Circe-Light.woff2') format(woff2)
	font-weight 100
}

@font-face {
	font-family "Circe"
	src url('@/assets/fonts/Circe/Circe-Regular.woff2') format(woff2)
	font-weight 400
}

@font-face {
	font-family "Circe"
	src url('@/assets/fonts/Circe/Circe-Bold.woff2') format(woff2)
	font-weight 700
}

@font-face {
	font-family "Circe"
	src url('@/assets/fonts/Circe/Circe-ExtraBold.woff2') format(woff2)
	font-weight 900
}

*
	margin 0
	padding 0
	--border 1px solid rgba(51, 51, 51, 0.2);
	--dark #262525
	--brown-of-light #B59571
	font-family Circe
	box-sizing border-box
	--breakpoint-one 1620px
	--checkmark url('@/assets/img/checkmark.svg')

body,
html
	width 100%
	height 100%

#app
	min-height 100%
	width 100%
	position relative

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

.hidden
	visibility hidden

</style>
