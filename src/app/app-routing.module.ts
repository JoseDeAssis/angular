import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContatosInserirComponent } from './contatos-inserir/contatos-inserir.component';
import { ContatosListagemComponent } from './contatos-listagem/contatos-listagem.component';
import { ContatosAlterarComponent } from './contatos-alterar/contatos-alterar.component';
import { ContatosDeletarComponent } from './contatos-deletar/contatos-deletar.component';
import { InputTrocaDadosComponent } from './input-troca-dados/input-troca-dados.component';
import { ContatosBuscaComponent } from './contatos-busca/contatos-busca.component';

const routes: Routes = [
  { path: '', component: ContatosListagemComponent },
  { path: 'inserir', component: ContatosInserirComponent },
  { path: 'alterar', component: ContatosAlterarComponent },
  { path: 'deletar', component: ContatosDeletarComponent },
  { path: 'transferirDadosInput', component: InputTrocaDadosComponent },
  { path: 'buscar', component: ContatosBuscaComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
