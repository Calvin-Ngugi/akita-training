import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Todo } from "./todo-model";

Injectable({
    providedIn: 'root'
})

export class ApiService{
    private readonly baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) { }
    
    addTodo(title: string, description: string): Observable<Todo>{
        return this.http.post<Todo>(this.baseUrl, { title, description });
    }
}