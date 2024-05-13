import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { PokemonGetAllResultPokeApiResponse } from '../types/Pokemon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemonList: PokemonGetAllResultPokeApiResponse[] = [];
  pageNumber: number = 1;
  constructor(private readonly pokeapiService: PokeapiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setPageNumber();
  }

  setPageNumber(): void {
    this.route.queryParams.subscribe(params => {
      const currentPage = params["page"];
      console.log(`Current page via setPageNumber(): ${currentPage}`)
      if (currentPage && Number(currentPage) >= 1) {
        this.pageNumber = Number(currentPage);

      } else {
        this.pageNumber = 1;
      }
      this.setPokemonList();
    });
  }

  setPokemonList(): void {
    this.pokeapiService.getPokemonList((this.pageNumber - 1) * 20, 20).subscribe({
      next: (pokemonList) => {
        console.log("calling service");

        this.pokemonList = pokemonList.results;
        console.log(JSON.stringify(this.pokemonList));
      },
      error: (err) => console.log(JSON.stringify(err)),
      complete: () => console.log("Finished calling poke api")
    })
  }


}
