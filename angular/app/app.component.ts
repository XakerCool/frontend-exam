import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-exam-part';
  public toDoList = ["template"];
  public add(text: any) {
    this.toDoList.push(text);
  }
  public remove(todo: any) {
    this.toDoList.splice(this.toDoList.indexOf(todo), 1);
  }
}
