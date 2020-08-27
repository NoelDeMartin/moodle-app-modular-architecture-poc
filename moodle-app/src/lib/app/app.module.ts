import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { MoodleAppComponent } from './app.component';
import { MoodleAppRoutingModule } from './app-routing.module';

import { HomePageModule } from './home/home.module';
import { LoginPageModule } from './login/login.module';

@NgModule({
    declarations: [
        MoodleAppComponent,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        MoodleAppRoutingModule,
        HomePageModule,
        LoginPageModule,
    ],
    exports: [
        BrowserModule,
        IonicModule,
        MoodleAppComponent,
    ],
})
export class MoodleAppModule {

    static forRoot(): ModuleWithProviders<MoodleAppModule> {
        return {
            ngModule: MoodleAppModule,
            providers: [
                StatusBar,
                SplashScreen,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ],
        };
    }

}
