import {Animal} from "./Animal";

type NewAnimal = Omit<Animal, "id">

export default NewAnimal;