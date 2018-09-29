import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from "@uirouter/angular";

import { AppComponent } from './app.component';
import { Hello } from "./components/hello.js";
import { About } from "./components/about.js";
import { People } from "./components/people.js";
import { Person } from "./components/person.js";

import { helloState, aboutState, peopleState, personState } from "./states.js";

let INITIAL_STATES = [helloState, aboutState, peopleState, personState];

@NgModule({
  declarations: [
    AppComponent, Hello, About, People, Person
  ],
  imports: [
    HttpModule, BrowserModule, UIRouterModule.forRoot({
      states: INITIAL_STATES,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
