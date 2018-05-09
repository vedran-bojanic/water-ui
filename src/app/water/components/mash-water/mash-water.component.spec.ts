import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MashWaterComponent } from './mash-water.component';

describe('MashWaterComponent', () => {
  let component: MashWaterComponent;
  let fixture: ComponentFixture<MashWaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MashWaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MashWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
