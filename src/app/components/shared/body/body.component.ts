import { Component, OnInit } from '@angular/core';
import { TorreUserService } from '../../../services/torre-user.service';
import { RootPerson } from '../../../models/user';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.less']
})
export class BodyComponent implements OnInit {

  userManual: RootPerson =new RootPerson() ;
  user: any;
  estados: any;
  constructor(private torreUserService: TorreUserService) { }

  ngOnInit(): void {
    this.cargaEstados();
    this.userLoad();
    //alert("test "+this.usuario.person.showPhone)
  }

  userLoad(): void {
    this.torreUserService.getUserTorre("asbraxgo").subscribe(response => {
      this.user = response.result;
      console.log(this.user);
    }, err => {
      if (err.status === 400 || err.status === 401) {
        alert( 'error de permisos!');
      } else {
        console.log(err);
      }
    }
      );
  }

  cargaEstados(): void {
    this.torreUserService.getEstados().subscribe(response => {
      this.estados = response.result;
      console.log(this.estados);
    }, err => {
      if (err.status === 400 || err.status === 401) {
        alert( 'no tienes permisos!');
      } else {
        alert( 'Error en la carga de los estados!');
      }
    }
      );
}

  llenadoManual():void{

    this.userManual.person.professionalHeadline="Gerente de desarrollo de Software";
    this.userManual.person.picture="https://starrgate.s3.amazonaws.com:443/users/381377f79a0660b80a209253405fe7cdf9177715/profile_78qbShb.jpg";
    this.userManual.person.name="JORGE GASCA BUSTOS";
    this.userManual.person.links.push({
      "id": "Vjw7VvOj",
      "name": "",
      "address": "http://wisecode.com.mx"
    });
    this.userManual.person.links.push({
      "id": "9ME2aApj",
      "name": "linkedin",
      "address": "https://www.linkedin.com/in/jorge-gasca-48917a57"
    });
    this.userManual.person.pictureThumbnail="https://starrgate.s3.amazonaws.com:443/CACHE/images/users/381377f79a0660b80a209253405fe7cdf9177715/profile_78qbShb/4f1efa55da3c322051a48c3c64560829.jpg";
    this.userManual.person.summaryOfBio="Software Manager with 10+ years of experience developing creative and well-architected apps and platforms. Passionate for being the\r\nbridge between the business vision and the technical complexity achieving a great synergy between both worlds. Looking for architect\r\nand develop software solutions that allow to increase company capabilities and reach the business goals.\r\nMicroservices Rest, Software Architect, Java, Php, TypeScript, Angular2";
    
    this.userManual.strengths.push(
      
    {
      "id": "wM7Q4gDy",
      "code": 248097,
      "name": "Negociación",
      "weight": 0,
      "recommendations": 0,
      "media": [
        
      ],
      "created": "2020-12-16T13:58:05"
    },
    {
      "id": "pyJ9xdWj",
      "code": 181305,
      "name": "Microservicios",
      "weight": 0,
      "recommendations": 0,
      "media": [
        
      ],
      "created": "2020-12-16T13:52:02"
    },
    {
      "id": "XMqm8xJM",
      "code": 177222,
      "name": "Arquitectura en la nube",
      "weight": 0,
      "recommendations": 0,
      "media": [
        
      ],
      "created": "2020-12-16T13:51:55"
    },
    {
      "id": "OMvq743N",
      "code": 55664,
      "name": "Trabajo en equipo",
      "weight": 0,
      "recommendations": 0,
      "media": [
        
      ],
      "created": "2020-12-16T13:51:42"
    },
    {
      "id": "LMg8Rg4j",
      "code": 187437,
      "name": "Soluciones orientadas",
      "weight": 0,
      "recommendations": 0,
      "media": [
        
      ],
      "created": "2020-12-16T13:45:16"
    },
    {
      "id": "XMqm8xYM",
      "code": 234085,
      "name": "Desarrollo de software",
      "weight": 0,
      "recommendations": 0,
      "media": [
        
      ],
      "created": "2020-12-16T13:45:03"
    },
    {
      "id": "OMvq742N",
      "code": 56003,
      "name": "Pensamiento estratégico",
      "weight": 0,
      "recommendations": 0,
      "media": [
        
      ],
      "created": "2020-12-16T13:44:58"
    },
    {
      "id": "8jp3g0xM",
      "code": 239683,
      "name": "Creatividad",
      "weight": 0,
      "recommendations": 0,
      "media": [
        
      ],
      "created": "2020-12-16T13:44:52"
    },
    {
      "id": "bjAQ3dwj",
      "code": 2364245,
      "name": "Comunicación",
      "weight": 0,
      "recommendations": 0,
      "media": [
        
      ],
      "created": "2020-12-16T13:44:48"
    },
    {
      "id": "JMegaqgy",
      "code": 55925,
      "name": "Liderazgo",
      "weight": 0,
      "recommendations": 0,
      "media": [
        
      ],
      "created": "2020-12-16T13:44:46"
    }    );

  }

}
