import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddReembolsoComponent } from './components/add-reembolso/add-reembolso.component';
import { EditReembolsoComponent } from './components/edit-reembolso/edit-reembolso.component';
import { ListReembolsoComponent } from './components/list-reembolso/list-reembolso.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* Angular material */
import { AngularMaterialModule } from './material.module';
import { Apm1Component } from './components/apm1/apm1.component';
import { Apm2Component } from './components/apm2/apm2.component';


@NgModule({
  declarations: [
    AppComponent,
    AddReembolsoComponent,
    EditReembolsoComponent,
    ListReembolsoComponent,
    Apm1Component,
    Apm2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
