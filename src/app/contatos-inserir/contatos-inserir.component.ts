import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contatos-inserir',
  templateUrl: './contatos-inserir.component.html',
  styleUrls: ['./contatos-inserir.component.css']
})
export class ContatosInserirComponent implements OnInit {

  constructor(private contatoService: ContatoService) { }

  @ViewChild('inputName', {static:false}) inputName: ElementRef;
  @ViewChild('inputSalario', {static:false}) inputSalario: ElementRef;

  ngOnInit() {
  }

  inserirPessoa() {
    if(this.inputName.nativeElement.value == "" 
      || this.inputSalario.nativeElement.value == "") {
        alert("Campos nome e salário são obrigatórios!");
      } else {
        const pessoa = {
          nome: this.inputName.nativeElement.value,
          salario: this.inputSalario.nativeElement.value,
          operacao: "inserir"
        };
        this.contatoService.inserirPessoa(pessoa).subscribe(sucesso => {
          if(sucesso) {
            alert("Contato inserido com sucesso!");
            this.inputName.nativeElement.value = "";
            this.inputSalario.nativeElement.value = "";
          }
        })
      }
  }
}
