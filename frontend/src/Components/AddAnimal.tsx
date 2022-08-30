import {FormEvent, useState} from "react";
import {Animal} from "./Animal";

type AddAnimalProps = {
    addAnimal: (name: string, breed: string, gender: string, colour: string, age: string, size: string) => Promise<Animal>
}

export default function AddAnimal(props: AddAnimalProps) {

    const [animal, setAnimal] = useState({
        name: "",
        breed: "",
        gender: "",
        colour: "",
        age: "",
        size: ""
    });

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
                <label>Name</label>
                <input type="text" id="name" name="name" value={animal.name} onChange={handleChange} required/>
                <label>Breed</label>
                <input type=" text" id="breed" name="breed" value={animal.breed} onChange={handleChange} required/>
                <label>Gender</label>
                <input type=" text" id="gender" value={animal.gender} onChange={handleChange} required/>
                <label>Colour</label>
                <input type=" text" id="colour" value={animal?.colour} onChange={handleChange} required/>
                <label>Age</label>
                <input type=" text" id="age" value={animal?.age} onChange={handleChange} required/>
                <label>Size</label>
                <input type=" text" id="size" value={animal?.size} onChange={handleChange} required/>
            </form>
        </>
    );

}
