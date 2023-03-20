import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// necessario adicionar para poder manipular com as diretivas e as rotas
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService, TarefaConcluidaDirective } from './shared';
import { Tarefa } from './shared';
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
// import { TarefaConcluidaDirective } from './shared/tarefa-concluida.directive';

@NgModule({
  declarations: [
    ListarTarefasComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  // adicionar manual
  providers: [
    TarefaService
  ]
})
export class TarefasModule { 

  constructor() {}

  listarTodos(): Tarefa[] {
    //const tarefas = localStorage('taregas');
    //return tarefas ? JSON.parse(tarefas) : [];
    return [];
  }
}
