import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CdtService } from '../../../services/cdt.services';
import { Router } from '@angular/router';

@Component({
  selector: 'bank-damasu-personal-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent {
  personalInfoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cdtService: CdtService,
    private router: Router
  ) {
    this.personalInfoForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      department: ['', [Validators.required]],
      city: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.cdtService.addUser(this.personalInfoForm.value).subscribe(() => {
      console.log('Usuario agregado exitosamente');
      // Después de guardar la información, redirige al enlace especificado
      this.router.navigate(['/CDT/personal-info/calulate']);
    });
  }
}

