<template>
	<div class="home">
		<div class="home__main">

				<div class="home__main-text-container">
					<h1 class="home__main-text">
						Видовой ресторан Food Exxe Relo на Крестовском острове
					</h1>
				</div>

				<div class="home__nav-container">
					<ul class="home__nav">
						<li class="home__nav-item">Меню</li>
						<li class="home__nav-item">Доставка</li>
						<li class="home__nav-item">Оплата</li>
						<li class="home__nav-item">Бронь столика</li>
					</ul>
				</div>

		</div>

		<div class="home__content">
			<div class="home__content-about">
				<div class="chapter-container">
					<div class="chapter-name">О ресторане</div>
					<div class="stripe"></div>
				</div>
				<div class="home__content-about-description">
					<div class="home__content-about-description-heading heading">Food<br>Exxe<br>Relo</div>
					<p class="home__content-about-description-text content-text">
						Sed vel ornare ut rhoncus, ac ut nibh. Amet at sit et nibh. In lectus phasellus non ornare eget velit. Facilisi urna, tristique dui, rhoncus, dolor. Tincidunt enim gravida dignissim leo pulvinar sit volutpat nulla vestibulum.<br><br>
						Morbi pellentesque enim massa laoreet vel id. Lectus ac, facilisis neque turpis. Morbi massa enim nullam sem vehicula. Amet quis pellentesque enim porttitor lectus interdum. Nisi, faucibus pharetra at porttitor. Fringilla luctus pretium in viverra. In adipiscing tempor amet malesuada ullamcorper ut sagittis. Dui, scelerisque vulputate risus massa dictum. Cras at quis in eu, faucibus feugiat vel. At.
					</p>
				</div>
			</div>

			<div class="home__content-menu">
				<div class="chapter-container">
					<div class="chapter-name">Меню</div>
					<div class="stripe"></div>
				</div>
				<div class="home__content-menu-description">
					<div class="home__content-menu-description-container">
						<div class="home__content-menu-description-heading heading">Меню</div>
						<p class="home__content-item-description-text content-text">
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
			</div>

			<div class="home__content-delivery">
				<div class="chapter-container">
					<div class="chapter-name">Доставка</div>
					<div class="stripe"></div>
				</div>
				<div class="home__content-delivery-description">
					<div class="heading">Служба Доставки</div>
					<div class="home__content-delivery-description-container">
						<div class="content-text">Phasellus diam, ultrices lobortis integer et. Diam, purus vel sagittis, non, a. In risus, venenatis enim vitae mauris aliquet orci. Consectetur nibh interdum nullam ut lobortis eu etiam sem. Et in vitae pellentesque non, lectus orci natoque faucibus suspendisse. Semper aliquam id et ultrices velit donec lacus. In odio sit nibh volutpat cras placerat sit feugiat dignissim. Rutrum et suspendisse tortor, lobortis eleifend in fringilla. Egestas cursus imperdiet cursus dui, nulla id massa. Hendrerit nam enim semper porttitor imperdiet diam semper. Nulla sit etiam cras morbi enim elementum euismod sapien.
						</div>
						<div class="home__content-delivery-description-buttons">
							<div class="home__content-delivery-description-buttons-button">Подробнее</div>
							<div class="home__content-delivery-description-buttons-button">Условия Доставки</div>
						</div>
					</div>
				</div>
			</div>

			<div class="home__content-contact">
				<div class="chapter-container">
					<div class="chapter-name">Контакты</div>
					<div class="stripe"></div>
				</div>
				<div class="home__content-contact-container">
					<div class="home__content-contact-devilery-ifno">
						<div class="delivery-time">
							<div class="delivery-time__item">
								<div class="delivery-time__item-time">
									<span>2</span>
									<span>мин</span>
								</div>
								<div class="delivery-time__item-from">из центра<br>Санкт-Петербурга</div>
							</div>
							<div class="delivery-time__item">
								<div class="delivery-time__item-time">
									<span>12</span>
									<span>мин</span>
								</div>
								<div class="delivery-time__item-from">из города<br>Зеленогорск</div>
							</div>
							<div class="delivery-time__item">
								<div class="delivery-time__item-time">
									<span>42</span>
									<span>мин</span>
								</div>
								<div class="delivery-time__item-from">из аэропорта<br>Пулково</div>
							</div>
							<div class="delivery-time__item">
								<div class="delivery-time__item-time">
									<span>52</span>
									<span>мин</span>
								</div>
								<div class="delivery-time__item-from">из города<br>Павловск </div>
							</div>
						</div>
					</div>
					<div class="map">
						здесь будет карта с инфой
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="typescript">

export default {
}
</script>

<style lang="stylus">

.home
	width 100%
	display flex
	flex-direction column

	&__main
		width 100%
		height 100vh
		display flex
		flex-direction row
		justify-content space-between
		box-sizing border-box
		background-image url('@/assets/img/home-bg.jpg')
		background-repeat no-repeat
		background-size cover
		margin-bottom 150px
		padding-left 22%

		&-text-container
			flex 1
			display flex
			flex-direction column
			justify-content flex-end
			max-width 856px
			width 100%

		&-text
			font-family Circe-Bold
			color white
			font-size 54px
			margin-bottom 180px

	&__nav-container
		flex .3
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
		list-style none
		box-sizing border-box

		&-item
			font-family Circe
			font-size 16px
			color #fff
			padding 10px 0px
			margin-right 50px
			transform transition
			cursor pointer
			letter-spacing 1px
			transition .7s ease

			&:last-child
				margin-right 0

			&:hover
				background-color var(--brown-of-light)
				padding 10px 20px

	&__content
		max-width 1376px
		width 100%
		margin-left 16%
		display flex
		flex-direction column

		&-about
			display flex
			flex-direction column
			margin-bottom 150px

			&-description
				width 100%
				display flex
				flex-direction row
				margin-left 220px

				&-container
					width 100%
					display flex
					flex-direction row
					margin-bottom 80px

					&_delivery
						margin-bottom 60px

		&-menu
			display flex
			flex-direction column
			margin-bottom 150px

			&-description
				
				display flex
				flex-direction column

				&-container
					display flex
					flex-direction row
					margin-bottom 80px
					margin-left 220px

		&-delivery
			display flex
			flex-direction column
			margin-bottom 150px

			&-description
				display flex
				flex-direction row
				margin-left 220px

				&-container
					display flex
					flex-direction column

					&>.content-text
						margin-bottom 60px
				
				&-buttons
					display flex
					flex-direction row

					&-button
						font-family Circe-Regular
						border 1px solid rgba(51, 51, 51, 0.2)
						padding 15px 30px
						color #333
						font-size 20px
						weight 700
						cursor pointer

						&:first-child
							margin-right 30px

						&:hover
							background-color var(--brown-of-light)
							color #eee

		&-contact
			display flex
			flex-direction column
			margin-bottom 150px

			&-container
				display flex
				flex-direction row
				justify-content space-between

			&-devilery-ifno
				display flex
				flex-direction row

.delivery-time
	width 418px
	display flex
	flex-direction row
	flex-wrap wrap
	justify-content space-between
	align-items center

	&__item
		max-width 196px
		width 100%
		display flex
		flex-direction column
		margin-right 24px
		margin-bottom 50px

		&:nth-child(2n)
			margin-right 0

		&-time
			color var(--brown-of-light)
			font-family Circe-Bold

			&>span:first-child
				font-size 64px
				font-family Circe-Bold
				margin-right 15px

			&>span:nth-child(2)
				font-size 32px
				font-family Circe-Bold

		&-from
			font-size 18px
			font-family Circe-Regular

.menu-carts
	width 100%
	display flex
	flex-direction row
	margin-left 220px

	&__item
		width max-content
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
	font-family Circe-Regular
	text-align center

.heading
	width 196px
	color #333
	font-family Circe-Bold
	font-size 64px
	margin-right 134px

.content-text
	font-family Circe-Regular
	font-size 18px
	max-width 526px
	width 100%
	text-align left

</style>
