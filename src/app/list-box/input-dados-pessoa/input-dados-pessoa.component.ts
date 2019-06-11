import { Component, ElementRef, ViewChild, AfterContentChecked, EventEmitter, Output } from '@angular/core';
import { TrocaDadosService } from '../../troca-dados.service';

@Component({
  selector: 'app-input-dados-pessoa',
  templateUrl: './input-dados-pessoa.component.html'
})
export class inputDadosPessoaComponent implements AfterContentChecked {
    // @ViewChild("inputMatricula", {static: false}) inputMatricula: ElementRef;
    @ViewChild('inputNome', {static: true}) inputNome: ElementRef;
    @ViewChild('inputSalario', {static: true}) inputSalario: ElementRef;
    @Output() alteracoes = new EventEmitter<{nome: string, salario: number}>();
    nomeAlterado: string = '';
    salarioAlterado: number;

    pessoa = {};
    // inputMatricula: string = null;
    // inputNome: string = null;
    // inputSalario: number = null;
    
    constructor(private trocaDadosService: TrocaDadosService) {}

    ngAfterContentChecked() {
      // this.inputMatricula = this.trocaDadosService.pessoa.id;
      // this.inputNome.nativeElement.value = this.trocaDadosService.pessoa.nome;
      // this.inputSalario.nativeElement.value = this.trocaDadosService.pessoa.salario;
      this.pessoa = this.trocaDadosService.pessoa;
      this.nomeAlterado = this.trocaDadosService.pessoa.nome;
      this.salarioAlterado = this.trocaDadosService.pessoa.salario;
      this.alteracoes.emit({nome: this.nomeAlterado, salario: this.salarioAlterado});
      if(this.trocaDadosService.viewAlterar) {
        this.inputNome.nativeElement.disabled = false;
        this.inputSalario.nativeElement.disabled = false;
      }
    }
}