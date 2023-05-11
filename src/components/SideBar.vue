<template>
	<div class="sidebar">
		<div class="sidebar__container">
			<router-link
				class="sidebar__logo-container"
				to="/"
			>
				<img src="@/assets/img/logo.svg" alt="" class="sidebar__logo">
			</router-link>
			<div class="sidebar__menu-icon">
				<div class="sidebar__menu-icon-stick"></div>
				<div class="sidebar__menu-icon-stick"></div>
				<div class="sidebar__menu-icon-stick"></div>
			</div>
		</div>

		<div class="sidebar__links">
			<a href="" class="sidebar__link">
				<img class="sidebar_link-icon" src="@/assets/img/youtube.svg">
			</a>
			<a href="https://vk.com/video299855748_456240381" class="sidebar__link">
				<img class="sidebar_link-icon" src="@/assets/img/vk.svg">
			</a>
			<a href="https://t.me/+O75ZNR7zrbs5Yjdi" class="sidebar__link">
				<img class="sidebar_link-icon" src="@/assets/img/telegram.svg">
			</a>
		</div>
	</div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="stylus">
.sidebar
	position fixed
	height 100vh
	padding 30px 20px
	display flex
	flex-direction column
	justify-content space-between
	align-items center
	background-color var(--dark)

	&__menu-icon
		display flex
		flex-direction column
		justify-content space-between
		width 33.33px
		height 24.33px
		cursor pointer

		&:hover > .sidebar__menu-icon-stick
			width 100%

		&-stick
			width 90%
			height 3px
			border-radius 3px
			background-color var(--brown-of-light)
			transition .7s ease-in-out

			&:first-child
				width 53%

			&:last-child
				width 66%

	&__container
		display flex
		flex-direction column
		align-items center

	&__logo-container
		margin-bottom 28px

	&__logo
		cursor pointer

	&__links
		display flex
		flex-direction column
		align-items center

	&__link
		margin-bottom 40px
		cursor pointer
		transition .3s ease-in-out

		&:hover
			transform scale(1.2)

	&__link:last-child
		margin-bottom 0px

</style>
