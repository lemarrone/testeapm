import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Apm1Component } from './components/apm1/apm1.component';
import { Apm2Component } from './components/apm2/apm2.component';

const routes: Routes = [
  { path: 'apm', component: Apm1Component },
  { path: 'apmm', component: Apm2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
