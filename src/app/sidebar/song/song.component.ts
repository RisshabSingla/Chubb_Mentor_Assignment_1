import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-song',
  standalone: true,
  imports: [],
  templateUrl: './song.component.html',
  styleUrl: './song.component.css'
})
export class SongComponent {
  @Input({required: true}) singer!:string;
  @Input({required: true}) songName!:string;
}
