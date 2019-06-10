import { Component, ElementRef, ViewChild, Input, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { TrocaDadosService } from '../../troca-dados.service';

@Component({
  selector: 'app-input-dados-pessoa',
  templateUrl: './input-dados-pessoa.component.html'
})
export class inputDadosPessoaComponent implements AfterContentChecked {
    @ViewChild("inputMatricula", {static: false}) inputMatricula: ElementRef;
    @ViewChild("inputNome", {static: false}) inputNome: ElementRef;
    @ViewChild("inputSalario", {static: false}) inputSalario: ElementRef;

    constructor(private trocaDadosService: TrocaDadosService) {}

    ngAfterContentChecked() {
      this.inputMatricula.nativeElement.value = this.trocaDadosService.pessoa.id;
      this.inputNome.nativeElement.value = this.trocaDadosService.pessoa.nome;
      this.inputSalario.nativeElement.value = this.trocaDadosService.pessoa.salario;
      if(this.trocaDadosService.viewAlterar) {
        this.inputNome.nativeElement.disabled = false;
        this.inputSalario.nativeElement.disabled = false;
      }
    }
}