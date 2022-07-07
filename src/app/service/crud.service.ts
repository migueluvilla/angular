import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: string='http://localhost:8080/usuarios/index.php'; //la api desde el crud php que sirve como API

  constructor(private clienteHttp:HttpClient) { }

  agregarUsuario(datosDelUsuario:Usuario):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosDelUsuario);
  }
  getUsuarios() {
    return this.clienteHttp.get(this.API);
  }

  deleteUsuario(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+id);
  }

  getOneUsuario(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }

  updateUsuario(id:any, datosDelUsuario:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosDelUsuario);
}

}
