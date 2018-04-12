import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {DetailsPage } from '../pages/details/details'
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Firebase } from '@ionic-native/firebase';
import { TabPage } from '../pages/tab/tab';
import { SuperTabsModule} from 'ionic2-super-tabs';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

  var config = {
    apiKey: "AIzaSyCiH8Xmyq_styE_vIIAiJbgoUZyQHganAI",
    authDomain: "zeroun-filter.firebaseapp.com",
    databaseURL: "https://zeroun-filter.firebaseio.com",
    projectId: "zeroun-filter",
    storageBucket: "zeroun-filter.appspot.com",
    messagingSenderId: "641860555572"
  };


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    TabPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxDatatableModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    TabPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
