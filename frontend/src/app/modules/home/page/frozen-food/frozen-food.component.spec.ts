import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrozenFoodComponent } from './frozen-food.component';

describe('FrozenFoodComponent', () => {
  let component: FrozenFoodComponent;
  let fixture: ComponentFixture<FrozenFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FrozenFoodComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrozenFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
