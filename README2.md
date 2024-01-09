# Premiers middlewares Express

Les middlewares, c'est la vie ! Ça sert à tout : gérer des routes ainsi que le cas où aucune route ne correspond, des assets, des erreurs, de la journalisation, de l'ajout de fonctionnalités aux objets I/O (les fameux `req` et `res`)... :heart_eyes:

En gros, Express n'est plus ou moins qu'un processeur de middlewares.

Vous commencez à voir en quoi va consister le challenge ? :smirk:

## DRTFMY

![wait what ?](https://media.giphy.com/media/g0Qm6fYFmsVwMeKKbl/giphy.gif)

_Don't Read The Funky Manual Yet_ : vous êtes de très bons élèves, vous avez ~certainement~ forcément déjà acquis le réflexe d'aller lire de la doc quand vous coincez sur un sujet.

Ici, il va falloir faire une petite entorse à la règle :grin: La doc est très complète et très bien rédigée mais le problème, c'est que les deux exemples les plus utilisés pour illustrer la notion de middleware sont... la journalisation et la gestion de 404...

Voilà, maintenant vous savez où trouver le challenge tout fait, il n'y a plus qu'à copier/coller : on vous fait confiance pour essayer par vous-mêmes d'abord :wink:

## Bon mais qu'est-ce qu'on fait alors ?

Vous allez reprendre la correction du GameHub et y ajouter deux fonctionnalités.

:warning: **Il n'y a donc rien à coder sur ce repo, même pas besoin de le cloner** :warning:

### Gestion des 404

En partant des informations ci-dessus et du concept de middleware, codez, sans lire la doc dans un premier temps (cf. _DRTFMY_), un middleware affichant un petit message d'erreur simple lorsqu'aucune route n'a été trouvée pour le chemin demandé par le client.

:bulb: **Rappelez-vous que l'ordre des middlewares est important**

Et profitez-en pour être créatif(ve) parce qu'une page 404 avec juste un "oups" dessus, c'est nuuuul. On est au 21e siècle, aujourd'hui, les pages 404 sont [un véritable terrain de jeu pour exprimer sa créativité](https://www.bonjour404.fr/) :tada:

Bon, c'est pas une formation en infographie, on sait... mais créez au minimum une vue qui inclut l'interface (pour pouvoir continuer à naviguer, c'est important) et qui affiche une image sympa que vous aurez trouvée via votre meilleur ami :mag:

### Journalisation

Même principe, mais vous allez cette fois-ci coder un middleware qui logge quelques informations dans la console à chaque requête. Il faut _journaliser_ :
- la date précise de la requête
- l'IP du client
- et le chemin accédé

_Mais où trouver ces informations_ ? Dans la doc naturellement, ce n'est pas parce qu'on vous déconseille de lire la doc des middlewares que vous ne pouvez pas aller faire un tour du côté de celle de l'objet Request. Sinon, vous pouvez aussi essayer de `console.log` l'objet en lui-même pour le disséquer et trouver les infos qui vous intéressent.

## Bonus (parce qu'il en faut un)

Formattez les messages du journal pour qu'ils respectent ce format :
`[date-iso ip] path`
