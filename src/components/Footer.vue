<template>
	<div class="footer">
			<Logo/>
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
import Logo from "@/components/Logo.vue"
export default {
	components: {
		Logo,
	}
}
</script>

<style lang="stylus">
.footer
	display flex
	justify-content space-evenly
	align-items center
	background-color var(--dark)
	width 100%
	height 120px

	&__politics
		font-weight 400
		color white
		font-size 16px
		cursor pointer
		
	&__developers
		font-weight 700
		font-size 16px
		color white

		& > a
			color white
			cursor pointer

			&:hover
				color #78328A

</style>