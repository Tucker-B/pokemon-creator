export interface PokemonPokeApiResponse {
    id: number;
    name: string;
    order: number;
    sprites: SpritesPokeApiResponse;
    abilities: PokemonAbilitySet[];
    moves: PokemonMoveSet[];
    stats: PokemonStatSet[];
    types: PokemonTypeSet[];
}

export interface PokemonMoveSet {
    move: PokemonMove;
}

export interface PokemonMove {
    name: string;
    url: string;
}

export interface PokemonAbilitySet {
    ability: PokemonAbility;
    is_hidden: boolean;
    slot: number;
}

export interface PokemonAbility {
    name: string;
    url: string;
}

export interface PokemonStatSet {
    base_stat: number;
    effort: number;
    stat: PokemonStat;
}

export interface PokemonStat {
    name: string;
    url: string;
}

export interface PokemonTypeSet {
    slot: number;
    type: PokemonType;
}

export interface PokemonType {
    name: string;
    url: string;
}

export interface SpritesPokeApiResponse {
    other: SpritesOtherPokeApiResponse;
}

export interface SpritesOtherPokeApiResponse {
    "official-artwork": OfficialArtWorkPokeApiResponse;
}

export interface OfficialArtWorkPokeApiResponse {
    front_default: string;
    front_shiny: string;
}

export interface PokemonGetAllResultPokeApiResponse {
    name: string;
    url: string;
}

export interface PokemonGetAllPokeApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonGetAllResultPokeApiResponse[]
}