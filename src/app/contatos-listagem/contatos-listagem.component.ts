import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  listaVazia = true;

  contatos: any[];

  constructor(private contatoService: ContatoService) {
   }

  ngOnInit() {
  }

  listar() {
    this.contatoService.listar().subscribe(lista => {
      this.contatos = lista;
      if(this.contatos.length > 0) {
        this.listaVazia = false;
      } else {
        this.listaVazia = true
      }
    })
  }

}
