import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController
  ) {
  }

  ngOnInit() {
  }

  dismissRegister() {
    this.modalController.dismiss();
  }

  register(form) {
    this.authService.register(form.value.fname, form.value.lname, form.value.email, form.value.password).subscribe(
      data => {
      },
      error => {
        console.log(error);
      },
      () => {
        this.dismissRegister();
        this.navCtrl.navigateRoot('/recipes');
      }
    );
    }

  async loginModal() {
    this.dismissRegister();
    const loginModal = await this.modalController.create({
      component: LoginPage
    });
    return await loginModal.present();
  }

}
