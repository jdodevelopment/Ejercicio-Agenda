import { ReactiveFormsModule } from '@angular/forms';
import { PersonCardComponent } from './person-card/person-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonFormComponent } from './person-form/person-form.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PersonCardComponent,
    PersonFormComponent,
  ],
  exports: [
    PersonCardComponent,
    PersonFormComponent,
  ]
})
export class PersonModule { }
