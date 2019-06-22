import { Component, OnInit } from '@angular/core';
import { AccountModalService } from 'src/app/core/services/account-modal.service';
import { LoginService } from 'src/app/shared/modals/login/login.service';

declare const $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token;

  constructor(private accountModal: AccountModalService, private loginService: LoginService) { }

  ngOnInit() {
    this.loginCheck();
    this.roleCheck();
    window.scroll(0, 0);
    window.onscroll = function () { myFunction() };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }

  triggerLoginModal() {
    this.accountModal.setModal('login');
    this.accountModal.emitModalCalled();
    this.showForm();
  }


  showForm() {
    $('#login').modal();
  }

  loginCheck() {
    if (localStorage.getItem('DecodedToken')) {
      this.token = localStorage.getItem('DecodedToken');
      return true;
    } else {
      return false;
    }
  }

  roleCheck() {
    let role = localStorage.getItem('role');
    if (role == 'true') {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.loginService.logout();
  }

}
