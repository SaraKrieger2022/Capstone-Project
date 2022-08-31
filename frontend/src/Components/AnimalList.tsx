import Animal from "./Animal";
import AnimalCard from "./AnimalCard";
import 'bootstrap/dist/css/bootstrap.min.css';

type AnimalListProps = {
    animals: Animal[]
}

export default function AnimalList(props: AnimalListProps) {

    return (
        <>
            <ul>
                {props.animals.map(animal =>
                    <li key={animal.id}>
                        <AnimalCard animal={animal}/>
                    </li>)}

            </ul>
        </>
    )
}
