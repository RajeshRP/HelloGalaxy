import { Hello } from "./components/hello.js";
import { About } from "./components/about.js";
import { People } from "./components/people.js";
import { Person } from "./components/person.js";
import { Transition } from "@uirouter/angular";

/** States */
export const helloState = { name: 'hello', url: '/hello', component: Hello };

export const aboutState = { name: 'about', url: '/about', component: About };

export const peopleState = {
  name: 'people',
  url: '/people',
  component: People,
  // resolve: [
  //   { 
  //     token: 'people',
  //     deps: [PeopleService], 
  //     resolveFn: (peopleSvc) => peopleSvc.getAllPeople()
  //   }
  // ]
};

export const personState = {
  name: 'people.person',
  url: '/:personId',
  component: Person,
  // resolve: [
  //   { 
  //     token: 'person', 
  //     deps: [Transition, 'people'],
  //     resolveFn: (trans, people) => 
  //         people.find(person => person.id === trans.params().personId)
  //   }
  // ]
};
