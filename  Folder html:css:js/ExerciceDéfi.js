/*Exercice : Défi

Question
Pour simplifier sa comptabilité, un marchand de légumes souhaite créer un petit script lui permettant de rentrer le nombre de pommes et poires vendues dans la journée, et de récupérer le chiffre d'affaires par fruit, ainsi que le chiffre d'affaires total en euros.

Une pomme coûte 0,32 €.

Une poire coûte 0,44 €.

Vous devrez stocker dans un premier temps le prix d'une pomme et d'une poire dans des variables, puis permettre à l'utilisateur de rentrer le nombre de poires et de pommes vendues dans la journée.

Enfin, une fenêtre d'alerte devra s'afficher indiquant le nombre de pommes et de poires vendues dans la journée, ainsi que le chiffre d'affaires par produit et le chiffre d'affaires total.

Indice
Pour indiquer les quantités, vous pouvez utiliser la méthode prompt().

Pour afficher une alerte, vous pouvez utiliser la méthode alert().

Attention à l'affichage du chiffre d'affaires : on parle en euros, l'affichage devra donc être arrondi à deux chiffres après la virgule. Vous pouvez utiliser la méthode Math.round() pour réaliser cette opération.

Afin de clarifier l'affichage des informations dans l'alerte, on peut aller à la ligne en utilisant '\n'.
*/
//Solution      
     //les prix stockés dans des variables constantes

 const priceAppleUnity = 0.32;

const pricePearUnity = 0.44;
console.log( priceAppleUnity,pricePearUnity )


//les quantités stockés dans des variables constantes

const quantityAppleSoldPerDay = prompt('entrer le nombre de pommes');
const quantityPearSoldPerDay =prompt('entrer le nombre de poire');
console.log( quantityAppleSoldPerDay,quantityPearSoldPerDay)

// Vente effectuee pour chaque fruit

const totalAppleCost = priceAppleUnity * quantityAppleSoldPerDay;
const totalPearCost =pricePearUnity * quantityPearSoldPerDay;
console.log( totalAppleCost ,totalPearCost)

// Chiffre d'affaire realisé

totalCostApplePear = totalAppleCost + totalPearCost;
console.log( totalCostApplePear )

// Afficharge d'alert

alert('pommes => quantité : ' + quantityAppleSoldPerDay + ', chiffre d\'affaire: ' + Math.round(totalAppleCost * 100) / 100 + '€ \n' + 

      'poires => quantité : ' + quantityPearSoldPerDay + ', chiffre d\'affaire: ' + Math.round(totalPearCost * 100) / 100 + '€ \n' + 

      'chiffre d\'affaire => ' + Math.round(totalCostApplePear * 100) / 100 + '€');

//************************//**************************

/*
// On stocke les prix

const priceApple = 0.32;

const pricePear = 0.44;


// On stocke les quantités

const quantityAppleSold = prompt('Saisissez un nombre de pommes');

const quantityPearSold = prompt('Saisissez un nombre de poires');

// Recette réalisée pour chaque fruit

const priceTotalApple = priceApple * quantityAppleSold;

const priceTotalPear = pricePear * quantityPearSold ;


// Chiffre d'affaires

const turnover = priceTotalApple + priceTotalPear;


// On crée l'alerte qui affichera les informations à l'utilisateur

alert('pommes => quantité : ' + quantityAppleSold + ', chiffre d\'affaire: ' + Math.round(priceTotalApple * 100) / 100 + '€ \n' +

'poires => quantité : ' + quantityPearSold + ', chiffre d\'affaire: ' + Math.round(priceTotalPear * 100) / 100 + '€ \n' +

'chiffre d\'affaire => ' + Math.round(turnover * 100) / 100 + '€');
*/