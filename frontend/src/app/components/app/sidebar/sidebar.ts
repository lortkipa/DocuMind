import { Component } from '@angular/core';
import { APP_ICON, APP_NAME } from '../../../../globals';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Label } from "./label/label";
import { Item } from "./item/item";

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, Label, Item],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  icon = APP_ICON
  title = APP_NAME
}
