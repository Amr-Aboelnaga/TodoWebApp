import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  //   todos=[
  //   new Todo(  1,"first todo object",false,new Date()),
  //   new Todo(  2,"second todo object",false,new Date()),
  //   new Todo(  3,"third todo object",false,new Date()),

  //  ]
  todos: Todo[];
  message: string = "";
  constructor(private service: TodoDataService, private router: Router) { }

  ngOnInit(): void {
    this.refreshTodos('admin')
  }
  refreshTodos(username) {
    this.service.retrieveAllTodos(username).subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }
  deleteTodo(id): void {

    console.log(`delete todo ${id}`)
    this.service.deleteTodo('admin', id).subscribe(
      response => {
        console.log(response);
        this.message = ` Todo ${id} has been Deleted.`
        this.refreshTodos('admin')
      }

    )
  }
  updateTodo(id): void {

    this.router.navigate(['todos', 'admin', id])
  }
  addTodo() {
    this.router.navigate(['todos', 'admin', -1])

  }

}
