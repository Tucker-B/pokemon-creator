import { Injectable } from '@angular/core';
import { PokemonGetAllPokeApiResponse, PokemonGetAllResultPokeApiResponse, PokemonPokeApiResponse } from '../types/Pokemon';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  baseUrl: string = "https://pokeapi.co/api/v2";
  private pokemonSource = new BehaviorSubject<PokemonPokeApiResponse | null>(null);
  private pokemonListSource = new BehaviorSubject<PokemonGetAllPokeApiResponse | null>(null);
  pokemon$ = this.pokemonSource.asObservable();
  pokemonList$ = this.pokemonListSource.asObservable();

  constructor(private readonly http: HttpClient) { }

  getPokemonList(offset: number, limit: number) {
    console.log("getting pokemon list via api");
    const url: string = `${this.baseUrl}/pokemon?offset=${offset}&limit=${limit}`;
    console.log(`api url: ${url}`);

    return this.http.get<PokemonGetAllPokeApiResponse>(url).pipe(
      map((res: PokemonGetAllPokeApiResponse) => {
        console.log(`res: ${JSON.stringify(res)}`);
        const pokemonList = res;
        if (pokemonList) {
          console.log("Setting res");
          this.setPokemonList(pokemonList);
        }
        return pokemonList;
      })
    );
  }

  getPokemon(name: string | null) {
    const url = `${this.baseUrl}/pokemon/${name}`;

    return this.http.get<PokemonPokeApiResponse>(url).pipe(
      map(res => {
        this.setPokemon(res);
        return res;
      })
    );
  }

  setPokemon(pokemon: PokemonPokeApiResponse) {
    this.pokemonSource.next(pokemon);
  }

  setPokemonList(pokemonList: PokemonGetAllPokeApiResponse | null) {
    this.pokemonListSource.next(pokemonList);
  }
}
