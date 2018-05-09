import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcidAdditionComponent } from './acid-addition.component';

describe('AcidAdditionComponent', () => {
  let component: AcidAdditionComponent;
  let fixture: ComponentFixture<AcidAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcidAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcidAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
