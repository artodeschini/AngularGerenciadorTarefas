import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Tarefa {
    const tarefas = this.listarTodos();
    console.log(tarefas);
    const e = tarefas.find(t => t.id.toString() === id.toString());
    // let e; // = tarefas.find(t => t.id === id);
    // let i = 0;
    // for (i = 0; i < tarefas.length; i++) {
    //   console.log(tarefas[i].id);
    //   console.log(typeof(tarefas[i].id))
    //   console.log(id)
    //   console.log(typeof(parseInt(id)))
    //   if (tarefas[i].id === parseInt(id.toString())) {
    //     e = tarefas[i];
    //   }
    // }
    console.log(`pegando o elemtno do storage ${e}`);
    return e ? e : new Tarefa();
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });

    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number): void {
    let tarefas = this.listarTodos();
    tarefas = tarefas.filter(t => t.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  atualizarStatus(id: number): void {
    const tarefas = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida; // inverte o status
      }
    });

    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
