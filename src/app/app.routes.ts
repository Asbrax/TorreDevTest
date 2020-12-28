import {RouterModule, Routes } from '@angular/router';


const APP_ROUTES: Routes = [
    {path: '**', pathMatch: 'full', redirectTo: 'genome'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);