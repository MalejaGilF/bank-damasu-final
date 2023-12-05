import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'bank-damasu-calculate-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './calculate-form.component.html',
  styleUrl: './calculate-form.component.scss',
})
export class CalculateFormComponent {
  calculateform: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.calculateform = this.formBuilder.group({
      amount: ['', [Validators.required]],
      time: ['', [Validators.required]],
      cost: [{ value: '', disabled: true }],
    });
  }

  public onSubmit() {
    const valorFormulario = this.calculateform.value;
    let rentabilidad = 0;
    console.log(valorFormulario.time);

    if (Number(valorFormulario.time) === 180) {
      rentabilidad = valorFormulario.amount * (14.7 / 100) * (180 / 365);
    } else {
      rentabilidad = valorFormulario.amount * (14.6 / 100) * (360 / 365);
    }
    console.log(rentabilidad);
  }
}
