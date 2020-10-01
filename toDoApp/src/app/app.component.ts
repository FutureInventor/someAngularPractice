import { TestComponent } from '../app/test/test.component';
import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent{
  value = 'Hello';
  title = 'firstProject';
  pieski: Array<string> = [];
  moveP: Array<string> = [];
  dog = new Dog( 'Reksio', 4);
  days = ['Pn', 'Wt', 'Śr', 'Czw', 'Pt', 'Sb', 'Niedz'];
  dogs = new Array<Dog>();
  show = true;

  @ViewChild('ref')
  testComponent: TestComponent;

  @ViewChild('inputText')
  refer: ElementRef;

  constructor(){
    this.dogs.push(new Dog('Łatek', 3), new Dog('Czarek', 5), new Dog('Azor', 2));
  }
  changeTitle(): void{
    this.title = 'Angular is cool';
  }
  changeDog(): void{
    this.dog.name = 'Ciapek';
    this.dog = new Dog('Szarik');
  }
  doNothing(): void{
  }
  destroyComp(): void{
    this.show = !this.show;
  }
  handleClick(event): void {
    this.value = event.target.value;
    console.log('Hello');
  }
  add(input: HTMLInputElement, pies?: string): void{
    console.log(input.value);
    console.log(this.testComponent.tasks);
    this.refer.nativeElement.value = '';
    this.pieski.push(pies);
  }
  remove(pies: string): void{
    this.pieski = this.pieski.filter(e => e !== pies);
  }
  getColor(): string {
    return 'red';
  }
  move(pies: string): void{
    this.moveP.push(pies);
    this.remove(pies);
  }
  selected(task: string): void {
    console.log(task);
  }
}

export class Dog {
  constructor( public name: string, public age?: number){
  }
}
