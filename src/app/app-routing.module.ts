import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { KendoButtonsComponent } from './kendo-buttons/kendo-buttons.component';
import { KendoappComponent } from './kendoapp/kendoapp.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{path:'' , component:KendoButtonsComponent},
{path:'register' , component:RegisterComponent},
{path:'kedoinfo' , component:KendoappComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
