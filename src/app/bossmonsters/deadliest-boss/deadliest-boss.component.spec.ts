import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadliestBossComponent } from './deadliest-boss.component';

describe('DeadliestBossComponent', () => {
  let component: DeadliestBossComponent;
  let fixture: ComponentFixture<DeadliestBossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeadliestBossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadliestBossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
