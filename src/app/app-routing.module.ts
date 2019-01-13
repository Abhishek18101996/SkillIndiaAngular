import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { IndustriesComponent } from './industries/industries.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'industries', component:IndustriesComponent},
  {path:'institutions', component:InstitutionsComponent},
  {path:'aside', component:AsideComponent},
  {path:'footer',component:FooterComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
