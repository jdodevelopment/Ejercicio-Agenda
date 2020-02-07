import { Person } from 'src/app/shared/person.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {

  @Input() person: Person;


  constructor() { }

  ngOnInit() {
  }

}
