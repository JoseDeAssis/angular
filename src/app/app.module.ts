import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ContatosListagemComponent } from './contatos-listagem/contatos-listagem.component';
import { ContatoService } from "./contato.service";
import { ContatosInserirComponent } from './contatos-inserir/contatos-inserir.component';
import { ContatosDeletarComponent } from './contatos-deletar/contatos-deletar.component';
import { ContatosAlterarComponent } from './contatos-alterar/contatos-alterar.component';
import { ListBoxComponent } from './list-box/list-box.component';
import { AppRoutingModule } from './app-routing.module';
import { TrocaDadosService } from './troca-dados.service';
import { inputDadosPessoaComponent } from './list-box/input-dados-pessoa/input-dados-pessoa.component';
import { InputTrocaDadosComponent } from './input-troca-dados/input-troca-dados.component';
import { ContatosBuscaComponent } from './contatos-busca/contatos-busca.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatosListagemComponent,
    ContatosInserirComponent,
    ContatosDeletarComponent,
    ContatosAlterarComponent,
    ListBoxComponent,
    inputDadosPessoaComponent,
    InputTrocaDadosComponent,
    ContatosBuscaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ ContatoService, TrocaDadosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
