import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services';
import { MoodleLoginPageFormComponent } from './components';

@Component({
    selector: 'moodle-login',
    templateUrl: './login.page.html',
})
export class MoodleLoginPage {

    @ViewChild('form') form: MoodleLoginPageFormComponent;

    constructor(private auth: AuthService, private router: Router) {}

    async login({ username, password }: any) {
        await this.auth.login(username, password);

        this.router.navigateByUrl('/');
        this.form.reset();
    }

}
