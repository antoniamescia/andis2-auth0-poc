import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

interface Feature {
  iconClass: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  constructor(public auth: AuthService, private router: Router) {}

  features: Feature[] = [
    {
      iconClass: 'lock',
      title: 'Autenticación Segura',
      description: 'Implementa medidas de seguridad robustas para proteger los datos de los usuarios y prevenir accesos no autorizados.'
    },
    {
      iconClass: 'directions_run',
      title: 'Integración Rápida',
      description: 'Integra fácilmente Auth0 en tu aplicación con cambios mínimos en el código.'
    },
    {
      iconClass: 'security',
      title: 'Listo para Cumplimiento',
      description: 'Cumple con los estándares y regulaciones de la industria con las características de Auth0 orientadas al cumplimiento.'
    }
  ];

  // Redirect to dashboard if user is authenticated
  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.router.navigate(['/dashboard']);
      }
    });

    this.auth.handleRedirectCallback().subscribe({
      next: (result) => {
        console.log('Auth result:', result);
      },
      error: (error) => {
        console.error('Error during login:', error);
      },
    });
  }
}
