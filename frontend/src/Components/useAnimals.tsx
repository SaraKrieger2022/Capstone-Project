import Animal from "./Animal";
import {useEffect, useState} from "react";
import axios from "axios";
import NewAnimal from "./NewAnimal";

export default function useAnimals() {
    const [animals, setAnimals] = useState<Animal[]>([])

    useEffect(() => {
        getAllAnimals()
    }, [])

    const getAllAnimals = () => {
        axios.get("/animals")
            .then((response) => response.data)
            .then(setAnimals)
    }

    const addAnimal = (newAnimal: NewAnimal) => {
        return axios.post("/animals", newAnimal)
            .then((response) => {
                getAllAnimals();
                return response.data
            });
    }

    const getAnimalById = (id: string) => {
        return axios.get(`/animals/animaldetails/${id}`)
            .then(response => response.data)

    }

    return (
        {animals, addAnimal, getAnimalById}
    );
}
