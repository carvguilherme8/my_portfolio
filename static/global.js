// console.log("IT’S ALIVE!");

// function $$ (selector, context = document) {
//     return Array.from(context.querySelectorAll(selector));
// }

// let navLinks = $$("nav a");

// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);

// if (currentLink) { // or if (currentLink !== undefined)
//     currentLink.classList.add("current");
// }

// const ARE_WE_HOME = document.documentElement.classList.contains("home");

// let pages = [
//     {url: "", title: "Home"},
//     {url: "contact", title: "Contact"},
//     {url: "projects", title: "Projects"},
//     {url: "resume", title: "Resume"},
//     {url: "https://github.com/carvguilherme8", title: "GitHub"},
//     // add the rest of your pages here
// ];

// let nav = document.createElement("nav");
// document.body.prepend(nav);

// for (let p of pages) {
//     let url = p.url;
//     let title = p.title;
//     if (!ARE_WE_HOME && !url.startsWith("http")) {
//         url = "./" + url;
//     }
//     // Create link and add it to nav
//     let a = document.createElement("a");
//     a.href = url;
//     a.textContent = title;
//     if (a.host === location.host && a.pathname === location.pathname) {
//         a.classList.add("current");
//     }
//     if (a.host != location.host ) {
//         a.setAttribute("target", "_blank");
//     }
//     nav.append(a);
// }