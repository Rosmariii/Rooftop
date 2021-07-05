import AbstractEntity from "./AbstractEntity";

class ProductEntity extends AbstractEntity {
    private title : String
    private price : Number

    public setTitle(title : String) {
        this.title = title
    }

    public setPrice(price : Number) {
        this.price = price
    }

    public getTitle() : String {
        return this.title
    }

    public getPrice() : Number {
        return this.price
    }


}

export default ProductEntity