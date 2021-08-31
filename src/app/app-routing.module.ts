import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './modules/layout/pages/about/about.component';
import { HomeComponent } from './modules/layout/pages/home/home.component';
import { ProgramComponent } from './modules/layout/pages/program/program.component';
import { InformaticaComponent } from './modules/layout/programs/informatica/informatica.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'programas', component: ProgramComponent },
  { path: 'informatica', component: InformaticaComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
