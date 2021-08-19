import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
	cantidad = 0;
	inicio = 'USD';
	destino = 'EUR';
	total = 0;

	monedas: string[] = ['USD', 'EUR', 'LBR', 'BTC'];
  constructor() { }

  ngOnInit(): void {
  }

  convertir(){
  	
  	switch (this.inicio) {
  		case "USD":
  			if(this.destino == 'USD'){
  				this.total = this.cantidad;
  			}
  			if(this.destino == 'EUR'){
  				this.total = this.cantidad * 0.83;	
  			}
  			if (this.destino == 'LBR'){
  				this.total = this.cantidad * 0.75;
  			}
        if(this.destino == 'BTC'){
          this.total = this.cantidad * 0.000017;
        }
  			break;
  		case "EUR":
  			if(this.destino == 'USD'){
  				this.total = this.cantidad * 1.28;
  			}
  			if(this.destino == 'EUR'){
  				this.total = this.cantidad;	
  			}
  			if (this.destino == 'LBR'){
  				this.total = this.cantidad * 0.86;
  			}
        if(this.destino == 'BTC'){
          this.total = this.cantidad * 0.000021;
        }
  			break;
  		case "LBR":
  			if(this.destino == 'USD'){
  				this.total = this.cantidad * 1.40;
  			}
  			if(this.destino == 'EUR'){
  				this.total = this.cantidad * 1.16;	
  			}
  			if (this.destino == 'LBR'){
  				this.total = this.cantidad;
  			}
        if(this.destino == 'BTC'){
          this.total = this.cantidad * 0.000024;
        }
  			break;
        case "BTC":
        if(this.destino == 'USD'){
          this.total = this.cantidad * 57428.14;
        }
        if(this.destino == 'EUR'){
          this.total = this.cantidad * 47461.27;
        }
        if(this.destino == 'LBR'){
          this.total = this.cantidad * 41020.1;
        }
        if(this.destino == 'BTC'){
          this.total = this.cantidad;
        }
        break;
  	}

  }

}
