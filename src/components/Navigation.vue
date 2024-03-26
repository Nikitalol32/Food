<template>
	<div class="nav" ref="nav">
		<router-link
			class="nav-item"
			to="/menu"
			@click="menuClick"
			v-analytics="{
				events: ['click'],
				params: {
					slug: 'navMenu',
				}
			}"
		>
			Меню
		</router-link>
		<div
			class="nav-item"
			@click="closeSidebar()"
			v-analytics="{
				events: ['click'],
				params: {
					slug: 'navDelivery',
				}
			}"
		>
			Доставка
		</div>
		<div
			class="nav-item"
			@click="closeSidebar()"
			v-analytics="{
				events: ['click'],
				params: {
					slug: 'navPay',
				}
			}"
		>
			Оплата
		</div>
		<div
			class="nav-item"
			@click="showModal(true)"
			v-analytics="{
				events: ['click'],
				params: {
					slug: 'navReservation ',
				}
			}"
		>
			Бронь столика
		</div>
		<keep-alive>
			<component v-if="modalActive" :is="modal" :navTarget="this.$refs.nav">
				<Reservation v-show="modalActive" @showModal="showModal"/>
			</component >
		</keep-alive>
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
			modalPos: '',
			modalActive: false,
			modal: '',
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

			this.modalActive = isShow;

			if (this.modal === '') {
				this.modal = 'DialogModal';

			} else this.modal = ''
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
	width 100%
	height 85px
	display flex
	flex-direction row
	align-items center
	box-sizing border-box
	position fixed
	padding 0px 100px 0 0
	justify-content flex-end
	z-index 98

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