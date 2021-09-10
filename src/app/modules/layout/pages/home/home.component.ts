import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  datos;
  // Seleccionamos o iniciamos el valor '0' del <select>
  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';

  constructor(private formBuilder: FormBuilder) {
    this.datos = ['Arquitectura', 'Programación'];
   }

  registerForm = this.formBuilder.group({
    nombre: [''],
    apellido: [''],
    celular: [''],
    dni: [''],
    email: [''],
  });
  ngOnInit(): void {
  }
  submit(){
    console.log(this.registerForm.value);
  }

  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
    }
}