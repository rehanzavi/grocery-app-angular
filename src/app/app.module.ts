import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home-page/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { ProductdetailPageComponent } from './pages/productdetail-page/productdetail-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from './models/user.model';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    CategoryComponent,
    ProductComponent,
    ProductsPageComponent,
    SubcategoryComponent,
    ProductdetailPageComponent,
    AboutPageComponent,
    ErrorPageComponent,
    ContactPageComponent,
    RegisterPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
