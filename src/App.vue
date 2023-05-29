<template>
	<div id="app">
		<Reservation
			v-if="openModal"
			v-on:showModal="showModal"
		/>
		<SideBar
			v-if="!openModal"
			v-on:showModal="showModal"
		></SideBar>
		<router-view
			v-on:showModal="showModal"
		/>
		<FooterComponent></FooterComponent>
	</div>
</template>

<script lang="ts">
import SideBar from '@/components/SideBar.vue'
import FooterComponent from '@/components/Footer.vue'
import Reservation from '@/components/Reservation.vue'

export default {
	data() {
		return {
			openModal: false,
		}
	},

	components: {
		SideBar,
		FooterComponent,
		Reservation,
	},

	methods: {
		showModal(isOpen: boolean) {
			this.openModal = isOpen;
			window.scrollTo(0, 0);

			if (isOpen) {
				document.querySelector('.home__nav-container')?.classList.add('hidden');
				document.body.style.overflow = 'hidden';

			} else {
				document.querySelector('.home__nav-container')?.classList.remove('hidden');
				document.body.style.overflow = '';
			}
		}
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
	--border 1px solid rgba(51, 51, 51, 1);
	--dark #262525
	--brown-of-light #B59571
	font-family Circe
	box-sizing border-box
	--breakpoint-one 1620px

body,
html
	width 100%
	height 100%

#app
	height 100%
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
