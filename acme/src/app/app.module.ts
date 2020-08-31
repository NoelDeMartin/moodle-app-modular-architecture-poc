import { NgModule } from '@angular/core';

import { MoodleHQModule } from 'moodlehq';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [MoodleHQModule.forRoot()],
  bootstrap: [AppComponent]
})
export class AppModule {}
