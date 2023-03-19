import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] {
    const tarefas = localStorage['taregas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['taregas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Tarefa {
    const tarefas = this.listarTodos();
    return tarefas.find(Tarefa => Tarefa.id === id);
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });

    localStorage['taregas'] = JSON.stringify(tarefas);
  }

  remover(id: number): void {
    let tarefas = this.listarTodos();
    tarefas = tarefas.filter(t => t.id !== id);
    localStorage['taregas'] = JSON.stringify(tarefas);
  }

  atualizarStatus(id: number): void {
    const tarefas = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida; // inverte o status
      }
    });

    localStorage['taregas'] = JSON.stringify(tarefas);
  }
}
