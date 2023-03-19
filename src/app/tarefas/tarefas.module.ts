import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefaService } from './shared';
import { Tarefa } from './shared';
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';

@NgModule({
  declarations: [
    ListarTarefasComponent
  ],
  imports: [
    CommonModule
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
