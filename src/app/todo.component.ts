import { Component } from '@angular/core';

@Component({
  selector: 'todo-list',
  template: `
  <div class="page-header">
      <h1>
        {{ model.user }}'s To Do List
        <span class="label label-default" [ngClass]="warningLevel()">
          {{incompleteItems()}}
        </span>
      </h1>
    </div>

    <div class="panel">
      <div class="input-group">
        <input class="form-control" />
        <span class="input-group-btn">
          <button class="btn btn-default">Add</button>
        </span>
      </div>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Description</th>
          <th>State</th>
        </tr>
      </thead>

      <tbody>
        <tr *ngFor="let item of model.items">
          <td>{{item.action}}</td>
          <td>
            <input type="checkbox" [(ngModel)]="item.done" />
          </td>
        </tr>

      </tbody>
    </table>
  `
})

export class ToDoComponent {

  public warningLevel() : string {
    return this.incompleteItems() < 3 ? "label-success" : "label-warning";
  }

  public incompleteItems():number {
    let count = 0;
    for (let i=0; i < this.model.items.length; i++ ) {
      if (!this.model.items[i].done) {
        count++;
      }
    }

    return count;
  }

  public model = {
    user: 'Gabor',
    items: [
      { action: 'Buy food', done: false },
      { action: 'Learn Angular2', done: false },
      { action: 'Learn .NET', done: false },
      { action: 'Learn 3rd semester computer science', done: true },
    ]
  };
}
