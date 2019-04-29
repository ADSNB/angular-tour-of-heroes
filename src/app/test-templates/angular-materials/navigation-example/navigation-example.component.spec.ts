
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationExampleComponent } from './navigation-example.component';

describe('NavigationExampleComponent', () => {
  let component: NavigationExampleComponent;
  let fixture: ComponentFixture<NavigationExampleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
