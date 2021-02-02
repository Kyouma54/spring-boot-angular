import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

type EntityArrayResponseType = HttpResponse<any[]>;
@Injectable({
    providedIn: 'root'
})
export class DatatableService {

    constructor(private http: HttpClient) { }

    query(url: string, params: HttpParams): Observable<EntityArrayResponseType> {
        return this.http.get<any[]>(url, {params: params, observe: 'response'});
    }
}
