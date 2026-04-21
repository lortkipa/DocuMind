import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-label',
  imports: [],
  templateUrl: './label.html',
  styleUrl: './label.scss',
})
export class Label {
  @Input() title: string = ''
}
