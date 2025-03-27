<script>
    import projects from "$lib/projects.json";
    import Project from "$lib/Project.svelte";
    let profileData = fetch("https://api.github.com/users/carvguilherme8");
</script>

<div id="title">
    <h1>Portfolio do Guigas</h1>
</div>

<div id="myexp">
    <h2>Experiências Profissionais</h2>
    <p>- Minecraft World Cup 2017 Champion</p>
    <p>- Roblox Regional Minas Gerais Champion</p>
    <p>- Badminton Open Rio Champion</p>
</div>

{#await fetch("https://api.github.com/users/carvguilherme8")}
  <p>Loading...</p>
{:then response}
  {#await response.json()}
    <p>Decoding...</p>
  {:then data} 
    <section>
      <h2>My Github Stats</h2>
      <dl>
        <dt>Followers</dt>
        <dd>{data.followers}</dd>
        <dt>Following</dt>
        <dd>{data.following}</dd>
        <dt>Public Repos</dt>
        <dd>{data.public_repos}</dd>
      </dl>
    </section>
  {:catch error}
    <p class="error">Something went wrong: {error.message}</p>
  {/await}
  {:catch error}
    <p class="error">Something went wrong: {error.message}</p>
{/await}


<div class="projects">
    {#each projects.slice(0, 3) as p}
    <Project data={p} />
    {/each}
</div>

