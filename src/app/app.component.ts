import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { ReactiveFormsModule , FormControl , FormsModule, } from '@angular/forms';
import { UsuarioModel } from './modelos/usuarioModel';
import { generate } from 'rxjs';
import { MatListModule } from '@angular/material/List';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';



interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  })
 

export class AppComponent {
  

  // tslint:disable-next-line: no-shadowed-variable
  constructor(public usuariosModel: UsuarioModel){}
  title = 'Formulario de Autorización';

  Autorizacion: string[] = ['Procedimiento', 'Medicamento'];
  Regimen: string[] = ['Contributivo', 'Subsidiado'];
  Aficiliacion: string[] = ['Afiliado', 'No afiliado'];
  TipoIdentificacion: string[] = ['Cédula de ciudadanía (CC)', 'Tarjeta de identidad (TI)',
                                'Tarjeta pasaporte (TP)', 'Registro civil (RC)', 'Cédula extranjería (CE)',
                              'Carnet identidad (CI)' ];
  EstadoCivil: string[] = ['Soltero', 'Comprometido', 'Casado', 'Union libre', 'Separado',
                          'Divorciado', 'viudo'];
  Genero: string[] = ['Masculino', 'Femenino'];
  DiagnosticoP: string[] = ['Enfermedades infecciosas y parasitarias', 'Neoplasias', 'Embarazo-parto-puerperio', 
                            'Enfermedades de aparato circulatorio'];
  DiagnosticoRInfecciosas: string[] = ['Enfermedades infecciosas intestinales', 'Tuberculosis', 'Ciertas zoonosis bacterianas'];
  DiagnosticoRNeoplasias: string[] = ['Neoplasias malignas', 'tumores benignos', 'Tumores neoendocrinos benignos', 'Neoplasias de comportamiento no especificado'];
  DiagnosticoREmbarazo: string[] = ['Embarazo con resultados abortivos', 'Supervisión embarazo alto riesgo', 'Complicaciones de trabajo de parto', 'Otras afecciones obstétricas'];
  DiagnosticoCirculatorio: string[] = ['Fiebre Reumatica Aguda', 'Enferemedades hipertensivas', 'Enfermedades isquémicas cardias', 'Enfermedad pulmonar cardiaca'];
  
  // tslint:disable-next-line: variable-name
    columnas_tablas = [
      {titulo: 'Nombre', name: 'Nombre'},
      {titulo: 'Apellido', name: 'Apellido'},
      {titulo: 'AfiliadoAIC', name: 'Afiliado'},
      {titulo: 'Tipo Autorizacion', name: 'Estado Civil'},
      {titulo: 'Tipo Regimen', name: 'Municipio'},
      {titulo: 'Diagnostico Principal', name: 'Diagnostico Principal'},
      {titulo: 'Diagnostico Relacionado', name: 'Diagnostico Relacionado'}
    ];
    UsuariosAIC = [{Nombre: '', Apellido: '',
                  EstadoCivil: '', Departamento: '', TipoDocumento: '', NumeroIdentificacion: '',
                  Genero: '', Municipio: '', CorreoElectronico: '', Direccin: '', TipoAutorizacion: '',
                  TipoRegimen: '', DiagnosticoPrin: '', DiagnosticoRel: '', AfiliacionIndi: '', cabildo: '',
                  PuebloAfil: ''
                 }
                ];

                UsuAic = {
                  Nom: null,
                  Apell: null,
                  EstadoCiv: null,
                  Dept: null,
                  TipoDoc: null,
                  NumeroIdenti: null,
                  Gen: null,
                  Munic: null,
                  correo: null,
                  dir: null,
                  TipAutori: null,
                  TipRegi: null,
                  DiagPrinc: null,
                  DiagRelac: null,
                  Afiliacion: null,
                  cabildo: null,
                  puebloAfiliado: null
              }

              
       // tslint:disable-next-line: typedef
       registrarUsuario(){
            console.log('Datos: ' + Object.values(this.UsuariosAIC));
            console.log('Nombre: ' + this.usuariosModel.Nombre + 'tipo autorizacion' + this.usuariosModel.TipoAutorizacion);
            console.log('Autorizacion'+ this.UsuAic.DiagPrinc);
            this.UsuariosAIC.push({Nombre: this.UsuAic.Nom, Apellido: this.UsuAic.Apell,
                                  EstadoCivil: this.UsuAic.EstadoCiv, Departamento: this.UsuAic.Dept,
                                  TipoDocumento: this.UsuAic.TipoDoc, NumeroIdentificacion: this.UsuAic.NumeroIdenti,
                                  Genero: this.UsuAic.Gen, Municipio: this.UsuAic.Munic, CorreoElectronico: this.UsuAic.correo,
                                  Direccin: this.UsuAic.dir, TipoAutorizacion: this.UsuAic.TipAutori, TipoRegimen: this.UsuAic.TipRegi,
                                  DiagnosticoPrin: this.UsuAic.DiagPrinc, DiagnosticoRel: this.UsuAic.DiagRelac,
                                  AfiliacionIndi: this.UsuAic.Afiliacion, cabildo: this.UsuAic.cabildo, PuebloAfil: this.UsuAic.puebloAfiliado
                                });

            this.UsuAic.Nom = null;
            this.UsuAic.Apell = null;
            this.UsuAic.EstadoCiv = null;
            this.UsuAic.Dept = null;
            this.UsuAic.Dept = null;
            this.UsuAic.TipoDoc = null;
            this.UsuAic.NumeroIdenti = null;
            this.UsuAic.Gen = null;
            this.UsuAic.Munic = null;
            this.UsuAic.correo = null;
            this.UsuAic.dir = null;

        }

}








