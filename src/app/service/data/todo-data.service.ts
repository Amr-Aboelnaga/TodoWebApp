import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }


  retrieveAllTodos(name: string) {
    return this.http.get<Todo[]>(`https://limitless-oasis-30668.herokuapp.com/jpa/users/${name}/todos`)
  }

  deleteTodo(username: string, id) {
    return this.http.delete(`https://limitless-oasis-30668.herokuapp.com/jpa/users/${username}/todos/${id}`)
  }

  getTodo(username: string, id) {
    return this.http.get<Todo>(`https://limitless-oasis-30668.herokuapp.com/jpa/users/${username}/todos/${id}`)
  }

  putTodo(username: string, id, todo: Todo) {
    return this.http.put(`https://limitless-oasis-30668.herokuapp.com/jpa/users/${username}/todos/${id}`, todo)
  }
  createTodo(username: string, todo: Todo) {
    return this.http.post(`https://limitless-oasis-30668.herokuapp.com/jpa/users/${username}/todos/`, todo)
  }

}
