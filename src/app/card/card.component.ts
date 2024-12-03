import { Component } from '@angular/core';

interface IPlano {
  infos: Iinfos;
}

interface Iinfos{
  tipo: string;
  preco: number;
}

@Component({
  //nome do componente no html
  selector: 'app-card',
  standalone: false,
  //Template html quando ele carregar
  templateUrl: './card.component.html',
  //template do styleUrls
  styleUrl: './card.component.css'
})
export class CardComponent {
  // @ts-ignore
  plano: IPlano = {
    infos: {
      tipo: "Simples",
      preco: 100
    }
  }
}



