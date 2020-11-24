import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Podcast } from '../models/podcast';
import {Sites} from '../models/site'
import {Form} from '../models/form'
import { Procure } from '../models/procure';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url_podcast = 'http://ec2-13-59-40-217.us-east-2.compute.amazonaws.com:5000/Podcast'
  url_sites = 'http://ec2-13-59-40-217.us-east-2.compute.amazonaws.com:5000/Sites'
  url_form = 'http://ec2-13-59-40-217.us-east-2.compute.amazonaws.com:5000/Sugestoes'
  url_procure = 'http://ec2-13-59-40-217.us-east-2.compute.amazonaws.com:5000/Localizacao'

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  PostPodcast(pod: Podcast): Observable<Podcast> {
    return this.httpClient.post<Podcast>(this.url_podcast, JSON.stringify(pod), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  PostSites(sites: Sites): Observable<Sites> {
    return this.httpClient.post<Sites>(this.url_sites, JSON.stringify(sites), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  

}
PostProcure(procure: Procure): Observable<Procure> {
  return this.httpClient.post<Procure>(this.url_procure, JSON.stringify(procure), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )


}
PostForm(form: Form): Observable<Form> {
  return this.httpClient.post<Form>(this.url_form, JSON.stringify(form), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    ) }



   // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}

  
