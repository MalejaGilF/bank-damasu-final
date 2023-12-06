import { Injectable } from '@angular/core';
import { UserInfo } from '../models/personalInfo.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CdtService {
  constructor(private http: HttpClient) {}

  addUser(user: UserInfo): Observable<UserInfo> {
    return this.http.post<UserInfo>(
      'http://localhost:5000/api/cdt/createUser',
      user
    );
  }
}
