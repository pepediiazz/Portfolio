import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectModalComponent } from "../project-modal/project-modal.component";

@Component({
  selector: 'app-flip-card',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent],
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css'],
})
export class FlipCardComponent {
  @ViewChild('projectModal') projectModal!: ProjectModalComponent;

  projects = [
    {
      title: 'Html   CSS   Angular   AWS  Git',
      details: 'Detalles más completos sobre el Proyecto 1',
      imageUrl: 'Quick.png',
      skills: ['html.png',  'css.png', 'angular.png',  'aws.png' , 'git2.png',], // Asegúrate de que estas rutas son correctas
    }
  ];

  openModal(project: any) {
    this.projectModal.openModal(project);
  }
}
