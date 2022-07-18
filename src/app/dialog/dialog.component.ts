import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  personForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,

    @Inject(MAT_DIALOG_DATA) public editData: any,

    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      fullname: '',
      email: '',
      gender: '',
      message: '',
    });

    if (this.editData) {
      this.personForm.controls['fullname'].setValue(this.editData.fullname);
      this.personForm.controls['email'].setValue(this.editData.email);
      this.personForm.controls['gender'].setValue(this.editData.gender);
      this.personForm.controls['message'].setValue(this.editData.message);
    }
  }

  addPerson() {
    console.log('hello', this.personForm.value);
    if (!this.editData) {
      this.api.postPerson(this.personForm.value).subscribe({
        next: (res) => {
          window.location.reload();
          this.personForm.reset();
          this.dialogRef.close();
        },
        error: () => {
          alert('errror');
        },
      });
    } else {
      this.updatePerson();
    }
  }
  updatePerson() {
    this.api.updatePerson(this.personForm.value, this.editData.id).subscribe({
      next: (res) => {
        this.dialogRef.close();
      },
    });
  }
}
