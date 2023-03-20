import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {

  // verifica se a tarefa na tela está concluida
  // deve ter o mesmo nome do que o selector na @Directive
  @Input() tarefaConcluida: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    if (this.tarefaConcluida) {
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }
}
