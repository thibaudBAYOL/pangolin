import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { AmiesComponent } from './amies/amies.component';
import { DecoComponent } from './deco/deco.component';
import { InscriptionComponent } from './inscription/inscription.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'amies', component: AmiesComponent },
  { path: 'deco', component: DecoComponent },
  { path: 'inscription', component: InscriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
