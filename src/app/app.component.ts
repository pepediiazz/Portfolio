import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParticlesComponent } from './particles/particles.component';
import { HeaderComponent } from './header/header.component';
import { MainInicioComponent } from './main-inicio/main-inicio.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienciaComponent } from "./experiencia/experiencia.component";
import { FlipCardComponent } from "./flip-card/flip-card.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactoComponent } from "./contacto/contacto.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParticlesComponent, HeaderComponent, MainInicioComponent, SobremiComponent, SkillsComponent, ExperienciaComponent, FlipCardComponent, CommonModule, FormsModule, ContactoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv';
  projects = [
    {
      title: 'Proyecto 1',
      summary: 'Resumen breve del Proyecto 1',
      details: 'Detalles más completos sobre el Proyecto 1',
      imageUrl: 'assets/proyecto1.jpg',
    },
    // Agrega más proyectos según sea necesario
  ];
}
