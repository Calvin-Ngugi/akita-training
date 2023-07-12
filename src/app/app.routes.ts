import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'add-todo',
        component: AddTodoComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
