import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherErrorComponent } from './other-error.component';

describe('HomeComponent', () => {
  let component: OtherErrorComponent;
  let fixture: ComponentFixture<OtherErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
