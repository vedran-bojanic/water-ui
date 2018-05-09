import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaltAdditionComponent } from './salt-addition.component';

describe('SaltAdditionComponent', () => {
  let component: SaltAdditionComponent;
  let fixture: ComponentFixture<SaltAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaltAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaltAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
