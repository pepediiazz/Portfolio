import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactoDB } from '../servicios/contactoDB'; // Ajusta la ruta según tu estructura
import { Contacto } from '../modelo/contacto'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  constructor(private contactoDB: ContactoDB) {}

  onSubmit() {
    const nuevoContacto: Contacto = {
      nombre: this.nombre,
      email: this.email,
      mensaje: this.mensaje
    };

    this.contactoDB.agregarCliente(nuevoContacto);
    console.log('Formulario enviado', nuevoContacto);

    // Limpiar los campos después de enviar
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
  }
}
