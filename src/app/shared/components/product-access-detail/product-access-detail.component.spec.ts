import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAccessDetailComponent } from './product-access-detail.component';

describe('ProductAccessDetailComponent', () => {
  let component: ProductAccessDetailComponent;
  let fixture: ComponentFixture<ProductAccessDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAccessDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAccessDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
