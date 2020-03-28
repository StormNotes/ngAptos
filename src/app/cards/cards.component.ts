import { Component, OnInit } from '@angular/core';
import { Card } from '../model/card';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards: Card[];
  constructor() {

   }

  ngOnInit(): void {

    this.cards = [
      {
        img: '../../assets/images/card1.jpg',
        name: 'Palermo 444',
        ambientes: 'Dos ambientes',
        desc: 'Dos ambientes, amueblado con linda vista al frente, Cortinado facil de limpiar, con suelo de madera . . .',
        expensas: 2000,
        alquiler: 15000,
        contacto: 1126600420
      },
      {
        img: '../../assets/images/card2.jpg',
        name: 'Belgrano Ollores 223',
        ambientes: 'Tres ambientes',
        desc: 'tres ambientes, amueblado con linda vista al frente, Cortinado facil de limpiar, con suelo de madera . . .',
        expensas: 4000,
        alquiler: 22000,
        contacto: 1126600420
      },
      {
        img: '../../assets/images/card3.jpg',
        name: 'Avellaneda 5566',
        ambientes: 'Mono ambiente',
        desc: 'Mono ambiente, amueblado con linda vista al frente, Cortinado facil de limpiar, con suelo de madera . . .',
        expensas: 1000,
        alquiler: 12000,
        contacto: 1126600420
      },
      {
        img: '../../assets/images/card4.jpg',
        name: 'Nuñez y callao 885',
        ambientes: 'Dos ambientes',
        desc: 'Dos ambientes, amueblado con linda vista al frente, Cortinado facil de limpiar, con suelo de madera . . .',
        expensas: 4000,
        alquiler: 30000,
        contacto: 1126600420
      },
    ];
  }
}
