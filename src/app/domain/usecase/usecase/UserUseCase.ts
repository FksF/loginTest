import { Injectable, Inject } from "@angular/core";
import { User } from "src/app/domain/entities/User";
import { Observable, Observer } from "rxjs";
import { UserEntityResponse } from "src/app/data/remote/entity/entity-response/UserEntity.response";
import {
    UserRepositoryRemote,
    USER_REPOSITORY_REMOTE,
} from "../repository/User/UserRepositoryRemote";
import { mergeMap, map } from "rxjs/operators";
import { UserEntity } from "src/app/data/remote/entity/User.entity";

@Injectable()
export class UserUseCase {
    private userRepositoryRemote: UserRepositoryRemote;
    constructor(
        @Inject(USER_REPOSITORY_REMOTE) userRepositoryRemote: UserRepositoryRemote
    ) {
        this.userRepositoryRemote = userRepositoryRemote;
    }

    register(email: string, password: string): Observable<any> {
        return this.userRepositoryRemote.register(email, password).pipe(
            map((userEntity: UserEntity) => {
                if(userEntity) {
                    return userEntity;
                }
            })
        )
    }
    doLogin(email: string, password: string): Observable<any> {
        return this.userRepositoryRemote.doLogin(email, password).pipe(
            map((userEntity: UserEntity) => {
                if(userEntity) {
                    return userEntity;
                }
            })
        )
    }
}
