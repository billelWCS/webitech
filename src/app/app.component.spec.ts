import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should calculate sum correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.a = 5;
    app.b = 10;

    app.calculate();

    expect(app.result).toEqual(15);
    
  });

  it('should calculate sum correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.a = 3;
    app.b = 4;

    app.multplication();

    expect(app.result).toEqual(12);
    
  });

});
