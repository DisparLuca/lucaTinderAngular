import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';

import { DescartesComponent } from './descartes/descartes.component';
import { MatchComponent } from './match/match.component';
import { LikesComponent } from './likes/likes.component';



@NgModule({
  declarations: [
    AppComponent,
    DetalleUsuarioComponent,
    DescartesComponent,
    MatchComponent,
    LikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
