import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Task} from '../Task';
import { Observable } from 'rxjs';
import { BackendBaseService } from './BackendBaseServeice';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService extends BackendBaseService {

  private apiUrl = "/tasks";

  constructor(private http:HttpClient) { 
    super();
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseURL+this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url=`${this.baseURL+this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task){
    const url=`${this.baseURL+this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    const url=this.baseURL+this.apiUrl;
    
    return this.http.post<Task>(url,task,httpOptions);
  }
}
