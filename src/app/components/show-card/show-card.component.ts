import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Show } from '../../interfaces/show.interface';

@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})
export class ShowCardComponent {
  @Input()
  public tvShow: Show = {
    episodes: 0,
    id: 0,
    image: "",
    title: "",
    year: 0,
  };
}