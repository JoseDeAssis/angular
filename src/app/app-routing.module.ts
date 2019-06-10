import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContatosInserirComponent } from './contatos-inserir/contatos-inserir.component';
import { ContatosListagemComponent } from './contatos-listagem/contatos-listagem.component';
import { ContatosAlterarComponent } from './contatos-alterar/contatos-alterar.component';
import { ContatosDeletarComponent } from './contatos-deletar/contatos-deletar.component';

const routes: Routes = [
  { path: '', component: ContatosListagemComponent },
  { path: 'inserir', component: ContatosInserirComponent },
  { path: 'alterar', component: ContatosAlterarComponent },
  { path: 'deletar', component: ContatosDeletarComponent }
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
