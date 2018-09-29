import { Injectable, Inject } from "@angular/core";
import { Observable, of } from 'rxjs';
import { Http } from "@angular/http";
import { PEOPLE } from './data/people';
@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(@Inject(Http) public http: Http) {
    console.log('PeopleService constructor')

  }

  getAllPeople() {
    return of(PEOPLE);
  }

  getPerson(id) {
    return of(PEOPLE.find(x => x.id === id));
  }
}