import { Component, OnInit } from '@angular/core';
import {Carros} from "../formulario/carro";
import {CarroService} from "../../carro.service";
import {ActivatedRoute, Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-lista-carrros',
  templateUrl: './lista-carrros.component.html',
  styleUrls: ['./lista-carrros.component.css']
})
export class ListaCarrrosComponent implements OnInit {

  mostrar:boolean = false;
  listaCarros: Carros[]=[];
  carros: Carros={
    id:0,
    nome:'',
    tipo:'',
    descricao:''
  }



  constructor( private service: CarroService,
               private router: Router,
               private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
  }

  findAllCarros(){
    console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
    this.mostrar = !this.mostrar;
    if (this.mostrar === true){
      this.buscarTodos();
    }
  }


  buscarTodos(): Carros[] {
    this.service.getCarros().subscribe(
      response => {
        console.log('Requisição GET bem-sucedida', response);
        this.listaCarros = response;
      },
      error => {
        console.error('Erro na requisição GET', error);
      }
    );
    return this.listaCarros;
  }

  // updateCarro() {
  //   console.log("ta funcionando")
  //   if(this.carros.id){
  //   this.service.update(this.carros).subscribe(()=> {
  //     this.buscarTodos();
  //   })
  // }
  // }

  deleteCarro(item: any) {
    if(item.id) {
      this.service.delete(item.id).subscribe(
        response => {
          console.log('Requisição GET bem-sucedida', response);
          this.buscarTodos();        },
        error => {
          console.error('Erro na requisição GET', error);
        }
        )
      }
    }

  toggleEditing(carro: Carros) {
    carro.editing = !carro.editing;
    if (!carro.editing) {
      this.updateCarro(carro);
    }
  }

  updateCarro(carro: Carros) {
    if (carro.id) {
      this.service.update(carro).subscribe(() => {
        this.buscarTodos();
      });
    }
  }

}
