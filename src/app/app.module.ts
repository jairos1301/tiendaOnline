import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
//import { ListaProductosComponent } from './components/admin/lista-productos/lista-productos.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { Page404Component } from './components/errors/page404/page404.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
import { SlideComponent } from './components/slide/slide.component';
import { SlideMarcasComponent } from './components/slide-marcas/slide-marcas.component';
import { ContactComponent } from './components/contact/contact.component';
import { AngularFirestore } from '@angular/fire/firestore';
//import { NewProductComponent } from './components/admin/new-product/new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    DetalleProductoComponent,
   //ListaProductosComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    SlideComponent,
    SlideMarcasComponent,
    ContactComponent,
    //NewProductComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [AuthService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
