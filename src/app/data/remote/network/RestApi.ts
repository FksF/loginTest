import { Injectable } from '@angular/core';
@Injectable()
export class RestApi {

    public readonly BASE_URL = "https://api.backendless.com/9D925FDD-4B4C-82E7-FF39-51C508957700/CCA934E7-54D5-498C-A787-CB0569E30C74";

    public PATH_USER_REGISTER = this.BASE_URL + '/users/register';
    public PATH_USER_LOGIN = this.BASE_URL + '/users/login';
}
