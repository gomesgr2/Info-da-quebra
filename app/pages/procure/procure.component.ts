import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Procure } from 'src/app/models/procure';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-procure',
  templateUrl: './procure.component.html',
  styleUrls: ['./procure.component.css']
})
export class ProcureComponent implements OnInit {
  localizacao = {
    CEP : ''
  } as unknown as Procure;
  show = true;
  json = false;

  procure: Procure[];
  json_procure: any[];


  constructor(public appService: AppService, 
    public sanitizer: DomSanitizer
    ) {}

  ngOnInit(): void {
    this.postProcure();}
    postProcure() {
      this.appService.PostProcure(this.localizacao).subscribe((dados_procure) => {
        let procure = dados_procure;
        this.json_procure = procure.Result;})
        this.json_procure.forEach((locais) => {
          locais.link = this.sanitizer.bypassSecurityTrustResourceUrl(
            locais.rota   );
          });
        }


      }


