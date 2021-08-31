import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProgramComponent } from './pages/program/program.component';
import { InformaticaComponent } from './programs/informatica/informatica.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainComponent, HomeComponent, AboutComponent, ProgramComponent, InformaticaComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
  ],
  exports:[
    MainComponent
  ]
})
export class LayoutModule { }
