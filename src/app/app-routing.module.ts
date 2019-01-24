import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path:'',
		children:[
			{
				path:'',
				loadChildren:'./application/home/home.module#HomeModule'
			},
			{
				path:'supplier',
				loadChildren:'./application/supplier/supplier.module#SupplierModule'
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
