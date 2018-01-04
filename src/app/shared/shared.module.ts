import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [],
  exports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgbModule
  ]
})
export class SharedModule {}
