<script>
    import { createEventDispatcher } from 'svelte';

    import NavigationButtons from './NavigationButtons.svelte';
    import AddressBar from './AddressBar.svelte';

    const dispatch = createEventDispatcher();

    export let address = '';
    export let loading = false;

    export let canGoBack = false;
    export let canGoForward = false;

    function emit(name, detail = {}) {
        dispatch(name, detail);
    }
</script>

<header class="toolbar">

    <NavigationButtons
        {loading}
        {canGoBack}
        {canGoForward}
        on:back={() => emit('back')}
        on:forward={() => emit('forward')}
        on:reload={() => emit('reload')}
    />

    <AddressBar
        bind:value={address}
        {loading}
        on:navigate={(e) => emit('navigate', e.detail)}
        on:change={(e) => emit('change', e.detail)}
    />

    <button
        class="toolbar-button"
        aria-label="New Tab"
        on:click={() => emit('newtab')}
    >
        ＋
    </button>

    <button
        class="toolbar-button"
        aria-label="Menu"
        on:click={() => emit('menu')}
    >
        ⋮
    </button>

</header>

<style>

.toolbar{

    display:flex;

    align-items:center;

    gap:10px;

    padding:12px;

    background:var(--surface);

    backdrop-filter:blur(30px);
    -webkit-backdrop-filter:blur(30px);

    border-bottom:1px solid var(--border);

}

.toolbar-button{

    width:40px;
    height:40px;

    display:flex;

    align-items:center;
    justify-content:center;

    border-radius:50%;

    border:none;

    background:transparent;

    color:var(--text);

    cursor:pointer;

    transition:
        background .18s,
        transform .15s;

}

.toolbar-button:hover{

    background:var(--surface-hover);

}

.toolbar-button:active{

    transform:scale(.94);

}

</style>
