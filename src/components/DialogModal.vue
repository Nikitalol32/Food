<template>
	<Teleport
		to="body"
	>
		<slot></slot>
	</Teleport>
</template>

<script lang="ts">
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export default {
	props: ['modalActive'],

	created() {
		disablePageScroll();
	},

	beforeUnmount() {
		enablePageScroll();
	}

	
}
</script>
