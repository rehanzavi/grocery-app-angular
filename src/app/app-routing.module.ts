import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { HomeComponent } from "./pages/home-page/home.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { ProductdetailPageComponent } from "./pages/productdetail-page/productdetail-page.component";
import { ProductsPageComponent } from "./pages/products-page/products-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";

const routes: Routes = [
    {path: '', redirectTo:'home' , pathMatch: 'full'},
    {path:'register', component:RegisterPageComponent},
    {path:'login', component: LoginPageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'products/:id', component: ProductsPageComponent},
    {path: 'products/details/:pid', component:ProductdetailPageComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutPageComponent},
    {path: '**', component: ErrorPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}