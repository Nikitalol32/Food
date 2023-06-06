<template>
	<div
		class="sidebar"
		:class="{active: isActive, hidden: isOpenModal}"
	>
		<div class="sidebar__container">
			<Logo class="sidebar__logo" @click="closeSidebar"/>
			<div class="sidebar__close-icon" @click="closeSidebar">
				<div class="sidebar__close-stick"></div>
				<div class="sidebar__close-stick"></div>
			</div>
			<div
				class="sidebar__open-icon"
				@click="openSidebar"
				ref="menuIcon"
			>
				<div class="sidebar__open-stick"></div>
				<div class="sidebar__open-stick"></div>
				<div class="sidebar__open-stick"></div>
			</div>
		</div>

		<div class="sidebar__nav-container">
			<Navigation
				class="sidebar__nav"
				:closeSidebar="closeSidebar"
				v-on:showModal="showModal"
			/>
		</div>

		<div class="sidebar__links">
			<a href="https://www.youtube.com/watch?v=Zo_eZrICCBw" class="sidebar__link">
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
import Navigation from '@/components/Navigation.vue'
import Logo from '@/components/Logo.vue'

export default {
	props: {
		openModal: Boolean,
	},
	data() {
		return {
			isActive: false as boolean,
			isOpenModal: false as boolean,
		}
	},

	components: {
		Navigation,
		Logo,
	},

	methods: {
		openSidebar() {
			this.isActive = true;
			document.body.style.overflow = "hidden";
		},

		closeSidebar() {
			this.isActive = false;
			document.body.style.overflow = "";
		},

		showModal(isOpen: boolean) {
			this.isOpenModal = isOpen;
			this.$emit('showModal', isOpen);
		}
	},

	watch: {
		$route() {
			this.closeSidebar();
			window.scrollTo(0, 0);
		}
	}

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
	z-index 99

	&__open-icon
		display flex
		flex-direction column
		justify-content space-between
		width 33.33px
		height 24.33px
		cursor pointer

		&:hover > .sidebar__open-stick
			width 100%

	&__open-stick
		width 90%
		height 3px
		border-radius 3px
		background-color var(--brown-of-light)
		transition .7s ease-in-out

		&:first-child
			width 53%

		&:last-child
			width 66%

	&__close-icon
		width 21px
		height @width
		display none
		cursor pointer
		align-items center

	&__close-stick
		width 20px
		height 3px
		border-radius 3px
		background-color var(--brown-of-light)
		position absolute
		cursor pointer

		&:first-child
			transform rotate(45deg)

		&:last-child
			transform rotate(-45deg)

	&__container
		display flex
		flex-direction column
		align-items center

	&__logo
		margin-bottom 28px

	&__nav-container
		display flex
		justify-content center
		width 100%
		height 100%

	&__nav
		display none
		flex-direction column
		justify-content center
		align-items center
		width max-content
		height 100%
		padding 0

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

.active
	width 100%

	& .sidebar__open-icon
		display none

	& .sidebar__close-icon
		display flex

	& .nav
		display flex
		position relative

		&-item
			margin 0 0 60px 0
			font-size 48px

	& .sidebar__links
		flex-direction row
		align-items center

	& .sidebar__link
		margin 0 25px 0 0

		&:last-child
			margin-right 0

.hidden
	visibility hidden

</style>
