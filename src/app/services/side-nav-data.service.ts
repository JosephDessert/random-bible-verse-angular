import { Injectable } from '@angular/core';
import { ApiHelperService } from './api-helper.service';
import { Verse } from '../models/Verse';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavDataService {
  
  savedBooks: Verse[] = []; 


  constructor(private apiService: ApiHelperService,) { }

  async initSidebar() {
    this.savedBooks = await firstValueFrom(this.apiService.getAllSavedBooks());
  }

  addData(newVerse: Verse){
    if(this.savedBooks.filter(x => x.book == newVerse.book).length == 0){
      this.savedBooks.push(newVerse);
    }
  }

  removeData(bookName: String){
      this.savedBooks = this.savedBooks.filter(x => x.book != bookName)
  }
}
