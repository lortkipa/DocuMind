import { Routes } from '@angular/router';
import { App } from './components/app/app';
import { APP_NAME } from '../globals';
import { Chat } from './components/app/chat/chat';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full'
    },
    {
        path: 'app',
        component: App,
        title: APP_NAME,
        children: [
            {
                path: '',
                redirectTo: 'chat',
                pathMatch: 'full'
            },
            {
                path: 'chat',
                component: Chat,
                title: APP_NAME,
            }
        ]
    }
];
