import {Funcionario} from "./funcionario";
import {Doce} from "./doce";

export class Venda{
  id! : number
  valorTotal! : number
  funcionario! : Funcionario
  doces! : Doce[]
}
