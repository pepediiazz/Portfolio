import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectModalComponent } from "../project-modal/project-modal.component";
import { Model2Component } from '../model2/model2.component';
@Component({
  selector: 'app-flip-card',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent, Model2Component],
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css'],
})
export class FlipCardComponent {
  @ViewChild('projectModal') projectModal!: ProjectModalComponent;
  @ViewChild('model2') model2!: Model2Component;

  projects = [
    {
      title: 'Html CSS Angular AWS Git',
      details: 'Detalles más completos sobre el Proyecto 1',
      imageUrl: 'Quick.png',
      skills: ['html.png', 'css.png', 'angular.png', 'aws.png', 'git2.png'],
    },
  ];

  project2 = [
    {
      title: 'Html Docker Angular NodeJS Whisper',
      details: 'Detalles más completos sobre el Proyecto 2',
      imageUrl: 'youlyrics.PNG',
      skills: ['html.png', 'docker.png', 'angular.png', 'nodejs.png', 'openai.png'],
    },
  ];

  openModal(project: any) {
    this.projectModal.openModal(project);
  }

  openModal2(project: any) {
    this.model2.openModal2(project);
  }
}
