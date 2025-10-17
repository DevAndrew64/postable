import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Post } from '../../../../core/models/post.model';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Input() post: Post | null = null;
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formCancel = new EventEmitter<void>();

  postForm!: FormGroup;
  isEditMode: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.isEditMode = !!this.post;
    this.initForm();
  }

  private initForm(): void {
    this.postForm = this.fb.group({
      userId: [
        this.post?.userId || '',
        [Validators.required, Validators.min(1)]
      ],
      title: [
        this.post?.title || '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(100)]
      ],
      body: [
        this.post?.body || '',
        [Validators.required, Validators.minLength(10), Validators.maxLength(500)]
      ]
    });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const formValue = this.postForm.value;
      this.formSubmit.emit({
        ...formValue,
        userId: Number(formValue.userId)
      });
    } else {
      this.markFormGroupTouched(this.postForm);
    }
  }

  onCancel(): void {
    this.formCancel.emit();
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }

  getErrorMessage(fieldName: string): string {
    const control = this.postForm.get(fieldName);

    if (control?.hasError('required')) {
      return 'Este campo es requerido';
    }

    if (control?.hasError('minlength')) {
      const minLength = control.errors?.['minlength'].requiredLength;
      return `Mínimo ${minLength} caracteres`;
    }

    if (control?.hasError('maxlength')) {
      const maxLength = control.errors?.['maxlength'].requiredLength;
      return `Máximo ${maxLength} caracteres`;
    }

    if (control?.hasError('min')) {
      return 'Debe ser mayor a 0';
    }

    return '';
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.postForm.get(fieldName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
