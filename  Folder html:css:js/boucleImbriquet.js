//En utilisant des boucles imbriquées, vous reproduirez l'affichage suivant dans la console du navigateur.
//indice 
//Il faut construire une chaîne de caractères qui correspond à une ligne : quand tous les éléments de la ligne sont présents, on affiche cette ligne et on réinitialise la chaîne de caractères pour afficher la ligne suivante.

//for (let index = 0; index < array.length; index++) {
  //const element = array[index];
  

/*
for (let ligne  = 0;ligne < 6 ; ligne++){
  let table = " ";
  for ( let colonne = 0 ; colonne < 4; colonne++){

    table = table + "@*";
}


 console.log(ligne + ":"+ table)   ;   
}       

*/
let row = 4;
let colone = 2;

for (let row = 0; row < 6; row++){
  let row = "";
  for ( let colone = 0 ; colone < row; colone++){

    row = colone+ "* ";
}
 console.log(row + ":"+ colone)   ;   
}      



