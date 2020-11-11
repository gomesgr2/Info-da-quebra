import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons}  from '@ng-bootstrap/ng-bootstrap'; 
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
      this.modalService.open(AntonyContent, { scrollable: true });
    }
    openScrollableGomesContent(GomesContent) {
      this.modalService.open(GomesContent, { scrollable: true });
    }
    openScrollableVeneziContent(VeneziContent) {
      this.modalService.open(VeneziContent, { scrollable: true });
    }

  }

  

 

 
