import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterClassListComponent } from './character-class-list.component';

describe('CharacterClassListComponent', () => {
  let component: CharacterClassListComponent;
  let fixture: ComponentFixture<CharacterClassListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterClassListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
