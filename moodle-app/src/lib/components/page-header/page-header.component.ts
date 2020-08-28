import { Component, Input } from '@angular/core';

@Component({
    selector: 'moodle-page-header',
    templateUrl: 'page-header.component.html'
})
export class MoodlePageHeaderComponent {

    @Input() title: string;

}
