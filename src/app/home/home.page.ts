
import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonCard,
  IonCardContent
} from '@ionic/angular';;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonButton,
    IonItem,
    IonLabel,
    IonCard,
    IonCardContent
  ],
})
export class HomePage {

  amount: string = '';
  convertedAmount: number | null = null;

  constructor() {}

  onAmountChange(event: CustomEvent) {
    this.amount = event.detail.value ?? '';
  }

  convert() {
    const quetzales = Number(this.amount);

    if (
      this.amount.trim() === '' ||
      !Number.isFinite(quetzales) ||
      quetzales < 0
    ) {
      this.convertedAmount = null;
      return;
    }

    this.convertedAmount = quetzales / 8;
  }

}
