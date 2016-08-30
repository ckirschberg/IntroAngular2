import { Component } from '@angular/core';
import {ToDoComponent} from "./todo.component";

@Component({
  moduleId: module.id,
  directives: [ToDoComponent],
  selector: 'app-root',
  template: `
    {{title}}
    <todo-list></todo-list>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app still works!';
}
