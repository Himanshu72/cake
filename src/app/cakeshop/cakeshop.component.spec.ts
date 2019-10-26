import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeshopComponent } from './cakeshop.component';

describe('CakeshopComponent', () => {
  let component: CakeshopComponent;
  let fixture: ComponentFixture<CakeshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
