import { MoodleAppModule } from 'moodle-app';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [MoodleAppModule.forRoot()],
  bootstrap: [AppComponent]
})
export class AppModule {}
