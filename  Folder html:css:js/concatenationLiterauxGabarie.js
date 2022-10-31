//concatenation et 
// Affichera : Vous avez 351 ans

console.log('Vous avez ' + 35 + 1 + ' ans')


// Affichera : 36 ans

console.log(35 + 1 + ' ans')

//Les littéraux de gabarits (Template literals / Template strings)

symbole baltique ou accent grave pour les literaux de gabarie 
 ou templet literale faire=> controle + alt + 7 affiche ` `;

console.log(`${hello} :

${userName}, ${age + 1} ans`);
console.log( `${   d  }, $ {    s } ${   3  }`)

//**************************************** *//

En JavaScript, pour concaténer des éléments, on utilise l'opérateur...

Votre réponse est juste.
Correction


-



+



.



&

Pour déterminer la longueur d'une chaîne de caractères, on utilisera la propriété...

Votre réponse est juste.
Correction


width



length



size

Lorsque l'on souhaite déterminer la longueur d'une chaîne, le caractère d'échappement...

Votre réponse est juste.
Correction


Est pris en compte



N'est pas pris en compte

Cochez les syntaxes correctes pour obtenir cette phrase : "je m’appelle Thomas, j'ai 23ans".

CTRL+C pour copier, CTRL+V pour coller
1
const begin = 'je m\'appelle Thomas, j\'ai'
2
const end = 'ans'
3
const number = 2;
4
const secondNumber = 3
Votre réponse est juste.
Correction


const words = `${begin} ${number}${secondNumber}${end} `



const words = begin.concat(' ').concat(number).concat(secondNumber).concat(end)



const words = begin + (number + secondNumber) + end

Retourne : je m'appelle Thomas, j'ai5ans.



const words = begin + ' ' + number + secondNumber + end

Quelle syntaxe doit-on utiliser si l'on souhaite afficher la phrase : "2 + 3 font 5" ?

CTRL+C pour copier, CTRL+V pour coller
1
let firstNumber = 2
2
let secondNumber = 3
Votre réponse est juste.
Correction


console.log(firstNumber + secondNumber ' font ' (firstNumber + secondNumber))



console.log(firstNumber + ' + ' + secondNumber + ' font ' + (firstNumber + secondNumber))



console.log(firstNumber + ' + ' + secondNumber + ' font ' + firstNumber + secondNumber)

La méthode substring()...

Votre réponse est juste.
Correction


Transforme une chaîne de caractères en minuscules



Retourne une sous-chaîne de la chaîne courante, entre un indice de début et un indice de fin



Divise une chaîne de caractères en deux parties égales

La méthode pour diviser une chaîne de caractère est split().



N'existe pas

Elle retourne une sous-chaîne de la chaîne courante, entre un indice de début et un indice de fin.

La méthode concat()...

Votre réponse est juste.
Correction


Combine le texte de plusieurs chaînes avec la chaîne appelante, et renvoie la nouvelle chaîne ainsi formée



Supprime les espaces blancs et renvoie la nouvelle chaîne ainsi formée

C'est la méthode trim() qui supprime les espaces blancs.



Renvoie une chaîne de caractères en caractères gras

La méthode bold() renvoie une chaîne de caractères en caractères gras.



N'existe pas

Quelle est la méthode qui permet de remplacer une chaîne de caractères par une autre ?

Votre réponse est juste.
replace()
En ES6, de quelle manière faut-il englober ${myVariable} pour que cela soit fonctionnel ?

Votre réponse est juste.
Correction


"${myVariable}"



'${myVariable}'



`${myVariable}`



<${myVariable}>

On souhaite savoir si une chaîne de caractère est contenue : on utilise la méthode...

Votre réponse est juste.
Correction


includes() ;



contain() ;

La méthode contain() n'existe pas en JavaScript. Cependant, elle existe en Java.