import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AlertController, ModalController } from '@ionic/angular';
import { LanguageModalPage } from '../language-modal/language-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  params = {
    name: 'Simon'
  };

  constructor(private translate: TranslateService, private alertCtrl: AlertController, public modalController: ModalController) { }

  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: this.translate.instant('ALERT.header'),
      message: this.translate.instant('ALERT.msg'),
      buttons: ['OK']
    });
    alert.present();
  }
 
  async openLanguage() {
    const modal = await this.modalController.create({
      component: LanguageModalPage
    });
    await modal.present();
  }
}