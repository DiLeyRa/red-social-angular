import { Component, OnInit } from '@angular/core';

import { ConexionService } from '../../servicios/conexion.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  items:any;
  item:any = {
    mesage:''
  }
  editarItem:any={
    mesage:''
  }


  constructor(private conexion:ConexionService,
    private servicio:ConexionService
  ){
    this.conexion.publications().subscribe(item => {
      this.items = item;
      console.log(this.items);
    })
  }

  ngOnInit() {
  }

  agregar(){
    this.servicio.addPublications(this.item);
    this.item.mesage = '';
  }

  eliminar(item){
    this.conexion.delatePublications(item);
  }

  editar(item){
    this.editarItem = item;
  }

  agregarItemEditado(){
    this.conexion.editPublications(this.editarItem);
  }
}

