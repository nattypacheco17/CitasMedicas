import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';  // Asegúrate de importar Router

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}  // Inyecta Router

  onSubmit() {
    this.authService.register(this.user).subscribe(
      response => {
        console.log('Registro exitoso', response);
        this.router.navigate(['/login']);  // Redirigir al login después del registro exitoso
      },
      error => {
        console.error('Error en el registro', error);
      }
    );
  }
}

