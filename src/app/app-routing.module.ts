import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CakeshopComponent } from './cakeshop/cakeshop.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:"",component:CakeshopComponent},
  {path:"home",component:CakeshopComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
