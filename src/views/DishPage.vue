<template>
	<div class="dish-page-wrapper">
		<div class="dish-page__header">
			<img src="@/assets/img/basket.svg" class="dish-page__basket-icon">
		</div>
		<div class="dish-page__segments">
			<Segments/>
		</div>
		<div class="dish-page">
			<div class="dish-page__images">
				<img :src="dish.img" class="dish-page__main-image">
				<div class="dish-page__gallery">
					<img :src="dish.img" class="dish-page__gallery-item">
					<img :src="dish.img" class="dish-page__gallery-item">
					<img :src="dish.img" class="dish-page__gallery-item">
				</div>
			</div>
			<div class="dish-page__info">
				<h2 class="dish-page__name">{{dish.name}}</h2>
				<div class="dish-page__buy-info">
					<div class="dish-page__price-and-grams">
						<div class="dish-page__price-container">
							<div class="dish-page__price">{{dish.price}}</div>
							<img class="dish-page__ruble-icon" src="@/assets/img/ruble-icon.svg" alt="">
						</div>
						<div class="dish-page__grams">/ 400грамм</div>
					</div>
					<div class="dish-page__portions">
						Количество порций:
					</div>
					<div class="dish-page__counter-and-button">
						<div class="dish-page__counter">
							<div class="dish-page__count">{{counter}}</div>
							<div class="dish-page__plus-and-minus">
								<button class="dish-page__counter-plus" @click="count(counter+1)"></button>
								<button class="dish-page__counter-minus" @click="count(counter-1)"></button>
							</div> 
						</div>
						<button class="dish-page__button">В корзину</button>
					</div>
				</div>
				<div class="dish-page__optional">
					<h2 class="dish-page__optional-header">Сделать еще вкуснее</h2>
					<ul class="dish-page__positions">
						<li
							class="dish-page__position"
							v-for="(item, index) in optional"
							:key="item"
						>
							<div class="dish-page__position-info">
								<div class="dish-page__position-name">{{item.name}}</div>
								<div class="dish-page__position-price">
									{{item.price}}
									<img class="dish-page__ruble-icon" src="@/assets/img/ruble-icon.svg" alt="">
								</div>
							</div>
							<input name="position" :id="'position'+(index+1)" class="dish-page__position-checkbox" type="checkbox">
							<label :for="'position'+(index+1)"></label>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<Contacts class="dish-page__contacts"/>
	</div>
</template>

<script lang="ts">
import Contacts from "@/components/Contacts.vue"
import Segments from "@/components/Segments.vue"

interface Dish {
	price: Number,
	name: String,
	segment: String,
	img: String,
	id: String,
}


export default {
	data() {
		return {
			counter: 1,
			optional: [
				{
					name: "Тигровые креветки 60г",
					price: 450
				},
				{
					name: "Томаты / паприка",
					price: 80
				},
				{
					name: "Бекон",
					price: 120
				},
				{
					name: "Сыр Чеддер 30г",
					price: 80
				},
			],
			dishId: '' as String,
			dish: {} as Dish,
		}
	},

	methods: {
		count(counter: number) {
			if (counter < 1) {
				this.counter = 1;
				return;
			}

			this.counter = counter;
		},

		async getDish(id: String) {
			return fetch(`http://localhost:5540/api/dish/${id}`)
				.then((r)=> {
					return r.json();
				})
		}
	},

	computed: {
		getDishId() {
			return this.$route.params['id'];
		},
	},

	components: {
		Contacts,
		Segments,
	},

	created() {
		const
			{getDish, getDishId} = this;

		this.dishId = getDishId as String;

		getDish(this.dishId)
			.then((r) => {
				this.dish = r;
			});

		window.scrollTo(0, 0);
	}
}
</script>

<style lang="stylus">
@require "../assets/style/breakpoints.styl"

.dish-page-wrapper
	display flex
	flex-direction column
	justify-content center
	margin-left 200px
	padding 0 25px

.dish-page
	display flex
	flex-direction row
	justify-content center
	margin 0 auto 120px auto
	font-weight 700

	&__header
		margin 32px 0 62px 0
		display flex
		justify-content flex-end

	&__segments
		margin-bottom 55px

	&__images
		margin-right 134px
		width 416px

	&__main-image
		width 100%
		height 317px
		margin-bottom 24px

	&__gallery
		display flex
		justify-content space-between
		width 100%

		&-item
			width 124px
			height 93px

			&:last-child
				margin-right 0

	&__info
		display flex
		justify-content flex-start
		flex-direction column
		width 306px

	&__name
		font-size 32px
		color black
		border-bottom var(--border)
		padding-bottom 35px
		margin-bottom 35px

	&__buy-info
		border-bottom var(--border)
		padding-bottom 45px
		margin-bottom 35px

	&__price-and-grams
		display flex
		align-items flex-end
		margin-bottom 34px

	&__price
		font-size 32px
		color black
		margin-right 4px
		height 30px

		& + .dish-page__ruble-icon
			width 24px
			height @width

		&-container
			display flex
			flex-direction row
			align-items center
	
	&__grams
		font-size 16px
		color black
		opacity .35

	&__portions
		font-size 16px
		color black
		margin-bottom 24px

	&__counter-and-button
		display flex

	&__counter
		border var(--border)
		padding 15px 20px
		color black
		font-size 20px
		display flex
		align-items center
		margin-right 35px

		&-plus
			width 11px
			height 9px
			border-style solid
			border-width 0 5.5px 9px 5.5px
			border-color transparent transparent var(--brown-of-light) transparent
			margin-bottom 5px

		&-minus
			width 11px
			height 9px
			border-style solid
			border-width 9px 5.5px 0 5.5px
			border-color var(--brown-of-light) transparent transparent transparent


	&__count
		width 25px
		text-align start

	&__plus-and-minus
		display flex
		flex-direction column

	&__contacts
		margin 0 auto 120px auto

	&__button
		border 1px solid black
		padding 15px 30px
		font-size 20px

		&:hover
			background-color var(--brown-of-light)
			border var(--border)
			color white

	&__optional
		display flex
		flex-direction column

		&-header
			font-size 32px
			margin-bottom 30px
		
	&__position
		display flex
		flex-direction row
		align-items center
		justify-content space-between
		margin-bottom 20px

		&-name
			font-size 16px
			opacity .4
			margin-bottom 10px

		&-price
			font-size 20px
			display flex
			align-items center

			& .dish-page__ruble-icon
				width 15px
				height @width

		&-checkbox
			position absolute
			opacity 0
			z-index -1

			& + label
				width 25px
				height @width
				border var(--border)
				cursor pointer

				&:hover
					background-color var(--brown-of-light)

			&:checked + label::before
				width 25px
				height @width
				content ''
				display inline-block
				background-color var(--brown-of-light)

			&[type="checkbox"]:checked + label::before
				background-image var(--checkmark)
				background-size cover
				background-repeat no-repeat

@media (max-width $bp-one) {
	.dish-page {
		justify-content normal
		margin-right 0
		margin-left 0
	}

	.dish-page__contacts {
		margin-right 0
		margin-left 0
		}
}

</style>