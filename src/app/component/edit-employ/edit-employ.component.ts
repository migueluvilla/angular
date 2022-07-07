import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
//FormBuilder nos ayuda a interactuar con el componente del formulario
import { CrudService } from 'src/app/service/crud.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employ',
  templateUrl: './edit-employ.component.html',
  styleUrls: ['./edit-employ.component.css']
})
export class EditEmployComponent implements OnInit {
    //formularioDeUsuarios
  formGroupUser:FormGroup;
  ids:any;

  constructor(
    public formulario:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private crudService:CrudService,
    private ruteador:Router
  ) {
    this.ids=this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.ids);
    this.crudService.getOneUsuario(this.ids).subscribe(
      retorno=>{
        console.log(retorno);
        this.formGroupUser.setValue({
          nombre:retorno[0]['nombre'],
          correo:retorno[0]['correo']
        });
      }
    );
    this.formGroupUser=this.formulario.group(
      {
        nombre:[''],
        correo:['']
      }
    );
  }

  ngOnInit(): void {
  }

  sendUsuario():any{
    console.log(this.ids);
    console.log(this.formGroupUser.value);
    this.crudService.updateUsuario(this.ids,this.formGroupUser.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/list-employ');
    });
  }

}
