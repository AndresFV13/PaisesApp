import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-porcapital',
  templateUrl: './porcapital.component.html',
  styleUrls: ['./porcapital.component.css']
})
export class PorcapitalComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises : Country[] = [];


  constructor( private PaisService: PaisService ) { }
 
  ngOnInit(): void {
  }

  buscar( termino: string ){
    console.log(this.termino);
    this.termino = termino;
    this.hayError = false

    this.PaisService.buscarCapital( this.termino )
    .subscribe( ( capital ) => { 
      console.log( capital );
      this.paises = capital;
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    }
    )
  }

  sugerencias( termino: string ){
    this.hayError = false;
  }

}
