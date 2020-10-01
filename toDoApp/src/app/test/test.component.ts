import { Component, OnInit, Input, Output, EventEmitter,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, SimpleChanges, OnDestroy } from '@angular/core';
import { Dog } from '../app.component';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [`p{ color: red }`]
})
export class TestComponent implements OnChanges, OnInit,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  tasks = ['Śmieci', 'Gotowanie', 'Sprzątanie'];
  @Input()
  inputText: string;
  @Input()
  inputDog: Dog;
  show = true;
  @Output()
  eventH = new EventEmitter<string>();
    constructor() { }
  /*
  Uruchamia się na początu, przed ngOnInit
  Sprawdza czy zmieniły się zbindowane pola komponentu
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges - #1');
    console.log(changes);
  }
  /*
  Uruchamia się jeden raz podczas inicjalizacji komponentu
  Uruchamia się po konstruktorze i po ngOnChange
  */
  ngOnInit(): void {
    console.log('ngOnInit - #2');
    // this.inputDog.name = 'inne Imię';
  }
/*
  Uruchamia się przy każdej zmianie, wywołaniu eventa etc
 */
  ngDoCheck(): void {
    console.log('ngDoCheck - #3');
  }
/*
  Uruchamia się po każdej inicjalizacji, np <ng-content>
*/
  ngAfterContentInit(): void  {
    console.log('ngAfterContentInit - #4');
  }
/*
  Uruchamia się po każdej zmianie np. <ng-content>
*/
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked - #5');
  }
/*
  Uruchamia się po inicjalizacji widoku
*/
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - #6');
  }
/*
  Uruchamia się po każdej zmianie widoku
*/
  ngAfterViewChecked(): void {
    console.log('ngAfterViewInit - #7');
  }
/*
  Uruchamia się po każdej zmianie widoku
*/
  ngOnDestroy(): void {
  }
  content(): void {
   this.show = !this.show;
  }
  showTask(task): void {
    this.eventH.emit(task);
  }
  getColor(): string {
    return this.tasks.length >= 4 ? 'green' : 'red';
  }

}
