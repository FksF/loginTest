import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { USER_REPOSITORY_REMOTE } from './domain/usecase/repository/User/UserRepositoryRemote';
import { CloudUserRepository } from './data/remote/cloud/CloudUserRepository';
import { UserUseCase } from './domain/usecase/usecase/UserUseCase';
import { RestApi } from './data/remote/network/RestApi';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: USER_REPOSITORY_REMOTE, useClass: CloudUserRepository },
    UserUseCase,
    RestApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
