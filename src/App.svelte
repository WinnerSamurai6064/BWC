<script>
    // Temporary application state.
    // These will eventually come from the Chromium backend.

    let address = '';
    let pageTitle = 'New Tab';
    let loading = false;

    function navigate() {
        const url = address.trim();

        if (!url) return;

        console.log('Navigate:', url);

        // Backend API will replace this later.
    }
</script>

<svelte:head>
    <title>{pageTitle}</title>
</svelte:head>

<div class="browser">

    <header class="toolbar">

        <button aria-label="Back">
            ←
        </button>

        <button aria-label="Forward">
            →
        </button>

        <button aria-label="Reload">
            ↻
        </button>

        <form
            class="address-form"
            on:submit|preventDefault={navigate}
        >
            <input
                bind:value={address}
                type="text"
                placeholder="Search or enter address"
                spellcheck="false"
                autocomplete="off"
                autocapitalize="off"
            />
        </form>

        <button aria-label="New Tab">
            ＋
        </button>

        <button aria-label="Menu">
            ⋮
        </button>

    </header>

    <main class="viewport">

        <div class="new-tab">

            <h1>{pageTitle}</h1>

            <p>
                Chromium rendering surface will appear here.
            </p>

        </div>

        {#if loading}
            <div class="loading">
                Loading...
            </div>
        {/if}

    </main>

</div>
