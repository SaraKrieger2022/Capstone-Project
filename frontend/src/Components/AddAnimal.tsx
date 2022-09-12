import {FormEvent, useState} from "react";
import NewAnimal from "./NewAnimal";
import Animal from "./Animal";

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
                <h3 className="p-2">Basic Information</h3>

                <div className="container text-center m-4">
                    {Object.keys(animal).map((e, index) => {
                        return e !== "id" &&
                            <div className="row pb-2 input-group" key={index}>
                                <div className="col-4 text-start">
                                    {e}:
                                </div>
                                <div className="col-8">
                                    {selectionField.includes(e) ?
                                        <select className="form-select w-75 ms-auto" name={e} onChange={handleChange}
                                                aria-label="Test">
                                            <option value="unknown">unknown</option>
                                            <option value="yes">yes</option>
                                            <option value="no">no</option>
                                        </select>
                                        : <input className="border border-secondary rounded-1 w-75 ms-5"
                                                 type="text"
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
