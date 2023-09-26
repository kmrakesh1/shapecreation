import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoaddataComponent } from './loaddata/loaddata.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoadobjectComponent } from './loadobject/loadobject.component';

const routes : any= [{
      path:'loaddata',component:LoaddataComponent},
     {path:'rectangle',component:LoadobjectComponent} ,
     {path:'square',component:LoadobjectComponent},
     {path:'circle',component:LoadobjectComponent},
]
@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    LoaddataComponent,
    LoadobjectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
