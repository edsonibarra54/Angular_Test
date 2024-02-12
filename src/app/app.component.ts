import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './components/contador/contador.component';
import { ImagenComponent } from './components/imagen/imagen.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ShowsListComponent } from './components/shows-list/shows-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContadorComponent, ImagenComponent, HeaderComponent, ContentComponent, FooterComponent, ShowsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public titulo : string = "Mi nueva aplicacion de angular";
}
