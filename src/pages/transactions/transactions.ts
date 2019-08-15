import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {

  transactions: any[] = [
    {
      id: 1,
      amount: 2000,
      receiver: 'ADB',
      sender: 'You',
      date: 'Aug 15, 2019'
    },
    {
      id: 2,
      amount: 500,
      receiver: 'Vendor 1',
      sender: 'You',
      date: 'Aug 13, 2019'
    },
    {
      id: 3,
      amount: 3000,
      receiver: 'ADB',
      sender: 'You',
      date: 'Aug 10, 2019'
    },
    {
      id: 4,
      amount: 2000,
      receiver: 'You',
      sender: 'Juan Dela Cruz',
      date: 'July 30, 2019'
    },
    {
      id: 4,
      amount: 2000,
      receiver: 'You',
      sender: 'Juan Dela Cruz',
      date: 'July 30, 2019'
    },
    {
      id: 4,
      amount: 2000,
      receiver: 'You',
      sender: 'Juan Dela Cruz',
      date: 'July 30, 2019'
    },
    {
      id: 4,
      amount: 2000,
      receiver: 'You',
      sender: 'Juan Dela Cruz',
      date: 'July 30, 2019'
    }
];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(): void {
  }

}
