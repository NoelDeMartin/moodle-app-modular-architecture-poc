import { Injectable } from '@angular/core';

import { User, UsersService as BaseUserService } from 'moodle-app';

const KNOWN_USERS = {
    student: { name: 'Student Juan' },
};

@Injectable({ providedIn: 'root' })
export class UsersService extends BaseUserService {

    public async resolveUser(username: string, password: string): Promise<User | null> {
        const user = await super.resolveUser(username, password);

        if (user) {
            return user;
        }

        // This is a stub, no need to validate the password.
        if (!(username in KNOWN_USERS)) {
            return null;
        }

        return new User(KNOWN_USERS[username].name);
    }

}
