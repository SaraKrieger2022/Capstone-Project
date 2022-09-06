import {FormEvent, useState} from "react";
import Animal from "./Animal";
import NewAnimal from "./NewAnimal";

type AddAnimalProps = {
    addAnimal: (animal: NewAnimal) => Promise<Animal>;
}

export default function AddAnimal(props: AddAnimalProps) {

    const [animal, setAnimal] = useState<NewAnimal>({
        name: "",
        breed: "",
        gender: "",
        colour: "",
        age: "",
        size: "",
        vaccinated: "unknown",
        spayed_neutered: "unknown",
        kids: "unknown",
        other_dogs: "unknown",
        cats: "unknown"

    });

    const selectionField: string [] = [
        "vaccinated",
        "spayed_neutered",
        "kids",
        "other_dogs",
        "cats",
    ]

    const onAnimalSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.addAnimal(animal)
        //   console.log(animal);

    }

    function handleChange(event: { target: { value: string; name: string; }; }) {
        const value = event.target.value;
        setAnimal({
            ...animal,
            [event.target.name]: value
        });
    }

    return (
        <>
            <form onSubmit={onAnimalSubmit}>
                <h3>Basic Information</h3>
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
                    {Object.keys(animal).map((e, index) => {
                        return e !== "id" &&
                            <div className="row pb-2 input-group" key={index}>
                                <div className="col-4 text-start">
                                    {e}:
                                </div>
                                <div className="col-8">
                                    {selectionField.includes(e) ?
                                        <select className="form-select w-75 ms-auto "
                                                aria-label="Test">
                                            <option value="3">unknown</option>
                                            <option value="1">yes</option>
                                            <option value="2">no</option>
                                        </select>
                                        : <input type="text"
                                                 name={e}
                                                 value={Object.values(animal)[index]}
                                                 onChange={handleChange}
                                                 required/>}
                                </div>
                            </div>
                    })}
                </div>
                <div>
                    <button type="submit" className="btn btn-light">Save</button>
                </div>
            </form>
        </>
    );

}
