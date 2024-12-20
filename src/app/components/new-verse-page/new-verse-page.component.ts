import { Component } from '@angular/core';
import { ApiHelperService } from '../../services/api-helper.service';
import { firstValueFrom } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { Verse} from '../../models/Verse'
import { NgIf } from '@angular/common';
import { SideNavDataService } from '../../services/side-nav-data.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-new-verse-page',
  standalone: true,
  imports: [MatIconModule, NgIf, MatButtonModule],
  templateUrl: './new-verse-page.component.html',
  styleUrl: './new-verse-page.component.css',
})
export class NewVersePageComponent {

  verse: Verse|undefined;
  verseSaved: boolean = false;

  constructor(private apiService: ApiHelperService, public sideNavData: SideNavDataService) {

  }

  ngOnInit(){ 

  }

  async getVerse() {
    let data = await firstValueFrom(this.apiService.getNewBibleVerse());
    this.verse = {
      text: data.verses[0].text,
      book: data.verses[0].book_name,
      chapter: data.verses[0].chapter,
      verseNumber: data.verses[0].verse,
      id: 0
    }
    this.verseSaved = false;
  }

  async saveVerse() {
    if(this.verse != undefined){
      await firstValueFrom(this.apiService.saveNewBibleVerse(this.verse));
      this.sideNavData.addData(this.verse)
      this.verseSaved = true; 
    }
  }

}
