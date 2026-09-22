<svelte:head>
  <title>CURRÍCULO | Guilherme Carvalho</title>
  <meta name="description" content="Currículo de Guilherme Carvalho - Estudante de Ciência de Dados e Inteligência Artificial na FGV EMAp, estagiário no Rei do Pitaco e medalhista da OBMEP." />
</svelte:head>

<div class="resume-retro-page">
  <header class="resume-header">
    <div class="header-text">
      <div class="tag-ps1">[PERFIL PROFISSIONAL]</div>
      <h1>CURRÍCULO</h1>
      <p class="header-desc">
        Graduando em Ciência de Dados e Inteligência Artificial na FGV EMAp (CR 8.51).
        Experiência com Machine Learning, Engenharia de Dados, Inferência Causal e Testes A/B.
      </p>
    </div>

    <button type="button" class="retro-btn print-action-btn" on:click={() => window.print()}>
      💾 SALVAR EM PDF
    </button>
  </header>

  <!-- Academic Profile & Competencies -->
  <section class="attributes-panel">
    <div class="panel-header">
      <span>PERFIL ACADÊMICO & COMPETÊNCIAS</span>
      <span class="ps-gold">FGV EMAp • CR: 8.51</span>
    </div>
    <div class="attributes-grid">
      <div class="attr-box">
        <span class="attr-name">DADOS & MACHINE LEARNING</span>
        <span class="attr-val">99%</span>
        <div class="attr-bar"><div style="width: 99%; background: var(--color-accent);"></div></div>
      </div>
      <div class="attr-box">
        <span class="attr-name">ENGENHARIA DE DADOS & SQL</span>
        <span class="attr-val">95%</span>
        <div class="attr-bar"><div style="width: 95%; background: var(--color-accent);"></div></div>
      </div>
      <div class="attr-box">
        <span class="attr-name">MATEMÁTICA & INFERÊNCIA CAUSAL</span>
        <span class="attr-val">98%</span>
        <div class="attr-bar"><div style="width: 98%; background: var(--color-accent);"></div></div>
      </div>
      <div class="attr-box">
        <span class="attr-name">NEGÓCIOS & VISUALIZAÇÃO</span>
        <span class="attr-val">93%</span>
        <div class="attr-bar"><div style="width: 93%; background: var(--color-accent);"></div></div>
      </div>
    </div>
  </section>

  <!-- Knowledge & Skills Inventory -->
  <section class="retro-card skills-section">
    <div class="card-bar">
      <h3>CONHECIMENTOS RELEVANTES & INVENTÁRIO TÉCNICO</h3>
    </div>
    <div class="skills-categories">
      <div class="cat-col">
        <h4>[DADOS & APRENDIZADO DE MÁQUINA]</h4>
        <ul>
          <li><strong>Modelagem</strong>: Machine Learning, XGBoost, LightGBM, scikit-learn</li>
          <li><strong>Estatística</strong>: Inferência Causal, Controles Sintéticos, Diff-in-Diff</li>
          <li><strong>Previsão & Simulação</strong>: Séries Temporais, Simulações de Monte Carlo</li>
          <li><strong>Experimentação</strong>: Elaboração e Análise de Testes A/B</li>
        </ul>
      </div>

      <div class="cat-col">
        <h4>[PROGRAMAÇÃO & ENGENHARIA DE DADOS]</h4>
        <ul>
          <li><strong>Linguagens</strong>: Python (Pandas, NumPy), C++, SQL, HTML/CSS</li>
          <li><strong>Data Engineering</strong>: BigQuery, dbt, Apache Airflow</li>
          <li><strong>Web & Frontend</strong>: React.js, SvelteKit, D3.js</li>
          <li><strong>Ferramentas</strong>: Git/GitHub, Looker Studio, Power BI, Figma</li>
          <li><strong>Idiomas</strong>: Inglês Avançado</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Professional Experience Quests -->
  <section class="retro-card">
    <div class="card-bar">
      <h3>EXPERIÊNCIA PROFISSIONAL</h3>
    </div>

    <div class="quest-item">
      <div class="quest-title-row">
        <span class="quest-name">ESTAGIÁRIO EM CIÊNCIA DE DADOS</span>
        <span class="quest-period">08/2025 - 05/2026</span>
      </div>
      <span class="quest-guild">[REI DO PITACO]</span>
      
      <div class="exp-subgroup">
        <div class="exp-subheading">&gt; ATUAÇÃO NO SETOR FINANCEIRO:</div>
        <ul class="quest-bullets">
          <li>Desenvolvimento de modelos de predição de receita utilizando Machine Learning (XGBoost) e Simulações de Monte Carlo.</li>
          <li>Criação de alertas em tempo real com Python e Apache Airflow para prevenção e mitigação de riscos de receita.</li>
          <li>Auxílio na elaboração/verificação de relatórios financeiros e construção de dashboards no Looker para monitoramento executivo.</li>
        </ul>

        <div class="exp-subheading">&gt; ATUAÇÃO NO SETOR DE MARKETING:</div>
        <ul class="quest-bullets">
          <li>Avaliação de impacto de campanhas publicitárias utilizando Controles Sintéticos e a técnica de Difference-in-Differences (DiD), acompanhada de testes estatísticos rigorosos.</li>
        </ul>

        <div class="exp-subheading">&gt; ATUAÇÃO NA ÁREA DE DADOS & PRODUTO:</div>
        <ul class="quest-bullets">
          <li>Elaboração e análise de Testes A/B para tomada de decisões baseadas em dados.</li>
          <li>Desenvolvimento de dashboard de Customer Excellence (CX) para mensurar o impacto financeiro de fricções dos usuários, estruturando extração de tickets via API e processamento em Python.</li>
          <li>Modelagem e transformação de dados com dbt e Google BigQuery.</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Split: Education & Extracurriculars / Awards -->
  <div class="quest-log-split">
    <!-- Education & Extracurriculars -->
    <div class="left-stack">
      <section class="retro-card">
        <div class="card-bar">
          <h3>FORMAÇÃO ACADÊMICA</h3>
        </div>

        <div class="quest-item">
          <div class="quest-title-row">
            <span class="quest-name">FGV EMAp – ESCOLA DE MATEMÁTICA APLICADA</span>
            <span class="quest-period">02/2023 - ATUAL</span>
          </div>
          <span class="quest-guild">GRADUAÇÃO EM CIÊNCIA DE DADOS E INTELIGÊNCIA ARTIFICIAL</span>
          <p class="quest-summary">
            Cursando o 8º período. Desempenho Acadêmico (CR): <strong>8.51</strong>. Previsão de formatura: 12/2026.
          </p>
        </div>

        <div class="quest-item">
          <div class="quest-title-row">
            <span class="quest-name">IFSEMG – CAMPUS BARBACENA</span>
            <span class="quest-period">02/2020 - 12/2022</span>
          </div>
          <span class="quest-guild">ENSINO MÉDIO TÉCNICO</span>
          <p class="quest-summary">Formação com base científica sólida e participação em olimpíadas acadêmicas.</p>
        </div>
      </section>

      <section class="retro-card">
        <div class="card-bar">
          <h3>ATIVIDADES EXTRACURRICULARES</h3>
        </div>

        <div class="quest-item">
          <div class="quest-title-row">
            <span class="quest-name">BOLSISTA CNPq (PICME - MESTRADO)</span>
            <span class="quest-period">02/2024 - 12/2025</span>
          </div>
          <p class="quest-summary">Programa de bolsas para cursar disciplinas do mestrado, visando o aperfeiçoamento de habilidades matemáticas avançadas.</p>
        </div>

        <div class="quest-item">
          <div class="quest-title-row">
            <span class="quest-name">MEMBRO ADMINISTRATIVO-FINANCEIRO</span>
            <span class="quest-period">08/2024 - 08/2025</span>
          </div>
          <span class="quest-guild">AMPLIA FGV</span>
          <p class="quest-summary">Desenvolvimento de códigos para otimização de processos, fluxo de caixa e estudo do impacto financeiro de futuras ações para entidade beneficente de pré-vestibular.</p>
        </div>

        <div class="quest-item">
          <div class="quest-title-row">
            <span class="quest-name">CONSULTOR DE DIGITAL DEVELOPMENT</span>
            <span class="quest-period">02/2024 - 08/2024</span>
          </div>
          <span class="quest-guild">FGV JR. CONSULTORIA E FINANÇAS</span>
          <p class="quest-summary">Desenvolvimento de websites em React.js, HTML e CSS, dashboards em Power BI e gestão de projetos com alto rendimento para a empresa júnior.</p>
        </div>

        <div class="quest-item">
          <div class="quest-title-row">
            <span class="quest-name">BOLSISTA CNPq (PIC - OBMEP)</span>
            <span class="quest-period">01/2017 - 12/2022</span>
          </div>
          <p class="quest-summary">Programa de Iniciação Científica Júnior oferecido pelo CNPq a medalhistas da OBMEP.</p>
        </div>
      </section>
    </div>

    <!-- Trophies & Awards (Olimpíadas & Bolsas) -->
    <div class="right-stack">
      <section class="retro-card trophies-card">
        <div class="card-bar">
          <h3>TROFÉUS, RECONHECIMENTOS & PRÊMIOS</h3>
        </div>
        <ul class="trophies-list">
          <li>
            <span class="trophy-badge trophy-plat">🏆 BOLSA INTEGRAL</span>
            <strong>FGV - CENTRO PARA O DESENVOLVIMENTO DA MATEMÁTICA E CIÊNCIAS (CDMC)</strong>
            <span class="trophy-date">02/2023 - ATUAL</span>
            <span class="trophy-desc">Bolsa de estudos integral e auxílio concedidos por mérito devido ao histórico de excelência em olimpíadas de conhecimento.</span>
          </li>
          <li>
            <span class="trophy-badge trophy-gold">🥇 1x OURO & 🥈 5x PRATA</span>
            <strong>OBMEP (OLIMPÍADA BRASILEIRA DE MATEMÁTICA DAS ESCOLAS PÚBLICAS)</strong>
            <span class="trophy-date">2016 - 2021</span>
            <span class="trophy-desc">6 medalhas nacionais consecutivas na maior olimpíada científica do país.</span>
          </li>
          <li>
            <span class="trophy-badge trophy-gold">🥇 MEDALHISTA NACIONAL</span>
            <strong>OBA (OLIMPÍADA BRASILEIRA DE ASTRONOMIA E ASTRONÁUTICA)</strong>
            <span class="trophy-date">2022</span>
            <span class="trophy-desc">Premiação por desempenho de destaque em física astronômica e astronáutica.</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</div>

<style>
  .resume-retro-page {
    padding-top: 0.5rem;
  }

  .resume-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .tag-ps1 {
    font-family: var(--font-pixel);
    font-size: 0.7rem;
    color: var(--color-accent);
    margin-bottom: 0.4rem;
  }

  .resume-header h1 {
    margin: 0 0 0.5rem 0;
  }

  .header-desc {
    font-size: 1rem;
    max-width: 75ch;
    margin: 0;
  }

  .print-action-btn {
    font-size: 0.78rem;
    background: var(--color-accent);
    color: #ffffff !important;
    font-weight: 800;
    border-color: #ffffff;
  }

  /* Attributes Panel */
  .attributes-panel {
    background: var(--bg-card);
    border: 3px solid var(--border-color);
    box-shadow: var(--shadow-pixel);
    padding: 1.25rem 1.5rem;
    margin-bottom: 2rem;
  }

  .panel-header {
    display: flex;
    justify-content: space-between;
    font-family: var(--font-ui);
    font-size: 0.7rem;
    color: var(--color-accent);
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  .ps-gold {
    color: var(--ps-gold);
  }

  .attributes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.25rem;
  }

  .attr-box {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .attr-name {
    font-family: var(--font-ui);
    font-size: 0.72rem;
    color: var(--text-muted);
  }

  .attr-val {
    font-family: var(--font-hud);
    font-size: 1.4rem;
    color: var(--text-main);
    font-weight: 700;
  }

  .attr-bar {
    height: 8px;
    background: var(--bg-card-header);
    border: 1px solid var(--border-color);
  }

  .attr-bar div {
    height: 100%;
  }

  /* Retro Cards */
  .retro-card {
    background: var(--bg-card);
    border: 3px solid var(--border-color);
    box-shadow: var(--shadow-pixel);
    padding: 1.5rem;
    margin-bottom: 2rem;
  }

  .card-bar {
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 0.5rem;
    margin-bottom: 1.25rem;
  }

  .card-bar h3 {
    margin: 0;
    font-size: 1.05rem;
  }

  .skills-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .cat-col h4 {
    margin: 0 0 0.75rem 0;
    font-size: 0.88rem;
    color: var(--color-accent);
  }

  .cat-col ul {
    margin: 0;
    padding-left: 1.25rem;
    line-height: 1.8;
    color: var(--text-muted);
  }

  .cat-col li strong {
    color: var(--text-main);
  }

  /* Quest Items & Subgroups */
  .quest-item {
    margin-bottom: 1.5rem;
    padding-bottom: 1.25rem;
    border-bottom: 1px dashed var(--border-color);
  }

  .quest-item:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  .quest-title-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 0.5rem;
  }

  .quest-name {
    font-family: var(--font-ui);
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--text-main);
  }

  .quest-period {
    font-family: var(--font-pixel);
    font-size: 0.65rem;
    color: var(--ps-gold);
    white-space: nowrap;
  }

  .quest-guild {
    font-family: var(--font-hud);
    font-size: 1.2rem;
    color: var(--color-accent);
    display: block;
    margin: 0.2rem 0 0.4rem 0;
    letter-spacing: 0.03em;
  }

  .exp-subgroup {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .exp-subheading {
    font-family: var(--font-ui);
    font-size: 0.8rem;
    color: var(--color-accent);
    font-weight: 700;
    margin-top: 0.5rem;
  }

  .quest-bullets {
    margin: 0;
    padding-left: 1.25rem;
    font-size: 0.92rem;
    line-height: 1.6;
    color: var(--text-muted);
  }

  .quest-summary {
    margin: 0.35rem 0 0 0;
    font-size: 0.92rem;
    line-height: 1.5;
    color: var(--text-muted);
  }

  /* Quest Log Split */
  .quest-log-split {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 860px) {
    .quest-log-split {
      grid-template-columns: 1fr;
    }
  }

  .left-stack, .right-stack {
    display: flex;
    flex-direction: column;
  }

  /* Trophies List */
  .trophies-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .trophies-list li {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .trophy-badge {
    font-family: var(--font-pixel);
    font-size: 0.62rem;
    padding: 2px 6px;
    border-radius: 2px;
    display: inline-block;
    width: fit-content;
    margin-bottom: 0.2rem;
  }

  .trophy-plat {
    background: var(--bg-card);
    color: var(--color-accent);
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-btn);
  }

  .trophy-gold {
    background: var(--bg-card);
    color: var(--ps-gold);
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-btn);
  }

  .trophies-list strong {
    font-family: var(--font-ui);
    font-size: 0.85rem;
    color: var(--text-main);
  }

  .trophy-date {
    font-family: var(--font-hud);
    font-size: 1.05rem;
    color: var(--text-muted);
  }

  .trophy-desc {
    font-size: 0.88rem;
    color: var(--text-muted);
    line-height: 1.5;
  }

  @media print {
    :global(header.ps1-header),
    :global(footer.ps1-footer),
    .print-action-btn {
      display: none !important;
    }

    :global(body) {
      background: white !important;
      color: black !important;
    }

    .retro-card, .attributes-panel {
      box-shadow: none !important;
      border: 1px solid #aaa !important;
    }
  }
</style>
