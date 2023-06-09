import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {


  termino: string = '';
  hayError: boolean = false;
  paises : Country[] = [];

  constructor(private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar( termino: string ){
    console.log(this.termino);
    this.termino = termino;
    this.hayError = false

    this.paisService.buscarPais( this.termino )
    .subscribe( ( paises ) => { 
      console.log( paises );
      this.paises = paises;
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
