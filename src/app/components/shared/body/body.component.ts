import { Component, OnInit } from '@angular/core';
import { TorreUserService } from '../../../services/torre-user.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.less']
})
export class BodyComponent implements OnInit {

  usuario: any;
  constructor(private torreUserService: TorreUserService) { }

  ngOnInit(): void {
  }

  userLoad(): void {
    this.torreUserService.getUserTorre("asbraxgo").subscribe(response => {
      this.usuario = response.result;
    }, err => {
      if (err.status === 400 || err.status === 401) {
        alert( 'el usuario no existe!');
      } else {
        alert( 'Error en la carga del usuario');
      }
    }
      );
  }

}
