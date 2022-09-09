import useAnimals from "./useAnimals";
import {Route, Routes} from "react-router-dom";
import AnimalList from "./AnimalList";
import AddAnimal from "./AddAnimal";
import AnimalDetails from "./AnimalDetails";

export default function AllRoutes() {

    const animalHook = useAnimals();

    return (
        <>
            <Routes>
                <Route path={"/animals"} element={<AnimalList animals={animalHook.animals}/>}/>
                <Route path={"/animals/add"} element={<AddAnimal addAnimal={animalHook.addAnimal}/>}/>
                <Route path={"/animals/animaldetails/:id"}
                       element={<AnimalDetails getAnimalById={animalHook.getAnimalById}/>}/>
            </Routes>
        </>
    );

}
