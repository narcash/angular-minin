import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';

export interface ICard {
  title: string;
  text: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ng-basics';
  toggle = true;
  cards: ICard[] = [
    { title: 'Card 1', text: 'This is card n 1' },
    { title: 'Card 2', text: 'This is card n 2' },
    { title: 'Last Card', text: 'This is card n 3' }
  ]

  toggleCards() {
    this.toggle = !this.toggle
  }
}
