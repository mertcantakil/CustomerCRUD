import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onLogout(){     /*Logout butonuna basıldıgında tokenı sil, login ekranına gönder */
    localStorage.removeItem('token');
    this.router.navigateByUrl('/user/login');
  }

}
