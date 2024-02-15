import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalDetalhesComponent } from './elements/modal-detalhes/modal-detalhes.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: '' ,component:HomeComponent},
  { path: 'home' ,component:HomeComponent},
  { path: 'modal', component: ModalDetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
