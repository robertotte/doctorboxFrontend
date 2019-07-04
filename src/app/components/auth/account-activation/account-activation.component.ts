import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountActivationService } from './account-activation.service';

@Component({
  selector: 'app-account-activation',
  templateUrl: './account-activation.component.html',
  styleUrls: ['./account-activation.component.css']
})
export class AccountActivationComponent implements OnInit {

  constructor(private accountActivationService: AccountActivationService, private route: ActivatedRoute) { }
 
  ngOnInit() {
    window.scroll(0, 0);
    this.route.params.subscribe(params => {
      this.accountActivationService.accountActivation(params['code']);
    });
  }

}
