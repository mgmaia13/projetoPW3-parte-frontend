import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Funcionario} from "./model/funcionario";
import {Doce} from "./model/doce";
import {observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }
  BaseUrl = "http://localhost:8080/api"

  login(email: string, senha: string) {
    let Params = new HttpParams()
    Params = Params.set("login", email)
    Params = Params.set("senha", senha)
    return this.http.post <Funcionario> (this.BaseUrl + "/funcionario/auth", Params, {observe: "response"})
  }

  cadastro(nome: string, cpf: string, login: string, senha: string) {
    let Params = new HttpParams()
    Params = Params.set("email", login)
    Params = Params.set("senha", senha)
    Params = Params.set("cpf", cpf)
    Params = Params.set("nome", nome)
    return this.http.post <Funcionario> (this.BaseUrl + "/funcionario", Params, {observe: "response"})
  }

  getTodosOsDoces() {
    return this.http.get <Doce[]> (this.BaseUrl + "/doce",{observe: "response"})
  }

  //editar doce
  // setDoce(nome: string, descricao: string, preco: number) {
  //   let Params = new HttpParams()
  //   Params = Params.set("preco", preco)
  //   Params = Params.set("descricao", descricao)
  //   Params = Params.set("nome", nome)
  //   return this.http.post <Doce> (this.BaseUrl + "/doce", Params ,{observe: "response"})
  // }
}
