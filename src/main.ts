import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { VistaRevisarTesisComponent } from './app/vista-revisar-tesis/vista-revisar-tesis.component';
import { DetalleComponent } from './app/detalle/detalle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VistaRevisarTesisComponent, DetalleComponent],
  template: `
    <app-vista-revisar-tesis></app-vista-revisar-tesis>
  `,
})
export class App {}

bootstrapApplication(App);
