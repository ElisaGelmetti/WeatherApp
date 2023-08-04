import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: any;
  constructor(private AuthService: AuthService) {}

  isAuthenticated(): boolean {
    return this.AuthService.isAuthenticated();
  }
}
