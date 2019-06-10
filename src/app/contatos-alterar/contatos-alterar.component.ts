import { Component, OnInit, Input, EventEmitter, ViewChild, ElementRef, OnChanges, AfterContentChecked } from '@angular/core';
import { ContatoService } from '../contato.service';
import { TrocaDadosService } from '../troca-dados.service';

@Component({
  selector: 'app-contatos-alterar',
  templateUrl: './contatos-alterar.component.html',
  styleUrls: ['./contatos-alterar.component.css']
})
export class ContatosAlterarComponent implements OnInit {

  pessoa = {};
  @ViewChild("inputMatricula", {static: false}) inputMatricula: ElementRef;
  @ViewChild("inputNome", {static: false}) inputNome: ElementRef;
  @ViewChild("inputSalario", {static: false}) inputSalario: ElementRef;
  
  constructor(private contatoService: ContatoService, private trocaDadosService: TrocaDadosService) { }
  
  ngOnInit() {
    this.trocaDadosService.viewAlterar = true;
  }
  
  alterarPessoa() {
    console.log(this.pessoa);
    this.trocaDadosService.alterar(this.pessoa);
  }
}
