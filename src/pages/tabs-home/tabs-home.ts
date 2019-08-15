import { ReceiveMoneyPage } from './../receive-money/receive-money';
import { SendMoneyPage } from './../send-money/send-money';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { RewardsPage } from '../rewards/rewards';

/**
 * Generated class for the TabsHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs-home',
  templateUrl: 'tabs-home.html',
})
export class TabsHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private qrScanner: QRScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsHomePage');
  }

  scanQr(): void {
    this.navCtrl.push(SendMoneyPage);
  }

  rewards(): void {
    this.navCtrl.push(RewardsPage);
  }

  openReceiveMoneyPage(): void {
    this.navCtrl.push(ReceiveMoneyPage);
  }

}
