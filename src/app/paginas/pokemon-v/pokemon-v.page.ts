import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-v',
  templateUrl: './pokemon-v.page.html',
  styleUrls: ['./pokemon-v.page.scss'],
})
export class PokemonVPage implements OnInit {

  constructor(private route: ActivatedRoute,private http: HttpClient) { }

  pokemon: any;

  name: string = "";

  sprites: any[] = [];

  moves: any[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log('id es:', id);
      this.getPokemon(id);
    });
  }

  getPokemon(id: string) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    this.http.get(url).subscribe((response: any) => {
      this.pokemon = response;
      this.getStandardSprites(this.pokemon.sprites);
      this.get3Moves(this.pokemon.moves);
      this.name = this.pokemon.name; 
    });
  }

  getStandardSprites(sprites: any){     
      Object.entries(sprites).filter(([key, value]) => {
        if(key.endsWith('_default') || key.endsWith('shiny') ){
          //console.log(key);
          this.sprites.push(value);
        }
      });
  }

  get3Moves(moves: any){
    this.moves = moves.slice(0,3);
  }

}

