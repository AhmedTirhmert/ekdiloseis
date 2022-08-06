import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

=======
import { ReactiveFormsModule } from '@angular/forms'
>>>>>>> 5c8dfe5daced5082430472bfcff423dc52a79827
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RegisterComponent } from './components/register/register.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { LoginComponent } from './pages/authentication/login/login.component';

<<<<<<< HEAD
const routes:Routes = [
  { path: "login", component: LoginComponent },
];
=======
import { RouterModule } from '@angular/router';
>>>>>>> 5c8dfe5daced5082430472bfcff423dc52a79827

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
=======
    SidebarComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'register', component: RegisterComponent }
    ])
>>>>>>> 5c8dfe5daced5082430472bfcff423dc52a79827
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas,fab,far)
  }
}
