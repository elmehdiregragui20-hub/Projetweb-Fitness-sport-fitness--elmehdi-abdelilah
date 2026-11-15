"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuToggle && navigation) {
  document.documentElement.classList.add("js");

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    navigation.classList.toggle("is-open", !isExpanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
    const formulaire = document.getElementById("imc-form");

    if (!formulaire) {
        return;
    }

    formulaire.addEventListener("submit", function (event) {
        event.preventDefault();

        const poids = Number(document.getElementById("poids").value);
        const tailleCm = Number(document.getElementById("taille").value);
        const resultat = document.getElementById("resultat-imc");

        if (poids <= 0 || tailleCm <= 0) {
            resultat.textContent = "Veuillez saisir des valeurs valides.";
            return;
        }

        const tailleM = tailleCm / 100;
        const imc = poids / (tailleM * tailleM);

        let message = "";

if (imc >= 30) {
  message = " — Cet IMC correspond à la catégorie obésité chez l’adulte.";
} else if (imc >= 25) {
  message = " — Cet IMC correspond à un surpoids chez l’adulte.";
}

resultat.textContent = "Votre IMC est de " + imc.toFixed(1) + message;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const boutons = document.querySelectorAll(".filtre-btn");
    const programmes = document.querySelectorAll(
        ".feature-card[data-niveau]"
    );

    boutons.forEach(function (bouton) {
        bouton.addEventListener("click", function () {
            const niveau = bouton.dataset.filtre;

            boutons.forEach(function (btn) {
                btn.classList.remove("actif");
            });

            bouton.classList.add("actif");

            programmes.forEach(function (programme) {
                if (niveau === "tous" ||
                    programme.dataset.niveau === niveau) {
                    programme.hidden = false;
                } else {
                    programme.hidden = true;
                }
            });
        });
    });
});
