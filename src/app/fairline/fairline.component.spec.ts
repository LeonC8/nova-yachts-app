import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairlineComponent } from './fairline.component';

describe('FairlineComponent', () => {
  let component: FairlineComponent;
  let fixture: ComponentFixture<FairlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
