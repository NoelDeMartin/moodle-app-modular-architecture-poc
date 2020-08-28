import { Component, Output, EventEmitter, ElementRef, AfterContentInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Credentials {
    username: string;
    password: string;
}

@Component({
    selector: 'moodle-login-form',
    templateUrl: 'form.component.html',
})
export class MoodleLoginPageFormComponent implements AfterContentInit {

    credentials: Credentials = { username: '', password: '' };
    submitted: boolean = false;
    showDefaultSubmitButton: boolean = true;

    @Output() credentialsSubmitted: EventEmitter<Credentials> = new EventEmitter();

    constructor(public element: ElementRef) {}

    ngAfterContentInit() {
        this.showDefaultSubmitButton = !this.element.nativeElement.querySelector('[submit-button]');
    }

    submit(form: NgForm) {
        this.submitted = true;

        if (!form.valid) {
            return;
        }

        this.credentialsSubmitted.emit(this.credentials);
    }

    reset() {
        this.submitted = false;
        this.credentials.username = '';
        this.credentials.password = '';
    }

}
