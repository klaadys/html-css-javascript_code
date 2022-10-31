
const average = 10;
console.log(average);

// l'événement avoir la moyenne
const hasAverage = average >= 10 ;
console.log(average);
// l'événement avoir une mention assez bien!
const prettyAverage = average >= 12 &&  average < 14;
console.log(prettyAverage);
// l'événement avoir une mention bien! 
const goodAverage = average >= 14 && average < 16;
console.log(goodAverage);
// l'événement avoir très bien!
const highAverage = average > 16;
console.log(highAverage);
// 2 posibilite d'evenement de classement de mention
let mention = hasAverage;
console.log(hasAverage);
let mentionBis = prettyAverage||goodAverage||highAverage;
console.log(prettyAverage,goodAverage,highAverage);