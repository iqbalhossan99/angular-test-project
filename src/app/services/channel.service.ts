import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor() { }
  display() {
    console.log("Welcome to EFG Tech") ;
  }

  getValueFromCom(value: any) {
    console.log(value)
  }
}
