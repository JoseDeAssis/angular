import { Component, ElementRef, ViewChild, AfterContentChecked, EventEmitter, Output } from '@angular/core';
import { TrocaDadosService } from '../../troca-dados.service';

@Component({
  selector: 'app-input-dados-pessoa',
  templateUrl: './input-dados-pessoa.component.html'
})
export class inputDadosPessoaComponent implements AfterContentChecked {
  @ViewChild('inputNome', {static: true}) inputNome: ElementRef;
  @ViewChild('inputSalario', {static: true}) inputSalario: ElementRef;
  nomeAlterado: string = '';
  salarioAlterado: number;
  pessoa: {id: string, nome: string, salario: number};
  
  constructor(private trocaDadosService: TrocaDadosService) {}
  
  ngAfterContentChecked() {
    this.pessoa = this.trocaDadosService.pessoa;
    this.nomeAlterado = this.trocaDadosService.pessoa.nome;
    this.salarioAlterado = this.trocaDadosService.pessoa.salario;
    if(this.trocaDadosService.viewAlterar) {
      this.trocaDadosService
      .dadosAlterar({id: this.pessoa.id,
                     nome: this.inputNome.nativeElement.value, 
                     salario: this.inputSalario.nativeElement.value
                    });
        this.inputNome.nativeElement.disabled = false;
        this.inputSalario.nativeElement.disabled = false;
      }
    }
  }