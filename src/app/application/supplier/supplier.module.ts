import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier.component';
import { SupplierRoutingModule } from './supplier-routing.module';
import { ShareModule } from './../../shared/share.module';

@NgModule({
  declarations: [
  	SupplierComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    ShareModule
  ]
})
export class SupplierModule { }
