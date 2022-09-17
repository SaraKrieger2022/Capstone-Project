import Animal from "./Animal";
import {Button, Card, ListGroup, ListGroupItem} from "react-bootstrap";
import "./AnimalCard.css"

type AnimalCardProps = {
    animal: Animal
}

export default function AnimalCard(props: AnimalCardProps) {

    return (
        <>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={"https://source.unsplash.com/random/100x100/?dog&" + props.animal.breed}/>
                <Card.Body>
                    <Card.Title>{props.animal.name}</Card.Title>
                    <Card.Text>
                        <ListGroup>
                            <ListGroupItem>{props.animal.breed}</ListGroupItem>
                            <ListGroupItem>{props.animal.gender + " / " + props.animal.age + " years"}</ListGroupItem>
                        </ListGroup>
                    </Card.Text>
                    <Button className="button" href={"http://localhost:3000/#/animals/animaldetails/" + props.animal.id}
                    >Go to {props.animal.name + "'s "} details </Button>
                </Card.Body>
            </Card>
        </>
    );
}
