import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { ShowCardComponent } from '../show-card/show-card.component';

@Component({
  selector: 'app-shows-list',
  standalone: true,
  imports: [NgFor, NgIf, ShowCardComponent],
  templateUrl: './shows-list.component.html',
  styleUrl: './shows-list.component.css'
})
export class ShowsListComponent {
  public objeto : any; //Esto no es nada recomendable, indica que puede tomar cualquier estructura

  //Este elemento significa que podra recibirt informacion y la colocara como este elemento
  @Input()
  public tvShows : Show[] = []

  public onClick(): void {
    //this.tvShows[0]
  }
}
