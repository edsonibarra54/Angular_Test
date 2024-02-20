import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css'
})
export class ControlsComponent {
  @Output()
  public evento: EventEmitter<boolean> = new EventEmitter();

  public onClickSetAll() : void{
    console.log("Click en seleccionar todos");
    this.evento.emit(true);
  }

  public onClickUnsetAll() : void{
    console.log("Click en seleccionar todos");
    this.evento.emit(false);
  }
}
