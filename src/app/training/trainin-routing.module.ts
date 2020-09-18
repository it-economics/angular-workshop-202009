import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HelloComponent } from './components/hello/hello.component';
import { NameInputComponent } from './components/name-input/name-input.component';
// import { HelloListComponent } from './components/hello-list/hello-list.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'name',
    component: NameInputComponent,
  },
  {
    path: 'hello',
    component: HelloComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingRoutingModule {}
