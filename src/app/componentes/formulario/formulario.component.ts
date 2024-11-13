import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Carros} from "./carro";
import {CarroService} from "../../carro.service";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
    formulario = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),

  });
  private listaCarros: Carros[]=[];

  constructor(
    private service: CarroService
  ) {
  }

  ngOnInit(): void {
  }

enviarFormulario(){
    let formValue = this.formulario.value;
    const formSave: Carros ={
      nome: formValue.nome as string,
      tipo: formValue.tipo as string,
      descricao: formValue.descricao as string
    }

  this.service.enviar(formSave).subscribe(
    response => {
      console.log('Requisição POST bem-sucedida', response);
      this.enviarFormulario();
    },
    error => {
      console.error('Erro na requisição POST', error);
    }
  );

}

}
