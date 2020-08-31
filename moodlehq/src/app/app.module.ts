import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoodleHQModule } from '../lib';

@NgModule({
    declarations: [AppComponent],
    imports: [MoodleHQModule.forRoot()],
    bootstrap: [AppComponent]
})
export class AppModule {}
