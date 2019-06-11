import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ContatoService } from '../contato.service';
import { TrocaDadosService } from '../troca-dados.service';

@Component({
  selector: 'app-contatos-deletar',
  templateUrl: './contatos-deletar.component.html',
  styleUrls: ['./contatos-deletar.component.css']
})
export class ContatosDeletarComponent implements OnInit {
  
  @Input() elementoPessoa;
  
  @ViewChild("listBox", {static:false}) listBox: ElementRef;
  
  constructor(private contatoService: ContatoService, private trocaDadosService: TrocaDadosService) { }
  
  ngOnInit() {
    this.trocaDadosService.viewAlterar = false;
  }
  
  elementoSelecionado(pessoa: any) {
    this.elementoPessoa = pessoa;
  }
  
  deletarPessoa() {
   this.trocaDadosService.deletar();
  }
}
