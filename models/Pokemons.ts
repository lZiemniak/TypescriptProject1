export interface IPokemons{
    name:string;
}

export class Pokemons implements IPokemons{
    name:string;


    constructor(name:string) {
        this.name = name;
    }
}