import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-list-employ',
  templateUrl: './list-employ.component.html',
  styleUrls: ['./list-employ.component.css']
})
export class ListEmployComponent implements OnInit {
  Usuarios:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.getUsuarios().subscribe(filaUsuario=>{
      console.log(filaUsuario);
      this.Usuarios=filaUsuario;
    });
  }

  borrarUsuario(id:any, iControl:any){
    console.log(id);
    console.log(iControl);
    if (window.confirm("¿Está seguro que desea Borrar el registro n° ( "+id+" )...?")) {


    this.crudService.deleteUsuario(id).subscribe(retornoApi=>{
      this.Usuarios.splice(iControl,1);

    });
  }
}

}
