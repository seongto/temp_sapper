<script context="module">
	export async function preload(page, session) {

		const resp = await this.fetch(`blog/${page.params.postId}.json`);
		const data = await resp.json();


		if (resp.status === 200) {
			return { post: data.postData };
		} else {
			this.error(resp.status, data.message);
		}

		
	}
</script>

<script>
	import {onMount} from 'svelte';

	export let post;
	let viewer;

	let blogStyle = 'BlogStyle-001';
    

	onMount(async () => {

		const viewerModule = await import('@toast-ui/editor/dist/toastui-editor-viewer')
			.then(resp => {
				viewer = new resp.default({
					el: viewer,
					initialValue: post.contents
				});
			}
		);
	});

</script>

<svelte:head>
	<title>allius blog | {post.title}</title>
    <meta name="title" content="allius blog | {post.title}" />
    <meta property="og:title" content="allius blog | {post.title}" />
    <meta property="twitter:title" content="allius blog | {post.title}" />
    <meta name="description" content="{post.description}" />
    <meta property="og:description" content="{post.description}" />
    <meta property="twitter:description" content="{post.description}" />
    <meta property="og:image" content="{post.thumnail}" />
    <meta property="twitter:image" content="{post.thumnail}" />
    <meta property="og:image:alt" content="allius blog" />
    <meta property="twitter:image:alt" content="allius blog" />
    <meta property="og:type" content="website" />
	<link rel='icon' type='image/png' href='/allius-favicon-01.png'>
</svelte:head>

<h1>{post.title} 입니다.</h1>

<div class='post-viewer' bind:this={viewer}></div>



<style lang="scss">
	@import '../../assets/style/common.scss';
	
	
	
</style>


