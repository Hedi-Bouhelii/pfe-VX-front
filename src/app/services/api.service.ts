import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { Agence } from '../modals/Agence';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL = 'http://localhost:8080/api/v1';
  constructor(private storageService:StorageService, private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.storageService.getAccessToken()}`
  }),
  params: new HttpParams().append("id",this.storageService.getId())
  };
/*
  httpOption = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.storageService.getAccessToken()
    })
  };
  */
  changePassword( currentpassword:string,newPassword:string): Observable<any> {
    return this.http.post(
      this.API_URL+'/shared/changePassword',
      {
      newPassword,
      currentpassword
      } ,
      this.httpOptions );
  }

  addExpert(name:string, email:string, tel:number, address:string): Observable<any> {
    return this.http.post(
      this.API_URL+'/management/add/expert',
      {
        name,
        email,
        tel,
        address,
        
      } ,
      this.httpOptions );
  }
  uploadFile(file:any){
    return this.http.post<any>(`${this.API_URL}/management/upload`, {file},this.httpOptions );
  }
  
  handleError(e: any) {
    throw new Error('Method not implemented.');
  }
  getAllAgence():Observable<Agence[]> {
    return this.http.get<Agence[]>(this.API_URL+`/admin/agences`, this.httpOptions);
  }


}
