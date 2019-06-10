import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnChanges } from '@angular/core';

import { ContatoService } from '../contato.service';
import { TrocaDadosService } from '../troca-dados.service';

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent implements OnInit {
  
  listaPessoas = [];
  pessoaSelecionada: boolean = false;
  @Output() pessoaId = new EventEmitter<string>();

  @ViewChild("listBox", {static:false}) listBox: ElementRef;
  
  constructor(private contatoService: ContatoService, private trocaDadosService: TrocaDadosService) { }
  
  ngOnInit() {
    this.contatoService.listar().subscribe(lista => {
      this.listaPessoas = lista;
    })
  }
  
  elementoSelecionado(id: string) {
    this.listaPessoas.forEach(pessoa => {
      if(pessoa.id === id){
        this.trocaDadosService.selecionaPessoa(pessoa);
        this.pessoaId.emit(pessoa.id);
      }
    });
  }
  
}
