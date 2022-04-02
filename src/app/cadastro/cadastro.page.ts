import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HelperService } from '../services/helper/helper.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(private helper: HelperService) { }

  email = this.getEmail();
  contactField: null;
  messageField: null;

  ngOnInit() {
  }

  getEmail() {
    const email = this.helper.getUrlParameter('email');
    console.log(email);
    return email;
  }

}
