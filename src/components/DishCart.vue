<template>
	<div class="menu-cart">
		<img :src="image" :alt="name" class="menu-cart__img">
		<div class="menu-cart__info">
			<div class="menu-cart__name">{{name}}</div>
			<div class="menu-cart__container">
				<div class="menu-cart__price">
					{{price}} 
					<img class="ruble-icon" src="@/assets/img/ruble-icon.svg" alt="">
				</div>
				<div class="menu-cart__button">В корзину</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	props: {
		price: Number,
		image: String,
		name: String,
	}
}
</script>

<style lang="stylus">
.menu-cart
	display flex
	flex-direction column
	align-items center
	max-width 304px
	width 100%
	border var(--border)

	&__img
		width 100%
		height 220px

	&__info
		padding 30px
		width 100%
		display flex
		flex-direction column
		justify-content space-between

	&__name
		font-size 20px
		font-weight 700
		margin-bottom 27px
		width 100%
		height 59px
		text-align center

	&__container
		display flex
		flex-direction row
		justify-content space-between

	&__price
		font-size 32px
		font-weight 700

	&__button
		padding 10px 20px
		font-size 16px
		font-weight 700
		background-color var(--brown-of-light)
		color white
		cursor pointer

.ruble-icon
	width 18px

</style>