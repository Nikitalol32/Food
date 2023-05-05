<template>
	<div class="menu">
		<div class="menu__header">
			<img src="@/assets/img/basket.svg" class="menu__basket-icon">
		</div>
		<ul class="menu__nav">
			<li
				class="menu__nav-item"
				v-for="item in segments"
				:key="item"
				@click="segmentClick(item.id)"
				:id="item.id"
			>
			{{item.title}}
			</li>
		</ul>
		<div class="menu__carts">
			<MenuCart
				class="menu__cart"
				v-for="cart in carts"
				:key="cart"
				:name="cart.name"
				:price="cart.price"
				:img="cart.img"
			/>
		</div>

	</div>
</template>

<script lang="typescript">
import MenuCart from '@/components/MenuCart.vue'

export default {
	data() {
		return {
			segments: [],
			segmentId: '',
			carts: [],
		}
	},

	components: {
		MenuCart
	},

	methods: {
		segmentClick(id='string') {
			this.segmentId = id;
			console.log(this.segmentId)
			fetch(`http://localhost:5540/api/menu/segments/${this.segmentId}`)
				.then((r) => {
					return r.json()
				})
				.then(console.log)

			this.$router.push({
				query: {'segment': id},
				name: 'segment'
			})
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
				console.log('segments', this.segments[0])
				return this.segments
			})
			// .then((segments) => {
			// })

		
		// fetch(`http://localhost:5540/api/menu/segments/`)
		// 	.then((r) => {
		// 		return r.json()
		// 	})
		// 	.then(console.log)
	}
}
</script>

<style lang="stylus">
.menu
	display flex
	flex-direction column
	margin 0 auto
	width max-content

	&__header
		margin 32px 0 62px 0
		width 100%
		display flex
		justify-content flex-end

	&__nav
		display flex
		flex-direction row
		width 100%
		list-style none
 
		&-item
			margin-right 40px
			font-size 16px
			font-weight 400
			font-family Circe
			padding-bottom 5px
			margin-right 53px
			caret-color transparent
			cursor pointer

			&:active
				border-bottom 3px solid var(--brown-of-light)

			&:hover
				border-bottom 3px solid var(--brown-of-light)

	&__carts
		display flex
		justify-content flex-start

	&__cart
		margin-bottom 25px



</style>