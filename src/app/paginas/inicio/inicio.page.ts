import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  pokemonList: any[] = [];
  searchTerm: string = '';
  filteredPokemonList: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0').subscribe(
      (data: any) => {
        this.pokemonList = data.results.map((pokemon: any) => {
          const id = pokemon.url.split('/').slice(-2, -1)[0]; 
          pokemon.Path = `/pokemon-v/${id}`;
          pokemon.id = id;
          pokemon.imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
          return pokemon;
        });
        this.filteredPokemonList = [...this.pokemonList];
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

  filterPokemon() {
    if (this.searchTerm.trim() === '') {
      this.filteredPokemonList = [...this.pokemonList];
    } else {
      this.filteredPokemonList = this.pokemonList.filter((pokemon: any) =>
        pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        pokemon.url.includes(this.searchTerm.toLowerCase())
      );
    }
  }

}
