import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageModalPage } from './language-modal.page';

describe('LanguageModalPage', () => {
  let component: LanguageModalPage;
  let fixture: ComponentFixture<LanguageModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
