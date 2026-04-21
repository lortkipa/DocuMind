import { Routes } from '@angular/router';
import { App } from './components/app/app';
import { APP_NAME } from '../globals';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full'
    },
    {
        path: 'app',
        component: App,
        title: APP_NAME
    }
];
