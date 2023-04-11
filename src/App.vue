<template>
	<div id="app">
		<Home></Home>
		<router-view/>
	</div>
</template>

<script lang="typescript">
import Home from '@/views/Home.vue'
export default {
	components: {
		Home
	}
}
</script>


<style lang="stylus">
*
	margin 0
	padding 0
	--bg-bar #262525

body,
html
	width 100%
	height 100%

#app
	height 100%
	width 100%

</style>
