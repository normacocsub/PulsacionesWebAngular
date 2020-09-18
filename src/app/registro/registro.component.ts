import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
identificacion: string="";
nombre: string="";
apellido: string="";
edad: number=0;
sexo: string="";
pulsacion: number=0;

  constructor() { 

  }

  ngOnInit(): void {
  }

  
  calcularPulsacion(): number{
    if (this.sexo === "Femenino") {
        this.pulsacion = (220 - this.edad) / 10;
    }
    else {
        this.pulsacion = (210 - this.edad) / 10;
    }
    return this.pulsacion;
  }

    

}
