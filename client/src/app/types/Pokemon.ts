export interface PokemonPokeApiResponse {
    name: string;
    order: number;
    sprites: SpritesPokeApiResponse;
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