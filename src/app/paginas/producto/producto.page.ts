import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  
  constructor(private route: ActivatedRoute,private http: HttpClient, private router: Router) { }

  producto: any = {};
  id : any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getProducto(this.id);
    });
  }

  //getProducto
  getProducto(id: string) {
    const url = `http://34.172.239.168:8080/api/producto/${id}`;
    this.http.get(url).subscribe((response: any) => {
      this.producto = response;
      console.log('producto es:', this.producto);
    });
  }

  onSubmit(values: NgForm) {
    this.http.put(`http://34.172.239.168:8080/api/producto/${this.id}`, values.value)
      .subscribe((response: any) => {
        console.log('Respuesta de la API', response);
        this.router.navigate(['/inicio']);
      }, (error: any) => {
        console.log('Error al enviar el formulario', error);
      });
  }

  onDelete() {
    this.http.delete(`http://34.172.239.168:8080/api/producto/${this.id}`)
      .subscribe((response: any) => {
        console.log('Respuesta de la API', response);
        this.router.navigate(['/inicio']);
      }, (error: any) => {
        console.log('Error al enviar el formulario', error);
      });
  }
}