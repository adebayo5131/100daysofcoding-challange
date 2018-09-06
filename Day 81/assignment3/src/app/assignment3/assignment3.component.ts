import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
    showPassword = false;
    log = [];
  constructor() { }

  ngOnInit() {
  }

  onToggleDetails() {
    this.showPassword = !this.showPassword;
    this.log.push(this.log.length + 1);
  }

}
