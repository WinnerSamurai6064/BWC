<script>
    export let loading = false;
    export let pageTitle = "New Tab";
    export let pageUrl = "";
</script>

<section class="viewport">

    <div id="chromium-surface"></div>

    {#if !pageUrl}
        <div class="new-tab">

            <div class="logo">
                🌐
            </div>

            <h1>{pageTitle}</h1>

            <p>
                Search or enter a website to begin browsing.
            </p>

        </div>
    {/if}

    {#if loading}
        <div class="loading-overlay">

            <div class="spinner"></div>

        </div>
    {/if}

</section>

<style>

.viewport{

    position:relative;

    flex:1;

    width:100%;
    height:100%;

    overflow:hidden;

    background:var(--bg);

}

#chromium-surface{

    position:absolute;

    inset:0;

    width:100%;
    height:100%;

}

.new-tab{

    position:absolute;

    inset:0;

    display:flex;

    flex-direction:column;

    align-items:center;

    justify-content:center;

    gap:18px;

    text-align:center;

    z-index:2;

}

.logo{

    width:72px;
    height:72px;

    display:flex;

    align-items:center;
    justify-content:center;

    border-radius:50%;

    font-size:2rem;

    background:var(--surface);

    backdrop-filter:blur(25px);

}

.new-tab h1{

    font-size:2rem;

}

.new-tab p{

    color:var(--text-secondary);

}

.loading-overlay{

    position:absolute;

    inset:0;

    display:flex;

    align-items:center;

    justify-content:center;

    pointer-events:none;

    z-index:5;

}

.spinner{

    width:42px;
    height:42px;

    border-radius:50%;

    border:3px solid rgba(255,255,255,.15);

    border-top-color:var(--accent);

    animation:spin .8s linear infinite;

}

@keyframes spin{

    from{
        transform:rotate(0deg);
    }

    to{
        transform:rotate(360deg);
    }

}

</style>
