import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumarineComponent } from './numarine.component';

describe('NumarineComponent', () => {
  let component: NumarineComponent;
  let fixture: ComponentFixture<NumarineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumarineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumarineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
