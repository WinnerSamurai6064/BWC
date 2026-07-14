<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let open = false;

    export let tabs = [];

    export let activeTab = null;

    export let maxTabs = 5;

    function select(tab) {
        dispatch('select', tab);
    }

    function close(tab) {
        dispatch('close', tab);
    }

    function createTab() {
        if (tabs.length >= maxTabs) {
            dispatch('limit');
            return;
        }

        dispatch('newtab');
    }
</script>

{#if open}

<div class="overlay">

    <div class="cards">

        {#each tabs as tab (tab.id)}

            <div
                class:selected={tab.id===activeTab}
                class="card"
                on:click={() => select(tab)}
            >

                <div class="preview">

                    {#if tab.thumbnail}

                        <img
                            src={tab.thumbnail}
                            alt={tab.title}
                        />

                    {:else}

                        <div class="placeholder">

                            {tab.title}

                        </div>

                    {/if}

                </div>

                <div class="footer">

                    <div>

                        <h3>{tab.title}</h3>

                        <small>{tab.url}</small>

                    </div>

                    <button
                        on:click|stopPropagation={() => close(tab)}
                    >
                        ✕
                    </button>

                </div>

            </div>

        {/each}

        {#if tabs.length < maxTabs}

        <button
            class="new-tab"
            on:click={createTab}
        >

            +

            <span>New Tab</span>

        </button>

        {/if}

    </div>

</div>

{/if}

<style>

.overlay{

    position:fixed;

    inset:0;

    padding:22px;

    overflow-y:auto;

    background:
        rgba(0,0,0,.45);

    backdrop-filter:blur(35px);

    z-index:2000;

}

.cards{

    display:grid;

    gap:22px;

}

.card{

    overflow:hidden;

    border-radius:28px;

    background:white;

    cursor:pointer;

    transition:.25s;

}

.card:hover{

    transform:translateY(-2px);

}

.preview{

    aspect-ratio:9/16;

    overflow:hidden;

}

.preview img{

    width:100%;

    height:100%;

    object-fit:cover;

}

.placeholder{

    display:flex;

    align-items:center;

    justify-content:center;

    width:100%;

    height:100%;

}

.footer{

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:18px;

}

.footer h3{

    margin-bottom:4px;

}

.footer small{

    opacity:.6;

}

.new-tab{

    aspect-ratio:9/16;

    border-radius:28px;

    border:2px dashed
    rgba(255,255,255,.25);

    background:transparent;

    color:white;

    display:flex;

    flex-direction:column;

    align-items:center;

    justify-content:center;

    gap:14px;

    font-size:2rem;

}

.selected{

    outline:4px solid
    var(--accent);

}

</style>
