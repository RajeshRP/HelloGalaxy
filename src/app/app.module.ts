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

function uiRouterConfigFn(router: UIRouter) {
  // If no URL matches, go to the `hello` state by default
  router.urlService.rules.otherwise({ state: 'hello' });
}

@NgModule({
  declarations: [
    AppComponent, Hello, About, People, Person
  ],
  imports: [
    HttpModule, BrowserModule, UIRouterModule.forRoot({
      states: INITIAL_STATES,
      config: uiRouterConfigFn
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
