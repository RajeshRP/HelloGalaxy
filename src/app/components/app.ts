import {Component} from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
  <div class="nav">
    <a uiSref="hello" uiSrefActive="active">Hello</a>
    <a uiSref="about" uiSrefActive="active">About</a>
    <a uiSref="people" uiSrefActive="active">People</a>
  </div>
  
  <ui-view></ui-view>
`})
export class App { }
