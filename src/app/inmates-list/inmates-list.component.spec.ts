import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmatesListComponent } from './inmates-list.component';

describe('InmatesListComponent', () => {
  let component: InmatesListComponent;
  let fixture: ComponentFixture<InmatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InmatesListComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InmatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
