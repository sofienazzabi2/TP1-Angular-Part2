import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstchildComponent } from './firstchild.component';

describe('FirstchildComponent', () => {
  let component: FirstchildComponent;
  let fixture: ComponentFixture<FirstchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstchildComponent]
    });
    fixture = TestBed.createComponent(FirstchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
