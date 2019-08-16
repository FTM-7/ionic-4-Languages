import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { PopoverController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-language-modal',
  templateUrl: './language-modal.page.html',
  styleUrls: ['./language-modal.page.scss'],
})
export class LanguageModalPage implements OnInit {
  languages = [];
  selected = '';

  constructor(private languageService: LanguageService, private popoverCtrl: PopoverController,public modalCtrl: ModalController) { }
 
  ngOnInit() {
    this.languages = this.languageService.getLanguages();
    this.selected = this.languageService.selected;
  }
 
  select(lng) {
    this.languageService.setLanguage(lng);
    this.popoverCtrl.dismiss();
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }
}