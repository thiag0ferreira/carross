import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormularioComponent} from "./componentes/formulario/formulario.component";

const routes: Routes = [
  { path:'',
    redirectTo:'http://localhost:4200/',
    pathMatch: 'full'
  },
  {
    path:'http://localhost:4200/',
    component: FormularioComponent  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
