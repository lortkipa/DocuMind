import { Component } from '@angular/core';
import { APP_ICON, APP_NAME } from '../../../../globals';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  icon = APP_ICON
  title = APP_NAME
}
