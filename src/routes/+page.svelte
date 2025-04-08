<script>
import projects from "$lib/projects.json";
import Project from "$lib/Project.svelte";
import { onMount } from "svelte";
let profileData = fetch("https://api.github.com/users/carvguilherme8");

let githubData = null;
let loading = true;
let error = null;

onMount(async () => {
    try {
        const response = await fetch("https://api.github.com/users/carvguilherme8");
        githubData = await response.json();
    } catch (err) {
        error = err;
    }
    loading = false;
});
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

{#if loading}
    <p>Loading...</p>
{:else if error}
    <p class="error">Something went wrong: {error.message}</p>
{:else}
    <section>
        <h2>My GitHub Stats</h2>
        <dl>
            <dt>Followers</dt>
            <dd>{githubData.followers}</dd>
            <dt>Following</dt>
            <dd>{githubData.following}</dd>
            <dt>Public Repositories</dt>
            <dd>{githubData.public_repos}</dd>
        </dl>
    </section>
{/if}


<div class="projects">
    {#each projects.slice(0, 3) as p}
    <Project data={p} />
    {/each}
</div>

