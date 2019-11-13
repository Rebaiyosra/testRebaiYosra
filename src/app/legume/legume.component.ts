import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-legume',
  templateUrl: './legume.component.html',
  styleUrls: ['./legume.component.css']
})
export class LegumeComponent implements OnInit {

  constructor() { }

  @Input() image:string;
  @Input() nom:string;
  @Input() prix:number;
  @Input() frais:boolean;

  afficher(quantite:number){
    console.log(quantite*this.prix);
  }
  ngOnInit() {
  }

}
