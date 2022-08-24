import {Animal} from "./Animal";
import AnimalCard from "./AnimalCard";

type AnimalListProps = {
    animals: Animal[]
}

export default function AnimalList(props: AnimalListProps){

    return (
        <>
            {props.animals.map(animal =>
                <li key={animal.id}>
                    <AnimalCard animals={animal}/>
                </li>)}

        </>
    )
}