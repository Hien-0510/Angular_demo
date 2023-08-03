import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCatComponent } from './item-cat.component';

describe('ItemCatComponent', () => {
  let component: ItemCatComponent;
  let fixture: ComponentFixture<ItemCatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemCatComponent]
    });
    fixture = TestBed.createComponent(ItemCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
