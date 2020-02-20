import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { ProfileCompleteModule } from './profile-complete/profile-complete.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfileHeaderComponentComponent } from './dashboard/profile-component/profile-header-component/profile-header-component.component';
import { VerificationModule } from './dashboard/verification/verification.module';
import { TestModule } from './test/test.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfileHeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    LandingPageModule,
    LoginModule,
    SignupModule,
    ProfileCompleteModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule,
    VerificationModule,
    TestModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
