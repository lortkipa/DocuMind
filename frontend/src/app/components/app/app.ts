import { Component } from '@angular/core';
import { Sidebar } from "./sidebar/sidebar";

@Component({
  standalone: true,
  selector: 'app-app',
  imports: [Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
