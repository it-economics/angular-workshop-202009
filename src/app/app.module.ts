import { ChuckNorrisComponent } from './components/chuck-norris/chuck-norris.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherComponent } from './components/weather/weather.component';
import { AppIdinterceptorService } from './services/app-idinterceptor.service';
import { TemperaturPipe } from './pipes/temperatur.pipe';
import { LoginComponent } from './components/login/login.component';
import { CustomValidatorDirective } from './directives/custom-validator.directive';
import { RegistrationComponent } from './components/registration/registration.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ChuckNorrisComponent,
    WeatherComponent,
    TemperaturPipe,
    LoginComponent,
    CustomValidatorDirective,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppIdinterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
