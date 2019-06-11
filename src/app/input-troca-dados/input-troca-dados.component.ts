import { Component } from '@angular/core';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-input-troca-dados',
  templateUrl: './input-troca-dados.component.html',
  styleUrls: ['./input-troca-dados.component.css']
})
export class InputTrocaDadosComponent  {

  constructor(private contatoService: ContatoService) {}

  inputPrimario: string = '';
  inputSecundario: string = '';

  transferirDados() {
    const dados = {
      string: this.inputPrimario,
      operacao: 'transferir'
    }
    this.contatoService.transferirDados(dados).subscribe(res => {
      this.inputSecundario = res.string;
    })
  }

}
