import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QhCoreComponent } from './qh-core.component';

describe('QhCoreComponent', () => {
  let component: QhCoreComponent;
  let fixture: ComponentFixture<QhCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QhCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QhCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
