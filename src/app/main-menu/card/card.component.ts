import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({required:true}) imageSrc!: string;
  @Input({required:true}) songName!: string;
  @Input({required:true}) songDesc!: string;
}
