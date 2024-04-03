import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../../shared/services/http.service";
import {Store} from "@ngrx/store";
import {BattlesActions} from "../../store/actions";
import {Observable} from "rxjs";
import {BattleModel} from "../../models/battle.model";
import {map} from "rxjs/operators";

@Component({
  selector: 'add-new-marshal',
  templateUrl: './add-new-marshal.component.html',
  styleUrl: './add-new-marshal.component.scss'
})
export class AddNewMarshalComponent implements OnInit {
  http: HttpService = inject(HttpService);
  store = inject(Store);

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
      dateOfBirth: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (!this.profileForm.invalid) {
      this.http.createNewMarshal(this.profileForm.getRawValue());
    }
  }
}
