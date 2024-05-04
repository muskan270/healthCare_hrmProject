import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'; 
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Define login route outside dashboard
  { 
    path: '', 
    component: DashboardComponent,
  },
      { path: 'signup', component: SignupComponent },
      { path: 'create', component: CreateComponent },
      { path: 'list', component: ListComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'team', component: TeamComponent },
      { path: 'header', component: HeaderComponent },
      { path: 'footer', component: FooterComponent },
];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
