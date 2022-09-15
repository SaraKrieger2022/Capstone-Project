import Animal from "./Animal";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

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
            //eslint-disable-next-line
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
                    <div className="col-5 text-start fs-5">
                        {animal && Object.keys(animal).map((e, index) => {
                            return <p> {e} :</p>
                        })}
                    </div>
                    <div className="col-7 text-start">
                        {animal && Object.values(animal).map((e, index) => {
                            return <p className="bg-white"> {e} </p>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
