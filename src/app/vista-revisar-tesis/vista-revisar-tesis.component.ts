import { Component } from '@angular/core';
import { TablaAlumnosComponent } from '../tabla-alumnos/tabla-alumnos.component';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-vista-revisar-tesis',
  standalone: true,
  imports: [TablaAlumnosComponent, DetalleComponent],
  templateUrl: './vista-revisar-tesis.component.html',
  styleUrl: './vista-revisar-tesis.component.css',
})
export class VistaRevisarTesisComponent {
  valueResponse(respuesta: boolean) {
    alert(respuesta);
  }
  public flag:boolean=false;
  public handleFlagChange(flagValue: boolean) {
    this.flag=flagValue
    console.log('Nuevo valor de flag:', flagValue);
  }
  public volver(){
    this.handleFlagChange(false);
  }
}
