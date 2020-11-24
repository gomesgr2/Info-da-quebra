import { Component } from '@angular/core';

import {NgbModal}  from '@ng-bootstrap/ng-bootstrap'; 
@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent { 
    closeResult = ''; 
    

    constructor(private modalService: NgbModal) {}
    ngOnInit () : void{

    }
   
    openScrollableAntonyContent(AntonyContent) {
      this.modalService.open(AntonyContent, { scrollable: true,centered: true });
    }
    openScrollableGomesContent(GomesContent) {
      this.modalService.open(GomesContent, { scrollable: true,centered: true });
    }
    openScrollableVeneziContent(VeneziContent) {
      this.modalService.open(VeneziContent, { scrollable: true,  centered: true});
    }

  }

  

 

 
