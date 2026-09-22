<svelte:head>
  <title>PROJETOS | Guilherme Carvalho</title>
  <meta name="description" content="Projetos e aplicações fullstack desenvolvidos por Guilherme Carvalho." />
</svelte:head>

<script>
  import projects from "$lib/projects.json";
  import Project from "$lib/Project.svelte";

  let query = "";

  $: filteredProjects = projects.filter(project => {
    let searchable = [
      project.title,
      project.description,
      project.year,
      project.category || "",
      ...(project.tags || [])
    ].join(" ").toLowerCase();
    return searchable.includes(query.toLowerCase());
  });

  function clearFilters() {
    query = "";
  }
</script>

<div class="projects-retro-page">
  <header class="retro-header">
    <div class="tag-ps1">[ARQUIVO DE PROJETOS]</div>
    <h1>PROJETOS</h1>
    <p class="header-desc">
      Aplicações web completas, arquiteturas resilientes e soluções em produção desenvolvidas por Guilherme Carvalho.
    </p>
  </header>

  <!-- Search & Command Console -->
  <div class="console-controls">
    <div class="search-terminal">
      <span class="term-prompt">&gt;_ SEARCH:</span>
      <input
        type="search"
        bind:value={query}
        aria-label="Buscar projetos por nome, descrição ou tag"
        placeholder="DIGITE UM TÍTULO OU TECNOLOGIA (REACT, NEXT.JS, SUPABASE, PWA)..."
      />
      {#if query}
        <button type="button" class="term-clear" on:click={() => query = ""}>[CLR]</button>
      {/if}
    </div>

    <div class="save-blocks-counter">
      PROJETOS EM EXIBIÇÃO: <strong>{filteredProjects.length}</strong> / {projects.length}
    </div>
  </div>

  <!-- Projects Grid (Memory Card Slots) -->
  {#if filteredProjects.length > 0}
    <div class="projects">
      {#each filteredProjects as p (p.title)}
        <Project data={p} hLevel="2" />
      {/each}
    </div>
  {:else}
    <div class="game-over-box">
      <div class="go-title">NO DATA FOUND</div>
      <p>Nenhum slot de gravação corresponde aos parâmetros de busca informados.</p>
      <button type="button" class="retro-btn" on:click={clearFilters}>
        [RESET SEARCH]
      </button>
    </div>
  {/if}
</div>

<style>
  .projects-retro-page {
    padding-top: 0.5rem;
  }

  .retro-header {
    margin-bottom: 2rem;
  }

  .tag-ps1 {
    font-family: var(--font-pixel);
    font-size: 0.7rem;
    color: var(--color-accent);
    margin-bottom: 0.4rem;
  }

  .retro-header h1 {
    margin: 0 0 0.5rem 0;
  }

  .header-desc {
    font-size: 1rem;
    max-width: 70ch;
    margin: 0;
    color: var(--text-muted);
  }

  /* Search Terminal */
  .console-controls {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .search-terminal {
    flex: 1 1 340px;
    display: flex;
    align-items: center;
    background: var(--bg-card);
    border: 2px solid var(--border-color);
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
    padding: 0 10px;
  }

  .term-prompt {
    font-family: var(--font-pixel);
    font-size: 0.65rem;
    color: var(--color-accent);
    white-space: nowrap;
    margin-right: 8px;
    font-weight: bold;
  }

  .search-terminal input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: var(--text-main);
    font-family: var(--font-hud);
    font-size: 1.25rem;
    padding: 8px 0;
  }

  .term-clear {
    all: unset;
    cursor: pointer;
    font-family: var(--font-pixel);
    font-size: 0.65rem;
    color: var(--color-accent);
    padding: 4px;
  }

  .save-blocks-counter {
    font-family: var(--font-ui);
    font-size: 0.8rem;
    color: var(--text-muted);
  }

  .save-blocks-counter strong {
    color: var(--color-accent);
  }

  /* Game Over / Empty Box */
  .game-over-box {
    text-align: center;
    background: #000000;
    border: 3px solid var(--border-color);
    box-shadow: var(--shadow-pixel);
    padding: 3.5rem 1.5rem;
    margin-top: 2rem;
  }

  .go-title {
    font-family: var(--font-pixel);
    font-size: 1.5rem;
    color: var(--color-accent);
    margin-bottom: 0.75rem;
  }

  .game-over-box p {
    font-family: var(--font-hud);
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
</style>