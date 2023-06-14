<template>
	<Teleport to="body">
		<slot/>
	</Teleport>
</template>

<script lang="ts">
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { addFillGapTarget } from 'scroll-lock';

export default {
	props: {
		navTarget: HTMLElement,
	},

	activated() {
		disablePageScroll();
		if (this.navTarget) addFillGapTarget(this.navTarget)
	},

	deactivated() {
		enablePageScroll();
	}
}
</script>
