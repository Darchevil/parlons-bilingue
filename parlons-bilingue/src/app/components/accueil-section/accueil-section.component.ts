import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonLargeComponent } from '../shared/button-large/button-large.component';

@Component({
  selector: 'app-accueil-section',
  standalone: true,
  imports: [ButtonLargeComponent],
  templateUrl: './accueil-section.component.html',
  styleUrl: './accueil-section.component.scss',
})
export class AccueilSectionComponent {
  constructor() {}

  videoSource: string = '../../../assets/videos/video-promesse2.mp4';
  @ViewChild('videoElement', { static: true })
  videoElement: ElementRef<HTMLVideoElement> | undefined;

  textSavoirPlus: string = 'En savoir plus';

  onVideoEnded(event: Event): void {
    if (this.videoElement !== undefined) {
      const video = this.videoElement.nativeElement;
      video.currentTime = 3;
      video.play();
    }
  }
}
