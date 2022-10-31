//alert('Bonjour !')
//alert('moi meme!'+'mes enfant!')
//alert(alert ('Nous sommes bien arrivés!'+'Bravo!'))

//********************************** *//


/*let firstNumber = 25;
console.log(firstNumber);
let secondNumber = 52;
console.log(firstNumber,secondNumber);
firstNumber=firstNumber+secondNumber;
console.log(firstNumber);
secondNumber=firstNumber-secondNumber;
console.log(secondNumber);
firstNumber=firstNumber-secondNumber;
console.log(firstNumber);*/

//************************************** *//

/*
let word='Adamah';
let i=1;
for(let letter of word){
console.log(letter);
}*/


//************************************** *//
 
  /*
 

Qu'est-ce qu'un algorithme ?

Votre réponse est juste.
Correction


Une langue permettant de parler aux ordinateurs



Une série d'instructions ordonnées permettant de réaliser une tâche



Un ordinateur spécial destiné à la programmation

Explications
Un algorithme est une séquence ordonnée d'instructions qui permettent d'arriver à un résultat. Ce terme est généralement associé à l'informatique, mais peut désigner beaucoup d'autres éléments de notre quotidien, comme une recette de cuisine ou un trajet à faire en voiture.

Qu'est-ce que le pseudo-code ?

Votre réponse est juste.
Correction


Un langage permettant aux humains de communiquer des instructions aux ordinateurs



Un langage permettant aux ordinateurs de communiquer des instructions aux humains



Un langage permettant aux humains de communiquer des instructions aux autres humains



Un langage permettant aux ordinateurs de communiquer des instructions aux autres ordinateurs

Explications
Le pseudo-code est un pseudo-langage permettant de décrire des algorithmes sans utiliser un langage particulier. Il est utilisé pour partager des algorithmes entre développeurs.

Soit les instructions suivantes :

CTRL+C pour copier, CTRL+V pour coller

Variable A vaut 5.

Variable B vaut 7.

On multiplie variable B par 3.

Variable C vaut 10.

On multiplie variable C pas 5.
Quelle sera la valeur de la variable B à la fin de l'instruction ?

Votre réponse est juste.
Correction


Parmi ces termes, lesquels désignent des langages de programmation ?

Votre réponse est juste.
Correction


JavaScript



Français



PHP



Pseudo-code

Le pseudo-code n'est pas un langage de programmation à proprement parler : il n'est pas possible de développer une application en l'utilisant, d'où le terme de "pseudo-langage".



Bas niveau

Le terme de "bas niveau" désigne le niveau d'un langage, mais n'est pas un langage en particulier.



Algorithme

Explications
Le JavaScript et le PHP sont des langages de programmation que l'on a mentionnés. Ils font partie des langages permettant de créer des sites Internet.

De quoi est constitué le langage machine ?

Votre réponse est juste.
Correction


De 0 et de 1



D'un ensemble de mots-clés permettant de manipuler des données



De mots ressemblant au langage humain et permettant de décrire des algorithmes sans utiliser un langage de programmation particulier

Qu'est-ce qu'un langage de haut niveau ?

Votre réponse est juste.
Correction


Un langage utilisé par les développeurs très doués



Un langage proche du langage machine

Pour cela, on utilise le terme "bas niveau".



Un langage éloigné du langage machine

Explications
Un langage de haut niveau est un langage qui est éloigné du langage machine. Attention à ne pas confondre avec le terme utilisé dans d'autres domaines, comme le "sport de haut niveau" qui désigne les athlètes très doués. Les langages de haut niveau ne sont pas nécessairement réservés à l'élite des développeurs : la différence avec les langages de bas niveau ne se situe que dans la logique utilisée et les outils qu'ils mettent à disposition du développeur.

Soit le code suivant :

CTRL+C pour copier, CTRL+V pour coller

Soit N1 un nombre

Soit N2 un nombre

Si N1 est inférieur à N2

  Retourner VRAI

Sinon

  Retourner FAUX

Fin Si
Quelle valeur sera retournée si N1 vaut 12 et N2 vaut 5 ?

Votre réponse est juste.
Correction


Vrai



Faux

Explications
12 n'étant pas inférieur à 5, on retournera "faux".

Comment est-ce que l’ordinateur comprend le code écrit par un développeur ?

Votre réponse est juste.
Correction


Il connaît tous les langages qui existent et est donc capable de comprendre n'importe quel code



Le code est traduit dans le langage machine du processeur, le seul langage que comprend l'ordinateur



Tous les langages se ressemblent suffisamment pour que l'ordinateur les comprenne

Explications
Le langage machine, composé de 0 et de 1, est le seul langage que l'ordinateur connaît. Il est donc nécessaire de traduire le code écrit par les développeurs en ce langage.

Ce code est du pseudo-code.

CTRL+C pour copier, CTRL+V pour coller

$n = 1;

while ($n < 10) {

    echo $n;

    $n++;

}
Votre réponse est juste.
Correction


Vrai



Faux

Explications
Ce code utilise des mots-clés et une syntaxe qui n'est pas intuitive : ce n'est pas du pseudo-code. En réalité, c'est du code PHP.
*/
//********************************** *//

Défi


/*
Dans ce défi, vous allez devoir utiliser vos nouvelles connaissances pour écrire votre premier pseudo-code.

Question
En vous inspirant du pseudo-code du code de César et de celui vu dans les exercices précédents, écrivez un pseudo-code permettant de calculer le nombre de lettres dans un mot. Pour cela, vous allez devoir parcourir toutes les lettres en ajoutant 1 pour chaque lettre rencontrée.

Vous utiliserez les mots-clés suivants :

Soit, permettant de définir les données dont nous avons besoin pour que le programme fonctionne

Pour, permettant de répéter des instructions plusieurs fois

Fin Pour, permettant de délimiter la fin des instructions à répéter

Calculer, permettant de réaliser un calcul et de donner un nom au résultat. Il peut également être utilisé pour donner un nom à une valeur initiale qui sera manipulée plus tard : c'était le cas de notre "mot vide" pour le code de César

Retourner, permettant de préciser quel est le résultat de l'algorithme (ici, le nombre de lettres)

Indice
Commençons par la première instruction : Soit. Nous n'avons besoin que d'une seule chose : un mot dont la longueur est à déterminer. Cette instruction va donc nous permettre de lui attribuer un nom, pour pouvoir le manipuler ensuite.

Indice
Nous allons avoir besoin d'un compteur pour compter le nombre de lettres de notre mot. Au début de notre programme, il va être égal à 0, puis on va lui ajouter 1 pour chaque lettre rencontrée. La deuxième instruction de notre programme va donc être de donner un nom à ce compteur, et de lui donner la valeur 0 (de le même manière que nous avons initialisé le mot vide dans le code de César).

Indice
Pour compter le nombre de lettres du mot, nous devons parcourir toutes les lettres. C'est quelque chose que nous avons fait dans le code de César : n'hésitez pas à vous en inspirer. Reprenez le nom défini lors du Soit et donnez un nouveau nom, qui recevra les lettres une par une.

Indice
Pour chaque lettre, nous allons donc devoir augmenter notre compteur de 1. Pour cela, vous allez devoir Calculer la nouvelle valeur de notre compteur, qui est égale à sa valeur actuelle + 1.

Indice
Une fois que vous avez compté le nombre de lettres dans le mot, n'oubliez pas de Retourner sa valeur.

Solution
CTRL+C pour copier, CTRL+V pour coller

Soit T le mot dont la longueur est à déterminer

Calculer N le nombre de lettres final, égal à 0

Pour toutes les lettres L de T

    Calculer N, qui est N + 1

Fin pour

Retourner N
