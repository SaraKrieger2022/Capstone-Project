import {FormEvent, useState} from "react";
import Animal from "./Animal";

type AddAnimalProps = {
    addAnimal: (name: string,
                breed: string,
                gender: string,
                colour: string,
                age: string,
                size: string,
                vaccinated: string,
                spayed_neutered: string,
                kids: string,
                other_dogs: string,
                cats: string
    ) => Promise<Animal>
}

export default function AddAnimal(props: AddAnimalProps) {

    const [animal, setAnimal] = useState({
        name: "",
        breed: "",
        gender: "",
        colour: "",
        age: "",
        size: "",
        vaccinated: "",
        spayed_neutered: "",
        kids: "",
        other_dogs: "",
        cats: ""

    });


    const [checked, setChecked] = useState(false);

    const selectionField: string [] = [
        "vaccinated",
        "spayed_neutered",
        "kids",
        "other_dogs",
        "cats",
    ]

    const onAnimalSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    function handleChange(event: { target: { value: any; name: any; }; }) {
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
                <div className="container text-center">
                    {Object.keys(animal).map((e, index) => {
                        return e !== "id" &&
                            <div className="row pb-2 input-group" key={index}>
                                <div className="col-4 text-start">
                                    {e}:
                                </div>
                                <div className="col-8">
                                    {selectionField.includes(e) ?
                                        <select className="form-select w-75 ms-auto"
                                                aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">yes</option>
                                            <option value="2">no</option>
                                            <option value="3">unknown</option>
                                        </select>
                                        : <input type=" text" name={e}
                                                 value={Object.values(animal)[index]}
                                                 onChange={handleChange}
                                                 required/>}
                                </div>
                            </div>
                    })}
                </div>
            </form>
        </>
    );

}
