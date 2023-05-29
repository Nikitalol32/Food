<template>
	<div class="nav">
		<router-link
			class="nav-item"
			to="/menu"
			@click="closeSidebar()"
		>
			Меню
		</router-link>
		<div class="nav-item" @click="closeSidebar()">Доставка</div>
		<div class="nav-item" @click="closeSidebar()">Оплата</div>
		<router-link
			class="nav-item"
			@click="showModal"
			to="/"
		>
			Бронь столика
		</router-link>
	</div>

</template>

<script lang='ts'>

export default {
	props: {
		closeSidebar: Function,
	},

	data() {
		return {
		}
	},

	methods: {
		showModal() {
			this.$emit("showModal", true);
		}
	},
}
</script>

<style lang="stylus">

.nav
	width max-content
	display flex
	flex-direction row
	align-items center
	box-sizing border-box

	&-item
		font-family Circe
		font-weight 400
		font-size 16px
		color #fff
		padding 10px 0px
		margin-right 50px
		cursor pointer
		letter-spacing 1px
		transition .7s ease
		text-decoration none

		&:last-child
			margin-right 0

		&:hover
			background-color var(--brown-of-light)
			padding 10px 20px

</style>