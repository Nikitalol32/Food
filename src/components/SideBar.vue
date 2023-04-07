<template>
	<div class="side-bar">
		<div class="side-bar__container">
			<img class="side-bar-logo" src="@/assets/img/logo.svg">
			<img class="side-bar-menu" src="@/assets/img/menu-icon.svg">
		</div>

		<div class="side-bar__links">
			<a class="side-bar__link">
				<img src="@/assets/img/youtube.svg" class="side-bar_link-icon">
			</a>
			<a class="side-bar__link">
				<img src="@/assets/img/vk.svg" class="side-bar_link-icon">
			</a>
			<a class="side-bar__link">
				<img src="@/assets/img/telegram.svg" class="side-bar_link-icon">
			</a>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.side-bar
	height 100vh
	padding 30px 20px
	display flex
	flex-direction column
	justify-content space-between
	align-items center
	background-color var(--bg-bar)
	box-sizing border-box

	&__container
		display flex
		flex-direction column
		align-items center

	&-logo
		margin-bottom 28px

	&__links
		display flex
		flex-direction column
		align-items center

	&__link
		margin-bottom 40px

	&__link:last-child
		margin-bottom 0px

</style>
