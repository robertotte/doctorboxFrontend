import { FormGroup, FormControl, Validators } from "@angular/forms";

export class forgotForm {
  forgotForm = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required])),
  });
}