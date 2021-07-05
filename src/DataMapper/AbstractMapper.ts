import AbstractEntity from "../Entities/AbstractEntity";

abstract class AbstractMapper {
    abstract mapObjectToEntity(obj : object): AbstractEntity;
}

export default AbstractMapper