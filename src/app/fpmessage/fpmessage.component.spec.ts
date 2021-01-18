import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpmessageComponent } from './fpmessage.component';

describe('FpmessageComponent', () => {
  let component: FpmessageComponent;
  let fixture: ComponentFixture<FpmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FpmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
