import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/operator/map';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
@Injectable()
export class ApiService {
  response: any;
  constructor(private http: HttpClient) {}
  createapi(newform) {
    console.log('api create call' + newform.name);
    return this.http.post<User>('https://reqres.in/api/users', {
      name: newform.name,
      job: newform.job,
    });
  }
  userArray: any = {};
  retriveApi(id) {
    console.log('api side' + id);
    return this.http.get<User>('https://reqres.in/api/users/' + id);
  }
}
