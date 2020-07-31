import { Component } from "@angular/core";
import { UserUseCase } from "../../../domain/usecase/usecase/UserUseCase";
import { AlertController } from '@ionic/angular';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  registerFlag = true;
  loginFlag = false;
  logueado = false;
  showAll: boolean = true;
  email: string;
  password: string;
  user: string;

  private readonly userUseCase: UserUseCase;
  constructor(userUseCase: UserUseCase, public alertController: AlertController) {
    this.userUseCase = userUseCase;
  }

  initData(){
    this.email = '';
    this.password = '';
    this.user = '';
  }

  register() {
    this.showAll = false;
    console.log(this.email, this.password);

    this.userUseCase.register(this.email, this. password).subscribe(
      (response) => {
        console.log("data editCart", response);
        this.initData();
        this.showAll = true;
        this.loginFlag = true;
        this.registerFlag = false;
        this.logueado = false;
        this.presentAlert('LISTO', 'Usuario creado correctamente.');
      },
      (error: any) => {
        console.log(error);
        this.initData();
        this.showAll = true;
        this.presentAlert('OPS', 'Ocurrio un error , intente de nuevo.');
      },
      () => {
      }
    );
  }

  async presentAlert(title: string, body: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: title,
      subHeader: '',
      message: body,
      buttons: ['OK']
    });

    await alert.present();
  }

  login() {
    this.showAll = false;
    console.log(this.email, this.password);

    this.userUseCase.doLogin(this.email, this. password).subscribe(
      (response) => {
        console.log("data editCart", response);
        this.initData();
        this.user = JSON.stringify(response);
        this.showAll = true;
        this.loginFlag = false;
        this.registerFlag = false;
        this.logueado = true;
      },
      (error: any) => {
        console.log(error);
        this.initData();
        this.showAll = true;
        this.presentAlert('OPS', 'Ocurrio un error , intente de nuevo.');
      },
      () => {
      }
    );
  }

  returnToLogin() {
    this.initData();
    this.loginFlag = true;
    this.registerFlag = false;
    this.logueado = false;
  }

  returnToRegister() {
    this.initData();
    this.loginFlag = false;
    this.registerFlag = true;
    this.logueado = false;
  }
}
