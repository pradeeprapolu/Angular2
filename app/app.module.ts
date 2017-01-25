import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MessagesComponent} from './messages.component';
import {FavoriteComponent} from './favorite.component'

import {MessagesService} from './messages.service';

import {AutoGrowDirective} from './auto-grow.directive';

import { CommonModule } from '@angular/common';

import {ContactFormComponent} from './contact-form.component';
import {SignUpFormComponent} from './signup-form.component';
//import {   FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';



@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    CommonModule,
    ReactiveFormsModule
    ],
  declarations: [ 
    AppComponent,
    MessagesComponent,
    FavoriteComponent,
    AutoGrowDirective,
    ContactFormComponent,
    SignUpFormComponent
    //FormControl,
    //FormGroup,
    //Validators,
    //FormBuilder
    ],
  bootstrap:    [ AppComponent ],
  providers: [MessagesService]
})

export class AppModule {


 }
