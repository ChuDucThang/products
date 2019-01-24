import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent, NavComponent ,FooterComponent} from './layout';

const Layout = [
	HeaderComponent,
	NavComponent,
	FooterComponent
]

@NgModule({
	imports:[
		CommonModule
	],
	declarations:[
		Layout
	],
	exports:[
		CommonModule,
		Layout
	],
	providers:[

	],
	entryComponents:[]
})
export class ShareModule{}