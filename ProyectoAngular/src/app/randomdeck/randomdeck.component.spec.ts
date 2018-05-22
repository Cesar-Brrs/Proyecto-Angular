import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomdeckComponent } from './randomdeck.component';

describe('RandomdeckComponent', () => {
  let component: RandomdeckComponent;
  let fixture: ComponentFixture<RandomdeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomdeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomdeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
