import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { dummyPlaylist } from '../dummyPlaylists';
import { PlaylistComponent } from './playlist/playlist.component';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [PlaylistComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
    playlists = dummyPlaylist;
}
