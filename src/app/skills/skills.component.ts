import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'] // Corrige "styleUrl" a "styleUrls"
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', icon: '/angular.png' },
    { name: 'NodeJS', icon: '/node.png' },
    { name: 'Typescript', icon: '/ts.png',  },
    { name: 'MongoDB', icon: '/mongodb.png' },
    { name: 'SQL', icon: '/sql.png' },

    { name: 'HTML', icon: '/html.png', class: 'small-icon' },
    { name: 'CSS', icon: '/css.png' },

    { name: 'GitHub', icon: '/git.png' }
  ];
}
