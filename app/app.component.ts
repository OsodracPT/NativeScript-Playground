import { Component } from "@angular/core";
import { User } from "./shared/user/user.model";
import { UserService } from "./shared/user/user.service";

@Component({
  selector: "gr-login",
  providers: [UserService],
  templateUrl: "login/login.component.html",
  styleUrls: ["login/login.component.css"]
})
export class AppComponent {
  user: User;
  isLoggingIn = true;

  constructor(private userService: UserService) {
    this.user = new User();
    this.user.email = "testando";
    this.user.password = "password";
  }

  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }
  
  login() {
    // TODO: Define
  }
  
  signUp() {
    this.userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created.");
          this.toggleDisplay();
        },
        () => alert("Unfortunately we were unable to create your account.")
      );
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}