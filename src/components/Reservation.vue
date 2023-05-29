<template>
	<modal class="reservation-container">
		<div class="reservation">
			<div class="close-icon-container">
				<div class="close-icon" @click="closeModal">
					<div class="close-icon__stick"></div>
					<div class="close-icon__stick"></div>
				</div>
			</div>
			<Logo class="reservation__logo"/>
			<h2 class="reservation__header">Забронировать столик</h2>
			<div class="reservation__inputs">
				<input placeholder="Имя" type="input" class="reservation__input">
				<input placeholder="Телефон" type="input" class="reservation__input">
				<div>
					<input placeholder="Гостей" type="input" class="reservation__input reservation__input_guest">
					<input placeholder="Время" type="input" class="reservation__input reservation__input_time">
				</div>
			</div>
			<button class="reservation__button">
				Забронировать
			</button>
		</div>
	</modal>
</template>

<script lang="ts">
import Logo from "@/components/Logo.vue"

export default {

	components: {
		Logo,
	},
	methods: {
		closeModal() {
			this.$emit("showModal", false);
		}
	}
}
</script>

<style lang="stylus">
.close-icon-container
	position absolute
	top 30px
	right 30px

.close-icon
	display flex
	align-items center
	justify-content center
	position relative
	width 25px
	height @width
	cursor pointer

	&__stick
		background-color var(--brown-of-light)
		width 20px
		height 2px
		border-radius 5px
		position absolute

		&:first-child
			transform rotate(-45deg)

		&:last-child
			transform rotate(45deg)

.reservation-container
	width 100%
	height 100vh
	position absolute
	z-index 999
	display flex
	align-items center
	justify-content center
	background-color rgba(61, 60, 60, .5)

.reservation
	display flex
	flex-direction column
	align-items center
	background-color var(--dark)
	padding 60.5px
	position relative

	&__logo
		margin-bottom 58px

	&__header
		font-size 20px
		font-weight 700
		text-transform uppercase
		color white
		margin-bottom 40px

	&__inputs
		width 300px
		display flex
		justify-content center
		flex-direction column
		margin-bottom 40px

	&__input
		max-width 296px
		color white
		font-weight 400
		font-size 16px
		padding 15px 20px
		margin-bottom 30px
		border 1px solid rgba(255, 255, 255, .4)

		&_guest
			width 136px
			margin 0 24px 0 0

		&_time
			width 136px

	&__button
		border 1px solid rgba(255, 255, 255, .4)
		padding 10px 20px
		color white
		font-size 20px

		&:hover
			background-color var(--brown-of-light)
			border 1px solid rgba(0, 0, 0, 0)


</style>