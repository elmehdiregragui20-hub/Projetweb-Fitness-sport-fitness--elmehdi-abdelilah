# Révision orale FitLife
## Présentation de cinq minutes
0:00–0:45 : objectif et accueil. HTML = structure, CSS = présentation, JS = interactions.
0:45–1:45 : Programmes, montrer chaque filtre et Tous.
1:45–3:00 : IMC : 70 kg, 175 cm donne 22.9 ; essayer un champ vide.
3:00–4:00 : outils développeur, mode mobile, ouvrir et fermer le menu.
4:00–5:00 : Conseils, À propos, expliquer les contributions réelles.

## JavaScript
DOM : représentation du HTML manipulable par JS.
querySelector sélectionne le premier élément ; querySelectorAll une collection.
addEventListener enregistre une réaction à un événement.
defer exécute le script après analyse du HTML sans bloquer cette analyse.
DOMContentLoaded indique que le DOM est prêt ; les écouteurs sont ici largement redondants avec defer.
Le même script est partagé : si imc-form est absent, le callback sort avec return.
submit déclenche preventDefault pour éviter la navigation normale du formulaire.
Number convertit les valeurs, Number.isFinite écarte NaN et Infinity.
IMC = poids / (tailleCm / 100)² ; toFixed(1) formate une décimale ; textContent affiche du texte.
Les attributs min/max/step/required assurent la validation native du formulaire.
Le résultat reste local ; pas de stockage ni de base de données.
Les filtres comparent dataset.filtre et dataset.niveau ; hidden masque sans supprimer.
aria-pressed décrit le bouton sélectionné pour les technologies d'assistance.
Le menu inverse aria-expanded et ajoute/retire is-open ; CSS contrôle l'affichage.
const empêche la réaffectation, let l'autorise. === compare strictement. || signifie ou. ! inverse.

## HTML et CSS
header/nav/main/section/article/footer donnent une structure sémantique.
Une class est réutilisable ; un id doit être unique dans la page.
../ remonte d'un dossier : pages/imc.html utilise ../css/style.css.
Flexbox organise principalement un axe ; Grid organise lignes et colonnes.
repeat(3,minmax(0,1fr)) crée trois colonnes égales ; à 760px on passe à une colonne.
margin = espace extérieur ; padding = intérieur ; border-box inclut padding et bordure dans la largeur.
:root définit les variables de couleurs. clamp borne une taille fluide.
::before/::after dessinent les cercles, sans image téléchargée.
:hover réagit au survol ; :focus-visible aide la navigation clavier.
La spécificité CSS prime sur l'ordre : deux classes sont plus spécifiques qu'une.
aria-live annonce le résultat, label/for associe une étiquette au champ.

## Git
Git suit les versions ; GitHub héberge le dépôt. Un commit enregistre des modifications.
Expliquer uniquement ses vrais commits. La maquette reconstituée ne prouve pas la conception préalable.

## Corrections à expliquer
Menu : bouton caché par une règle trop spécifique, corrigé avec des règles cohérentes.
Footer : chemins relatifs corrigés dans les trois pages.
Programmes : conteneur Grid manquant ajouté.
À propos : liste corrigée et équipe replacée dans main.
Validation numérique renforcée et état des filtres rendu accessible.
