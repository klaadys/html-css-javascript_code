 /* let word ='JavaScript';
   
   let i = 1;
   for(let letter of word){
   console.log(letter);
     
       
    
   }
 console.log(Fini);
   */ 

//**************************************************//


/*Appliquez la notion
Pour réaliser cet exercice, vous aurez besoin de travailler sur l'environnement de travail :
Dans le contexte d'une page "Profil utilisateur", créons un ensemble de variables qui portent les données suivantes :

Nom

Prénom

Âge

Adresse e-mail

Numéro de téléphone

Indice
Le mot-clé à placer devant une variable est let, et chaque variable devrait être définie sur une ligne séparée.

// solution //

let name="Nom";
let age='Age';
console.log(age);
let firstName='prénom';
console.log(firstName);
let eMailAdress= 'Adresse e-mail';
console.log(eMailAdress);
let phoneNumber= 'numéro de téléphone';
console.log(phoneNumber);
console.log(name,age,firstName,eMailAdress,phoneNumber);
*/
//*****************************************************//


/*
Appliquez la notion
Pour réaliser cet exercice, vous aurez besoin de travailler sur l'environnement de travail :



Question
Nous souhaitons recueillir un peu plus d'informations sur notre utilisateur. Déclarez les variables qui serviront à stocker :

L'adresse postale : 1, rue de la paix, 75000 Paris

Le pays de naissance : France

Nombre d'enfants : 2

Solution
Question
Heureux événement pour notre utilisateur, il vient d'avoir un nouvel enfant ! Mettez à jour la variable qui contient le nombre de ses enfants. Il a également déménagé au 32 rue de Vaugirard, 75000 Paris : modifiez son adresse postale.


let posAdress = ' 1, rue de la paix, 75000 Paris';
console.log(posAdress);
posAdressChange = '32 rue de Vaugirard, 75000 Paris ';
console.log(posAdressChange);
posAdress  ='32 rue de Vaugirard, 75000 Paris '
console.log(posAdress );
let birthCountry = 'France';
console.log(birthCountry );
let ChildrenBorn = 2;
console.log(ChildrenBorn );
ChildrenBorn = 2 + 1;
console.log(posAdress,birthCountry,ChildrenBorn);

*/
//****************************************************//

/*
  
Appliquez la notion
Pour réaliser cet exercice, vous aurez besoin de travailler sur l'environnement de travail :



Question
Nous devons calculer le total du panier de l'utilisateur. Nous avons dans la variable productsTotalValue la valeur totale des produits, et specialOffer représente la valeur de la réduction à appliquer.

CTRL+C pour copier, CTRL+V pour coller
let productsTotalValue = "154.38";
let specialOffer  = "10";
let cartTotalValue = ?;
*/
/*
//Solution//

let productsTotalValue = "154.38";// chaine de caractere // caste type
let specialOffer  = "10"; //chaine de caractere// caste type
//let cartTotalValue = "154.38" -"10";//
 cartTotalValue = parseFloat(productsTotalValue) - parseInt(specialOffer);
console.log(cartTotalValue);

 cartTotalValue = 144.38 // number parsefloat//
 */

/*
Question
Affichez à présent à l'utilisateur, dans la variable totalPriceDisplayed, la phrase :

"Merci pour votre commande de insérer la valeur de cartTotalValue, nous préparons l'acheminement !"

CTRL+C pour copier, CTRL+V pour coller

let productsTotalValue = "154.38";
let specialOffer  = "10";
let cartTotalValue = parseFloat(productsTotalValue) - parseInt(specialOffer);
Indice
Pour insérer une variable dans une chaîne de caractères, il fait utiliser la concaténation avec le caractère "+".


// solution//
*/

let productsTotalValue = "154.38";
let specialOffer  = "10";
 let cartTotalValue = parseFloat(productsTotalValue) - parseInt(specialOffer);
 //cartTotalValue ="144.38"//
//console.log( cartTotalValue);

 let totalPriceDisplayed ="Merci pour votre commande de insérer la valeur de" + cartTotalValue +", nous préparons l'acheminement !";
  
console.log(totalPriceDisplayed );
