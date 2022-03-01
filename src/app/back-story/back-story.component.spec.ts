import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackStoryComponent } from './back-story.component';

describe('BackStoryComponent', () => {
  let component: BackStoryComponent;
  let fixture: ComponentFixture<BackStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
