import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofeeComponent } from './cofee.component';

describe('CofeeComponent', () => {
  let component: CofeeComponent;
  let fixture: ComponentFixture<CofeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CofeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CofeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
