import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Person } from 'src/app/shared/person.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  @Output() newPerson = new EventEmitter<Person>();

  personForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.personForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
    });
  }

  get controls() { return this.personForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.personForm.invalid) {
      return;
    }
    this.newPerson.emit({
      nombre: this.controls.nombre.value,
      apellido: this.controls.apellido.value,
      edad: this.controls.edad.value,
      email: this.controls.email.value,
      telefono: this.controls.telefono.value,
    });
    this.personForm.reset();
    this.submitted = false;
  }

}
