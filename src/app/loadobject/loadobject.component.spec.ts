import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadobjectComponent } from './loadobject.component';

describe('LoadobjectComponent', () => {
  let component: LoadobjectComponent;
  let fixture: ComponentFixture<LoadobjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadobjectComponent]
    });
    fixture = TestBed.createComponent(LoadobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
