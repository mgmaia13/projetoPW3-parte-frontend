import { Component } from '@angular/core';
import {Funcionario} from "../../model/funcionario";
import {WebService} from "../../web.service";
import {Router} from "@angular/router";
import {Doce} from "../../model/doce";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  funcionario: Funcionario = new Funcionario()

  doces!: Doce[]

  constructor(private web: WebService, private router: Router) { }

  ngOnInit(){
    this.preencheFuncionarioComDadosDaSessao();
    this.web.getTodosOsDoces().subscribe((response) => {
      if (response.ok){
        this.doces = response.body!
      } else {
        alert("Ocorreu um erro")
      }
    })
  }

  private preencheFuncionarioComDadosDaSessao() {
    this.funcionario.id = Number(sessionStorage.getItem("id")!)
    this.funcionario.email = sessionStorage.getItem("email")!
    this.funcionario.nome = sessionStorage.getItem("nome")!
  }

  sair() {
    sessionStorage.clear()
    this.router.navigate(["login"])
  }

  editarDoce(doce: Doce) {
    console.log("Em desenvolvimento")
  }

  deletarDoce(doce: Doce) {
    console.log("Em desenvolvimento")
  }
}
