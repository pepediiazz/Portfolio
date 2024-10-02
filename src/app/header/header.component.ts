import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showModal: boolean = false;  // Controla si el modal está abierto o cerrado
  imageSrc: string = '/foto.jpg';  // Ruta de la imagen a mostrar en el modal

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
