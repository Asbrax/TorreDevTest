import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RootPerson } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class TorreUserService {

  private URL_BACKEND = '';
  private _rootPerson: RootPerson;

  constructor(private http: HttpClient) {}

  getUserTorre(user: string): Observable<any> {
    const urlEndpoint = 'https://bio.torre.co/api/bios/asbraxgo';
    const urlEndpoint2 = 'https://bio.torre.co/api/bios/'+user;
    console.log(urlEndpoint2);
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest ',
    });
    return this.http.get<any>(urlEndpoint,  { headers: httpHeaders });
  
  }   

  getEstados(): Observable<any> {
    const urlEndpointInf = 'http://back2end.com/api/services/state';
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    return this.http.get<any>(urlEndpointInf,  { headers: httpHeaders });
  }
}
