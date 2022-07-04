import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CommonModule } from "@angular/common";
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { CatalogueComponent } from './views/catalogue/catalogue.component';

const routes: Routes = [
    {
        path: "",
               
        children: [
            {
                path: "",
                component: HomeComponent 
            },
            {
                path: "login",
                component: LoginComponent
            },
            {
                path: "register",
                component: RegisterComponent
            },  
            {
                path: "catalogue",
                component: CatalogueComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],

})
export class PublicRoutingModule { }