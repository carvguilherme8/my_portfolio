<svelte:head>
  <title>Contato</title>
</svelte:head>

<div class="contact-container">
    <h1 class="contact-title">Entre em Contato</h1>
    <form class="contact-form" action="mailto:exemplo@dominio.com" method="post" enctype="text/plain">
        <label for="name" class="contact-label">Nome</label>
        <input type="text" id="name" name="name" class="contact-input" required placeholder="Seu nome completo">

        <label for="email" class="contact-label">E-mail</label>
        <input type="email" id="email" name="email" class="contact-input" required placeholder="Seu e-mail">

        <label for="message" class="contact-label">Mensagem</label>
        <textarea id="message" name="message" class="contact-textarea" rows="4" required placeholder="Sua mensagem"></textarea>

        <button type="submit" class="contact-button">Enviar</button>
    </form>
</div>
