<script lang="ts">
	// @ts-nocheck
	import type { ActionData } from './$types';
	import { enhance, type SubmitFunction } from '$app/forms';
	export let form: ActionData;

	let loading = false;
	let submitted = false;

	const submitMessage: SubmitFunction = (input) => {
		loading = true;
		return async ({ update }) => {
			submitted = true;
			loading = false;
			await update();
		};
	};
</script>

<svelte:head>
	<title>Iliad | Contact</title>
	<meta name="description" content="Contact Information page" />
</svelte:head>

<h1>Contact Page</h1>

<article>
	{#if form?.success || submitted}
		<p class="center">Thanks for your message. I'll get back to you as soon as I can.</p>
	{:else}
		<form method="POST" use:enhance={submitMessage}>
			<label for="username">Name</label>
			<input
				type="text"
				id="username"
				name="username"
				value={form?.data?.username ?? ''}
				disabled={loading}
				required
			/>
			{#if form?.errors.username}
				<label for="name"><span class="error">{form?.errors.username[0]}</span></label>
			{/if}
			<label for="email">Email</label>
			<input
				type="email"
				id="email"
				name="email"
				value={form?.data?.email ?? ''}
				disabled={loading}
				required
			/>

			{#if form?.errors.email}
				<label for="email"><span class="error">{form?.errors.email[0]}</span></label>
			{/if}
			<label for="message">Message</label>
			<textarea
				id="message"
				name="message"
				value={form?.data?.message ?? ''}
				disabled={loading}
				required
			/>
			{#if form?.errors?.message}
				<label for="message"><span class="error">{form?.errors.message[0]}</span></label>
			{/if}
			<button aria-busy={loading} class:secondary={loading}>Send Message</button>
		</form>
	{/if}
</article>

<style>
	h1 {
		text-align: center;
	}
	.center {
		text-align: center;
	}
	.error {
		color: tomato;
	}
</style>
