import { Observable } from "rxjs";
import { InjectionToken } from '@angular/core';
import { User } from 'src/app/domain/entities/User';
import { UserEntity } from 'src/app/data/remote/entity/User.entity';

export interface UserRepositoryRemote {
    register(email: string, password: string): Observable<UserEntity>;
    doLogin(email: string, password: string): Observable<UserEntity>;
}

export const USER_REPOSITORY_REMOTE = new InjectionToken<UserRepositoryRemote>('UserRepositoryRemote');