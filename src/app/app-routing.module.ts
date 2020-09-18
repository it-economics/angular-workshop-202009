import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HelloComponent } from "./components/hello/hello.component";
import { ChuckNorrisComponent } from "./components/chuck-norris/chuck-norris.component";
import { WeatherComponent } from "./components/weather/weather.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "hello", component: HelloComponent },
      { path: "chuck-norris", component: ChuckNorrisComponent },
      { path: "weather", component: WeatherComponent },
      { path: "", redirectTo: "hello", pathMatch: "full" }
    ],
    canActivate: [ AuthGuard ]
  },
  {
    path: "login",
    children: [
      { path: "", component: LoginComponent }
    ]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
