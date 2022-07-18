import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  postPerson(data: any) {
    return this.http.post<any>('http://localhost:3000/persons/', data);
  }
  getPerson() {
    return this.http.get<any>('http://localhost:3000/persons/');
  }
  updatePerson(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/persons/' + id, data);
  }
  deletePerson(id: number) {
    return this.http.delete<any>('http://localhost:3000/persons/' + id);
  }
}
