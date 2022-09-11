import Animal from "./Animal";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ListGroup, ListGroupItem} from "react-bootstrap";


type AnimalDetailsProps = {
    getAnimalByID: (id: string) => Promise<Animal>
}

export default function AnimalDetails(props: AnimalDetailsProps) {

    const [animal, setAnimal] = useState<Animal | null>(null);

    const {id} = useParams();

    useEffect(
        () => {
            if (id === undefined) {
                return
            }
            props.getAnimalByID(id).then(data => setAnimal(data))
        }, []
    )


    return (
        <div>
            <h3>{animal?.name}</h3>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/200x100/?dog&" className="d-block w-100"
                             alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/200x100/?dog&" className="d-block w-100"
                             alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/200x100/?dog&" className="d-block w-100"
                             alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container text-center m-4">

                <div className="row pb-2 input-group">
                    <div className="col-5 text-start">
                        <ListGroup>
                            <ListGroupItem className="border-0 p-0" key={animal?.id}>
                                <li className="list-group-item">Name:</li>
                                <li className="list-group-item">Breed:</li>
                                <li className="list-group-item">Gender:</li>
                                <li className="list-group-item">Colour:</li>
                                <li className="list-group-item">Age:</li>
                                <li className="list-group-item">Size:</li>
                                <li className="list-group-item">Vaccinated:</li>
                                <li className="list-group-item">Spayed / neutered:</li>
                                <li className="list-group-item">Kids:</li>
                                <li className="list-group-item">Other dogs:</li>
                                <li className="list-group-item">Cats:</li>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                    <div className="col-7 text-start">
                        <ListGroup horizontal className="flex-wrap justify-content-evenly bg-transparent gap-2">
                            <ListGroupItem className="border-0 rounded p-0" key={animal?.id}>
                                <li className="list-group-item">{animal?.name}</li>
                                <li className="list-group-item">{animal?.breed}</li>
                                <li className="list-group-item">{animal?.gender}</li>
                                <li className="list-group-item">{animal?.colour}</li>
                                <li className="list-group-item">{animal?.age}</li>
                                <li className="list-group-item">{animal?.size}</li>
                                <li className="list-group-item">{animal?.vaccinated}</li>
                                <li className="list-group-item">{animal?.spayed_neutered}</li>
                                <li className="list-group-item">{animal?.kids}</li>
                                <li className="list-group-item">{animal?.other_dogs}</li>
                                <li className="list-group-item">{animal?.cats}</li>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}
