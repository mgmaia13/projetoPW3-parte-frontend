import { Component } from '@angular/core';
import {WebService} from "../../web.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpResponse} from "@angular/common/http";
import {Funcionario} from "../../model/funcionario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin!: FormGroup;

  constructor(
    private web: WebService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  loginForm() {
    if(this.formLogin.valid){
      this.web.login(
        this.formLogin.controls["email"].value,
        this.formLogin.controls["senha"].value
      ).subscribe((response)=>{
        if(response.ok){
          this.setSessionUserData(response);
          this.router.navigate(['home'])
        }else{
          alert("Ocorreu um erro")
        }
      })
    }else{
      alert("Ocorreu um erro")
    }
  }

  private setSessionUserData(response: HttpResponse<Funcionario>) {
    sessionStorage.setItem("id", String(response.body!.id))
    sessionStorage.setItem("email", String(response.body!.email))
    sessionStorage.setItem("nome", String(response.body!.nome))
  }

  private initForm() {
    this.formLogin = new FormGroup({
      email: new FormControl(
        null,
        [Validators.required, Validators.email]
      ),
      senha: new FormControl(
        null,
        [Validators.required, Validators.minLength(3)]
      ),
    })
  }

  get email() { return this.formLogin.get('email')!; }
  get senha() { return this.formLogin.get('senha')!; }
}
