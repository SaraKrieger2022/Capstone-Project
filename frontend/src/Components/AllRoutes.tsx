import useAnimals from "./useAnimals";
import {Route, Routes} from "react-router-dom";
import AnimalList from "./AnimalList";
import AddAnimal from "./AddAnimal";

export default function AllRoutes() {

    const animalHook = useAnimals();

    return (
        <>
            <Routes>
                <Route path={"/animals"} element={<AnimalList animals={animalHook.animals}/>}/>
                <Route path={"/animals/add"} element={<AddAnimal addAnimal={animalHook.addAnimal}/>}/>
                <Route path={"/animals/details"} element={<AddAnimal addAnimal={animalHook.addAnimal}/>}/>
            </Routes>
        </>
    );

}
