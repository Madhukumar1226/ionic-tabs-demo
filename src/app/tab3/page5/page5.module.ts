import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page5PageRoutingModule } from './page5-routing.module';

import { Page5Page } from './page5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Page5PageRoutingModule
  ],
  declarations: [Page5Page]
})
export class Page5PageModule {}
