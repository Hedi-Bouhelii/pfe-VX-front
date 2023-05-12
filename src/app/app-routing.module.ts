import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { UserBoardComponent } from './components/user-board/user-board.component';
import { LoginComponent } from './components/login/login.component';
import { AgenceBoardComponent } from './components/agence-board/agence-board.component';
import { ExpertBoardComponent } from './components/expert-board/expert-board.component';
import { UserDashComponent } from './components/user-dash/user-dash.component';
import { AdminBoardComponent } from './components/admin-board/admin-board.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AddexpertComponent } from './components/addexpert/addexpert.component';
import { ListAgenceComponent } from './components/list-agence/list-agence.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'user',component:UserBoardComponent,children:[
    {path:'dashuser',component:UserDashComponent,outlet:'userBoard'},
  ]},
  {path:'agence', component:AgenceBoardComponent},
  {path:'addExpert',component:AddexpertComponent},

  {path:'expert',component:ExpertBoardComponent},
  {path:'admin',component:AdminBoardComponent},
  {path:'profile',component:ProfileComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'setting', component:SettingsComponent},
  {path:'listAgence', component:ListAgenceComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
