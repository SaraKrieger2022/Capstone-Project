package com.sara.animaladoption.components;


import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnimalService {


    private final AnimalRepo animalRepo;

    public AnimalService(AnimalRepo animalRepo) {
        this.animalRepo = animalRepo;
    }

    public List<Animal> getAllAnimals() {
        return animalRepo.findAll();
    }

}




