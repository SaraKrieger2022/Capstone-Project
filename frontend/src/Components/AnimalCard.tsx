import Animal from "./Animal";
import {Button, Card, ListGroup} from "react-bootstrap";

type AnimalCardProps = {
    animal: Animal
}

export default function AnimalCard(props: AnimalCardProps) {

    return (
        <>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src="holder.js/100px180"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        <ListGroup>
                            {Object.keys(props.animal).map((e, index) => {
                                return <ListGroup.Item
                                    key={index}>{e}: {Object.values(props.animal)[index]}</ListGroup.Item>
                            })
                            }
                        </ListGroup>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>


        </>
    );
}