import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalseverComponent } from './internalsever.component';

describe('InternalseverComponent', () => {
  let component: InternalseverComponent;
  let fixture: ComponentFixture<InternalseverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalseverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalseverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
