import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadorListComponent } from './cuidador-list.component';

describe('CuidadorListComponent', () => {
  let component: CuidadorListComponent;
  let fixture: ComponentFixture<CuidadorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuidadorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
