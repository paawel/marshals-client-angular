import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../shared/services/http.service';
import { Store } from '@ngrx/store';
import { BattlesActions } from '../../store/actions';
import { Observable } from 'rxjs';
import { BattleModel } from '../../models/battle.model';
import { MarshalModel } from '../../models/marshal.model';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'add-new-marshal',
  templateUrl: './add-new-marshal.component.html',
  styleUrl: './add-new-marshal.component.scss',
})
export class AddNewMarshalComponent implements OnInit {
  http: HttpService = inject(HttpService);
  store = inject(Store);
  snackBar: MatSnackBar = inject(MatSnackBar);
  router: Router = inject(Router);
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  battles$: Observable<Array<BattleModel>> = this.store.select('battles');

  protected profileForm!: FormGroup;

  ngOnInit() {
    this.run();
  }

  run() {
    this.store.dispatch(BattlesActions.load());
    this.createForm();
  }

  createForm() {
    this.profileForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      shortName: new FormControl('', []),
      placeOfBirth: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      battles: new FormControl([], [Validators.required]),
    });
  }

  onSubmit() {
    if (!this.profileForm.invalid) {
      this.http.createNewMarshal(this.profileForm.getRawValue()).subscribe((res: MarshalModel) => {
        this.snackBar.open('Success!', 'Close');
        this.router.navigate([`/table`]);
      }, error => {
        this.snackBar.open(error.error.message[0], 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      });
    }
  }
}
