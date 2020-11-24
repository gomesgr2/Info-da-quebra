import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Podcast } from 'src/app/models/podcast';
import { Sites } from 'src/app/models/site';
import { AppService } from 'src/app/service/app.service';
import { FormComponent } from 'src/app/view/form/form.component';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  values = 30 ;
  public isMenuCollapsed = true;

  autor;
 
  episode = {
    data_lancamento: 15,
    duracao: 60, autor: "Todos"
  } as unknown as Podcast;
 

  news = {
    data_lancamento: this.values,
  } as Sites;

  podcasts: Podcast[];
  sites: Sites[];

  json_podcast;
  json_sites;

  constructor(
    public appService: AppService,
    public sanitizer: DomSanitizer,
    public dialog: MatDialog,
    public form_post_component : FormComponent,
    
  ) {}

  ngOnInit(): void {
    this.postPodcast();
    this.postSites();
  }
  SugestionPodcast(): void {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '500px',
      height : '500px'
    

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('the dialog was closed');
    });
  }

  postPodcast() {
    this.appService.PostPodcast(this.episode).subscribe((dados_podcast) => {
      let podcasts = dados_podcast;
      this.json_podcast = podcasts.Result;
      this.autor = podcasts.Autor;
      console.log(this.autor);
      console.log(this.json_podcast);
      this.json_podcast.forEach((epi) => {
        epi.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(epi.url);
      });
      this.json_podcast.forEach((epi) => {
        epi.image = this.sanitizer.bypassSecurityTrustResourceUrl(epi.imagens);
      });
      this.autor.image_safe = this.sanitizer.bypassSecurityTrustResourceUrl(this.autor.imagem);
    });
  }
  
  postSites() {
    this.appService.PostSites(this.news).subscribe((dados_sites) => {
      let sites = dados_sites;
      this.json_sites = sites.Result;
      console.log(this.json_sites);
      this.json_sites.forEach((element) => {
        element.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
          element.url
        );
      });
    });
  }


  }