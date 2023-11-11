import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../Model/Person';

@Component({
  selector: 'app-cvlist',
  templateUrl: './cvlist.component.html',
  styleUrls: ['./cvlist.component.css'],
})
export class CvlistComponent {
  @Input()
  personnes: Person[] = [];
  @Output()
  sendedperson = new EventEmitter();

  sendperson(item: Person) {
    this.sendedperson.emit(item);
  }
}
