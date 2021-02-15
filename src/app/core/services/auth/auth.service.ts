import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { login as authLogin } from 'src/mock/user.data';
import { API_USER_KEY } from '../../core.constants';
import { LoadingService } from '../loading.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _loadingService: LoadingService,
    private _sessionStorage: SessionStorageService
  ) {}

  login = ({ email, password }) => {
    this._loadingService.show();
    return new Promise(async (resolve, reject) => {
      const resp = (await authLogin(email, password)) as any;
      setTimeout(() => {
        this._loadingService.hide();
        if (resp.logged) resolve(resp);
        else reject(resp);
      }, 2000);
    });
  };

  saveUser(user: any) {
    this._sessionStorage.store(API_USER_KEY, user);
  }

  getUser() {
    return this._sessionStorage.retrieve(API_USER_KEY);
  }

  isLogged() {
    return !!this.getUser();
  }

  logout() {
    this._sessionStorage.clear(API_USER_KEY);
  }
}
