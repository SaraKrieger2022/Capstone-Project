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

    const addAnimal = (newName: string) => {
        const newAnimal: NewAnimal = {
            age: "",
            breed: "",
            cats: "",
            colour: "",
            gender: "",
            kids: "",
            other_dogs: "",
            size: "",
            spayed_neutered: "",
            vaccinated: "",
            name: newName
        }
        return axios.post("/animals", newAnimal)
            .then((response) => {
                    return response.data
                        .then(getAllAnimals)
                }
            );
    }

    return (
        {animals, addAnimal}
    );
}
