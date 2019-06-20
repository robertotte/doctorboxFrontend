import { FormGroup, FormControl, Validators } from "@angular/forms";

export class loginForm {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.compose([Validators.required])),
    password: new FormControl('', Validators.compose([Validators.required]))
  })
}