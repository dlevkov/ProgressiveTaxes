import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressiveTaxComponent } from './progressive-tax.component';

describe('ProgressiveTaxComponent', () => {
  let component: ProgressiveTaxComponent;
  let fixture: ComponentFixture<ProgressiveTaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressiveTaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressiveTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
