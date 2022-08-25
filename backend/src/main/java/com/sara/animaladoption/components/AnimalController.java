package com.sara.animaladoption.components;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/animals")
public class AnimalController {

private final AnimalService animalService;

    public AnimalController(AnimalService animalService) {
        this.animalService = animalService;
    }

    @GetMapping
    public List<Animal> getAllAnimals(){
        return animalService.getAllAnimals();
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Animal addAnimal(@RequestBody NewAnimal newAnimal) {
        return animalService.addAnimal(newAnimal);

    }





}
