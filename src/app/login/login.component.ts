import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router,private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:3000/login', this.user).subscribe({
      next: (response: any) => {
        console.log('Login exitoso', response);
        localStorage.setItem('token', response.token); // Guarda el token
        this.router.navigate(['/protected']); // Redirige a la ruta protegida
      },
      error: (error) => {
        console.error('Error en el login', error);
        alert('Usuario o contraseña incorrectos');
      }
    });
  }
}
