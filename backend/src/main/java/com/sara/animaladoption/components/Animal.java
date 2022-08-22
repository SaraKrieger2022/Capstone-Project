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
    Boolean vaccinated,
    Boolean spayed_neutered,
    Boolean healthy,
    Boolean kids,
    Boolean other_dogs,
    Boolean cats

    ){
}
