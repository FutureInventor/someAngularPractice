import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  value: string;
  @Output()
  eventH = new EventEmitter<string>();

  constructor() { }
  ngOnInit(): void {}

  add(): void {
    this.eventH.emit(this.value);
    this.value = '';

  }

}
