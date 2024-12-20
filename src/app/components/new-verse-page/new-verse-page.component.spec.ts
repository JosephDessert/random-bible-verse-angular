import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVersePageComponent } from './new-verse-page.component';

describe('NewVersePageComponent', () => {
  let component: NewVersePageComponent;
  let fixture: ComponentFixture<NewVersePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewVersePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewVersePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
