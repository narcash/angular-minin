import { Component, Input, OnInit } from "@angular/core";
import { ICard } from '../app.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card!: ICard;

  title = 'My Card Title';
  text = 'My sample text';
  textColor = 'string';

  ngOnInit(): void {

  }
  changeTitle() {
    this.title = 'Title has been changed!'
  }
  inputHandler(value: any) {
    // const value = event.target.value;
    this.title = value;
  }
  changeHandler() {
    console.log(this.title);
  }
}
