import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedVersePageComponent } from './saved-verse-page.component';

describe('SavedVersePageComponent', () => {
  let component: SavedVersePageComponent;
  let fixture: ComponentFixture<SavedVersePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedVersePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedVersePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
