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

// Récupération des éléments HTML5
const footerCopyrightYear = document.querySelector(".footer__text__year");

// Déclaration de la fonction getCurrentYear qui va permettre l'affichage dynamique de l'année
const getCurrentYear = () => {
  // Récupération de la date actuelle stockée dans la constante date
  const date = new Date();
  //console.log(date);

  // Récupération de l'année stockée dans la constante year
  const year = date.getFullYear();
  //console.log(year);

  // Affichage dynamique de l'année en cours
  footerCopyrightYear.textContent = `${year}`;
};
// Appel de la fonction getCurrentYear()
getCurrentYear();
