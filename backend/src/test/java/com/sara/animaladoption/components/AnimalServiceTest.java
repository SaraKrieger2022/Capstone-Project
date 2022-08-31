package com.sara.animaladoption.components;

import org.junit.jupiter.api.Test;
import org.springframework.test.annotation.DirtiesContext;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class AnimalServiceTest {
    List<Animal> animals = List.of(
            new Animal("1", "Penny", "Jack Russell Terrier", "female",
                    "black-white-brown", "5", "small", true, true,
                    true, true, true, false),
            new Animal("2", "Max", "Schäferhund", "male",
                    "brown", "4", "big", true, true,
                    true, false, true, false),
            new Animal("3", "Nala", "Beagle", "female",
                    "multi-coloured", "2", "medium", false, true,
                    false, true, true, true)
    );

    AnimalRepo animalRepoMock = mock(AnimalRepo.class);
    AnimalService animalService = new AnimalService(animalRepoMock);

    private final Animal animal = new Animal("123", "Betty", "Beagle", "female",
            "brown", "4", "medium", true, true, true, true,
            true, false);

    @Test
    @DirtiesContext
    void getAllAnimalsTest() {
        when(animalRepoMock.findAll()).thenReturn(animals);

        List<Animal> actual = animalService.getAllAnimals();
        List<Animal> expected = animals;

        assertThat(actual).isEqualTo(expected);
    }

    @Test
    @DirtiesContext
    void addAnimalTest() {
        when(animalRepoMock.save((any(Animal.class)))).thenReturn(animal);

        Animal actual = animalService.addAnimal(new NewAnimal(animal.name(), animal.breed(),
                animal.gender(), animal.colour(), animal.age(), animal.size(), animal.vaccinated(),
                animal.spayed_neutered(), animal.healthy(), animal.kids(), animal.other_dogs(), animal.cats()));

        assertThat(actual).isEqualTo(animal);
    }

}
