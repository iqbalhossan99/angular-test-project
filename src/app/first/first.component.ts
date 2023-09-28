import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  title = 'I am practicing Angular js'
  items = ['Iqbal', 'masud', 'parveh'];

  constructor() { }
  
  ngOnInit(): void{
    this.textFunc()
  }

  textFunc() {
    return this.title;
  }

}
