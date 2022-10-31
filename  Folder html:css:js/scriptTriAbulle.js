/*let persons = ['jules', 'laure', 'vincent', 'emma'];
console.log(persons);
let personsLength = persons.length;

console.log(personsLength);
for (let main = 0; main < personsLength - 1; main++) {

  for (let cell = 0; cell < personsLength - main - 1; cell++) {

    if (persons[cell] > persons[cell + 1]) {

      

      let temp;

      temp = persons[cell];

      persons[cell] = persons[cell + 1];

      persons[cell + 1] = temp;

    }

  }

}

console.log(persons);
       



let animals = [ 'PIGEONS', 'CHIEN', 'CHAT', 'TIGRE', 'SINGE', 'MOUTONS', 'VEAUX'];
let animals.lenght = 7;
console.log(animals);
//********************************* */


Défi
/*
César n'a qu'à bien se tenir, nous allons mettre en place notre propre code secret !

Sur le même principe que le Leet speak, nous transformerons les lettres suivantes (et leurs différentes déclinaisons, si elles peuvent être accentuées) en chiffres.

A

4

B

8

E

3

G

6

I

1

O

0

R

2

S

5

T

7

Nous transformerons également les espaces en "_".

Dans une première étape, la phrase "Bonjour tout le monde" deviendrait par exemple "80nj0u2_70u7_l3_m0nd3'.

Question
Écrivez la trace permettant de traduire la phrase "Bonne journée à tous". On pourra considérer l'étape de transformation d'un caractère en indiquant : "Si le caractère doit être transformé".

Pour plus de lisibilité, vous pouvez vous concentrer uniquement sur les étapes essentielles, l'important étant ici de bien comprendre le cheminement à effectuer.

Solution
Pour rendre hommage à César et surtout pour rendre nos communications plus sécurisées, nous allons également considérer qu'après avoir transformé notre phrase initiale, nous ferons avancer nos lettres restantes de deux dans l'alphabet.

La phrase 80nj0u2_70u7_l3_m0nd3 deviendrait alors 80pl0w2_70w7_n3_o0pf3.

Question
En partant de votre dernière réponse ou de la solution à la question précédente, terminez la conversion de la phrase "Bonne journée à tous !".

Solution
La phrase finale est la suivante : 80pp3_l0w2p33_4_70w5.

Voici le cheminement que vous avez dû aborder :

//**************************** */

//concatenation et 
// Affichera : Vous avez 351 ans

console.log('Vous avez ' + 35 + 1 + ' ans')


// Affichera : 36 ans

console.log(35 + 1 + ' ans')

//Les littéraux de gabarits (Template literals / Template strings)

symbole baltique ou accent grave pour les literaux de gabarie 
 ou templet literale faire=> controle + alt + 7 affiche ` `;

console.log(`${hello} :

${userName}, ${age + 1} ans`)