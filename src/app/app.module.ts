import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { RouterModule, Routes } from '@angular/router';
import { FaAComponent } from './fa-a/fa-a.component';
import { FaBComponent } from './fa-b/fa-b.component';

const routes: Routes = [{
  path:'', component: FirstComponent
}, {
  path:'second', component: SecondComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FaAComponent,
    FaBComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
