<svelte:head>
  <title>Guilherme Carvalho | FGV EMAp Data Science & AI</title>
  <meta name="description" content="Portfólio de Guilherme Carvalho - Ciência de Dados e Inteligência Artificial na FGV EMAp. Machine Learning, Inferência Causal e Engenharia de Dados." />
</svelte:head>

<script>
  import projects from "$lib/projects.json";
  import Project from "$lib/Project.svelte";
  import { base } from "$app/paths";
  import { onMount } from "svelte";

  let githubData = null;
  let joinYear = null;
  let languageCount = 0;
  let lastActivityRepo = null;
  let lastActivityAgo = "—";
  let loading = true;
  let error = null;

  function timeAgo(dateStr) {
    const diffDays = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000);
    if (diffDays <= 0) return "HOJE";
    if (diffDays === 1) return "ONTEM";
    if (diffDays < 30) return `HÁ ${diffDays} DIAS`;
    if (diffDays < 365) return `HÁ ${Math.floor(diffDays / 30)} MESES`;
    return `HÁ ${Math.floor(diffDays / 365)} ANOS`;
  }

  const techStack = [
    {
      category: "DADOS & MACHINE LEARNING",
      items: ["Machine Learning", "Deep Learning", "XGBoost", "LightGBM", "Inferência Causal", "Controles Sintéticos", "Séries Temporais", "Simulação de Monte Carlo", "Testes A/B"]
    },
    {
      category: "ENGENHARIA DE DADOS",
      items: ["Python", "SQL", "Pandas", "NumPy", "BigQuery", "dbt", "Apache Airflow"]
    },
    {
      category: "WEB & VISUALIZAÇÃO",
      items: ["React.js", "Next.js", "SvelteKit", "Streamlit", "Looker Studio", "Power BI", "Figma"]
    }
  ];

  onMount(async () => {
    try {
      const response = await fetch("https://api.github.com/users/carvguilherme8");
      if (!response.ok) throw new Error("Falha na conexão com servidor GitHub");
      githubData = await response.json();
      joinYear = new Date(githubData.created_at).getFullYear();

      const reposResponse = await fetch("https://api.github.com/users/carvguilherme8/repos?per_page=100");
      if (reposResponse.ok) {
        const repos = await reposResponse.json();

        languageCount = new Set(repos.map((repo) => repo.language).filter(Boolean)).size;

        const mostRecent = repos.reduce((latest, repo) => {
          if (!repo.pushed_at) return latest;
          if (!latest || new Date(repo.pushed_at) > new Date(latest.pushed_at)) return repo;
          return latest;
        }, null);
        if (mostRecent) {
          lastActivityRepo = mostRecent.name;
          lastActivityAgo = timeAgo(mostRecent.pushed_at);
        }
      }
    } catch (err) {
      error = err;
    } finally {
      loading = false;
    }
  });
</script>

<!-- HERO: PS1 Character Select Screen -->
<section class="ps1-hero">
  <!-- Character Stats & Dialogue Box -->
  <div class="character-hud">
    <div class="hud-top-tag">
      <span class="p1-blink">● DISPONÍVEL</span>
      <span class="hud-poly-tag">FGV EMAp</span>
    </div>

    <h1 class="hud-name">
      GUILHERME <br />
      <span class="neon-name">CARVALHO</span>
    </h1>

    <div class="class-title">
      <span class="rpg-class">DATA SCIENTIST & AI ENGINEER</span>
    </div>

    <!-- Bio Text Box -->
    <div class="rpg-dialog-box">
      <p class="dialog-text">
        "Graduando em Ciência de Dados e Inteligência Artificial na FGV EMAp.
        Experiência com modelagem preditiva de receita (XGBoost), simulações de Monte Carlo, testes A/B,
        inferência causal (Controles Sintéticos) e engenharia de dados (BigQuery, dbt, Airflow).
        6x medalhista nacional na OBMEP e bolsista CNPq."
      </p>
    </div>

    <!-- Action Buttons (Controller style) -->
    <div class="hero-actions">
      <a href="{base}/projects" class="retro-btn btn-start">
        <span class="btn-symbol ps-sq">◼</span>
        VER PROJETOS
      </a>
      <a href="{base}/resume" class="retro-btn btn-meta">
        <span class="btn-symbol ps-tri">▲</span>
        CURRÍCULO COMPLETO
      </a>
      <a href="{base}/contact" class="retro-btn btn-contact">
        <span class="btn-symbol ps-circ">●</span>
        CONTATO
      </a>
    </div>
  </div>

  <!-- Profile Photo Frame (Windows 98 window) -->
  <div class="win98-window">
    <div class="win98-screen"></div>
    <img
      src="{base}/images/profile.png"
      alt="Foto estilizada de Guilherme Carvalho"
      class="win98-avatar"
    />
    <img
      src="{base}/images/profile_border.png"
      alt=""
      class="win98-frame"
    />
  </div>
</section>

<!-- Skills / Tech Stack -->
<section class="skills-hud-section">
  <div class="box-title-bar">
    <h3>HABILIDADES & TECH STACK</h3>
    <span class="box-hint">EXPERTISE PRINCIPAL</span>
  </div>
  <div class="tech-categories">
    {#each techStack as group}
      <div class="tech-category">
        <h4 class="tech-category-title">{group.category}</h4>
        <div class="tech-tags">
          {#each group.items as item}
            <span class="tech-tag">{item}</span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Live GitHub Stats -->
<section class="stats-hud-section">
  <div class="box-title-bar">
    <h2>ESTATÍSTICAS DO GITHUB [AO VIVO]</h2>
    {#if githubData}
      <a href="https://github.com/{githubData.login}" target="_blank" rel="noopener noreferrer" class="gh-link-tag">
        @{githubData.login} ↗
      </a>
    {/if}
  </div>

  {#if loading}
    <div class="loading-box">
      <span class="loading-blink">CARREGANDO DADOS DO GITHUB...</span>
    </div>
  {:else if error}
    <div class="error-box">
      <span>NETWORK ERROR: {error.message}</span>
    </div>
  {:else if githubData}
    <div class="stats-cards-grid">
      <div class="stat-card-pixel">
        <span class="ps-symbol ps-tri">▲</span>
        <div class="stat-number">{githubData.public_repos}</div>
        <div class="stat-title">REPOSITÓRIOS</div>
      </div>

      <div class="stat-card-pixel">
        <span class="ps-symbol ps-sq">◼</span>
        <div class="stat-number">{joinYear}</div>
        <div class="stat-title">NO GITHUB DESDE</div>
      </div>

      <div class="stat-card-pixel">
        <span class="ps-symbol ps-cross">✖</span>
        <div class="stat-number">{languageCount}</div>
        <div class="stat-title">LINGUAGENS USADAS</div>
      </div>

      <div class="stat-card-pixel">
        <span class="ps-symbol ps-circ">●</span>
        <div class="stat-number stat-text">{lastActivityRepo || "—"}</div>
        <div class="stat-title">ÚLTIMA ATIVIDADE ({lastActivityAgo})</div>
      </div>
    </div>
  {/if}
</section>

<!-- Featured Projects -->
<section class="featured-hud-section">
  <div class="box-title-bar">
    <h2>PROJETOS EM DESTAQUE</h2>
    <a href="{base}/projects" class="all-projects-link">
      VER TODOS OS PROJETOS ({projects.length}) ▶
    </a>
  </div>

  <div class="projects">
    {#each projects.slice(0, 3) as p}
      <Project data={p} hLevel="3" />
    {/each}
  </div>
</section>

<style>
  /* PS1 Hero */
  .ps1-hero {
    display: grid;
    grid-template-columns: 1.25fr 1fr;
    gap: 2.5rem;
    align-items: center;
    margin-bottom: 3.5rem;
  }

  @media (max-width: 820px) {
    .ps1-hero {
      grid-template-columns: 1fr;
    }
  }

  .character-hud {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }

  .hud-top-tag {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: var(--font-pixel);
    font-size: 0.72rem;
    background: #000;
    color: var(--color-accent);
    padding: 6px 12px;
    border: 2px solid var(--border-color);
  }

  .p1-blink {
    animation: blink 1s steps(2, start) infinite;
  }

  @keyframes blink {
    to { visibility: hidden; }
  }

  .hud-poly-tag {
    color: var(--ps-gold);
  }

  .hud-name {
    font-family: var(--font-pixel);
    font-size: clamp(1.4rem, 3.2vw, 2.2rem);
    line-height: 1.25;
    margin: 0.25rem 0;
  }

  .neon-name {
    color: var(--color-accent);
    text-shadow: 0 0 10px rgba(0, 240, 255, 0.6);
  }

  .class-title {
    display: flex;
    align-items: center;
    font-family: var(--font-ui);
    font-size: 0.85rem;
    font-weight: 700;
  }

  .rpg-class {
    color: var(--color-accent);
  }

  /* Bio Text Box */
  .rpg-dialog-box {
    background: var(--bg-card);
    border: 3px solid var(--border-color);
    box-shadow: var(--shadow-pixel);
    padding: 1rem 1.25rem;
    margin-top: 0.5rem;
    position: relative;
  }

  .dialog-text {
    font-family: var(--font-body);
    font-size: 0.98rem;
    line-height: 1.5;
    margin: 0;
    color: var(--text-main);
  }

  /* Action Buttons */
  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 0.75rem;
  }

  .btn-symbol {
    font-weight: 900;
    font-size: 0.9rem;
  }

  .btn-start {
    background: var(--color-accent);
    color: #ffffff !important;
    font-weight: 800;
    border-color: #ffffff;
  }

  .btn-start:hover {
    background: var(--color-accent-hover);
    text-decoration: none;
  }

  /* Profile Photo — Windows 98 window frame with the avatar inset */
  .win98-window {
    position: relative;
    width: 100%;
    max-width: 380px;
    margin: 0 auto;
    aspect-ratio: 410 / 448;
  }

  .win98-frame {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }

  .win98-screen {
    position: absolute;
    left: 7.3%;
    width: 81.5%;
    top: 20.5%;
    height: 58.7%;
    background: #ffffff;
    z-index: 1;
  }

  .win98-avatar {
    position: absolute;
    left: 15.5%;
    width: 65%;
    top: 24%;
    height: 51%;
    object-fit: contain;
    object-position: center top;
    z-index: 1;
    animation: ps1-float 4s ease-in-out infinite;
  }

  @keyframes ps1-float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-6px);
    }
  }

  /* Box Title Bar */
  .box-title-bar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .box-title-bar h2, .box-title-bar h3 {
    margin: 0;
    border-left: none;
    padding-left: 0;
  }

  .box-hint, .gh-link-tag, .all-projects-link {
    font-family: var(--font-pixel);
    font-size: 0.72rem;
    color: var(--color-accent);
  }

  /* Skills Grid */
  .skills-hud-section {
    margin-bottom: 3.5rem;
    background: var(--bg-card);
    border: 2px solid var(--border-color);
    box-shadow: var(--shadow-pixel);
    padding: 1.5rem;
  }

  .tech-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr));
    gap: 1.5rem;
  }

  .tech-category {
    background: var(--bg-card-header);
    border: 2px solid var(--border-color);
    box-shadow: var(--shadow-btn);
    padding: 1rem;
  }

  .tech-category-title {
    font-family: var(--font-ui);
    font-size: 0.78rem;
    color: var(--color-accent);
    margin: 0 0 0.75rem 0;
    border-left: none;
    padding-left: 0;
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .tech-tag {
    font-family: var(--font-body);
    font-size: 0.78rem;
    color: var(--text-main);
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    padding: 4px 8px;
    border-radius: 2px;
  }

  /* Stats Cards Pixel */
  .stats-hud-section {
    margin-bottom: 3.5rem;
  }

  .stats-cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(180px, 100%), 1fr));
    gap: 1.25rem;
  }

  .stat-card-pixel {
    background: var(--bg-card);
    border: 2px solid var(--border-color);
    box-shadow: var(--shadow-pixel);
    padding: 1.25rem;
    text-align: center;
  }

  .stat-number {
    font-family: var(--font-hud);
    font-size: 3rem;
    line-height: 1;
    color: var(--text-main);
    margin: 0.25rem 0;
  }

  .stat-text {
    font-size: 1.7rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .stat-title {
    font-family: var(--font-ui);
    font-size: 0.65rem;
    color: var(--text-muted);
  }

  .loading-box, .error-box {
    background: var(--bg-card);
    border: 2px solid var(--border-color);
    padding: 2rem;
    text-align: center;
    font-family: var(--font-pixel);
    font-size: 0.8rem;
  }

  .loading-blink {
    animation: blink 0.8s steps(2, start) infinite;
    color: var(--color-accent);
  }

  .featured-hud-section {
    margin-top: 4rem;
  }
</style>