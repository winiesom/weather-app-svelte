<script>
	import Header from  "./components/Header.svelte";
	import Footer from  "./components/Footer.svelte";
	import Form from  "./components/Form.svelte";
	import CitiesList from  "./components/CitiesList.svelte";

</script>

<Header />

<main>
	<Form />
	<CitiesList />
</main>

<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
		padding: 20px;
		height: 400px;
		overflow: scroll;
	}

	@media (min-width: 300px) and (max-width: 599px) {
        main {
            height: 450px;
        }
    }

	@media (max-width: 600px) {
        main {
            height: 800px;
        }
    }
</style>