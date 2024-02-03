<template>
	<ul class="segments">
		<li
			v-for="item in segments"
			:key="item.id"
			@click="segmentClick(item.id, $event)"
			class="segment"
			:class="{'segment-focus': item.id === this.segmentId}"
			ref="segment"
		>
		{{item.title}}
		</li>
	</ul>
</template>

<script lang="ts">
import {type Segment, getSegments} from '@/core/api/segments'
import {getSegment} from '@/core/api/getDishesBySegment'

export default {
	data() {
		return {
			segments: [] as Segment[],
			segmentId: '' as string,
		}
	},

	props: {
		doNeedARequestSegments: Boolean,
	},

	methods: {

		segmentClick(id: string, event: Event) {
			const routerPush = this.routerPush;

			routerPush(id);

			const target = event.target as HTMLElement;
			target.classList.add('segment-focus');
		},

		routerPush(segment: string) {
			this.$router.push({
				path: '/menu',
				query: {segment: segment}
			});
			
			this.$emit('segmentId', this.segmentId);
		}
	},

	watch: {
		async $route() {
			const
				{routeSegment} = this;

			if (typeof routeSegment === "string") {
				this.$emit('dishes', await getSegment(routeSegment));
				this.segmentId = routeSegment;
			}

		}
	},

	computed: {
		routeSegment() {
			return this.$route.query['segment'];
		},

	},

	created() {
		const {routeSegment, routerPush} = this;

		if (typeof routeSegment === 'string') {
			this.segmentId = routeSegment;
		}

		if (this.doNeedARequestSegments) {
			getSegments()
				.then((r) => {
					this.segments = r;

					if (routeSegment) {
						routerPush(this.segmentId)

						return getSegment(this.segmentId);
					}

					routerPush(this.segments[0].id);

					return getSegment(this.segments[0].id);
				})
				.then((r) => {
					this.$emit('dishes', r);
				})

		}

		getSegments()
			.then((r) => {
				this.segments = r;
			})
	},
}

</script>

<style lang="stylus">
@require "../assets/style/breakpoints.styl"

.segments
	padding-bottom 15px
	display flex
	width 100%
	list-style none
	overflow scroll
	justify-content center

	&::-webkit-scrollbar
		height 7px
		width 100px

	&::-webkit-scrollbar-thumb
		background-color var(--dark)
		border-radius 7px

.segment-container
	display flex
	margin-bottom 61px
	max-width 1296px
	width 100%
	overflow-x hidden
	justify-content center

.segment
	margin-right 40px
	font-size 16px
	font-weight 400
	padding-bottom 5px
	white-space nowrap
	cursor pointer

	&:last-child
		margin-right 0

	&:hover
		border-bottom 3px solid var(--brown-of-light)
		padding-bottom 2px

	&-focus
		border-bottom 3px solid var(--brown-of-light)
		padding-bottom 2px

@media (max-width $bp-one) {
	.segments {
		justify-content flex-start
	}
}


</style>