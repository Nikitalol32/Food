<template>
	<div class="nav">
		<router-link
			class="nav-item"
			to="/menu"
			@click="menuClick"
		>
			Меню
		</router-link>
		<div class="nav-item" @click="closeSidebar()">Доставка</div>
		<div class="nav-item" @click="closeSidebar()">Оплата</div>
		<router-link
			class="nav-item"
			@click="showModal(true)"
			to="/"
		>
			Бронь столика
		</router-link>
		<DialogModal v-if="modalActive">
			<Reservation
				@showModal="showModal"
			/>
		</DialogModal>
	</div>

</template>

<script lang="ts">
import DialogModal from '@/components/DialogModal.vue';
import Reservation from '@/components/Reservation.vue';

export default {
	props: {
		closeSidebar: Function,
	},

	data() {
		return {
			modalActive: false,
		}
	},

	components: {
		DialogModal,
		Reservation,
	},

	methods: {
		showModal(isShow: boolean) {
			if (this.closeSidebar) {
				this.closeSidebar();
			}

			if (this.modalActive) {
				document.body.style.overflow = ''

			} else {
				document.body.style.overflow = 'hidden';
				window.scrollTo(0, 0);
			}

			this.modalActive = isShow;
		},

		menuClick() {
			if (this.closeSidebar) {
				this.closeSidebar();

			}

		}
	},
}
</script>

<style lang="stylus">

.nav
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

</style>