import { Routes } from "@angular/router";

import { ListarTarefasComponent } from "./listar-tarefas";

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefasComponent
    },
];
