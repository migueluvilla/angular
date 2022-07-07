//import { CrudService } from './../../service/crud.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
//FormBuilder nos ayuda a interactuar con el componente del formulario
import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employ',
  templateUrl: './add-employ.component.html',
  styleUrls: ['./add-employ.component.css']
})
export class AddEmployComponent implements OnInit {
  //formularioDeUsuarios
  formGroupUser:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router
    ) {

    this.formGroupUser=this.formulario.group({
      nombre:[''],
      correo:['']
  });
}
  ngOnInit(): void {
  }   //any es cualquier dato o información que está llegando
    enviarUsuario():any {
      console.log('Presionando el boton Ingresar Usuario');
      console.log(this.formGroupUser.value);
      this.crudService.agregarUsuario(this.formGroupUser.value).subscribe(retorno=>{
        this.ruteador.navigateByUrl('/list-employ');
      });


    }


}
