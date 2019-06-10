import { ContatoService } from './contato.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
  })
export class TrocaDadosService {
    pessoa: {id: string, nome: string, salario: number};
    viewAlterar = false;
    salarioAlterado: number;
    nomeAlterado: number;
    
    constructor(private contatoService: ContatoService) {}
    
    selecionaPessoa(pessoaSelecionada: {id: string, nome: string, salario: number}) {
        this.pessoa = pessoaSelecionada;
    }

    dadosAlterar() {
        const pessoa = {
            id: this.pessoa.id,
            salario: this.salarioAlterado,
            nome: this.nomeAlterado,
            operacao: "alterar"
        }
    }
    
    alterar(pessoaAlterada) {
        this.pessoa.nome = pessoaAlterada.nome;
        this.pessoa.salario = pessoaAlterada.salario;
        this.contatoService.alterarPessoa(this.pessoa).subscribe(()=> {
            alert("Usuário alterado!");
        })
    }
    
}