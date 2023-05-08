<template>
	<div class="menu">
		<div class="menu__header">
			<img src="@/assets/img/basket.svg" class="menu__basket-icon">
		</div>
		<ul class="menu__nav">
			<div class="menu__nav-container">
				<li
					class="menu__nav-item"
					v-for="item in segments"
					:key="item"
					@click="segmentClick(item.id)"
				>
				{{item.title}}
				</li>
			</div>
		</ul>
		<div class="menu__carts">
			<MenuCart
				class="menu__cart"
				v-for="cart in carts"
				:key="cart"
				:name="cart.name"
				:price="cart.price"
				:image="cart.img"
			/>
		</div>
		<ContactChapter/>
	</div>
</template>

<script lang="ts">
import MenuCart from '@/components/MenuCart.vue'
import {getSegments, type Segment} from '@/core/api/segments'
import ContactChapter from '@/components/ContactChapter.vue'

export default {
	data() {
		return {
			segments: [] as Segment[],
			segmentId: '',
			carts: [] as Segment[],
		}
	},

	components: {
		MenuCart,
		ContactChapter
	},

	methods: {
		async segmentClick(id: string) {
			this.segmentId = id;
			this.carts = await getSegments(id);
			this.$router.push({
				path: '/menu',
				query: {'segment': id}
			});
		}
	},

	mounted() {
		fetch('http://localhost:5540/api/menu/segments')
			.then((r) => {
				console.log(r)
				return r.json()
			})
			.then((r) => {
				this.segments = r;
				const id = this.segments[0].id;
				this.segmentId = id;
				return getSegments(id);
			})
			.then((r) => {
				this.carts = r;
			})
	}
}
</script>

<style lang="stylus">
.menu
	display flex
	flex-direction column
	max-width 1341px
	margin 0 auto 80px 16.3%
	padding 0 25px
	box-sizing border-box

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
		box-sizing border-box
		max-width 1296px
		width 100%
		overflow-x hidden
		justify-content center

		&-container
			padding-bottom 15px
			display flex
			flex-direction row
			width 100%
			list-style none
			box-sizing border-box
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
			font-family Circe
			padding-bottom 5px
			white-space nowrap
			caret-color transparent
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

@media (min-width 1603px) {
	.menu__cart:nth-child(4n) {
		margin-right 0px
	}
}

@media (min-width 1210px) and (max-width 1601px) {
	.menu__cart:nth-child(3n) {
		margin-right 0
	}
}

@media (max-width 1601px) {
.menu__nav,
.menu__nav-container {
	justify-content flex-start
}
}

</style>