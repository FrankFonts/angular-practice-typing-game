import { Component } from '@angular/core';
import faker from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  str: string = faker.lorem.sentence();
  correct: string[] = [];
  wrong: string[] = [];
  unchecked: string[] = this.str.split('');

  youWon: boolean = false;

  atChange(typedString: any) {
    let isCorrectLetter = true;
    this.correct = [];
    this.wrong = [];
    //
    for (let i = 0; i < typedString.length; i++) {
      if (typedString[i] === this.str[i] && isCorrectLetter) {
        this.correct.push(this.str[i]);
      } else {
        isCorrectLetter = false;
        this.wrong.push(this.str[i]);
      }
    }
    //
    const x = this.str.length - this.correct.length - this.wrong.length;
    if (x >= 0) {
      this.unchecked = this.str.split('').splice(this.str.length - x, x);
    }
    //
    if (typedString === this.str) {
      this.youWon = true;
    }
  }
}
