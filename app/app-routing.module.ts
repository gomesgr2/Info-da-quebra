import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ProcureComponent } from './pages/procure/procure.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [{path: '', component: HomeComponent },{ path: 'Home', component: HomeComponent},
 { path: 'Sobre', component: SobreComponent }, { path : 'Procure', component: ProcureComponent}, {path : 'Noticias', component : NoticiasComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
