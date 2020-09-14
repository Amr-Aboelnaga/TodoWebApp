import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number;
  todo: Todo;
  username: string;

  constructor(private service: TodoDataService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params)
    this.username = this.route.snapshot.params['name'];
    console.log(this.username)
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, "", false, new Date());
    if (this.id != -1)
      this.service.getTodo(this.username, this.id).subscribe(
        data => {
          this.todo = data

        }
      )



  }
  saveTodo() {
    if (this.id == -1) {
      this.service.createTodo(this.username, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos', this.username])
        }
      );
    } else
      this.service.putTodo(this.username, this.id, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos', this.username])

        }
      );
  }

  cancelUpdate() {
    this.router.navigate(['todos', this.username])

  }
}
