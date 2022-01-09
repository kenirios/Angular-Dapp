import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.scss']
})
export class SpinComponent implements OnInit {

  spin: boolean;
  constructor() { 
    this.spin = false;

  }

  ngOnInit(): void {
  }

}
