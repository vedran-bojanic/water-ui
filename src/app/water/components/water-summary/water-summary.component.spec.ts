import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterSummaryComponent } from './water-summary.component';

describe('WaterSummaryComponent', () => {
  let component: WaterSummaryComponent;
  let fixture: ComponentFixture<WaterSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
