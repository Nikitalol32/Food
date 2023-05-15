<template>
	<div class="home">
		<div class="home__main">

				<div class="home__main-text-container">
					<nav class="home__nav-container">
						<div class="home__nav">
							<router-link
								class="home__nav-item"
								to="/menu"
							>
								Меню
							</router-link>
							<div class="home__nav-item">Доставка</div>
							<div class="home__nav-item">Оплата</div>
							<div class="home__nav-item">Бронь столика</div>
						</div>
					</nav>

					<h1 class="home__main-text">
						Видовой ресторан Food Exxe Relo на Крестовском острове
					</h1>
				</div>

		</div>

		<div class="home__content">
			<section class="home__about">
				<div class="chapter-container">
					<div class="chapter-name">О ресторане</div>
					<div class="stripe"></div>
				</div>
				<div class="home__about-description">
					<div class="home__about-heading">Food<br>Exxe<br>Relo</div>
					<p class="home__about-text">
						Sed vel ornare ut rhoncus, ac ut nibh. Amet at sit et nibh. In lectus phasellus non ornare eget velit. Facilisi urna, tristique dui, rhoncus, dolor. Tincidunt enim gravida dignissim leo pulvinar sit volutpat nulla vestibulum.<br><br>
						Morbi pellentesque enim massa laoreet vel id. Lectus ac, facilisis neque turpis. Morbi massa enim nullam sem vehicula. Amet quis pellentesque enim porttitor lectus interdum. Nisi, faucibus pharetra at porttitor. Fringilla luctus pretium in viverra. In adipiscing tempor amet malesuada ullamcorper ut sagittis. Dui, scelerisque vulputate risus massa dictum. Cras at quis in eu, faucibus feugiat vel. At.
					</p>
				</div>
			</section>

			<section class="home__menu">
				<div class="chapter-container">
					<div class="chapter-name">Меню</div>
					<div class="stripe"></div>
				</div>
				<div class="home__menu-description">
					<div class="home__menu-container">
						<div class="home__menu-heading">Меню</div>
						<p class="home__menu-text">
							Sed vel ornare ut rhoncus, ac ut nibh. Amet at sit et nibh. In lectus phasellus non ornare eget velit. Facilisi urna, tristique dui, rhoncus, dolor. Tincidunt enim gravida dignissim leo pulvinar sit volutpat nulla vestibulum.<br><br>
							Morbi pellentesque enim massa laoreet vel id. Lectus ac, facilisis neque turpis.
						</p>
					</div>
					<div class="menu-carts">
						<div class="menu-carts__item">
							<div class="menu-carts__item-photo-border">
								<img class="menu-carts__item-photo" src="@/assets/img/Main menu.png" alt="Menu">
							</div>
							<div class="chapter-container">
								<div class="chapter-name">Главное меню</div>
								<div class="stripe"></div>
							</div>
						</div>
						<div class="menu-carts__item">
							<div class="menu-carts__item-photo-border">
								<img class="menu-carts__item-photo" src="@/assets/img/Bar Card.png" alt="Menu">
							</div>
							<div class="chapter-container">
								<div class="chapter-name">Барная карта</div>
								<div class="stripe"></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="home__delivery">
				<div class="chapter-container">
					<div class="chapter-name">Доставка</div>
					<div class="stripe"></div>
				</div>
				<div class="home__delivery-description">
					<div class="home__delivery-heading">Служба Доставки</div>
					<div class="home__delivery-container">
						<div class="home__delivery-text">Phasellus diam, ultrices lobortis integer et. Diam, purus vel sagittis, non, a. In risus, venenatis enim vitae mauris aliquet orci. Consectetur nibh interdum nullam ut lobortis eu etiam sem. Et in vitae pellentesque non, lectus orci natoque faucibus suspendisse. Semper aliquam id et ultrices velit donec lacus. In odio sit nibh volutpat cras placerat sit feugiat dignissim. Rutrum et suspendisse tortor, lobortis eleifend in fringilla. Egestas cursus imperdiet cursus dui, nulla id massa. Hendrerit nam enim semper porttitor imperdiet diam semper. Nulla sit etiam cras morbi enim elementum euismod sapien.
						</div>
						<div class="home__delivery-buttons">
							<button class="home__delivery-button">Подробнее</button>
							<button class="home__delivery-button">Условия Доставки</button>
						</div>
					</div>
				</div>
			</section>
			<ContactChapter/>
		</div>
	</div>
</template>

<script lang="ts">
import ContactChapter from "@/components/Contacts.vue"
export default {
	components: {
		ContactChapter,
	}
}
</script>

<style lang="stylus">
content-text()
	font-weight 400
	font-size 18px
	max-width 526px
	width 100%
	text-align left
	cursor context-menu

heading()
	width 196px
	color #333
	font-weight 700
	font-size 64px
	margin-right 134px
	cursor context-menu

.home
	width 100%
	display flex
	flex-direction column

	&__main
		width 100%
		height 100vh
		display flex
		flex-direction column
		justify-content space-between
		box-sizing border-box
		background-image url('@/assets/img/home-bg.jpg')
		background-repeat no-repeat
		background-size cover
		margin-bottom 150px

		&-text-container
			display flex
			flex-direction column
			justify-content space-between
			width 100%
			height 100%

		&-text
			font-family Circe
			font-weight 700
			max-width 856px
			width 100%
			color white
			font-size 54px
			margin-bottom 100px
			margin-left 22%

	&__nav-container
		height max-content
		display flex
		flex-direction row
		justify-content flex-end
		margin 30px 100px 0px 0px

	&__nav
		width max-content
		display flex
		flex-direction row
		align-items center
		box-sizing border-box

		&-item
			font-family Circe
			font-weight 400
			font-size 16px
			color #fff
			padding 10px 0px
			margin-right 50px
			cursor pointer
			letter-spacing 1px
			transition .7s ease
			text-decoration none

			&:last-child
				margin-right 0

			&:hover
				background-color var(--brown-of-light)
				padding 10px 20px

	&__content
		margin-left 16%
		display flex
		flex-direction column
		padding-right 30px

	&__about
		display flex
		flex-direction column
		margin-bottom 150px

		&-description
			display flex
			flex-direction row
			margin-left 12%

		&-heading
			heading()

		&-text
			content-text()

	&__menu
		display flex
		flex-direction column
		margin-bottom 150px

		&-heading
			heading()

		&-text
			content-text()

		&-description
			
			display flex
			flex-direction column

		&-container
			display flex
			flex-direction row
			margin-bottom 80px
			margin-left 12%

	&__delivery
		display flex
		flex-direction column
		margin-bottom 150px

		&-heading
			heading()

		&-text
			content-text()
			margin-bottom 60px

		&-description
			display flex
			flex-direction row
			margin-left 12%

		&-container
			display flex
			flex-direction column

			&>.content-text
				margin-bottom 60px
			
		&-buttons
			display flex
			flex-direction row

		&-button
			font-family Circe
			font-weight 400
			border 1px solid rgba(51, 51, 51, 0.2)
			padding 15px 30px
			color black
			font-size 20px
			cursor pointer
			background-color white

			&:first-child
				margin-right 30px

			&:hover
				background-color var(--brown-of-light)
				color #eee

.menu-carts
	display flex
	margin-left 12%

	&__item
		display flex
		flex-direction column
		align-items center

		&:first-child
			margin-right 24px

		&-photo-border
			position relative
			width 416px
			height 240px
			box-sizing border-box
			border 1px solid rgba(51, 51, 51, 0.2)
			margin-bottom 64px

		&-photo
			position absolute
			top 40px
			left 40px
	
		& > .chapter-container
			margin-bottom 0

.map
	max-width 746px
	width 100%
	height 450px
	border 1px solid rgba(51, 51, 51, 0.2)
	font-size 32px
	font-family Circe
	font-weight 400
	text-align center

</style>
