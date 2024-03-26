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
				<YandexMap
					class="ymaps"
					:settings="settingsMap"
					:coordinates="coordinates"
					:zoom="zoom"
				>
					<YandexMarker
						v-for="(restaurant, i) in restaurants"
						:key="i"
						:coordinates="[restaurant.coords[0] , restaurant.coords[1]]"
						:marker-id="i"
						icon="@/assets/img/yMarker.png"
						class="marker"
						@click="markClick(i)"
					/>
				</YandexMap>
				<div class="description" v-if="openDescription">
					<div class="description__close-icon" @click="openDescription = false">
						<div class="description__close-icon-stick"></div>
						<div class="description__close-icon-stick"></div>
					</div>
					<div class="description__address-and-number">
						<div class="description__address-container">
							<img src="@/assets/img/marker.svg" alt="" class="description__icon">
							<div class="description__address">{{address}}</div>
						</div>
						<div class="description__number">
							<img src="@/assets/img/call-icon.svg" alt="" class="description__icon">
							<div class="description__call-number">{{number}}</div>
						</div>
					</div>
					<div class="description__info">
						<div class="description__header">Время работы</div>
						<div class="description__work-hours-container">
							<div class="description__work-hours">
								<div class="description__days">Вск-Чт</div>
								<div class="description__time">{{workTime[0]}}</div>
							</div>
							<div class="description__work-hours">
								<div class="description__days">Пт-Сб</div>
								<div class="description__time">{{workTime[1]}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { YandexMap, YandexMarker } from 'vue-yandex-maps'; // Яндекс карты
import {type Restaurants, getRestaurants} from '@/core/api/restaurants'; // Рестораны
// import dotenv from 'dotenv'
// import {token} from '../../webpack.config'

export default {
	data() {
		return {
			coordinates: [] as Number[], // Текущие координаты
			openDescription: false,
			workTime: [] as String[], // Время работы ресторана
			address: '' as String, // Адрес ресторана
			number: '' as String, // Номер ресторана
			zoom: 5, // Приближение карты
			settingsMap: {
				apiKey: import.meta.env.VITE_YAMAP_KEY, // Индивидуальный ключ API
				lang: 'ru_RU', // Используемый язык
				coordorder: 'latlong', // Порядок задания географических координат
				debug: false, // Режим отладки
				version: '2.1', // Версия Я.Карт
			},
			restaurants: [] as Restaurants, // Рестораны
		}
	},

	methods: {
		markClick(id: number) {
			const {coords, full, number, workTime} = this.restaurants[id];

			this.coordinates = coords;
			this.address = full;
			this.workTime = workTime;
			this.number = number;
			this.openDescription = true;
			this.zoom = 16;
		},
	},

	async created() {
		const restaurants = await getRestaurants;
		this.restaurants = restaurants;

		this.coordinates = restaurants[0].coords
		this.settingsMap.apiKey
	},

	components: {
		YandexMap,
		YandexMarker
	}

}
</script>

<style lang="stylus">
.ymaps
	width 100%
	height 100%

.marker
	width 15px
	height @width
	background-color blue

.contact
	display flex
	flex-direction column
	margin-bottom 150px

	&-container
		display flex
		flex-direction row

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


.map
	position relative
	width 746px
	height 450px
	border 1px solid rgba(51, 51, 51, 0.2)
	font-size 32px
	font-family Circe
	font-weight 400
	text-align center

.description
	position absolute
	background-color rgba(91, 91, 91, 1)
	top 310px
	left -80px
	display flex
	flex-direction column
	font-size 18px
	padding 32px
	color white
	font-weight 100
	max-width 450px

	&__close-icon
		position absolute
		width 15px
		height @width
		margin-bottom 20px
		right 10px
		top 10px
		cursor pointer

		&-stick
			background-color white
			width 100%
			height 2px
			position absolute
			top 50%

			&:nth-child(1)
				rotate 45deg
				
			&:nth-child(2)
				rotate -45deg

	&__address-and-number
		display flex
		flex-direction column
		margin-bottom 30px

	&__address-container
		display flex
		align-items center
		margin-bottom 20px
	
	&__icon
		width 20px
		height @width
		margin-right 15px

	&__address
		display flex
		flex-wrap wrap
		text-align start

	&__number
		display flex
		align-items center
		flex-direction row

	&__call-number
		height 16px

	&__header
		font-weight 400
		font-size 20px
		text-align start
		margin-bottom 20px

	&__work-hours
		display flex
		flex-direction row

		&:nth-child(1)
			margin-bottom 20px

	&__days
		font-weight 400
		margin-right 15px

</style>