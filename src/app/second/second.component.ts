import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms"
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
  
export class SecondComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void{
    // this.onSubmit()
  }

  color = new FormControl('');

  name = '';

  myFrom = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit() {
    console.log(this.myFrom.value);
  }

}
