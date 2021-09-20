import { Injectable } from '@angular/core';
import { DocumentReference } from '@angular/fire/firestore'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Matricula } from '../models/matricula'

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  constructor(private db: AngularFirestore) { }

  addMatricula(matricula: Matricula){
    this.db.collection('matricula').doc().set({
      "nombre": matricula.nombre,
      "apellido": matricula.apellido,
      "celular": matricula.celular,
      "dni": matricula.dni,
      "email": matricula.email
    }).then(resp => {
      console.log(resp);
    }).catch((error) => {console.log(error);
    });
  }
}
