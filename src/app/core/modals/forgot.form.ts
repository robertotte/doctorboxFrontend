import { FormGroup, FormControl, Validators } from "@angular/forms";

export class ForgotForm {
  forgotForm = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required])),
  });z
}