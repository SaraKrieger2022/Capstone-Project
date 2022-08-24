import {Animal} from "./Animal";
import {useEffect, useState} from "react";
import axios from "axios";


export default function useAnimals() {
    const [animals, setAnimals] =useState<Animal[]>([])

    useEffect(() => {
        getAllAnimals()
    }, [])


const getAllAnimals = () => {
    axios.get("/animals")
        .then((response) => response.data)
        .then(setAnimals)
}

  return (
      {animals}



  )

}