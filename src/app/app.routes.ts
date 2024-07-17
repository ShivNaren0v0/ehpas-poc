import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotimplimentedComponent } from './components/notimplimented/notimplimented.component';
export const routes: Routes = [
    {path:'ehpasWeb',component:NavbarComponent,children:[
        {path:'home',component:HomeComponent},
        {path: '**', component: NotimplimentedComponent}
    ]}
];
