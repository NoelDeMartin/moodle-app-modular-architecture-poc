import { Injectable } from '@angular/core';

import { UsersService } from './UsersService';
import User from 'src/models/User';

const USER_KEY = 'auth-user';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private user?: User;

    public constructor(private users: UsersService) {
        const userJson = localStorage.getItem(USER_KEY);

        if (userJson) {
            this.user = new User(JSON.parse(userJson).name);
        }
    }

    public isLoggedIn(): boolean {
        return !!this.user;
    }

    public async login(username: string, password: string): Promise<void> {
        if (this.isLoggedIn()) {
            throw new Error('Already logged in!');
        }

        const user = await this.users.resolveUser(username, password);
        if (!user) {
            throw new Error('Invalid credentials');
        }

        this.user = user;
        localStorage.setItem(USER_KEY, JSON.stringify({ name: user.name }));
    }

    public async logout(): Promise<void> {
        delete this.user;
        localStorage.removeItem(USER_KEY);
    }

}
