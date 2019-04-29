import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldMasterPageComponent } from './old-master-page.component';

describe('OldMasterPageComponent', () => {
  let component: OldMasterPageComponent;
  let fixture: ComponentFixture<OldMasterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldMasterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldMasterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
