package com.sara.animaladoption.components;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface AnimalRepo extends MongoRepository<Animal, String> {


}
