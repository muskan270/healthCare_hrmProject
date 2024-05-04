// login.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  countArray = Array.from({ length: 50 }, (_, i) => i); // Generating array from 0 to 49
}
