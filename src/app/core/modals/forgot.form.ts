import { FormGroup, FormControl, Validators } from "@angular/forms";

export class forgotForm {
  forgotForm = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required])),
  });

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}