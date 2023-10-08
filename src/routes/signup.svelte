<script>
	export let errors = null;
	export let values = null;
	export let message = null;
</script>

<style>
  body, html {
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f4;
  }
  .container {
    text-align: center;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    max-width: 400px;
    width: 100%;
    box-sizing: border-box;
  }
</style>

<section>
	<div class="container">
		<h1 style="color: #007bff;">Sign up</h1>
		{#if errors}
			<div style="color: red;">{errors.form}</div>
		{/if}
		{#if message}
			<div>{message}</div>
		{/if}
		<form method="post" style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
			<div>
				<label for="email" style="font-weight: bold; margin-bottom: 5px;">Email</label>
				<p>
					<input
						id="email"
						name="email"
						value={values?.email ?? ''}
						type="email"
						placeholder="Email"
						required
						style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px;"
					/>
				</p>
			</div>
			<div>
				<label for="password" style="font-weight: bold; margin-bottom: 5px;">Password</label>
				<p>
					<input
						id="password"
						name="password"
						value={values?.password ?? ''}
						type="password"
						placeholder="Password"
						required
						style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px;"
					/>
				</p>
			</div>
			<div>
				<p>
					<button
						style="background-color: #007bff; color: #fff; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;"
					>Sign up</button>
				</p>
			</div>
		</form>

		<div>
			<p>
				Already have an account? <a href="/" style="text-decoration: none; color: #007bff; font-weight: bold;">Sign in</a>
			</p>
		</div>
	</div>
</section>
