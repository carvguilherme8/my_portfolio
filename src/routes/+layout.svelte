<script>
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import { onMount } from "svelte";

  let pages = [
    { url: "/", title: "Início", symbol: "▲", colorClass: "ps-tri" },
    { url: "/projects", title: "Projetos", symbol: "◼", colorClass: "ps-sq" },
    { url: "/resume", title: "Currículo", symbol: "✖", colorClass: "ps-cross" },
    { url: "/contact", title: "Contato", symbol: "●", colorClass: "ps-circ" }
  ];

  let colorScheme = "light";
  let mounted = false;

  onMount(() => {
    if (typeof localStorage !== "undefined" && localStorage.colorScheme) {
      colorScheme = localStorage.colorScheme;
    }
    mounted = true;
  });

  $: if (mounted && typeof document !== "undefined") {
    document.documentElement.style.setProperty("color-scheme", colorScheme);
    if (typeof localStorage !== "undefined") {
      localStorage.colorScheme = colorScheme;
    }
  }

  function setTheme(scheme) {
    colorScheme = scheme;
  }
</script>

<header class="ps1-header">
  <div class="header-inner">
    <!-- Brand / 1P Select -->
    <a href="{base}/" class="brand-title">
      <span class="brand-text">GUILHERME.EXE</span>
    </a>

    <!-- Retro Nav Bar with PS Controller symbols -->
    <nav class="retro-nav" aria-label="Navegação Principal">
      {#each pages as p}
        {@const isActive = $page.route.id === p.url}
        <a
          href={`${base}${p.url}`}
          class="nav-tab"
          class:active={isActive}
          aria-label={p.title}
        >
          <span class="tab-symbol {p.colorClass}">{p.symbol}</span>
          <span class="tab-label">{p.title}</span>
        </a>
      {/each}
    </nav>

    <!-- Console Switches & Links -->
    <div class="header-controls">
      <div class="mode-switch-box" role="group" aria-label="Console Theme">
        <button
          type="button"
          class="mode-btn"
          class:active={colorScheme === "light"}
          on:click={() => setTheme("light")}
          title="Modo Console PS1 Classic (Padrão)"
          aria-label="Modo Console PS1 Classic"
        >
          PS1
        </button>
        <button
          type="button"
          class="mode-btn"
          class:active={colorScheme === "dark"}
          on:click={() => setTheme("dark")}
          title="Modo CRT Arcade (Dark)"
          aria-label="Modo CRT Arcade"
        >
          CRT
        </button>
      </div>

      <a
        href="https://github.com/carvguilherme8"
        target="_blank"
        rel="noopener noreferrer"
        class="github-retro-btn"
        aria-label="GitHub Profile"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        GH
      </a>
    </div>
  </div>
</header>

<main class="page-content">
  <slot />
</main>

<footer class="ps1-footer">
  <div class="footer-memory-card">
    <div class="mc-icon">💾</div>
    <div class="mc-info">
      <span class="mc-title">DATA SCIENTIST & AI ENGINEER</span>
      <span class="mc-status">FGV EMAp • CIÊNCIA DE DADOS & IA</span>
    </div>
  </div>
  <div class="footer-credits">
    <p>© 2026 GUILHERME CARVALHO • PORTFÓLIO</p>
    <div class="footer-actions">
      <span>◼ PROJETOS</span>
      <span>✖ CURRÍCULO</span>
      <span>● CONTATO</span>
    </div>
  </div>
</footer>

<style>
  .ps1-header {
    position: sticky;
    top: 0;
    z-index: 100;
    margin: -1.5rem -1.25rem 2.5rem -1.25rem;
    padding: 0.65rem 1.25rem;
    background: var(--bg-card);
    border-bottom: 3px solid var(--border-color);
    box-shadow: 0 4px 0px rgba(0, 0, 0, 0.25);
  }

  .header-inner {
    max-width: 104ch;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .brand-title {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: var(--text-main);
    font-family: var(--font-pixel);
    font-size: 0.85rem;
    letter-spacing: -0.02em;
  }

  .retro-nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.35rem;
    background: var(--bg-card-header);
    padding: 4px;
    border: 2px solid var(--border-color);
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.2);
  }

  .nav-tab {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 5px 12px;
    font-family: var(--font-ui);
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--text-main);
    border: 1px solid transparent;
    transition: all 0.1s ease;
  }

  .nav-tab:hover {
    color: var(--color-accent);
    border-color: var(--border-color);
    background: var(--bg-card);
  }

  .nav-tab.active {
    background: var(--color-accent);
    color: #ffffff;
    border: 1px solid #ffffff;
    box-shadow: inset 1px 1px 0px rgba(255, 255, 255, 0.4), 2px 2px 0px rgba(0, 0, 0, 0.25);
  }

  .nav-tab.active .tab-symbol {
    color: #ffffff;
  }

  .tab-symbol {
    font-weight: 900;
    font-size: 0.75rem;
  }

  .header-controls {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .mode-switch-box {
    display: flex;
    border: 2px solid var(--border-color);
    background: var(--bg-card-header);
    box-shadow: var(--shadow-btn);
  }

  .mode-btn {
    all: unset;
    cursor: pointer;
    font-family: var(--font-pixel);
    font-size: 0.65rem;
    padding: 5px 10px;
    color: var(--text-muted);
    background: transparent;
    transition: all 0.1s ease;
  }

  .mode-btn.active {
    background: var(--color-accent);
    color: #ffffff;
    font-weight: 900;
  }

  .github-retro-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: var(--font-ui);
    font-size: 0.75rem;
    padding: 5px 9px;
    background: var(--bg-card);
    color: var(--text-main);
    border: 2px solid var(--border-color);
    box-shadow: var(--shadow-btn);
    text-decoration: none;
  }

  .github-retro-btn:active {
    transform: translate(1px, 1px);
    box-shadow: none;
  }

  .page-content {
    min-height: calc(100vh - 220px);
  }

  /* PS1 Footer */
  .ps1-footer {
    margin-top: 5rem;
    padding-top: 2rem;
    border-top: 3px solid var(--border-color);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    font-family: var(--font-hud);
    font-size: 1.15rem;
    letter-spacing: 0.04em;
  }

  .footer-memory-card {
    display: flex;
    align-items: center;
    gap: 12px;
    background: var(--bg-card);
    border: 2px solid var(--border-color);
    box-shadow: var(--shadow-pixel);
    padding: 8px 14px;
  }

  .mc-icon {
    font-size: 1.5rem;
  }

  .mc-info {
    display: flex;
    flex-direction: column;
  }

  .mc-title {
    font-family: var(--font-ui);
    font-size: 0.7rem;
    color: var(--color-accent);
    letter-spacing: 0.05em;
    font-weight: 700;
  }

  .mc-status {
    font-size: 0.95rem;
    color: var(--text-main);
  }

  .footer-credits {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.3rem;
  }

  .footer-credits p {
    margin: 0;
    color: var(--text-muted);
  }

  .footer-actions {
    display: flex;
    gap: 1rem;
    font-family: var(--font-ui);
    font-size: 0.72rem;
    color: var(--text-muted);
  }

  /* Mobile */
  @media (max-width: 640px) {
    .header-inner {
      justify-content: center;
    }

    .brand-title,
    .retro-nav,
    .header-controls {
      width: 100%;
      justify-content: center;
    }

    .tab-label {
      display: none;
    }

    .nav-tab {
      padding: 8px 12px;
    }

    .ps1-footer {
      justify-content: center;
      text-align: center;
    }

    .footer-memory-card {
      width: 100%;
      justify-content: center;
    }

    .footer-credits {
      width: 100%;
      align-items: center;
    }
  }
</style>