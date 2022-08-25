import useAnimals from "./useAnimals";
import {Route, Routes} from "react-router-dom";
import AnimalList from "./AnimalList";

export default function AllRoutes() {

    const animalHook = useAnimals();

    return (
        <>
            <Routes>
                <Route path={"/animals"} element={<AnimalList animals={animalHook.animals}/>}/>
            </Routes>
        </>
    );

}
