import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users: [] = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/users').subscribe(res => {
      console.log('res', res)
    })
  }

  gettoken(){
    return !!localStorage.getItem("SessionUser");
  }
}
