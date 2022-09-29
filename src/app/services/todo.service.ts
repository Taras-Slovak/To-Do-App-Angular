import { ToDo } from './../models/to-do.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SingUp } from '../models/sign-up.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  backEnd = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  public signUp(formData: SingUp): Observable<SingUp> {
    return this.http.post<SingUp>(`${this.backEnd}/users`, formData);
  }

  public getToDo(): Observable<ToDo> {
    return this.http.get<ToDo>(`${this.backEnd}/todos`);
  }

  public addToDo(formData: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(`${this.backEnd}/todos`, formData);
  }

  public updateToDo(formData: ToDo, id: number): Observable<ToDo> {
    return this.http.put<ToDo>(`${this.backEnd}/todos${id}`, formData);
  }

  public removeToDo(id: number): Observable<any> {
    return this.http.delete<ToDo>(`${this.backEnd}/todos${id}`);
  }
}
