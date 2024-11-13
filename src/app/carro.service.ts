import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Carros} from "./componentes/formulario/carro";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  private API= 'http://localhost:8080/api/v1/carros'
  constructor(private  http: HttpClient) {  }

  enviar(formulario: Carros):Observable<Carros>{
    return this.http.post<Carros>(this.API, formulario)
  }

  getCarros():Observable<Carros[]> {
    return this.http.get<Carros[]>(this.API)
  }

  update(carros: Carros):Observable<Carros> {
    const url = `${this.API}/${carros.id}`
    return this.http.put<Carros>(url,carros)

  }

  delete(id: number):Observable<Carros> {
    const url=`${this.API}/${id}`
    return this.http.delete<Carros>(url)
  }
}

