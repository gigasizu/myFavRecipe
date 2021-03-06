import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../auth/login/login.page';
import { RegisterPage } from '../auth/register/register.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(
    private modalController: ModalController
    // private router: Router
  ) { }

  ngOnInit() {
  }

  async login() {
    const loginModal = await this.modalController.create({
    component: LoginPage
    });
    return await loginModal.present();
  }

  async register() {
    const registerModal = await this.modalController.create({
    component: RegisterPage
    });
    return await registerModal.present();
  }

  /*registerPage() {
    this.router.navigate(['/register']);
  }*/

}
