import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  newTask = {
    title: "",
    description: "",
    completed: false,
  }
  showTasks: boolean = false;
  tasks;
  searched;
  searchedTask;
  title = 'angularApp';
  
  constructor(private _httpService: HttpService){};
  ngOnInit(){
    this.getTasksFromService();
  }
  getTasksFromService(){
    let all_tasks = this._httpService.getTasks();
    all_tasks.subscribe(data => {
      this.tasks = data;
      // console.log("got tasks from service ~~~~~~~")
      // console.log(data)
    });
  }
  show(){
    this.showTasks = !this.showTasks;
  }
  findTask(){
    this.searched = true;
    let input = document.querySelector("input");
    console.log("input");
    console.log(input);
    let taskNumber = Number(input.value)-1;
    console.log("taskNumber");
    console.log(taskNumber);
    this.searchedTask = this.tasks[taskNumber]
    input.value = "";
    // let one_task = this._httpService.getOneTask(id);
    // one_task.subscribe(data => {
    //   this.searchedTask = data;
  }
  delete(id){
    let deleter = this._httpService.deleteTask(id);
    deleter.subscribe(data => console.log(data));
    this.getTasksFromService();
    this.searched = false;
  }
  submit(){
    let poster = this._httpService.postTask(this.newTask);
    poster.subscribe(data => console.log(data));
    this.getTasksFromService();
    this.newTask = {
      title: "",
      description: "",
      completed: false,
    }
  }
  edit(){
    let editor = this._httpService.editTask(this.searchedTask);
    editor.subscribe(data => console.log(data));
    this.searched = false;
    this.searchedTask = false;
    this.getTasksFromService();
  }
}