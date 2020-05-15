import { FormularioComponent } from './../formulario/formulario.component';
import { ListadoComponent } from './../listado/listado.component';
import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ListadoComponent,
    },
    {
      path: 'formulario',
      component: FormularioComponent,
  },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }