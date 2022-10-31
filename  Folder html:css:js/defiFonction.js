let chaise = 120.50
  console.log(chaise)
let table = 1200.99
let vase = 420.01
let canape = 12585.55



let priceInt = " prix initiale de chaque produit ";
//let TauxPromotion2 = `${priceInt* 25/100}`;// NaN
 let  TauxPromotion = "priceInt * 25/100" ;

//let newPriceProduct = `${ priceInt + TauxPromotion}`;

   function fonctionNewPrice (priceInt, TauxPromotion ) {
    
     return `${ priceInt + TauxPromotion}`;
  }


  newPriceProduct = fonctionNewPrice (priceInt, TauxPromotion );
  //console.log("newPriceProduct:", newPriceProduct);
  console.log( newPriceProduct );
  //console.log("priceInt:", priceInt,"TauxPromotion:", TauxPromotion);

 /* 
let newPriceChaise = `${chaise}+ ${chaise * 25/100 }`;
   function fonctionNewPrice (newPriceChaise) {
    
     return `${chaise +(chaise * 25/100 )}`;
  }

    newPriceChaise = fonctionNewPrice(newPriceChaise) ;
  console.log(fonctionNewPrice  ( newPriceChaise) );
  console.log("newPriceChaise :",`${chaise}+ ${chaise * 25/100 }`);
  console.log("newPriceChaise :",fonctionNewPrice(newPriceChaise) );
  */