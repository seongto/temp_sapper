<script>
	import Nav from '../components/Nav.svelte';

	export let segment = 'blog';
</script>



<main>
	<slot></slot>
</main>


<style lang="scss" global>
	@import "../assets/style/global.scss";
</style>