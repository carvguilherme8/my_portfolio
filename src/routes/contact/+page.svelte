<svelte:head>
  <title>TRANSMISSION: CONTATO | Guilherme Carvalho</title>
  <meta name="description" content="Envie uma mensagem ou proposta de trabalho para Guilherme Carvalho." />
</svelte:head>

<script>
  let name = "";
  let email = "";
  let subject = "";
  let message = "";
  let copied = false;

  function copyEmail() {
    navigator.clipboard.writeText("cguilherme182@gmail.com");
    copied = true;
    setTimeout(() => copied = false, 2500);
  }
</script>

<div class="contact-retro-page">
  <header class="contact-header">
    <div class="tag-ps1">[COMMUNICATIONS TERMINAL]</div>
    <h1>ESTABELECER CONTATO (TRANSMISSÃO)</h1>
    <p class="header-desc">
      Inicie uma conexão para novas missões, propostas de desenvolvimento, visualização de dados ou parcerias.
    </p>
  </header>

  <div class="comm-split">
    <!-- Channels Box -->
    <div class="channels-column">
      <div class="retro-box">
        <div class="box-head">
          <span class="ps-symbol ps-tri">▲</span>
          <h3>CANAIS DIRETOS</h3>
        </div>

        <div class="comm-channel">
          <span class="comm-label">CANAL [E-MAIL]:</span>
          <a href="mailto:cguilherme182@gmail.com" class="comm-val">cguilherme182@gmail.com</a>
          <button type="button" class="retro-btn copy-code-btn" on:click={copyEmail}>
            {copied ? "[COPIADO!]" : "[COPIAR E-MAIL]"}
          </button>
        </div>

        <div class="comm-channel">
          <span class="comm-label">BASE [GITHUB]:</span>
          <a href="https://github.com/carvguilherme8" target="_blank" rel="noopener noreferrer" class="comm-val">
            github.com/carvguilherme8 ↗
          </a>
        </div>

        <div class="comm-channel">
          <span class="comm-label">RADAR [LOCALIZAÇÃO]:</span>
          <span class="comm-val-static">BRASIL (FUSO UTC-3)</span>
        </div>
      </div>
    </div>

    <!-- Transmission Terminal Form -->
    <div class="terminal-column">
      <form
        class="retro-terminal-form"
        action="mailto:cguilherme182@gmail.com"
        method="post"
        enctype="text/plain"
      >
        <div class="term-bar">
          <span>COMPOSE_MESSAGE.EXE</span>
          <span class="ps-symbol ps-circ">●</span>
        </div>

        <div class="term-field">
          <label for="p1-name">&gt; NOME DO REMETENTE:</label>
          <input
            type="text"
            id="p1-name"
            name="name"
            bind:value={name}
            required
            placeholder="DIGITE SEU NOME..."
          />
        </div>

        <div class="term-field">
          <label for="p1-email">&gt; ENDEREÇO DE RESPOSTA (E-MAIL):</label>
          <input
            type="email"
            id="p1-email"
            name="email"
            bind:value={email}
            required
            placeholder="SEU_EMAIL@DOMINIO.COM..."
          />
        </div>

        <div class="term-field">
          <label for="p1-subject">&gt; ASSUNTO DA TRANSMISSÃO:</label>
          <input
            type="text"
            id="p1-subject"
            name="subject"
            bind:value={subject}
            placeholder="EX: PROPOSTA, FREELANCE OU DÚVIDA..."
          />
        </div>

        <div class="term-field">
          <label for="p1-msg">&gt; CONTEÚDO DO PACOTE DE DADOS:</label>
          <textarea
            id="p1-msg"
            name="message"
            rows="6"
            bind:value={message}
            required
            placeholder="DESCREVA A MISSÃO OU MENSAGEM AQUI..."
          ></textarea>
        </div>

        <button type="submit" class="retro-btn transmit-btn">
          [ TRANSMITIR MENSAGEM ▶ ]
        </button>
      </form>
    </div>
  </div>
</div>

<style>
  .contact-retro-page {
    padding-top: 0.5rem;
  }

  .contact-header {
    margin-bottom: 2rem;
  }

  .tag-ps1 {
    font-family: var(--font-pixel);
    font-size: 0.7rem;
    color: var(--color-accent);
    margin-bottom: 0.4rem;
  }

  .contact-header h1 {
    margin: 0 0 0.5rem 0;
  }

  .header-desc {
    font-size: 1rem;
    max-width: 65ch;
    margin: 0;
  }

  .comm-split {
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    gap: 2rem;
    align-items: start;
  }

  @media (max-width: 820px) {
    .comm-split {
      grid-template-columns: 1fr;
    }
  }

  .channels-column {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .retro-box {
    background: var(--bg-card);
    border: 3px solid var(--border-color);
    box-shadow: var(--shadow-pixel);
    padding: 1.5rem;
  }

  .box-head {
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 2px dashed var(--border-color);
    padding-bottom: 0.5rem;
    margin-bottom: 1.25rem;
  }

  .box-head h3 {
    margin: 0;
    font-size: 1rem;
  }

  .comm-channel {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-bottom: 1.25rem;
  }

  .comm-channel:last-child {
    margin-bottom: 0;
  }

  .comm-label {
    font-family: var(--font-ui);
    font-size: 0.62rem;
    color: var(--text-muted);
  }

  .comm-val {
    font-family: var(--font-hud);
    font-size: 1.3rem;
    color: var(--color-accent);
    text-decoration: none;
  }

  .comm-val:hover {
    text-decoration: underline;
  }

  .comm-val-static {
    font-family: var(--font-hud);
    font-size: 1.3rem;
    color: var(--text-main);
  }

  .copy-code-btn {
    font-size: 0.68rem;
    width: fit-content;
    margin-top: 0.25rem;
    padding: 4px 8px;
  }

  /* Retro Terminal Form */
  .retro-terminal-form {
    background: var(--bg-card);
    border: 3px solid var(--border-color);
    box-shadow: var(--shadow-pixel);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .term-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--bg-card-header);
    color: var(--color-accent);
    padding: 6px 10px;
    font-family: var(--font-pixel);
    font-size: 0.65rem;
    border: 1px solid var(--border-color);
    font-weight: bold;
  }

  .term-field {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .term-field label {
    font-family: var(--font-ui);
    font-size: 0.62rem;
    color: var(--text-muted);
  }

  .term-field input,
  .term-field textarea {
    background: var(--bg-card-header);
    border: 2px solid var(--border-color);
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
    color: var(--text-main);
    font-family: var(--font-hud);
    font-size: 1.3rem;
    padding: 8px 12px;
    outline: none;
    transition: border-color 0.15s ease, background-color 0.15s ease;
  }

  .term-field input:focus,
  .term-field textarea:focus {
    border-color: var(--color-accent);
    background: #ffffff;
  }

  .transmit-btn {
    background: var(--color-accent);
    color: #ffffff !important;
    font-weight: 800;
    font-size: 0.82rem;
    justify-content: center;
    margin-top: 0.5rem;
    border-color: #ffffff;
  }
</style>