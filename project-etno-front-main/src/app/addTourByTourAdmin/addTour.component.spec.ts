import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTourByTourAdminComponent } from './addTour.component';

describe('AddTourByTourAdminComponent', () => {
    let component: AddTourByTourAdminComponent;
    let fixture: ComponentFixture<AddTourByTourAdminComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ AddTourByTourAdminComponent ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(AddTourByTourAdminComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });