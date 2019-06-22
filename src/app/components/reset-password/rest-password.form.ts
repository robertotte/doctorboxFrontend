import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Optional } from '@angular/core';

export class restForm {
    constructor(@Optional() private fb: FormBuilder) { }

    rest: FormGroup;

    initForm() {
        return this.rest = this.fb.group({
            newPassword: ['', Validators.compose([Validators.required])],
            confirmPassword: ['', Validators.compose([Validators.required])],
            code: ''
        })
    }

    get newPassword() {
        return this.rest.get('newPassword');
    }
    
    get confirmPassword() {
        return this.rest.get('confirmPassword');
    }

}