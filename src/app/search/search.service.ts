import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Item } from './item';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class SearchService {
  heroesUrl = 'http://im-markup-language-service-dev.aws.wiley.com:8984/search';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
      //alert('aaaaa');
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Item[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Item[]>(this.heroesUrl, options)
      .pipe(
        catchError(this.handleError<Item[]>('searchHeroes', []))
      );
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/