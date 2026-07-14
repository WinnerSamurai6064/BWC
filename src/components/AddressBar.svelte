<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let value = '';
    export let loading = false;
    export let placeholder = 'Search or enter address';

    function submit() {
        const text = value.trim();

        if (!text) return;

        dispatch('navigate', {
            value: text
        });
    }

    function input(event) {
        value = event.currentTarget.value;

        dispatch('change', {
            value
        });
    }

    function focus() {
        dispatch('focus');
    }

    function blur() {
        dispatch('blur');
    }
</script>

<form
    class="address-bar"
    on:submit|preventDefault={submit}
>

    {#if loading}
        <div class="indicator"></div>
    {/if}

    <input
        bind:value
        type="text"
        spellcheck="false"
        autocomplete="off"
        autocapitalize="off"
        placeholder={placeholder}
        on:input={input}
        on:focus={focus}
        on:blur={blur}
    />

</form>

<style>

.address-bar{

    display:flex;
    align-items:center;

    flex:1;

    height:44px;

    padding:0 14px;

    gap:10px;

    border-radius:999px;

    background:var(--surface);

    backdrop-filter:blur(28px);
    -webkit-backdrop-filter:blur(28px);

    border:1px solid var(--border);

    transition:
        background .2s,
        border-color .2s,
        transform .18s;
}

.address-bar:focus-within{

    border-color:var(--accent);

    transform:scale(1.01);

}

.address-bar input{

    flex:1;

    background:transparent;

    color:var(--text);

    font-size:15px;

}

.address-bar input::placeholder{

    color:var(--text-secondary);

}

.indicator{

    width:8px;
    height:8px;

    border-radius:50%;

    background:var(--accent);

    animation:pulse 1s infinite;

}

@keyframes pulse{

    0%{
        opacity:.35;
        transform:scale(.85);
    }

    50%{
        opacity:1;
        transform:scale(1);
    }

    100%{
        opacity:.35;
        transform:scale(.85);
    }

}

</style>
