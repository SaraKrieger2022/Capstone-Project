package com.sara.animaladoption.components;

import org.springframework.data.annotation.Id;

public record Animal(

        @Id
        String id,
        String name,
        String breed,
        String gender,
        String colour,
        String age,
        String size,
        String vaccinated,
        String spayed_neutered,
        String kids,
        String other_dogs,
        String cats

) {
}
