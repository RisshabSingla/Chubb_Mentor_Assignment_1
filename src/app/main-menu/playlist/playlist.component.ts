import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})
export class PlaylistComponent {
  @Input({required: true}) songs!: {
    id: number,
    playlistName: string,
    playlistDescription: string,
    songsInthePlaylist: 
      {
        id: number,
      songName: string,
      songDesc: string, 
      imageSrc:string
    }[]
  }
}
