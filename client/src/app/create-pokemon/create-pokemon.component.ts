import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { PokemonPokeApiResponse } from '../types/Pokemon';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent implements OnInit {

  pokemonName: string | null = "";
  pokemon: PokemonPokeApiResponse | null = null;

  constructor(private readonly pokeapiService: PokeapiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.pokemonName = routeParams.get("name");

    if (this.pokemonName && this.pokemon === null) {
      this.pokeapiService.getPokemon(this.pokemonName).subscribe({
        next: (res) => {
          if (res) {
            console.log(`pokemon: ${JSON.stringify(res)}`);
            this.pokemon = res;
          }
        },
        error: (err) => {
          console.log(JSON.stringify(err));
        },
        complete: () => console.log("ngOnInit().getPokemon() finished")
      })
    }
  }
}
