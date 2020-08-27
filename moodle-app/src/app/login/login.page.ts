import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthService } from 'src/services/AuthService';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage {

    credentials: { username: string, password: string } = { username: '', password: '' };
    submitted = false;

    constructor(private auth: AuthService, private router: Router) {}

    async onLogin(form: NgForm) {
        this.submitted = true;

        if (!form.valid) {
            return;
        }

        await this.auth.login(this.credentials.username, this.credentials.password);

        this.router.navigateByUrl('/');

        this.submitted = false;
        this.credentials.username = '';
        this.credentials.password = '';
    }

}
