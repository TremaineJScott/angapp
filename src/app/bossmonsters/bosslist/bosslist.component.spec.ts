import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BosslistComponent } from './bosslist.component';

describe('BosslistComponent', () => {
  let component: BosslistComponent;
  let fixture: ComponentFixture<BosslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BosslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BosslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
