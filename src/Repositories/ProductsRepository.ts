import ProductEntity from '../Entities/ProductEntity'
import AbstractRepository from '../Repositories/AbstractRepository'
import {PathLike, readFileSync} from 'fs'

class ProductsRespository extends AbstractRepository {
    protected table : PathLike = __dirname + '/../../products.json'

    public mapObjectToEntity(items){ 

        this.data = items.map(item => {

            let product = new ProductEntity
    
            product.setId(item.id)
            product.setPrice(Number(item.price.replace('$', '')))
            product.setTitle(item.title)

            return product
        })

    }
}

export default ProductsRespository
