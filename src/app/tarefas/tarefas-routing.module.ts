import { Routes } from "@angular/router";

import { ListarTarefasComponent } from "./listar-tarefas";
import { CadastrarTarefaComponent } from "./cadastrar-tarefa";

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefasComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    }
];
