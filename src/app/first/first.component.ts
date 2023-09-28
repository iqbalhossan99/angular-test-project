import { Component, OnInit } from '@angular/core';
import {ChannelService} from '../services/channel.service'

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  title = 'Pass value into serivces'
  items = ['Iqbal', 'masud', 'parveh'];

  constructor(private chService: ChannelService) { }
  
  ngOnInit(): void{
    this.textFunc()
    this.passValueToService()
  }

  textFunc() {
    return this.title;
  }

  message() {
    return this.chService.display();
  }
  passValueToService() {
    return this.chService.getValueFromCom(this.title);
  }
}
