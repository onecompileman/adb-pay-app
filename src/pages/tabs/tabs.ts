import { AccountPage } from './../account/account';
import { TopupPage } from './../topup/topup';
import { TransactionsPage } from './../transactions/transactions';
import { TabsHomePage } from './../tabs-home/tabs-home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

tab1 = TabsHomePage;
tab2 = TransactionsPage;
tab3 = TopupPage;
tab4 = AccountPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
