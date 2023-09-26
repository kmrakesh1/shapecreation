import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
constructor(private routedata:ActivatedRoute){

}
ngOnInit(): void {
  const url: Observable<string> = this.routedata.url.pipe(map(segments => segments.join('')));
}
}
