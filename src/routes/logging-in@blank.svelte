<script>
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let redirectPath = '/dashboard';

	$: {
		const redirectTo = $page.url.searchParams.get('redirect');
		if (redirectTo) {
			redirectPath = redirectTo;
		}
		// check if user has been set in session store then redirect
		if ($session?.user?.id) {
			goto(redirectPath);
		}
	}
</script>

<style>
	/* Apply styles to the entire page */
	body, html {
		margin: 0;
		padding: 0;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #f4f4f4;
	}

	/* Apply styles to the section */
	section {
		text-align: center;
	}

	/* Apply styles to the progress bar */
	.progress.indeterminate {
		animation-duration: 3.8s;
	}
</style>

<section>
	<div>
		<progress class="progress indeterminate" max="100" />
	</div>
	<div>
		Signing in from the email confirmation link...
	</div>
</section>
