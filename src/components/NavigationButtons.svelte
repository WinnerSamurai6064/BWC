<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let canGoBack = false;
    export let canGoForward = false;
    export let loading = false;

    function back() {
        dispatch('back');
    }

    function forward() {
        dispatch('forward');
    }

    function reload() {
        dispatch('reload');
    }
</script>

<div class="navigation">

    <button
        class="nav-button"
        aria-label="Back"
        disabled={!canGoBack}
        on:click={back}
    >
        ←
    </button>

    <button
        class="nav-button"
        aria-label="Forward"
        disabled={!canGoForward}
        on:click={forward}
    >
        →
    </button>

    <button
        class="nav-button"
        aria-label="Reload"
        on:click={reload}
    >
        {#if loading}
            ⟳
        {:else}
            ↻
        {/if}
    </button>

</div>

<style>

.navigation{
    display:flex;
    align-items:center;
    gap:8px;
}

.nav-button{

    width:38px;
    height:38px;

    border:none;

    border-radius:50%;

    background:transparent;

    color:var(--text);

    cursor:pointer;

    transition:
        background .2s,
        transform .15s;
}

.nav-button:hover{

    background:var(--surface-hover);

}

.nav-button:active{

    transform:scale(.94);

}

.nav-button:disabled{

    opacity:.35;

    cursor:default;

}

</style>
