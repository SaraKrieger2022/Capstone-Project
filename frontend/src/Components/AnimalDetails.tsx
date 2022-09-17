import Animal from "./Animal";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import "./AnimalDetails.css"

type AnimalDetailsProps = {
    getAnimalByID: (id: string) => Promise<Animal>
}

function AnimalProperty(props: { name: string, value: string | undefined }) {
    return (
        <div className="row pb-2">
            <div className="col-5 text-start fs-5 flex-wrap">
                <p> {props.name.charAt(0).toUpperCase() + props.name.slice(1).replace("_", "/")}:</p>
            </div>
            <div className="col-7 text-start h">
                <p className="input-field bg-white align-middle"> {props.value} </p>
            </div>

        </div>
    );
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
            //eslint-disable-next-line
        }, []
    )
    return (
        <div className="animal-display">
            <h4>{animal?.name}</h4>
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
            <div className="container text-center container-fluid m-4">
                <h3>Basic Information</h3>
                <p className={"properties"}>
                    <AnimalProperty name="name" value={animal?.name}></AnimalProperty>
                    <AnimalProperty name="breed" value={animal?.breed}></AnimalProperty>
                    <AnimalProperty name="gender" value={animal?.gender}></AnimalProperty>
                    <AnimalProperty name="colour" value={animal?.colour}></AnimalProperty>
                    <AnimalProperty name="age" value={animal?.age}></AnimalProperty>
                    <AnimalProperty name="size" value={animal?.size}></AnimalProperty>
                </p>
                <h3>Health</h3>
                <p className={"properties"}>
                    <AnimalProperty name="vaccinated" value={animal?.vaccinated}></AnimalProperty>
                    <AnimalProperty name="spayed_neutered" value={animal?.spayed_neutered}></AnimalProperty>
                </p>
                <h3>Agreeable with...</h3>
                <p className={"properties"}>
                    <AnimalProperty name="kids" value={animal?.kids}></AnimalProperty>
                    <AnimalProperty name="other_dogs" value={animal?.other_dogs}></AnimalProperty>
                    <AnimalProperty name="Cats" value={animal?.cats}></AnimalProperty>
                </p>
            </div>
        </div>
    )
};

