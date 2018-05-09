import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiluteWaterComponent } from './dilute-water.component';

describe('DiluteWaterComponent', () => {
  let component: DiluteWaterComponent;
  let fixture: ComponentFixture<DiluteWaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiluteWaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiluteWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
