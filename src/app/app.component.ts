import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoList } from './core/models/todo-list.model';
import { TodoListService } from './core/services/todo-list.service';
import * as TodoListActions from './core/store/todo-list.actions';
import { TODO_LIST_DATA } from './features/works/todo-list/TODO_LIST_DATA';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<{ todoList: { todoLists: TodoList[] } }>) {}

  public ngOnInit(): void {
    this.store.dispatch(new TodoListActions.AddLists(TODO_LIST_DATA));
  }
}
