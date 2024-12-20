import { Routes } from '@angular/router';
import { NewVersePageComponent } from './components/new-verse-page/new-verse-page.component';
import { SavedVersePageComponent } from './components/saved-verse-page/saved-verse-page.component';

export const routes: Routes = [
    {path: "", component: NewVersePageComponent},
    {path:":book", component: SavedVersePageComponent}
];
