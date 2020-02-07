import { Person } from 'src/app/shared/person.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  array: Person[] = [
    {
      nombre: 'Juan Daniel',
      apellido: 'Ornella',
      edad: 28,
      email: 'juan.daniel.sp@gmail.com',
      telefono: '+54 3404 632654',
    },
    {
      nombre: 'Juan Daniel',
      apellido: 'Ornella',
      edad: 28,
      email: 'juan.daniel.sp@gmail.com',
      telefono: '+54 3404 632654',
    },
    {
      nombre: 'Juan Daniel',
      apellido: 'Ornella',
      edad: 28,
      email: 'juan.daniel.sp@gmail.com',
      telefono: '+54 3404 632654',
    },
    {
      nombre: 'Juan Daniel',
      apellido: 'Ornella',
      edad: 28,
      email: 'juan.daniel.sp@gmail.com',
      telefono: '+54 3404 632654',
    },
    {
      nombre: 'Juan Daniel',
      apellido: 'Ornella',
      edad: 28,
      email: 'juan.daniel.sp@gmail.com',
      telefono: '+54 3404 632654',
    },
  ];


  addPerson(person: Person) {
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(person))
    this.array.push(person);
  }
}
