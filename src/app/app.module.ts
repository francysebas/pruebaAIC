import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormControl , FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioModel } from './modelos/usuarioModel';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/List';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

// tslint:disable-next-line: import-spacing
import * as $ from 'jquery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule],

  providers: [
    UsuarioModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
