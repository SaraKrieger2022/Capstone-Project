import {FormEvent, useState} from "react";
import NewAnimal from "./NewAnimal";
import Animal from "./Animal";
import "./AddAnimal.css"

type AddAnimalProps = {
    addAnimal: (animal: NewAnimal) => Promise<Animal>
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
        cats: "unknown",

    });

    const selectionField: string [] = [
        "vaccinated",
        "spayed_neutered",
        "kids",
        "other_dogs",
        "cats",
    ]

    const onAnimalSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await props.addAnimal(animal);
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
                <h3 className="p-3">Basic Information</h3>

                <div className="container text-center m-4">
                    {Object.keys(animal).map((e, index) => {
                        return e !== "id" &&
                            <div className="row pb-2 input-group d-flex align-items-center" key={index}>
                                <div className="col-5 text-start">
                                    {e.charAt(0).toUpperCase() + e.slice(1).replace("_", " / ")}:
                                </div>
                                <div className="col-7">
                                    {selectionField.includes(e) ?
                                        <select className="form-select form-select-lg"
                                                name={e}
                                                onChange={handleChange}
                                                aria-label="Test">

                                            <option value="unknown">unknown</option>
                                            <option value="yes">yes</option>
                                            <option value="no">no</option>
                                        </select>
                                        : <input
                                            className="details-fields form-control-lg border border-secondary rounded-3 w-75 ms-5"
                                            type="text"
                                            placeholder=""
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
