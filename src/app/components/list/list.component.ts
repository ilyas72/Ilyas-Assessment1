import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
myList:any[] = [];
  constructor() { }

  ngOnInit() {
  }

  processForm(theForm:NgForm) {
    console.log(theForm.value);
    this.myList.push(theForm.value)
  }
}
