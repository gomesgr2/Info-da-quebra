import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProcureComponent } from './pages/procure/procure.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button';
import{MatTabsModule} from '@angular/material/tabs'
import{MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {MatSelectModule} from '@angular/material/select'
import {MatInputModule} from '@angular/material/input'
import {MatExpansionModule} from '@angular/material/expansion';
import { FormComponent } from './view/form/form.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './service/app.service';


@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    HomeComponent,
    ProcureComponent,
    NoticiasComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule, NgbModule,MatCardModule,MatToolbarModule,
    MatIconModule,
   MatButtonModule,
    MatTabsModule,
   MatDialogModule,
    MatFormFieldModule,
   FormsModule, ReactiveFormsModule,
    MatSelectModule,
   MatInputModule,MatExpansionModule,FlexLayoutModule,HttpClientModule
    
    
  ],
  providers: [AppService, {provide :MatDialogRef, useValue : {}}, FormComponent],
  bootstrap: [AppComponent], schemas : [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: []
})
export class AppModule { }
