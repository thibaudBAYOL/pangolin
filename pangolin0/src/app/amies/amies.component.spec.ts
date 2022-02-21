import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmiesComponent } from './amies.component';

describe('AmiesComponent', () => {
  let component: AmiesComponent;
  let fixture: ComponentFixture<AmiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
