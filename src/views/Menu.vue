<template>
	<div class="menu">
		<div class="menu__header">
			<img src="@/assets/img/basket.svg" class="menu__basket-icon">
		</div>
		<nav class="menu__nav">
			<Segments
				:doNeedARequestSegments="true"
				@dishes="getDishes"
				@segmentId="getSegmentId"
			/>
		</nav>
		<div class="menu__carts">
			<MenuCart
				class="menu__cart"
				v-for="dish, i in dishes"
				:key="dish.id"
				:dish="dish"
				@dishClick="dishClick"
				:position="i"
				:segmentId="segmentId"
			/>
		</div>
		<Contacts
		/>
	</div>
</template>

<script lang="ts">
import MenuCart from '@/components/DishCart.vue'
import type {Segment} from '@/core/api/segments'
import Contacts from '@/components/Contacts.vue'
import Segments from '@/components/Segments.vue'

export default {
	data() {
		return {
			segments: [] as Segment[],
			segmentId: '' as string,
			dishes: [] as Segment[],
		}
	},

	components: {
		MenuCart,
		Contacts,
		Segments,
	},

	methods: {
		dishClick(dishId: string) {
			this.$router.push({
				path: '/dish-page',
				name: 'dish-page',
				params: {id: dishId}
			})
		},

		getSegmentId(segmentId: string) {
			this.segmentId = segmentId;
		},

		async getDishes(dishes: Segment[]) {
			this.dishes = await dishes;
		}
	},

	created() {
		window.scrollTo(0, 0);
	}

}
</script>

<style lang="stylus">
@require "../assets/style/breakpoints.styl"

.menu
	display flex
	flex-direction column
	max-width 1341px
	margin 0 auto 80px 16.3%
	padding-left 25px
	padding-right 25px

	&__basket-icon
		cursor pointer

	&__header
		margin 32px 0 62px 0
		width 100%
		display flex
		justify-content flex-end

	&__nav
		display flex
		margin-bottom 61px
		max-width 1296px
		width 100%
		overflow-x hidden
		justify-content center

		&-container
			padding-bottom 15px
			display flex
			width 100%
			list-style none
			overflow scroll
			justify-content center

			&::-webkit-scrollbar
				height 7px
				width 100px

			&::-webkit-scrollbar-thumb
				background-color var(--dark)
				border-radius 7px

		&-item
			margin-right 40px
			font-size 16px
			font-weight 400
			padding-bottom 5px
			white-space nowrap
			cursor pointer

			&:last-child
				margin-right 0

			&:hover
				border-bottom 3px solid var(--brown-of-light)
				padding-bottom 2px

	&__carts
		display flex
		flex-wrap wrap
		margin-bottom 125px

	&__cart
		margin-bottom 25px
		margin-right 25px

	&__dish-page
		display flex
		justify-content center
		margin-bottom 150px

.nav-item-focus
	border-bottom 3px solid var(--brown-of-light)
	padding-bottom 2px

@media (min-width $bp-one) {
	.menu__cart:nth-child(4n) {
		margin-right 0px
	}
}

@media (max-width $bp-one) {
	.menu {
		max-width 1047px
	}

	.menu__nav,
	.menu__nav-container {
		justify-content flex-start
	}
}

</style>