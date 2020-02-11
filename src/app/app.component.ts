import { Component } from '@angular/core';
import {User} from 'src/app/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tdf';
  topics = ['Angular','React','Vue'];

  userModel = new User('','rob@test.com',5555555555,'','morning',true);
}
