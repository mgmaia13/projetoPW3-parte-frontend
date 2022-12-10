import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./componentes/login/login.component";
import {CadastroComponent} from "./componentes/cadastro/cadastro.component";
import {HomeComponent} from "./componentes/home/home.component";


const routers: Routes = [
  {path:"login", component: LoginComponent},
  {path:"cadastro", component: CadastroComponent},
  {path:"home", component: HomeComponent},
  {path:"", redirectTo: "/login", pathMatch: "full"}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routers)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
