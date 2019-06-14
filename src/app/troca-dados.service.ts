import { ContatoService } from './contato.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
  })
export class TrocaDadosService {
    pessoa: {id: string, nome: string, salario: number};
    pessoaAlterada;
    viewAlterar = false;
    salarioAlterado: number;
    nomeAlterado: number;
    
    constructor(private contatoService: ContatoService) {}
    
    selecionaPessoa(pessoaSelecionada: {id: string, nome: string, salario: number}) {
        this.pessoa = pessoaSelecionada;
    }

    dadosAlterar(pessoa: {id: string, nome: string, salario: number}) {
        this.pessoaAlterada = {
            id: pessoa.id,
            salario: pessoa.salario,
            nome: pessoa.nome,
            operacao: "alterar"
        }
    }

    deletar() { 
        const pessoaDeletar = {
            id: this.pessoa.id,
            operacao: "deletar"
        }
        this.contatoService.deletarPessoa(pessoaDeletar).subscribe(res => {
            alert("Pessoa deletada com sucesso!");
        })
    }
    
    alterar() {
        this.contatoService.alterarPessoa(this.pessoaAlterada).subscribe(res => {
            alert("Usuário alterado!");
        })
    }
    
}