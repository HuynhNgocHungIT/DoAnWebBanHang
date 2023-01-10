import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ButtonComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    CartComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
