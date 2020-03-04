import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { DescartesComponent } from './descartes/descartes.component';
import { LikesComponent } from './likes/likes.component';
import { MatchComponent } from './match/match.component';


const routes: Routes = [
  {path: 'usuario', component: DetalleUsuarioComponent}, 
  {path: 'likes', component: LikesComponent}, 
  {path: 'descartes', component: DescartesComponent},
  {path: 'match', component: MatchComponent},
  {path: '', redirectTo: '/usuario', pathMatch: 'full'} ,
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
