import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenisComponent } from './benis.component';

describe('BenisComponent', () => {
  let component: BenisComponent;
  let fixture: ComponentFixture<BenisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
