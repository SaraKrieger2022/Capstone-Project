package com.sara.animaladoption.components;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;

@Service
public class AnimalService {

    private final AnimalRepo animalRepo;

    public AnimalService(AnimalRepo animalRepo) {
        this.animalRepo = animalRepo;
    }

    public List<Animal> getAllAnimals() {
        return animalRepo.findAll();
    }

    public Animal addAnimal(NewAnimal newAnimal) {
        return animalRepo.save(new Animal(
                getRandomId(),
                newAnimal.name(),
                newAnimal.breed(),
                newAnimal.gender(),
                newAnimal.colour(),
                newAnimal.age(),
                newAnimal.size(),
                newAnimal.vaccinated(),
                newAnimal.spayed_neutered(),
                newAnimal.kids(),
                newAnimal.other_dogs(),
                newAnimal.cats()
        ));
    }

    public String getRandomId() {
        return UUID.randomUUID().toString();
    }

    public Animal getAnimalById(String id) {
        return animalRepo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

    }

}
