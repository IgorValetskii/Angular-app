import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() {
  }

  ngOnInit() {
  }

  onChange(): void {
    console.log(this.hero.name);
  }

}
