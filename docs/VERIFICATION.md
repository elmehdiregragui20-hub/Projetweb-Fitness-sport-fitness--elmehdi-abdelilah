# Vérification — 17 novembre 2026

354 assertions locales réussies : cibles des liens et ressources, imbrication explicite des balises des cinq pages, calculs IMC (22.9, 27.8, 37.0), rejet de valeur non numérique, quatre filtres, état aria-pressed, ouverture/fermeture du menu. Syntaxe JavaScript vérifiée avec node --check.

Les tests JS utilisent un DOM simulé, pas un navigateur. La revue CSS vérifie la correction du conflit de spécificité ; aucun test visuel mobile final n'a été effectué. Ces contrôles ne sont pas une certification W3C.

À réaliser : validation HTML et CSS officielle W3C, test clavier et mobile dans le navigateur, vérification du vrai dépôt Git et de ses contributions, de la maquette initiale éventuelle et du dépôt Moodle. La maquette fournie est une reconstitution datée.
