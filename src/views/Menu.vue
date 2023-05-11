<template>
	<div class="menu">
		<div class="menu__header">
			<img src="@/assets/img/basket.svg" class="menu__basket-icon">
		</div>
		<nav class="menu__nav">
			<ul class="menu__nav-container">
				<li
					class="menu__nav-item"
					v-for="item in segments"
					:key="item.id"
					@click="segmentClick(item.id)"
				>
				{{item.title}}
				</li>
			</ul>
		</nav>
		<div class="menu__carts">
			<MenuCart
				class="menu__cart"
				v-for="dish in dishes"
				:key="dish.id"
				:name="dish.name"
				:price="dish.price"
				:image="dish.img"
			/>
		</div>
		<Contacts/>
	</div>
</template>

<script lang="ts">
import MenuCart from '@/components/DishCart.vue'
import {getSegment, type Segment, getSegments} from '@/core/api/segments'
import Contacts from '@/components/Contacts.vue'
// import type { LocationQueryValue, LocationQuery } from 'vue-router'

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
		Contacts
	},

	methods: {
		async segmentClick(id: string) {
			this.$router.push({
				path: '/menu',
				query: {segment: id}
			});
		}
	},

	created() {
		this.$watch(
			() => this.$route.query,
			async (query) => {
				if (query.segment != null && typeof query.segment === "string") {
					this.dishes = await getSegment(query.segment);
					this.segmentId = query.segment;
					console.log(1)
				}

				console.log(query)
			}
		)
		if (typeof this.$route.query['segment'] === 'string') {
			this.segmentId = this.$route.query['segment']

		}
	},

	mounted() {
		getSegments()
			.then((r) => {
				this.segments = r;

				if (this.segmentId != null && this.segmentId !== '') {
					return getSegment(this.segmentId);

				}

				return getSegment(this.segments[0].id);
			})
			.then((r) => {
				this.dishes = r;
			})

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
	padding 0 25px

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

			&:active
				border-bottom 3px solid var(--brown-of-light)
				padding-bottom 2px

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