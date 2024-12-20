import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import { MatListModule } from '@angular/material/list';
import { NgFor } from '@angular/common';
import {RouterModule} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { SideNavDataService } from './services/side-nav-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatSidenavModule, MatButtonModule,  MatToolbarModule, MatIconModule, MatListModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'random-bible-verse-angular';
  sideNavStatus: boolean = false;

  constructor(private router: Router, public sideNavData: SideNavDataService){

  }

  ngOnInit(){
    this.sideNavData.initSidebar();
  }

  sideNavChange() {
    this.sideNavStatus = !this.sideNavStatus;
  }

  goHome(){
    this.router.navigate(['/']);
  }
}
