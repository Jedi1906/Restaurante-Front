import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private router: any;

  constructor() { }

  ngOnInit(): void {
  }
  checkurl(){
    if (this.router.url.indexOf("login") != -1){
      return false;
    } else if (this.router.url.indexOf("dashboard")!= -1){
      return false;
    }else {
      return true;
    }
  }

}
