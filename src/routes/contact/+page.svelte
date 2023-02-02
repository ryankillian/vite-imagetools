<svelte:head>
	<title>Iliad | Contact</title>
	<meta name="description" content="Contact Information page" />
</svelte:head>
<h1>Contact Page</h1>
<article>
	<form action="POST">
		<label for="name">Name</label>
		<input type="text" id="name" name="name" />
		<label for="email">Email</label>
		<input type="email" id="email" name="email" />
		<label for="message">Message</label>
		<textarea id="message" name="message" />
		<button>Send Message</button>
	</form>
</article>
