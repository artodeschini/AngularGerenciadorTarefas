import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private service: TarefaService) {}

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefas = this.service.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm(`Deseja remover a tarefas ${tarefa.nome}?`)) {
      this.service.remover(tarefa.id);
      this.listarTodos();
    }
  }

  atualizarStatus(tarefa: Tarefa): void {
    if (confirm(`Deseja alterar o status da tarefa ${tarefa.nome}?`)) {
      this.service.atualizarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }
}
