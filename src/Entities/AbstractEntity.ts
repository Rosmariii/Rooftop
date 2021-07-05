
class AbstractEntity {
    protected id : Number

    public setId(id : Number){
        return this.id = id
    }

    public getId() : Number {
        return this.id
    }
}

export default AbstractEntity