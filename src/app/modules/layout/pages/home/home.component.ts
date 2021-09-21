import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Matricula } from '../../matricula/models/matricula';
import { MatriculaService } from '../../matricula/services/matricula.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  opcionSeleccionado = 0;
  optSeleccionado: any;
  data = [
    {
      id: 0,
      program: 'Arquitectura'
    },
    {
      id: 1,
      program: 'Computación'
    },
    {
      id: 2,
      program: 'Informática'
    }
  ];
  

  constructor(private formBuilder: FormBuilder, private matriculaService: MatriculaService) {
   
   }
   registerForm = this.formBuilder.group({
    nombre: [null, [
      Validators.required]],
    apellido: [null, [
      Validators.required]],
    celular: [null, [
      Validators.required]],
    dni: [null, [
      Validators.required]],
    email: [null, [
      Validators.required]]
  });

  mat:Matricula = {
    curso: '',
    nombre:'',
    apellido:'',
    celular:'',
    dni:'',
    email:''
  }


  ngOnInit(): void {
  }

  capturar(){
    this.optSeleccionado = this.opcionSeleccionado;
    console.log(this.opcionSeleccionado);
  }

  agregar(){
      if(this.registerForm.valid){
        this.matriculaService.addMatricula(this.mat);
      this.registerForm.reset();
      }
    
  }
  
}