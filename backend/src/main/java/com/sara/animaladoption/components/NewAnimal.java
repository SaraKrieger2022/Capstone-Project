package com.sara.animaladoption.components;

public record NewAnimal(

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
) {


}
