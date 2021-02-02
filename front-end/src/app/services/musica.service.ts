import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMusica } from '../domain/musica-model';

type EntityResponseType = HttpResponse<IMusica>;
type EntityArrayResponseType = HttpResponse<IMusica[]>;

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  //public resourceUrl = `${environment.apiUrl}/springboot/api/musica`;

  public resourceUrl = "/springboot/api/musica";

  constructor(private httpClient: HttpClient) { }
  
  create(object: IMusica): Observable<EntityResponseType> {
    return this.httpClient.post<IMusica>(this.resourceUrl, object, { observe: 'response' });
  }

  update(object: IMusica): Observable<EntityResponseType> {
      return this.httpClient.put<IMusica>(this.resourceUrl, object, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
      return this.httpClient.get<IMusica>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
      const options = this.createRequestOption(req);
      return this.httpClient.get<IMusica[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  count(req?: any): Observable<HttpResponse<number>> {
      const options = this.createRequestOption(req);
      return this.httpClient.get<number>(this.resourceUrl + '/count', { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
      return this.httpClient.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
  
  createRequestOption = (req?: any): HttpParams => {
    let options: HttpParams = new HttpParams();
    if (req) {
        Object.keys(req).forEach(key => {
            // if (key !== 'sort') {
                options = options.set(key, req[key]);
            // }
        });
        // if (req.sort) {
        //     req.sort.forEach(val => {
        //         options = options.append('sort', val);
        //     });
        // }
    }
    return options;
  };
  
}
