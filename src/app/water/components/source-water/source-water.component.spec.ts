import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceWaterComponent } from './source-water.component';

describe('SourceWaterComponent', () => {
  let component: SourceWaterComponent;
  let fixture: ComponentFixture<SourceWaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceWaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
