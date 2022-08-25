import {Animal} from "./Animal";

type AnimalCardProps = {
    animal: Animal
}

export default function AnimalCard(props: AnimalCardProps) {

    return (
        <>
            {props.animal.id}
            {props.animal.name}
            {props.animal.breed}
            {props.animal.gender}
            {props.animal.colour}
            {props.animal.age}
            {props.animal.size}
            {props.animal.vaccinated}
            {props.animal.spayed_neutered}
            {props.animal.healthy}
            {props.animal.kids}
            {props.animal.other_dogs}
            {props.animal.cats}
        </>
    );
}