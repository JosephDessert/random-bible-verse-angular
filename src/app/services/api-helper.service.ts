import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Verse } from '../models/Verse';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {

  baseURL: string = "http://localhost:5148/BibleVerses/";

  constructor(private http: HttpClient) { }

  getNewBibleVerse(): Observable<any> {
    return this.http.get<any>(this.baseURL + "new");

  }
  
  /**
   * 
   * @returns a list of Verse objects to be used to display options in the side nav. Filtered so there is only 1 verse per book. 
   */
  getAllSavedBooks(): Observable<any> {
    return this.http.get<any>(this.baseURL + "books");
  }
  
/**
 * 
 * @param book 
 * @returns a List of Verse objects that have have a matching book proptery as the parameter.
 */
  getSavedVerses(book: String): Observable<any> {
    return this.http.get<any>(this.baseURL + book);
  }

  getAllSavedVerses(): Observable<any> {
    return this.http.get<any>(this.baseURL);
  }

  saveNewBibleVerse(entity: Verse): Observable<any>  {
    return this.http.post<any>(this.baseURL, entity);

  }

  deleteVerse(id: number): Observable<any> {
    return this.http.delete<any>(this.baseURL + id);
  }

}
