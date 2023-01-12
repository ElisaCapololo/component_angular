import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskNumberComponent } from './task-number.component';

describe('TaskNumberComponent', () => {
  let component: TaskNumberComponent;
  let fixture: ComponentFixture<TaskNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
