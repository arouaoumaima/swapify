import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from './app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient : HttpClient) { }
  adduser(user: any) {
    return this.httpClient.post<any>(`${AppConfig.userUrl}/signup`, user);
  }
  
  loginUser(user: any) {
    return this.httpClient.post<any>(`${AppConfig.authUrl}/signin`, user);
  }
}
