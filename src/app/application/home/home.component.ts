import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
  	public toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  submit(){
  	this.toastrService.error('Hello admin','Success message !')
  }

}
