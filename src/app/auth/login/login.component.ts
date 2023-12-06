import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  registrationFormVisible = false;

  constructor(private fb: FormBuilder,private loginService:LoginService, private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(data:login) {
    if (this.loginForm.valid) {
      
      
  
      // Call your login service to send the login request
      this.loginService.userLogin(data).subscribe(
        (response:any) => {
          // Handle a successful login response here (e.g., store tokens, navigate to the dashboard)
          console.log('Login successful:', response);
          localStorage.setItem('user_id', response.Data.user_id);
          localStorage.setItem('token', response.Data.Token);
          console.log('token', response.Data.Token);
          this.router.navigate(['/admin/category'])

        },
        (error) => {
          // Handle login error (e.g., display an error message)
          console.error('Login error:', error);
        }
      );
    }
  }
  

  isFieldInvalid(field: string) {
    return this.loginForm.get(field)?.touched && this.loginForm.get(field)?.invalid;
  }

  showRegistrationForm() {
    this.registrationFormVisible = true;
  }
}