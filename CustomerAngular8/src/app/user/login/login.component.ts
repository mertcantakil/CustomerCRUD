import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserService } from "src/app/shared/user.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: []
})
export class LoginComponent implements OnInit {
  formModel = {
    UserName: "",
    Password: ""
  };

  constructor(
    private service: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {    /* Login olduktan sonra user/logine dönmeye çalışırsa engellemek için.*/
    if (localStorage.getItem("token") != null) {
      this.router.navigateByUrl("/CustomerDetails");
    }
  }
  onSubmit(form: NgForm) {      /*Form bilgileri doğru değilse err, doğruysa yönlendir.*/
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem("token", res.token);
        this.router.navigateByUrl("/CustomerDetails");
      },
      err => {
        if (err.status == 400)
          this.toastr.error("Incorrect Username or Password", "Login Failed");
        else console.log(err);
      }
    );
  }
}
