import Animal from "./Animal";
import AnimalCard from "./AnimalCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup, ListGroupItem} from "react-bootstrap";

type AnimalListProps = {
    animals: Animal[]
}

export default function AnimalList(props: AnimalListProps) {

    return (
        <>
            <ListGroup horizontal className="d-flex flex-wrap justify-content-evenly bg-transparent gap-5">
                {props.animals.map(animal =>
                    <ListGroupItem className="border-0 rounded p-0" key={animal.id}>
                        <AnimalCard animal={animal}/>
                    </ListGroupItem>)}
            </ListGroup>
        </>
    )
}
