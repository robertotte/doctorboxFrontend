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
  role ;

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

    // console.log(this.token, this.role);
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
    if (localStorage.getItem('role')) {
      this.role = localStorage.getItem('role');
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.loginService.logout();
  }

}
