import Animal from "./Animal";
import {Button, Card, ListGroup, ListGroupItem} from "react-bootstrap";

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
                            <p>I'm the most amazing dog ever!!</p>
                            <p>I'm the most amazing dog ever!!</p>
                            <p>I'm the most amazing dog ever!!</p>
                        </ListGroup>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    );
}