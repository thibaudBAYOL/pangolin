import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { AmiesComponent } from './amies/amies.component';
import { FormsModule }   from '@angular/forms';
import { DecoComponent } from './deco/deco.component';
import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfilComponent,
    AmiesComponent,
    DecoComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
