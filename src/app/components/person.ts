import { Component, Input } from '@angular/core';
import { PeopleService } from '../people.service';
import { Transition } from "@uirouter/angular";

@Component({
  template: `
    <h3>A person!</h3>
  
    <div>Name: {{person.name}}</div>
    <div>Id: {{person.id}}</div>
    <div>Company: {{person.company}}</div>
    <div>Email: {{person.email}}</div>
    <div>Address: {{person.address}}</div>
    
    <button uiSref="people">Close</button>
`})
export class Person {
  @Input() person;
  constructor(private trans: Transition, private peopleService: PeopleService) {
  }
  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = this.trans.params().personId;
    this.peopleService.getPerson(id).subscribe(person => {
      this.person = person;
    });
  }

}