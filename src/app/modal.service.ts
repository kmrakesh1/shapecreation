import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
itemcount:number | any;
  private subject = new Subject();
  private countsubject = new Subject();
  constructor() { }
  setcount(countvalue:any){
    this.countsubject.next(countvalue);
  }
  getcount(){
    return this.countsubject.asObservable();
  }
  setcolor(message: string){
    this.subject.next(message);
  }
  getcolor() {
    return this.subject.asObservable();
  }
  removeitems(){
    this.countsubject.next("");
    this.subject.next("");
  }
}
