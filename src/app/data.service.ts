import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1: string[] = ["John Vega", "ASD123" , "jv@gmail.com"];
  info2: string[] = ["Tori Vega", "ASD123" , "tv@gmail.com"];
  info3: string[] = ["Seya Vega", "ASD123" , "sv@gmail.com"];

  getInfo1():string[] {
    return this.info1
  }
  getInfo2():string[] {
    return this.info2
  }
  getInfo3():string[] {
    return this.info1
  }

  addInfo(info: any) {
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
console.log(this.info3.push(info))
    return this.info1
  }

  constructor() { }
}
