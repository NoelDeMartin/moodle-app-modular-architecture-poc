import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MoodleAppModule } from '../lib/app.module';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    MoodleAppModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
