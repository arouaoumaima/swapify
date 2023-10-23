import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyoffersPage } from './myoffers.page';

describe('MyoffersPage', () => {
  let component: MyoffersPage;
  let fixture: ComponentFixture<MyoffersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyoffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
