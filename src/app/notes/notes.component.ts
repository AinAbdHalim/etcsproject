import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  list: any[] = []

  noteForm: FormGroup = this.fb.group({
  note: ['', [Validators.required]],
  })


  constructor(private fb: FormBuilder) { }

  addNote() {
    this.list.push({id: this.list.length, name: this.noteForm.value.note})
    this.updateStorage()
    this.noteForm.reset()
    console.warn(this.list)
  }

  updateStorage() {
    localStorage.setItem("notes",JSON.stringify(this.list))
  }

  removeNote(id: number) {
    console.warn(id)
    this.list = this.list.filter(item => item.id !== id)
    this.updateStorage()
  }


  ngOnInit(): void {
    this.list=JSON.parse(localStorage.getItem("notes")||"[]")
  }

}
