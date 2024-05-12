import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { PokemonPokeApiResponse } from '../types/Pokemon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  name: string | null = "";
  pokemon: PokemonPokeApiResponse | null = null;
  pokemonImgUrl: string = "";
  constructor(private readonly pokeapiService: PokeapiService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.name = routeParams.get("name");

    if (this.name && this.pokemon === null) {
      this.pokeapiService.getPokemon(this.name).subscribe({
        next: (res) => {
          if (res) {
            console.log(`pokemon: ${JSON.stringify(res)}`);
            this.pokemon = res;
            this.pokemonImgUrl = this.pokemon.sprites.other["official-artwork"]?.front_default;
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
