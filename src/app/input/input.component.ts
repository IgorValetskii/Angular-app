import {Component, OnInit} from '@angular/core';
import {Input} from '../input';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  hero: Input = {
    id: 1,
    name: 'Windstorm',
   console(text: string): any {
   }
  };

  constructor() {
  }

  ngOnInit() {
  }
}
