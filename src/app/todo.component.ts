import { Component } from '@angular/core';

@Component({
  selector: 'todo-list',
  template: `
  <div class="page-header">
      <h1>
        {{ model.user }}'s To Do List
        <span class="label label-default" [ngClass]="warningLevel()"
          *ngIf="incompleteItems() > 0">

          {{incompleteItems()}}
        </span>
      </h1>
    </div>

    <div class="panel">
      <div class="input-group">
        <input class="form-control" [(ngModel)]="todoText" />
        <span class="input-group-btn">
          <button class="btn btn-default" (click)="onAddTodo(todoText)" >Add</button>
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
        <tr *ngFor="let item of modelMovie.movies">
          <td>{{item.title}}</td>
          <td>
            {{item.productionYear}}
          </td>
        </tr>

      </tbody>
    </table>
  `
})

export class ToDoComponent {

  public onAddTodo(text) {
    this.model.items.push( {action: text, done: false} );

    //console.log(text);
  }

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


  public modelMovie = {
    name: 'Christian',
    movies: [
      { title: 'What women want', productionYear: '1999',
        actors: [
          {name: 'Mel Gibson', birthYear: '1967'},
          {name: 'Helen Hunt', birthYear: '1970'}]
      },
      { title: 'Die Hard', productionYear: '2000',
        actors: [
          {name: 'Bruce Willis', birthYear: '1968'},
          {name: 'Someone else', birthYear: '1975'}]
      }
    ]
  };
}
