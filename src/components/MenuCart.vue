<template>
	<div class="menu-cart">
		<img :srcset="image" alt="bludo" class="menu-cart__img">
		<div class="menu-cart__info">
			<div class="menu-cart__name">{{name}}</div>
			<div class="menu-cart__container">
				<div class="menu-cart__price">{{price}}</div>
				<div class="menu-cart__button"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	params: {
		price: String,
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
	max-width 306px
	width 100%

	&__info
		padding 30px

	&__name
		font-size 20px
		font-family Circe
		font-weight 700

	&__container
		display flex
		flex-direction row
		justify-content space-between

	&__price
		font-size 32px
		font-family Circe
		font-weight 700

	&__button
		padding 10px 20px
		font-size 16px
		font-family Circe
		font-weight 700
		background-color var(--brown-of-light)
		color white

</style>