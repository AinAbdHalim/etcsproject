import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  list: any[] = []

  todoForm: FormGroup = this.fb.group({
  todo: ['', [Validators.required]],
  })


  
  current: number = 0;

  constructor(private fb: FormBuilder) { }

  addTask() {
    this.list.push({id: this.list.length, name: this.todoForm.value.todo})
    this.updateStorage()
    this.todoForm.reset()
    console.warn(this.list)
  }

  updateStorage() {
    localStorage.setItem("todolist",JSON.stringify(this.list))
  }

  removeTask(id: number) {
    console.warn(id)
    this.list = this.list.filter(item => item.id !== id)
    this.updateStorage()
  }

  ngOnInit(): void {
    this.list=JSON.parse(localStorage.getItem("todolist")||"[]")
  }
  

}
