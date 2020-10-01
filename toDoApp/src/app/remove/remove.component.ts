import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  @Input()
  pieski: [];
  @Output()
  eventMove = new EventEmitter<string>();
  @Output()
  eventRemove = new EventEmitter<string>();

  constructor() { }
  ngOnInit(): void {}

  move(pies: string): void{
    this.eventMove.emit(pies);
  }
  remove(pies: string): void {
    this.eventRemove.emit(pies);
  }

}
