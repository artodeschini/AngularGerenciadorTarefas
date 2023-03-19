import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;
  
  constructor(
    private service: TarefaService,
    private router: Router) {}

    ngOnInit(): void {
      this.tarefa = new Tarefa();
    }

    cadastrar(): void {
      if (this.formTarefa.form.valid) {
        this.service.cadastrar(this.tarefa);
        this.router.navigate(['/tarefas']);
      }
    }
}
