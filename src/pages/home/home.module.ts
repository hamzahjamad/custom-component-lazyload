//custom-component-lazyload\src\pages\home\home.module.ts

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

//add this line
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
  	//add this line too
  	ComponentsModule,
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
