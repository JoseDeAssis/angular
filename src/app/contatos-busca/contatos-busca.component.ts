import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contatos-busca',
  templateUrl: './contatos-busca.component.html',
  styleUrls: ['./contatos-busca.component.css']
})
export class ContatosBuscaComponent {

  constructor(private contatoService: ContatoService) { }

  inputMatricula: string = '';
  inputNome: string = '';
  inputSalario: number = null;

  buscarPessoa() {
    const pessoa = {
      id: this.inputMatricula,
      operacao: "buscar"
    }

    this.contatoService.buscarPessoa(pessoa).subscribe(dados => {
      if(dados) {
        this.inputNome = dados.nome;
        this.inputSalario = dados.salario;
      } else {
        alert("Pessoa não encontrada!");
      }
    })
  }
}
