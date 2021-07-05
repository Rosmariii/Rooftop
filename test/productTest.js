"use strict";
exports.__esModule = true;
var ProductEntity_1 = require("../src/Entities/ProductEntity");
var ProductsRepository_1 = require("../src/Repositories/ProductsRepository");
var repositorio = new ProductsRepository_1["default"];
var p = repositorio.findByid(1);
var todos = repositorio.findAll();
console.log(p);
console.log(todos);
var productEntity = new ProductEntity_1["default"];
productEntity.setId(123);
console.log(productEntity.getId());
if (productEntity.getId() == 123) {
    console.info('The id property returned the expected data');
}
else {
    console.error('123 was expected and returned ' + productEntity.getId());
}
