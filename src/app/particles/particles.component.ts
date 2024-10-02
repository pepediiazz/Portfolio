import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ParticlesConfig from '../../assets/particles.json';

declare var particlesJS: any;

@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="particles-js" class="w-100 header-particles"></div>
  `,
  styles: [
    `
      #particles-js {
        --tw-bg-opacity: 1;
        background-color: rgb(10 10 10 / var(--tw-bg-opacity));
        background-image: radial-gradient(ellipse 80% 80% at 50% -20%, #7877c64d, #fff0);
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: -1;
      }
    `
  ]
})
export class ParticlesComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {
    this.initParticles();
  }



  private initParticles(): void {
    console.log('Initializing particlesJS', particlesJS);
    if (particlesJS) {
      particlesJS('particles-js', ParticlesConfig, function() {
        console.log('callback - particles.js config loaded');
      });
    } else {
      console.error('particlesJS is not defined');
    }
  }
}
