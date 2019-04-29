import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnimatedComponent } from './text-animated.component';

describe('TextAnimatedComponent', () => {
  let component: TextAnimatedComponent;
  let fixture: ComponentFixture<TextAnimatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAnimatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
