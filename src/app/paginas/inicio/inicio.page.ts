import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  pokemonList: any[] = [];
  searchTerm: string = '';
  filteredPokemonList: any[] = [];
  productosList: any;
  filteredProductosList: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getProductos();
  }
  
  ionViewWillEnter() {
    this.getProductos();
  }

  getProductos() {
    this.http.get<any>('http://34.172.239.168:8080/api/producto').subscribe(
      (data: any) => {
        this.productosList = data.map((producto: any) => {
          producto.Path = `/producto/${producto.id}`;
          return producto;
        });
        this.filteredProductosList = [...this.productosList];
        console.log(this.productosList);
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

  filterProductos() {
    if (this.searchTerm.trim() === '') {
      this.filteredProductosList = [...this.productosList];
    } else {
      this.filteredProductosList = this.productosList.filter((producto: any) =>
        producto.proveedor.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        producto.unidad.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }



  openForm() {
    //abre el ormulario
    this.router.navigate(['/form']);

  }
}
