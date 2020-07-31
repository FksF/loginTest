import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestApi } from "../network/RestApi";
import { UserEntityRequest } from '../entity/entity-request/UserEntity.request';
import { User } from 'src/app/domain/entities/User';
import { UserRepositoryRemote } from 'src/app/domain/usecase/repository/User/UserRepositoryRemote';
import { UserEntity } from '../entity/User.entity';
import { map, timeout } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class CloudUserRepository implements UserRepositoryRemote {
    constructor(
        private restApi: RestApi,
        private httpClient: HttpClient) {
    }

    register(email: string, password: string): Observable<UserEntity> {
        console.log('llegas register?');
        let userEntityRequest: UserEntityRequest = {
            email,
            password,
        };
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.httpClient.post<UserEntity>(this.restApi.PATH_USER_REGISTER, JSON.stringify(userEntityRequest), httpOptions).pipe(
                timeout(15000)
            );
    }

    doLogin(login: string, password: string): Observable<UserEntity> {
        console.log('llegas login?');
        let userEntityRequest: any = {
            login,
            password,
        };
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.httpClient.post<UserEntity>(this.restApi.PATH_USER_LOGIN, JSON.stringify(userEntityRequest), httpOptions).pipe(
                timeout(15000)
            );
    }

}