<template>
	<div
		class="menu-cart"
		@click="dishClick(dish.id, $event)"
		v-analytics="{
			events: ['click', 'view'],
			params: {
				dishId: dish.id,
				segmentId: segmentId,
				position: position,
				screen: screen
			},
			once: true
		}"
	>
		<img
			:src="dish.img"
			:alt="dish.name"
			class="menu-cart__img"
		>
		<div class="menu-cart__info">
			<div class="menu-cart__name">{{dish.name}}</div>
			<div class="menu-cart__container">
				<div class="menu-cart__price">
					{{dish.price}}
					<img class="ruble-icon" src="@/assets/img/ruble-icon.svg" alt="">
				</div>
				<div class="menu-cart__button" ref="button">В корзину</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">

export default {
	props: {
		dish: Object,
		screen: String,
		position: Number,
		segmentId: String,
	},

	methods: {
		dishClick(id: string, e: PointerEvent) {

			if (e.target !== this.$refs.button) {
				this.$emit('dishClick', id);
			}
		}
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