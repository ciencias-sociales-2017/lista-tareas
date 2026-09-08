import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  nuevaTarea: string = '';

  tareas = [
    { nombre: 'Estudiar Angular', realizada: false },
    { nombre: 'Crear mi primer proyecto', realizada: false }
  ];

  agregarTarea() {

    if (this.nuevaTarea.trim() !== '') {

      this.tareas.push({
        nombre: this.nuevaTarea,
        realizada: false
      });

      this.nuevaTarea = '';
    }
  }

  eliminarTarea(indice: number) {
    this.tareas.splice(indice, 1);
  }

}