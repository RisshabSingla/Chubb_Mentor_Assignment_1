import { Component } from '@angular/core';
import { dummyStarredSongs } from '../dummyStarredSongs';
import { SongComponent } from './song/song.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SongComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  songs = dummyStarredSongs
}
