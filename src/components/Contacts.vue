<template>
	<section class="contact">
		<div class="chapter-container">
			<div class="chapter-name">Контакты</div>
			<div class="stripe"></div>
		</div>
		<div class="contact-container">
			<div class="contact-delivery-info">
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
	</section>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="stylus">

.contact
	display flex
	flex-direction column
	margin-bottom 150px

	&-container
		display flex
		flex-direction row
		justify-content space-between

	&-delivery-info
		display flex
		flex-direction row

.delivery-time
	width 418px
	display flex
	flex-direction row
	flex-wrap wrap
	align-items center

	&__item
		max-width 165px
		width 100%
		display flex
		flex-direction column
		margin-right 24px
		margin-bottom 50px

		&:nth-child(2n)
			margin-right 0

		&-time
			color var(--brown-of-light)
			font-weight 400

			&>span:first-child
				font-size 64px
				margin-right 15px

			&>span:nth-child(2)
				font-size 32px

		&-from
			font-size 18px
			font-weight 400

</style>