import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {WebService} from "../../web.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  formCadastro!: FormGroup;

  constructor(private web: WebService, private router: Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  register() {
    if(this.formCadastro.valid){
      this.web.cadastro(
        this.formCadastro.controls["nome"].value,
        this.formCadastro.controls["cpf"].value,
        this.formCadastro.controls["login"].value,
        this.formCadastro.controls["senha"].value
      ).subscribe((response)=>{
        if(response.ok){
          alert("Cadastrado com sucesso")
          this.router.navigate(["login"])
        }else{
          alert("Ocorreu um erro")
        }
      })
    }else{
      alert("Ocorreu um erro")
    }
  }

  private initForm() {
    this.formCadastro = new FormGroup({
      nome: new FormControl(
        null,
        [Validators.required, Validators.minLength(2)]
      ),
      cpf: new FormControl(
        null,
        [Validators.required]
      ),
      login: new FormControl(
        null,
        [Validators.required, Validators.minLength(5)]
      ),
      senha: new FormControl(
        null,
        [Validators.required, Validators.minLength(2)]
      ),
    })
  }

  get nome() { return this.formCadastro.get('nome')!; }
  get cpf() { return this.formCadastro.get('cpf')!; }
  get login() { return this.formCadastro.get('login')!; }
  get senha() { return this.formCadastro.get('senha')!; }
}
