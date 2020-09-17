import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NameInputComponent } from './components/name-input/name-input.component';
import { HelloListComponent } from './components/hello-list/hello-list.component';
import { HelloComponent } from './components/hello/hello.component';

const routes: Routes = [
  {
    path: 'name',
    component: NameInputComponent,
  },
  {
    path: 'list',
    component: HelloListComponent,
  },
  {
    path: 'hello',
    component: HelloComponent,
  },
  {
    path: '',
    redirectTo: 'name',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingRoutingModule {}
