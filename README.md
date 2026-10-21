# 🍽️ Cantine YouCode

Application web permettant de planifier le menu de la semaine (Lundi → Vendredi) de la cantine de YouCode.

##  Objectif

Digitaliser la gestion de la cantine : le responsable ajoute des recettes dans une **réserve**, puis les attribue aux jours de la semaine, tout en respectant les règles culinaires et un **budget maximum de 50 DH par jour**.

##  Fonctionnalités

- Ajouter, modifier et supprimer des recettes (nom, catégorie, prix, badge) via une **fenêtre modale**
- Attribuer une recette à un jour avec une liste déroulante (`<select>`), uniquement si la catégorie correspond au créneau (Entrée, Plat, Dessert)
- Carte de recette **transparente** avec l'état `[Assigné : Mardi - Plat]` quand elle est utilisée
- Désassociation d'un plat en choisissant **« En réserve »**
- Modification d'une recette possible **uniquement si elle est dans la réserve**
- Confirmation avant suppression
- Validation du formulaire en temps réel avec **Regex** (nom : 3 à 30 caractères, catégorie obligatoire, prix positif)
- Blocage si le total d'une journée dépasse **50 DH**
- Statistiques en temps réel : plats en réserve, jours prêts (ex. 3/5), coût de la semaine, équilibre alimentaire (au moins 1 plat végétarien)
- Messages **Toast** après chaque action, avec bouton × pour fermer
- Délégation d'événements pour gérer les actions dynamiques

### Bonus

- Bouton « Compléter la semaine »
- Clic sur une carte du menu pour faire clignoter la recette dans la réserve
- Glisser-Déposer (Drag & Drop)
- Vue Cartes / Vue Tableau à imprimer
- Recherche et filtre par catégorie
- Sauvegarde dans le `localStorage`
- Mode sombre / mode clair

##  Technologies

| Technologie | Utilisation |
|---|---|
| HTML5 | Structure de la page |
| Tailwind CSS (CLI) | Design et responsive |
| JavaScript Vanilla | Logique de l'application |
| Git / GitHub | Versionnement et publication (GitHub Pages) |

##  Installation

```bash
# 1. Cloner le projet
git clone <lien-du-repository>
cd cantina

# 2. Installer les dépendances
npm install

# 3. Lancer Tailwind en mode watch
npx @tailwindcss/cli -i ./src/input.css -o ./output.css --watch
```


##  Structure du projet

```
cantine/
├── cantina.html
├── output.css        # généré par Tailwind
├── script.js         # logique JavaScript
├── package.json
└── src/
    └── input.css
```

##  Responsive (Tailwind)

Tailwind fonctionne en **mobile first** : les classes sans préfixe s'appliquent à tous les écrans, et les préfixes ajoutent des règles pour les écrans plus grands.

| Préfixe | À partir de |
|---|---|
| *(aucun)* | tous les écrans |
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |

Exemple : `grid-cols-2 lg:grid-cols-4` → 2 colonnes sur mobile, 4 colonnes à partir de 1024px.

## 👩‍💻 Auteur

Projet réalisé par **Chaymaa** dans le cadre de la formation YouCode.
