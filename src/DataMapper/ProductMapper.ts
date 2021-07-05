import AbstractMapper from "./AbstractMapper";
import ProductEntity from "../Entities/ProductEntity"

class ProductMapper extends AbstractMapper {
    public mapObjectToEntity(obj : object) : ProductEntity {
        let product = new ProductEntity
/*
        product.setId(obj.id)
        product.setTitle(obj.setTitle)*/
        
        return product
    }
}