import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { PostComponent } from './post/post.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { Modello } from './models/modello';

const routes: Routes = [
  {path: 'body', component: BodyComponent},
  {path: 'post/:id', component: PostComponent},
  {path: '', redirectTo: 'body', pathMatch: 'full'},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  modelloArrivato: Modello;
  esporta(modello: Modello) {
    this.modelloArrivato = modello;
  }
 }
