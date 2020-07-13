import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleThemeIconComponent } from './toggle-theme-icon.component';

describe('ToggleThemeIconComponent', () => {
  let component: ToggleThemeIconComponent;
  let fixture: ComponentFixture<ToggleThemeIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleThemeIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleThemeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
