import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-item',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './item.html',
  styleUrl: './item.scss',
})
export class Item {
  @Input() icon: string = ''
  @Input() title: string = ''
  @Input() badge: string = ''
  @Input() link: string = ''
  @Input() isPro: boolean = false
}
