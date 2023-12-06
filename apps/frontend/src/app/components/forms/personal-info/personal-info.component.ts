import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CdtService } from '../../../services/cdt.services';

@Component({
  selector: 'bank-damasu-personal-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss',
})
export class PersonalInfoComponent {
  personalInfoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cdtService: CdtService
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

  public onSubmit() {
    this.cdtService.addUser(this.personalInfoForm.value).subscribe();
    console.log(this.personalInfoForm.value);
  }
}
