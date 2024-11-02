import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  constructor(private http:HttpClient ) { }
  postData(medecin:any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(medecin);
    console.log(body)
    return this.http.post('http://localhost:4500/addMedecin' , body,{'headers':headers})
  }
  getByNom(nom : string): Observable<any> {
    return this.http.get<any>(`http://localhost:4500/Medecin/${nom}`)
  }
}
