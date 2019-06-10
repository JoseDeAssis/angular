import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contatos-deletar',
  templateUrl: './contatos-deletar.component.html',
  styleUrls: ['./contatos-deletar.component.css']
})
export class ContatosDeletarComponent implements OnInit {
  
  @Input() elementoPessoa;
  
  @ViewChild("listBox", {static:false}) listBox: ElementRef;
  
  constructor(private contatoService: ContatoService) { }
  
  ngOnInit() {
  }
  
  elementoSelecionado(pessoa: any) {
    this.elementoPessoa = pessoa;
  }
  
  deletarPessoa() {
    const pessoa = {
      id: this.elementoPessoa.id,
      operacao: "deletar"
    }
    this.contatoService.deletarPessoa(pessoa).subscribe(()=> {
      alert("Usuário deletado!");
    })
  }
}
