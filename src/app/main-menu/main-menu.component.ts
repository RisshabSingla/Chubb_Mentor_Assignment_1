import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { dummySongs } from '../dummySongs';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
    songs = dummySongs;
}
