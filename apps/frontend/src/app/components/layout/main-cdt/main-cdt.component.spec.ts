import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainCdtComponent } from './main-cdt.component';

describe('MainCdtComponent', () => {
  let component: MainCdtComponent;
  let fixture: ComponentFixture<MainCdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCdtComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainCdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
