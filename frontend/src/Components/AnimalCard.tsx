import {Animal} from "./Animal";

type AnimalCardProps = {
    animals: Animal
}



export default function AnimalCard(props: AnimalCardProps){

    return (
        <>
            {props.animals.id}
            {props.animals.name}
            {props.animals.breed}
            {props.animals.gender}
            {props.animals.colour}
            {props.animals.age}
            {props.animals.size}
            {props.animals.vaccinated}
            {props.animals.spayed_neutered}
            {props.animals.healthy}
            {props.animals.kids}
            {props.animals.other_dogs}
            {props.animals.cats}
        </>


    )
}