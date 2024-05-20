import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css',
})
export class StarRatingComponent implements OnInit {
  @Input() rating: number = 0;
  starCount: number = 5;

  stars: number[] = [];

  ngOnInit(): void {
    this.stars = Array(this.starCount)
      .fill(0)
      .map((x, i) => i);
  }
}
