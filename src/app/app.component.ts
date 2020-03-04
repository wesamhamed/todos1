import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title;
  // tasks = [
  //   { id: 1, title: "task 1", isDone: true },
  //   { id: 2, title: "task 2", isDone: false },
  //   { id: 3, title: "task 3", isDone: false }
  // ];
  tasks = [];
  constructor(private http: HttpClient) {
    http
      .get("https://jsonplaceholder.typicode.com/todos?_limit=20")
      .subscribe((data: any) => {
        this.tasks = data;
        // console.log(data);
      });
  }
  add() {
    this.tasks.push({
      id: `${this.tasks.length}`,
      title: `${this.title}`,
      isDone: false
    });
    // this.http
    //   .post("http://localhost:3000/tasks", {
    //     userId: 4,id: 4,
    //     title: "delectus aut autem",
    //     completed: false
    //   })
    //   .subscribe(data => {
    //     this.tasks.push(data);
    //   });
    this.title = "";
  }
  remove(id) {
    const tasks = this.tasks.filter(task => {
      return task.id !== id;
    });
    this.tasks = tasks;
  }
  isDone(id) {
    this.tasks.filter(task => {
      if (task.id === id) {
        task.isDone = !task.isDone;
      }
    });
  }
}
