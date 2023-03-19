import { Routes } from "@angular/router";

import { ListarTarefasComponent } from "./listar-tarefas";
import { CadastrarTarefaComponent } from "./cadastrar-tarefa";
import { EditarTarefaComponent } from "./editar-tarefa";

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
    },
    {
        path: 'tarefas/editar/:id',
        component: EditarTarefaComponent
    }
];
