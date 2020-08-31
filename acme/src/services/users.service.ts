import { User } from 'moodle-app';
import { UsersService as BaseUsersService } from 'moodlehq';
import { Injectable } from '@angular/core';

const KNOWN_USERS = {
    admin: { name: 'Admin' },
};

@Injectable({ providedIn: 'root' })
export class UsersService extends BaseUsersService {

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
