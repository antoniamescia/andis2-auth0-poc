import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(public auth: AuthService) { }

  // Print user information when authenticated
  ngOnInit(): void {
    this.auth.user$.subscribe((user) => console.log(user));
  }

}
