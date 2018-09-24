import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

  //creacion del metodo para el evento del
  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
    .then ((res) =>{
      console.log('Excelente');
      console.log(res);
    }).catch((err) =>{
      console.log(err);
    })
  }
}
