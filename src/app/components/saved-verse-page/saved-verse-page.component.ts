import { Component } from '@angular/core';
import { ApiHelperService } from '../../services/api-helper.service';
import { Verse } from '../../models/Verse';
import { firstValueFrom } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SideNavDataService } from '../../services/side-nav-data.service';

@Component({
  selector: 'app-saved-verse-page',
  standalone: true,
  imports: [MatTableModule, NgIf, MatIcon, MatButtonModule],
  templateUrl: './saved-verse-page.component.html',
  styleUrl: './saved-verse-page.component.css'
})
export class SavedVersePageComponent {


  verseList: Verse[]|undefined;
  displayedColumns = ["verse", "text", "options"]
  book: any = "";
  constructor(private apiService: ApiHelperService, private route: ActivatedRoute, private router: Router, public sideNavData: SideNavDataService) {

  }

  ngOnInit(){

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.fetchData();
      }
    });
    this.route.paramMap.subscribe(params => {
      this.book = params.get('book');
    });
    this.fetchData();

  }

  async fetchData() {
    if(this.book == "all"){
      this.verseList = await firstValueFrom(this.apiService.getAllSavedVerses());
    } else {    
      this.verseList = await firstValueFrom(this.apiService.getSavedVerses(this.book));
    }
  }

  async deleteVerse(verse: any){
      await firstValueFrom(this.apiService.deleteVerse(verse.id));
      
      if(this.verseList != undefined){
        this.verseList = this.verseList.filter(x => x !== verse)
        if(this.verseList.length == 0){
          this.sideNavData.removeData(this.book);
        }
      }

  }
}
