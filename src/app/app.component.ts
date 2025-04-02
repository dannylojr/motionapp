import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Motion } from '@capacitor/motion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  @ViewChild('splineContainer', { static: true }) splineContainer!: ElementRef;

  ngOnInit() {
    this.startTracking();
  }

  async startTracking() {
    // Agregar listener para la orientación
    Motion.addListener('orientation', (data: any) => {
      this.rotateSplineObject(data);
    });
  }

  rotateSplineObject(data: any) {
    const { alpha, beta, gamma } = data; // Captura los valores de rotación

    // Aplica la rotación al objeto Spline
    this.splineContainer.nativeElement.style.transform = `rotateX(${beta}deg) rotateY(${alpha}deg) rotateZ(${gamma}deg)`;
  }
}