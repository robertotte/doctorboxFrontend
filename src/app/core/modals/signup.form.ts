import { FormGroup, FormControl, Validators } from "@angular/forms";

export class signupForm {
  signupForm = new FormGroup({
    firstname: new FormControl('', Validators.compose([Validators.required])),
    lastname: new FormControl('', Validators.compose([Validators.required])),
    username: new FormControl('', Validators.compose([Validators.required])),
    email: new FormControl('', Validators.compose([Validators.required])),
    password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    ])),
    doctor: new FormControl(true)
  });
}