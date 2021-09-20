import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Matricula } from '../../matricula/models/matricula';
import { MatriculaService } from '../../matricula/services/matricula.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mat:Matricula = {
    nombre:'',
    apellido:'',
    celular:'',
    dni:'',
    email:''
  }

  constructor(private formBuilder: FormBuilder, private matriculaService: MatriculaService) {
   
   }

   registerForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    celular: ['', Validators.required],
    dni: ['', Validators.required],
    email: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  agregar(){
    if(this.registerForm.valid){
      console.log("entro boton")
      this.matriculaService.addMatricula(this.mat);
      this.registerForm.reset();
    }
  }
}