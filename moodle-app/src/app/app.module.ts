import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoodleAppModule } from '../lib';

@NgModule({
    declarations: [AppComponent],
    imports: [MoodleAppModule.forRoot()],
    bootstrap: [AppComponent]
})
export class AppModule {}
