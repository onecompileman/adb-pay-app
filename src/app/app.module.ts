import { TabsPage } from './../pages/tabs/tabs';
import { LoginPageModule } from './../pages/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { RegistrationPageModule } from '../pages/registration/registration.module';
import { ComponentsModule } from '../components/components.module';
import { AccountPageModule } from './../pages/account/account.module';
import { TopupPageModule } from './../pages/topup/topup.module';
import { TransactionsPageModule } from './../pages/transactions/transactions.module';
import { TabsHomePageModule } from './../pages/tabs-home/tabs-home.module';
import {TabsHomePage} from "../pages/tabs-home/tabs-home";


@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HomePageModule,
    RegistrationPageModule,
    LoginPageModule,
    ComponentsModule,
    TabsHomePageModule,
    TransactionsPageModule,
    TopupPageModule,
    AccountPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    TabsHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
