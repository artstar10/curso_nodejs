console.log("Programador Fullstack");

var cliente = "Arthur Neves";

console.log("Cliente: " + cliente);

var valProduct = 100;
var valDiscount = 37;

var discountFunc = require("./modules/calDiscount");

var finalValue = discountFunc(valProduct, valDiscount);

console.log("Valor final do produto R$ " + finalValue);
