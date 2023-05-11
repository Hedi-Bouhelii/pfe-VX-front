import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserBoardComponent } from './components/user-board/user-board.component';
import { AdminBoardComponent } from './components/admin-board/admin-board.component';
import { AgenceBoardComponent } from './components/agence-board/agence-board.component';
import { ExpertBoardComponent } from './components/expert-board/expert-board.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UserDashComponent } from './components/user-dash/user-dash.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { AddexpertComponent } from './components/addexpert/addexpert.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserBoardComponent,
    AdminBoardComponent,
    AgenceBoardComponent,
    ExpertBoardComponent,
    UserDashComponent,
    ProfileComponent,
    SettingsComponent,
    FileUploadComponent,
    AddexpertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatSlideToggleModule,
    CommonModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
