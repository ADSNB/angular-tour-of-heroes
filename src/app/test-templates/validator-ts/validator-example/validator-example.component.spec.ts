import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorExampleComponent } from './validator-example.component';

describe('ValidatorExampleComponent', () => {
  let component: ValidatorExampleComponent;
  let fixture: ComponentFixture<ValidatorExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatorExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
