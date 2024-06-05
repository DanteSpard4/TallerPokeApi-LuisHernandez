import { Component , OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-page',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage {

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit(values: NgForm) {
    this.http.post('http://localhost:8080/api/producto', values)
      .subscribe((response: any) => {
        console.log('Respuesta de la API', response);
      }, (error: any) => {
        console.log('Error al enviar el formulario', error);
      });
      this.router.navigate(['/inicio']);
  }
}