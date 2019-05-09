import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlgnJournalComponent } from './plgn-journal.component';

describe('PlgnJournalComponent', () => {
  let component: PlgnJournalComponent;
  let fixture: ComponentFixture<PlgnJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlgnJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlgnJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
