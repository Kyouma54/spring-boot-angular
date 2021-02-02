import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ArtistaComponent } from './view/artista/artista.component';
import { AlbumComponent } from './view/album/album.component';
import { MusicaComponent } from './view/musica/musica.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'artista', component:  ArtistaComponent},
  { path: 'album', component:  AlbumComponent},
  { path: 'musica', component:  MusicaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
