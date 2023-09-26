import { Component, ElementRef, HostBinding, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-loaddata',
  templateUrl: './loaddata.component.html',
  styleUrls: ['./loaddata.component.css']
})
export class LoaddataComponent implements OnChanges, OnInit {
  count: number | any;
  itemtype: string | any;
  color: string | any;
  mode: any;
 
  @ViewChild('selectitem') selecteditem: ElementRef | any;
  constructor(private routedata: ActivatedRoute, public countservice:ModalService) { 
   
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.mode);
  }
  ngOnInit() {
    this.color = "";
    this.count = "";
  }

  colorchanged() {
    this.countservice.setcolor(this.color);
  }
  countchanged(){
    this.countservice.setcount(this.count);
   // this.count = this.count.value;
  }
}
