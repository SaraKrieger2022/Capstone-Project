import useAnimals from "./useAnimals";
import {Route, Routes} from "react-router-dom";
import AnimalList from "./AnimalList";
import AddAnimal from "./AddAnimal";
import AnimalDetails from "./AnimalDetails";
import Home from "./Home";


export default function AllRoutes() {

    const animalHook = useAnimals();

    return (
        <>
            <Routes>
                <Route path={"/animals"} element={<AnimalList animals={animalHook.animals}/>}/>
                <Route path={"/animals/add"} element={<AddAnimal addAnimal={animalHook.addAnimal}/>}/>
                <Route path={"/animals/animaldetails/:id"}
                       element={<AnimalDetails getAnimalByID={animalHook.getAnimalById}/>}/>
                <Route path={"/"} element={<Home/>}/>
            </Routes>
        </>
    );

}
