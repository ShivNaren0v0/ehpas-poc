import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotimplimentedComponent } from './notimplimented.component';

describe('NotimplimentedComponent', () => {
  let component: NotimplimentedComponent;
  let fixture: ComponentFixture<NotimplimentedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotimplimentedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotimplimentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
