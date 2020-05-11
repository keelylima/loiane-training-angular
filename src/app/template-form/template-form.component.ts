import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  usuario: any = {
    nome: null,
    email: null
  }

  onSubmit(form) {
    console.log(form)

    //console.log(this.usuario)
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched
  }

  // aplicaCssErro(campo) {
  //   return {
  //     'is-invalid': !campo.valid && campo.touched
  //   }
  // }

  //refatorado usando outro metodo
  aplicaCssErro(campo) {
    return {
      'is-invalid': this.verificaValidTouched(campo)
    }
  }

  consultaCep(cep, form) {
    //retirar tudo que não for numero
    cep = cep.replace(/\D/g, '');

    let validaCep = /^[0-9]{8}$/;

    if (validaCep.test(cep)) {

      this.resetaDadosForm(form);

      this.http.get(`//viacep.com.br/ws/${cep}/json`)
      .subscribe(dados => {
        this.populaDadosForm(dados, form);
      });
    }
  }

  populaDadosForm(dados, formulario) {
    
    // formulario.setValue({
    //   nome: formulario.value.nome, //para não perder informularioação já colocada nesses campos
    //   email: formulario.value.email,
    //   endereco: {
    //     rua: dados.logradouro,
    //     cep: dados.cep,
    //     numero: '',
    //     complemento: dados.complemento,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf,
    //   }
    // })

    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        //cep:dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }

  resetaDadosForm(formulario) {
    formulario.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null,
      }
    })
  }

}
