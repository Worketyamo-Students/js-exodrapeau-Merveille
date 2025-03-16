let pay = prompt("entrer le pays dont vous souhaitez avoir son drapeau")

let partie1 = document.getElementById("partie1");
let partie2 = document.getElementById("partie2");
let partie3 = document.getElementById("partie3");
let etoile = document.getElementById("etoile");
let parent = document.getElementById("parent");
let cercle = document.getElementById("cercle")

let pays = pay.toLowerCase();
console.log(pays)
if (pays === "cameroun") {
    partie1.style.background = "green";
    partie2.style.backgroundColor = "red";
    partie3.style.backgroundColor = "yellow";
    etoile.style.background = "yellow";

} else if (pays === "senegal") {
    partie1.style.background = "green";
    partie2.style.background = "yellow";
    partie3.style.backgroundColor = "red";
    etoile.style.background = "green";
}
else if (pays === "guinee") {
    partie1.style.background = "green";
    partie2.style.background = "yellow";
    partie3.style.background = "red";

} else if (pays == "japon") {

    cercle.style.width = "45%";
    cercle.style.height = "15%";
   cercle.style.background ="red";
    partie2.style.background = "white";
   
    
 } else if (pays === "tchad") {
        partie1.style.background = "blue";
        partie2.style.background = "yellow";
        partie3.style.background = "red";
      
 }