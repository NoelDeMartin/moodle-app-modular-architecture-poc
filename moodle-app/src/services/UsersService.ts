import { Injectable } from '@angular/core';

import User from '../models/User';

// const KNOWN_USERS: KeyValueMap<{ name: string }> = {
const KNOWN_USERS = {
    johndoe: { name: 'John Doe' },
};

@Injectable({ providedIn: 'root' })
export class UsersService {

    public async resolveUser(username: string, password: string): Promise<User | null> {
        // This is a stub, no need to validate the password.
        if (!(username in KNOWN_USERS)) {
            return null;
        }

        return new User(KNOWN_USERS[username].name);
    }

}
