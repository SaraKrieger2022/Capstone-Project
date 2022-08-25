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
    boolean vaccinated,
    boolean spayed_neutered,
    boolean healthy,
    boolean kids,
    boolean other_dogs,
    boolean cats

    ){
}
