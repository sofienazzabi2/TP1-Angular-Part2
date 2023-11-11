import { Component, inject } from '@angular/core';
import { Person } from '../../Model/Person';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvservice: CvService = inject(CvService);
  constructor() {
    this.cvservice.getPersonnes$().subscribe(
      (item) => {
        this.personnes = item;
        this.cvservice.setterPersonnes(item);
      },
      (error) => {
        alert(
          "Connexion a l'API à échouer, c'est pourquoi on affiche fake data "
        );
        this.personnes = this.cvservice.getFakePersonnes();
        this.cvservice.setterPersonnes(this.personnes);
      }
    );
  }

  personnes: Person[] = [];
  personne: any = false;

  sendperson(item: Person) {
    this.personne = item;
  }
}
