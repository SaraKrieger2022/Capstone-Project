package com.sara.animaladoption.components;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatExceptionOfType;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class AnimalServiceTest {
    List<Animal> animals = List.of(
            new Animal("1", "Penny", "Jack Russell Terrier", "female",
                    "black-white-brown", "5", "small", "yes", "yes",
                    "yes", "yes", "yes"),
            new Animal("2", "Max", "Schäferhund", "male",
                    "brown", "4", "big", "yes", "yes",
                    "yes", "yes", "yes"),
            new Animal("3", "Nala", "Beagle", "female",
                    "multi-coloured", "2", "medium", "yes", "yes",
                    "yes", "yes", "yes")
    );

    AnimalRepo animalRepoMock = mock(AnimalRepo.class);
    AnimalService animalService = new AnimalService(animalRepoMock);

    Animal animal = new Animal("1", "Penny", "Jack Russell Terrier", "female",
            "black-white-brown", "5", "small", "yes", "yes",
            "yes", "yes", "yes");

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
                animal.spayed_neutered(), animal.kids(), animal.other_dogs(), animal.cats()));

        assertThat(actual).isEqualTo(animal);
    }

    @Test
    @DirtiesContext
    void getAnimalByIdIfExistsTest() {
        when(animalRepoMock.findById(any(String.class))).thenReturn(Optional.of(animal));
        Animal actual = animalService.getAnimalById("bla");
        Assertions.assertEquals(animal, actual);
    }

    @Test
    @DirtiesContext
    void getAnimalByIdIfDoesntExistsTest() {
        when(animalRepoMock.findById(any(String.class))).thenThrow(new ResponseStatusException(HttpStatus.NOT_FOUND));
        assertThatExceptionOfType(ResponseStatusException.class)
                .isThrownBy(() -> animalService.getAnimalById("bla"));
    }
}
