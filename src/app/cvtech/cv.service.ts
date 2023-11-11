import { inject, Injectable } from '@angular/core';
import { Person } from '../Model/Person';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes: Person[] = [];
  private fakepersonnes: Person[] = [
    new Person(1, 'Azzabi', 'Sofiene', 22, 'me.jpg', 11111, 'Student'),
    new Person(2, 'Fendri', 'Adam', 22, 'fendri.jpg', 12221, 'Student'),
    new Person(3, 'test', 'test', 11, 'test.jpg', 23334, 'nothing'),
  ];
  constructor() {}
  http = inject(HttpClient);
  getPersonnes$(): Observable<Person[]> {
    return this.http.get<Person[]>('https://apilb.tridevs.net/api/personnes');
  }

  deletehttpPersonne$(id: number) {
    return this.http.delete(`https://apilb.tridevs.net/api/personnes/${id}`);
  }
  setterPersonnes(item: Person[]) {
    this.personnes = item;
  }
  getFakePersonnes(): Person[] {
    return this.fakepersonnes;
  }

  getPersonneById(id: number): any {
    return this.personnes.find((person) => {
      return person.id == id;
    });
  }

  addPersonne(personne: Person) {
    personne.id = this.personnes.length + 1;
    this.personnes.push(personne);
  }

  deletePersonne(item: Person) {
    let index = this.personnes.indexOf(item);
    this.personnes.splice(index, 1);
  }
}
