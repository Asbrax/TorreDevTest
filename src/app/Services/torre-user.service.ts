import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TorreUserService {

  private URL_BACKEND = '';

  constructor(private http: HttpClient) {}

  getUserTorre(user: string): Observable<any> {
    const urlEndpoint = 'https://bio.torre.co/api/bios/asbraxgo';
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest ',
    });
    return this.http.get<any>(urlEndpoint,  { headers: httpHeaders });
  
  }   
}
