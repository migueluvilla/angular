import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployComponent } from './list-employ.component';

describe('ListEmployComponent', () => {
  let component: ListEmployComponent;
  let fixture: ComponentFixture<ListEmployComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmployComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
