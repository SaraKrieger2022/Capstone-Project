package com.sara.animaladoption;

import com.sara.animaladoption.components.Animal;
import com.sara.animaladoption.components.AnimalRepo;
import com.sara.animaladoption.components.AnimalService;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;


class ServiceTest {


    AnimalRepo animalRepoMock = mock(AnimalRepo.class);
    AnimalService animalService = new AnimalService(animalRepoMock);


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

    @Test
    void getAllAnimals() {
        when(animalRepoMock.findAll()).thenReturn(animals);

        List<Animal> actual = animalService.getAllAnimals();
        List<Animal> expected = animals;

        assertThat(actual).isEqualTo(expected);
    }

}
