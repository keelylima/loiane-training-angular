import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: 'Kelly Lima',
    email: 'kelly@email.com'
  }

  onSubmit(form) {
    console.log(form)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
