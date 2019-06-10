import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

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

@NgModule({
  declarations: [
    AppComponent,
    ContatosListagemComponent,
    ContatosInserirComponent,
    ContatosDeletarComponent,
    ContatosAlterarComponent,
    ListBoxComponent,
    inputDadosPessoaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ ContatoService, TrocaDadosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
