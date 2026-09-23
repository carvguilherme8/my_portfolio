<script>
  import { base } from "$app/paths";
  export let data = {};
  export let hLevel = 2;
  let showDetails = false;

  $: imageSrc = data.image?.startsWith("http")
    ? data.image
    : data.image?.startsWith("/")
      ? `${base}${data.image}`
      : data.image?.startsWith("./")
        ? `${base}${data.image.slice(1)}`
        : data.image;
</script>

<article class="ps1-save-card">
  <!-- Card Header -->
  <div class="save-header">
    <div class="slot-meta">
      <span class="slot-badge">{data.year || "2026"}</span>
      {#if data.category}
        <span class="category-badge">[{data.category}]</span>
      {/if}
    </div>
    <span class="ps-symbol ps-sq">◼</span>
  </div>

  <!-- Thumbnail with scanline effect -->
  <div class="save-thumbnail">
    {#if imageSrc}
      <img src={imageSrc} alt={data.title || "Imagem do projeto"} loading="lazy" />
    {/if}
    <div class="thumb-scanlines"></div>
  </div>

  <div class="save-body">
    {#if data.tags && data.tags.length > 0}
      <div class="pixel-tags">
        {#each data.tags as tag}
          <span class="pixel-tag">[{tag}]</span>
        {/each}
      </div>
    {/if}

    <svelte:element this={"h" + hLevel} class="save-title">
      {data.title}
    </svelte:element>

    <p class="save-desc">
      {data.description}
    </p>

    {#if data.highlights && data.highlights.length > 0}
      <div class="highlights-box">
        <button
          type="button"
          class="details-toggle-btn"
          on:click={() => (showDetails = !showDetails)}
          aria-expanded={showDetails}
        >
          <span class="btn-icon">{showDetails ? "▼" : "▶"}</span>
          <span>ARQUITETURA & DESTAQUES ({data.highlights.length})</span>
        </button>

        {#if showDetails}
          <div class="details-content">
            {#if data.problem}
              <div class="detail-section">
                <span class="detail-heading">&gt; PROBLEMA:</span>
                <p class="detail-text">{data.problem}</p>
              </div>
            {/if}
            <div class="detail-section">
              <span class="detail-heading">&gt; DESTAQUES DE ENGENHARIA:</span>
              <ul class="highlights-list">
                {#each data.highlights as hl}
                  <li>{hl}</li>
                {/each}
              </ul>
            </div>
          </div>
        {/if}
      </div>
    {/if}

    {#if data.demoUrl || data.repoUrl}
      <div class="save-links">
        {#if data.demoUrl}
          <a class="retro-btn link-btn" href={data.demoUrl} target="_blank" rel="noopener noreferrer">
            [ ACESSAR ]
          </a>
        {/if}
        {#if data.repoUrl}
          <a class="retro-btn link-btn" href={data.repoUrl} target="_blank" rel="noopener noreferrer">
            [ REPOSITÓRIO ]
          </a>
        {/if}
      </div>
    {/if}
  </div>
</article>

<style>
  .ps1-save-card {
    display: flex;
    flex-direction: column;
    background: var(--bg-card);
    border: 3px solid var(--border-color);
    box-shadow: var(--shadow-pixel);
    transition: transform 0.15s ease, border-color 0.15s ease;
    overflow: hidden;
  }

  .ps1-save-card:hover {
    transform: translateY(-4px);
    border-color: var(--color-accent);
  }

  .save-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #000000;
    color: var(--text-main);
    padding: 6px 10px;
    font-family: var(--font-pixel);
    font-size: 0.62rem;
    border-bottom: 2px solid var(--border-color);
    gap: 0.5rem;
  }

  .slot-meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .slot-badge {
    color: var(--ps-gold);
  }

  .category-badge {
    color: var(--color-accent);
    font-size: 0.58rem;
  }

  .save-thumbnail {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background: #090d14;
  }

  .save-thumbnail img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.25s ease;
  }

  .ps1-save-card:hover .save-thumbnail img {
    transform: scale(1.06);
  }

  .thumb-scanlines {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.22) 0px,
      rgba(0, 0, 0, 0.22) 1px,
      transparent 1px,
      transparent 3px
    );
  }

  .save-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1.2rem;
    gap: 0.75rem;
  }

  .pixel-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
  }

  .pixel-tag {
    font-family: var(--font-ui);
    font-size: 0.7rem;
    color: var(--color-accent);
    background: var(--color-accent-light);
    border: 1px solid var(--border-color);
    padding: 2px 6px;
    border-radius: 2px;
  }

  .save-title {
    font-family: var(--font-ui);
    font-size: 1.05rem;
    margin: 0;
    line-height: 1.35;
    color: var(--text-main);
  }

  .save-desc {
    font-family: var(--font-body);
    font-size: 0.92rem;
    line-height: 1.5;
    margin: 0;
    flex: 1;
    color: var(--text-muted);
  }

  /* Highlights / Architecture Box */
  .highlights-box {
    background: var(--bg-card-header);
    border: 2px solid var(--border-color);
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
    margin-top: 0.25rem;
  }

  .details-toggle-btn {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-family: var(--font-pixel);
    font-size: 0.62rem;
    color: var(--color-accent);
    padding: 6px 8px;
    width: 100%;
    box-sizing: border-box;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-btn);
    transition: all 0.15s ease;
  }

  .details-toggle-btn:hover {
    background: var(--color-accent);
    color: #ffffff;
    border-color: #ffffff;
  }

  .btn-icon {
    font-size: 0.55rem;
  }

  .details-content {
    padding: 0.75rem 0.5rem 0.25rem;
    font-family: var(--font-hud);
    font-size: 1.05rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .detail-heading {
    font-family: var(--font-pixel);
    font-size: 0.6rem;
    color: var(--color-accent);
    display: block;
    margin-bottom: 0.2rem;
    font-weight: bold;
  }

  .detail-text {
    font-family: var(--font-body);
    font-size: 0.85rem;
    color: var(--text-muted);
    margin: 0;
    line-height: 1.4;
  }

  .highlights-list {
    list-style: none;
    padding-left: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .highlights-list li {
    position: relative;
    padding-left: 1.1rem;
    font-family: var(--font-body);
    font-size: 0.85rem;
    line-height: 1.4;
    color: var(--text-main);
  }

  .highlights-list li::before {
    content: "•";
    position: absolute;
    left: 0.2rem;
    color: var(--color-accent);
    font-weight: bold;
  }

  .save-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.25rem;
  }

  .link-btn {
    flex: 1 1 auto;
    text-align: center;
    text-decoration: none;
    font-size: 0.7rem;
    padding: 0.55rem 0.8rem;
    white-space: nowrap;
  }

</style>