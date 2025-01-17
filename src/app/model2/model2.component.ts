import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-model2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './model2.component.html',
  styleUrls: ['./model2.component.css'],
})
export class Model2Component {
  @Input() project: any;
  isVisible: boolean = false;

  openModal2(project: any) {
    this.project = project;
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }
}
