/*
Pour être bien sûr que les animations se lancent au début sur tous les appareils, les types de connexion, les navigateurs etc, j'ai rajouté une classe au body dans le fichier HTML5 :

-   <body class="loading__animation">

Pour que cette classe bloque les animations CSS de tout le site, j'ai ajouté dans le fichier CSS3 :

- .loading__animation {
    animation-play-state: paused !important;
}

Puis j'enlève cette classe en JavaScript lorsque je suis sûre que le site a bien fini de charger:
- window.addEventListener("load", () => {
    document.body.classList.remove("loading__animation");
});
*/

window.addEventListener("load", () => {
  document.body.classList.remove("loading__animation");
});
