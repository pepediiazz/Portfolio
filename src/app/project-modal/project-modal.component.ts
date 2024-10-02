import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  imports: [CommonModule],
  standalone: true,
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {
  @Input() project: any;
  isVisible: boolean = false;

  openModal(project: any) {
    this.project = project;
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }
}
