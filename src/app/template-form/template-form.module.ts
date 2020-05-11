import { HttpClientModule } from '@angular/common/http';
import { CampoControlErroComponent } from './../campo-control-erro/campo-control-erro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TemplateFormComponent,
    CampoControlErroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    TemplateFormComponent,
  ]
})
export class TemplateFormModule { }
