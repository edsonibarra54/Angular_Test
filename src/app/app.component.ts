import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './components/contador/contador.component';
import { ImagenComponent } from './components/imagen/imagen.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ShowsListComponent } from './components/shows-list/shows-list.component';
import { Show } from './interfaces/show.interface';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { ControlsComponent } from './components/controls/controls.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContadorComponent, ImagenComponent, HeaderComponent, ContentComponent, FooterComponent, ShowsListComponent, ShowCardComponent, ControlsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public titulo : string = "Mi nueva aplicacion de angular";

  public tvShows1 : Show[] = [{
    "title": "Adventure Time",
    "year": 2010,
    "episodes": 289,
    "image": "https://m.media-amazon.com/images/M/MV5BMjE2MzE1MDI2M15BMl5BanBnXkFtZTgwNzUyODQxMDE@._V1_SY1000_CR0,0,731,1000_AL_.jpg",
    "id": 7
  },{
    "title": "Pokemon",
    "year": 1997,
    "episodes": 1131,
    "image": "https://m.media-amazon.com/images/M/MV5BNjU1YjM2YzAtZWE2Ny00ZWNiLWFkZWItMDJhMzJiNDQwMmI4XkEyXkFqcGdeQXVyNTU1MjgyMjk@._V1_.jpg",
    "id": 8
  },{
    "title": "Yu-Gi-Oh!",
    "year": 2000,
    "episodes": 225,
    "image": "https://m.media-amazon.com/images/M/MV5BMDM0MDA3NzYtMDE1MS00YjZmLWJmNjQtNzgxYzlhMmMyZjQ2XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
    "id": 9
  },{
    "title": "Rugrats",
    "year": 1990,
    "episodes": 179,
    "image": "https://i.kinja-img.com/gawker-media/image/upload/t_original/lseuxpzwkntjf0coatv2.jpg",
    "id": 10
  },{
    "title": "My Little Pony: Friendship is Magic",
    "year": 2010,
    "episodes": 235,
    "image": "https://m.media-amazon.com/images/M/MV5BMTk4NTgxMjItZTU5ZS00NGE3LWJlODQtMTMzOTJlZmU5ODk1XkEyXkFqcGdeQXVyNjUzMDIyNzE@._V1_.jpg",
    "id": 11
  },{
    "title": "Ed, Edd n Eddy",
    "year": 1999,
    "episodes": 80,
    "image": "https://m.media-amazon.com/images/M/MV5BMGFiZGI4Y2ItMzkzOC00OTE5LThlZDgtNzE1YTdmNTA5ZTZkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTEwMTkwOTI@._V1_.jpg",
    "id": 12
  },{
    "title": "Courage the Cowardly Dog",
    "year": 1999,
    "episodes": 52,
    "image": "https://m.media-amazon.com/images/M/MV5BMTU4MGEyNTItNzg5ZS00ZGU0LTk4NmEtODM0Y2UxYTY2YTUyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,680,1000_AL_.jpg",
    "id": 13
  },{
    "title": "The New Adventures of Winnie the Pooh",
    "year": 1988,
    "episodes": 50,
    "image": "https://m.media-amazon.com/images/M/MV5BZjFkZDkwYjktMmZkNi00ZTVkLWI5ZmItZWI2MmI1NjQ1Y2U0XkEyXkFqcGdeQXVyOTg4MDk3MTQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    "id": 14
  }]

  public tvShows2 : Show[] = this.tvShows1

  public setAllAs(value: boolean) : void{
    this.tvShows1.forEach( item => item.isSelected = value);
    console.log("Accion desde el App Component");
  }

  public invertirTvShows(): void {
    console.log("Se invierten tarjetas en app component");
    this.tvShows1.reverse();
  }

  public deleteTvShow(id: number): void {
    console.log("Click en eliminar tarjeta desde app component");
    this.tvShows1 = this.tvShows1.filter(show => show.id !== id);
  }

  public searchByTerm( value: string ){
    this.tvShows1 = this.tvShows2.filter( item => item.title.includes(value));
  }
}
