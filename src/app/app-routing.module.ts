import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { FaAComponent } from './fa-a/fa-a.component';
import { FsBComponent } from './fs-b/fs-b.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [{
  path: '', component: FirstComponent,
  children: [
    {
      path: 'fa-a', component: FaAComponent
    },
    {
      path: 'fa-b', component: FsBComponent
    }
  ]
}, {
  path: 'second', component: SecondComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  
export class AppRoutingModule {
  static forRoot(routes: Routes): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
}
