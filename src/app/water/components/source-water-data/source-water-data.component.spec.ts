import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceWaterDataComponent } from './source-water-data.component';

describe('SourceWaterDataComponent', () => {
  let component: SourceWaterDataComponent;
  let fixture: ComponentFixture<SourceWaterDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceWaterDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceWaterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
