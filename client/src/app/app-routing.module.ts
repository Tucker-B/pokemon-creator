import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { CreatePokemonComponent } from './create-pokemon/create-pokemon.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [{ path: "", component: HomeComponent }, { path: "pokedex", component: PokedexComponent }, { path: "pokedex/:name", component: PokemonComponent }, { path: "create-pokemon/:name", component: CreatePokemonComponent }, { path: "login", component: LoginFormComponent }, { path: "team", component: TeamComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
