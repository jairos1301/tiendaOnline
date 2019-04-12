import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideMarcasComponent } from './slide-marcas.component';

describe('SlideMarcasComponent', () => {
  let component: SlideMarcasComponent;
  let fixture: ComponentFixture<SlideMarcasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideMarcasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
