import ProductEntity from '../src/Entities/ProductEntity'
import ProductsRepository from '../src/Repositories/ProductsRepository'

let repositorio = new ProductsRepository
let p = repositorio.findByid(1)
let todos = repositorio.findAll()

console.log(p)
console.log(todos)

let productEntity = new ProductEntity
productEntity.setId(123)
console.log(productEntity.getId())


if (productEntity.getId() == 123) {
    console.info('The id property returned the expected data')
} else {
    console.error('123 was expected and returned ' + productEntity.getId())
}
 