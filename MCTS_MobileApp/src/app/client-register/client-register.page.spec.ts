import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientRegisterPage } from './client-register.page';

describe('ClientRegisterPage', () => {
  let component: ClientRegisterPage;
  let fixture: ComponentFixture<ClientRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
