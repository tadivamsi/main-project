import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearComponent } from './bear.component';

describe('BearComponent', () => {
  let component: BearComponent;
  let fixture: ComponentFixture<BearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
