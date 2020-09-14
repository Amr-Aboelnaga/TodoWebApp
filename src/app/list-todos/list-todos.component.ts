import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  username = ''
  constructor(private route: ActivatedRoute, private service: TodoDataService, private router: Router) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['name'];
    this.refreshTodos(this.username)
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
    this.service.deleteTodo(this.username, id).subscribe(
      response => {
        console.log(response);
        this.message = ` Todo ${id} has been Deleted.`
        this.refreshTodos(this.username)
      }

    )
  }
  updateTodo(id): void {

    this.router.navigate(['todos', this.username, id])
  }
  addTodo() {
    this.router.navigate(['todos', this.username, -1])

  }

}
