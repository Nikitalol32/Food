<template>
	<div class="footer">
			<router-link
				to="/">
				<img src="@/assets/img/logo.svg" alt="food" class="sidebar__logo">
			</router-link>
			<a href="#" class="footer__politics">
				Политика конфиденциальности
			</a>
			<div class="footer__developers">
				<span>by </span>
				<a href="https://vk.com/tim13official">Timur </a>
				<span>& </span>
				<a href="https://vk.com/holyn0">Nikish</a>
			</div>
	</div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="stylus">
.footer
	display flex
	flex-direction row
	justify-content space-evenly
	align-items center
	background-color var(--dark)
	width 100%
	height 120px

	&__politics
		text-decoration none
		font-family Circe
		font-weight 400
		color white
		font-size 16px
		cursor pointer
		
	&__developers
		font-family Circe
		font-weight 700
		font-size 16px
		color white

		&>a
			text-decoration none
			color white
			cursor pointer

			&:hover
				color #78328A

</style>