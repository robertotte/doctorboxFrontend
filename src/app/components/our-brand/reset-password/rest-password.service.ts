import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiHeader, swalMessages } from '../../../constants';

@Injectable({
  providedIn: 'root'
})
export class RestPasswordService {

  constructor(private http: HttpClient, private swalMessages: swalMessages) { }

  restPassword(form) {
    if (form.valid) {
      // this.http.put(apiHeader + '', form.value)
      //   .subscribe(
      //     rest => {

      //     },
      //     error => {

      //     });
    }
    else {
      this.swalMessages.errorAlert(this.swalMessages.formErrors.invalidFormTitle, this.swalMessages.formErrors.invalidFormMsg)
    }

  }
}