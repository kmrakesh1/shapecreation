import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-loadobject',
  templateUrl: './loadobject.component.html',
  styleUrls: ['./loadobject.component.css']
})
export class LoadobjectComponent implements OnInit ,DoCheck{
  activedURL: any;
  showrectangle: boolean = false;
  showcircle: boolean = false;
  showrsquare: boolean = false;
  colorValue:any ="White"
  totalItems:any = 1;
  numberArray :any;
  subscription: Subscription | any;
  countsubscription: Subscription | any;
  @Input() public parentdata :any;
  constructor(private routedata: ActivatedRoute, public countitem:ModalService) {
    // this.countitem.removeitems();
    
   }
  ngOnInit(): void {
    this.activedURL = this.routedata.snapshot.url[0]?.path;
    var totalcount = this.countitem.getcount();
    console.log(totalcount);
    this.loadobject(this.activedURL);
  }

  loadobject(modalobj: any) {
    switch (modalobj) {
      case 'rectangle':
        this.showrectangle = true;
        this.showcircle = false;
        this.showrsquare = false;
        break;
      case 'circle':
        this.showrectangle = false;
        this.showcircle = true;
        this.showrsquare = false;
        break;
      case 'square':
        this.showrectangle = false;
        this.showcircle = false;
        this.showrsquare = true;
        break;
    }
    this.refreshdata();
  }
  refreshdata(){
    this.numberArray = Array(this.totalItems).fill("");
  }
ngDoCheck(): void {
  this.subscription = this.countitem.getcolor().subscribe(color => {
    this.colorValue= color;
 });
 this.countsubscription = this.countitem.getcount().subscribe(countvalue => {
   this.totalItems= Number(countvalue);
  });
  this.refreshdata();
}

ngOnDestroy() {
  this.subscription.unsubscribe();
  this.countsubscription.unsubscribe();
}
}

