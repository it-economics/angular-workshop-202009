import { TrainingRoutingModule } from './trainin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloComponent } from './components/hello/hello.component';
import { NameInputComponent } from './components/name-input/name-input.component';
import { HelloListComponent } from './components/hello-list/hello-list.component';

@NgModule({
  declarations: [HelloComponent, NameInputComponent, HelloListComponent],
  imports: [CommonModule, TrainingRoutingModule],
  exports: [HelloComponent, NameInputComponent, HelloListComponent],
})
export class TrainingModule {}
